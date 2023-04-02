import React, {useContext, useState} from 'react';
import {Container, Card, Form, Button, FormControl} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {click} from "@testing-library/user-event/dist/click";
import {observer} from "mobx-react-lite";
import data from "bootstrap/js/src/dom/data";
import {Context} from "../index";

const Auth = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
            if (isLogin){
                data = await login(email, password)

            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        }



    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight -54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form>
                    <FormControl
                        className="mt-5"
                        placeholder="введите ваш e-mail.."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-2"
                        placeholder="введите ваш пароль.."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {isLogin ?
                        <div>
                        нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                        </div>
                        :
                        <div>
                            есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                        </div>
                    }
                        <Button
                            variant={"outline-dark"}
                            className="mt-2 "
                            onClick={() => click ()}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;