import React, {useState} from 'react';
import {Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button, FormControl} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";
import data from "bootstrap/js/src/dom/data";

const CreateType = ({show, onHide}) => {
    const [value, setValue]=useState('')
    const addType = () => {
        createType({name: value}).then(data => {
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
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateType;