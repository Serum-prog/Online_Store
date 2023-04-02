const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/basketController')

router.get('/show', BasketController.show) 
router.post('/create', BasketController.create )


module.exports = router