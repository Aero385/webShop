import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Form className='d-flex'>
            {device.brands.map(brand => 
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    border={device.selectedBrand.id === brand.id ? 'danger' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    className='p-3'
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
})

export default BrandBar;