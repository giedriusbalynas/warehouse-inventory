import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

const newProduct = () => {
    const [itemsState, setItems] = useState({
        name: "",
        type: "",
        weight: 0,
        color: "",
        quantity: "",
        price: 0
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setItems({...itemsState, [name]: value});
        console.log(name);
    };
    // console.log(itemsState);

    const createProductHandler = (event) => {
        let oldItems = JSON.parse(localStorage.getItem('items')) || [];
        let newItem = itemsState;
        oldItems.push(newItem);

        localStorage.setItem('items', JSON.stringify(oldItems));
        console.log(itemsState);
    };
    // console.log(localStorage);


    return (
        <div>
            <h2 className="my-3">New Product</h2>
            <Form onSubmit={createProductHandler}>
                <Form.Group controlId="Id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" placeholder="Product Id"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={inputChangeHandler} name="name" type="text" placeholder="Product name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={inputChangeHandler} name="type" type="text" placeholder="Product type"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control onChange={inputChangeHandler} name="weight" type="number" placeholder="Product weight"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control onChange={inputChangeHandler} name="color" type="text" placeholder="Product color"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onChange={inputChangeHandler} name="quantity" type="text" placeholder="Product quantity"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={inputChangeHandler} name="price" type="number" step="any" placeholder="Product price"/>
                </Form.Group>
                <Button className="my-3" variant="secondary" type="submit">Create Product</Button>
            </Form>
        </div>
    )
};

export default newProduct;