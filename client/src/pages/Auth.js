import React from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        > 
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Your email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Your password'
                    />
                    <Form className='d-flex justify-content-between mt-3 align-items-center'>
                        {isLogin ? 
                            <div>
                                Don't have account? <NavLink to={REGISTRATION_ROUTE}>Registration!</NavLink>
                            </div> 
                            :
                            <div>
                                Have already account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
                            </div> 
                        }
                        <Button 
                            variant={'outline-success'}
                        >
                            {isLogin ? 'Login' : 'Sign in'}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
}

export default Auth;