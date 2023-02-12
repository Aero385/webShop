import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Shop</NavLink>
                    {user.isAuth ?
                        <Nav className='ml-auto' style={{color: 'white'}}>
                            <Button variant={'outline-light'}>Админ панель</Button>
                            <Button variant={'outline-light'} className='ml-2'>Авторизация</Button>
                        </Nav>
                        :
                        <Nav className='ml-auto' style={{color: 'white'}}>
                            <Button onClick={() => user.setIsAuth(true)} variant={'outline-light'}>Авторизация</Button>
                        </Nav>
                    }
            </Container>
      </Navbar>
    );
})

export default NavBar;