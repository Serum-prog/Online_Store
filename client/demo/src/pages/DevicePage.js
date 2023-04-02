import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchBrands, fetchOneDevices} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    console.log('Before',device)
    const params = useParams()
    console.log(params.id)

    useEffect( () => {
       //fetchOneDevices(params.id).then(data => setDevice(data)).then(()=> console.log(device))
       //  const response = fetchOneDevices(params.id).then(data =>
       //      {
       //          return data
       //      })
       //  console.log(response)
        fetchOneDevices(params.id).then(setDevice)
    }, [])

    return (
        <Container>
            <Row>
                <Col md={4} className="mt-5">
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL+ device.img}/>
                </Col>
                <Col md={4}>
                    <Form className="mt-5 d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div>
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <div className="mt-5">
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </div>
                </Col>
                <Col md={4}>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index )=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray': 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </ Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;