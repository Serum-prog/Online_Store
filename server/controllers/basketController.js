const {Basket, Device, BasketDevice} = require("../models/models");

class BasketController {
    async create (req, res, next) {

        const {userId, deviceId} = req.body
        const basket = await Basket.findOne(
            {
                where: {
                    userId
                }
            }
        )
        if (!basket) {
            return next(ApiError.badRequest('Нет Basket'))
        }
        const basketDevice = await BasketDevice.create(
            {
                basketId : basket.id, 
                deviceId 
            }
        )
        return res.json(BasketDevice)
    }
    // async show (req,res) {
    //     const{userId} =req.body
    //     const dev = await Basket.findOne(
    //         {
    //             where: {
    //                 userId
    //             }
    //         }
    //     )
    //     return res.json(dev) 
    // }    
    // async show(req, res) {
    //     const { userId } = req.query; // получаем userId из параметров запроса
    //     const basket = await Basket.findOne({
    //     where: {
    //     userId,
    //     },
    //     });
    //     if (!basket) {
    //     return res.status(404).json({ error: 'Basket not found' });
    //     }
    //     return res.json(basket.dataValues); // возвращаем объект в качестве ответа
    //     }
    async show(req, res) {
        const { userId } = req.query;
        const basket = await Basket.findOne({
          where: {
            userId,
          },
          include: [{
            model: BasketDevice,
            include: [{
              model: Device,
            }],
          }],
        });
        if (!basket) {
          return res.status(404).json({ error: 'Basket not found' });
        }
        const devices = basket.BasketDevices.map(bd => bd.Device);
        return res.json(devices);
      }
}

module.exports = new BasketController()