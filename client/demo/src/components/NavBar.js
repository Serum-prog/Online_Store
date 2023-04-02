import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Buy</NavLink>
                {user.isAuth ?
                    <Nav className="ms-lg-auto">
                        <Button variant={"outline-light"} onClick={() =>navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button
                            variant={"outline-light"}
                            className="ms-2"
                            onClick={() =>logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-lg-auto">
                        <Button variant={"outline-light"} onClick={ () => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        {/*user.setIsAuth(true)*/}
            {/*onClick={() => navigate(LOGIN_ROUTE)*/}
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;