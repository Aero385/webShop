import React from 'react';
import { Card, Col, Container, Form } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Form className='mt-2 d-flex'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Form>
        </Container>
    );
}

export default Shop;