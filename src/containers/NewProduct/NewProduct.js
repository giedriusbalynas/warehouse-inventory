import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'; //this is for creating unique identifier

const newProduct = () => {
    const [itemsState, setItems] = useState({
        id: uuidv4(),
        name: "",
        type: "",
        weight: 0,
        color: "",
        quantity: "",
        price: 0,
        isActive: true,
        quantityHistory: [],
        priceHistory: []
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setItems({...itemsState, [name]: value});
    };

    const browserHistory = useHistory();
    let currentTime = Date.now() / 1000 | 0;

    const createProductHandler = (event) => {
        event.preventDefault();
        let oldItems = JSON.parse(localStorage.getItem('items')) || [];
        itemsState.quantityHistory = [itemsState.quantity];
        itemsState.priceHistory = [[itemsState.price, currentTime]];
        oldItems.push(itemsState);
        localStorage.setItem('items', JSON.stringify(oldItems));
        browserHistory.push('/');
    };

    return (
        <div>
            <h2 className="mt-5">New Product</h2>
            <Form onSubmit={createProductHandler} className="my-5">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="name"
                                  type="text"
                                  placeholder="Product name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="type"
                                  type="text"
                                  placeholder="Product type"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="weight"
                                  type="number"
                                  step="any"
                                  placeholder="Product weight"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="color"
                                  type="text"
                                  placeholder="Product color"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="quantity"
                                  type="text"
                                  placeholder="Product quantity"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="price" type="number"
                                  step="any"
                                  placeholder="Product price"/>
                </Form.Group>
                <Button className="my-3"
                        variant="secondary"
                        type="submit">CREATE PRODUCT</Button>
            </Form>
        </div>
    )
};

export default newProduct;