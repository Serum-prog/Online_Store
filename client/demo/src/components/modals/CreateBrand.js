import React, {useState} from 'react';
import {Button, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue( '')
            onHide()
        })
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-tittle-vcenter">
                    Добавить тип
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateBrand;