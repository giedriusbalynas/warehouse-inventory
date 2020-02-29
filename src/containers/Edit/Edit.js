import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";

const editProduct = () => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let id = useParams();

    let mappedItems = items.filter((item) => {
        if (item.id === id.id) {
            return item;
        }
        return mappedItems;
    });
    console.log("mapped: ", mappedItems[0]);

    let data = mappedItems[0];

    const [itemsState, setItems] = useState({
        id: data.id,
        name: data.name,
        type: data.type,
        weight: data.weight,
        color: data.color,
        quantity: data.quantity,
        price: data.price
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setItems({...itemsState, [name]: value});
        console.log(name);
    };
    console.log(itemsState);
    //
    // const createProductHandler = (event) => {
    //     event.preventDefault();
    //     let oldItems = JSON.parse(localStorage.getItem('items')) || [];
    //     oldItems.push(itemsState);
    //
    //     localStorage.setItem('items', JSON.stringify(oldItems));
    //
    //     console.log(itemsState);
    // };
    // // console.log(localStorage);


    return (
        <div>
            <h2 className="mt-5">Edit Product</h2>
            <Form className="my-5">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="name"
                                  type="text"
                                  defaultValue={data.name}
                                  placeholder="Product name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="type"
                                  type="text"
                                  defaultValue={data.type}
                                  placeholder="Product type"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="weight"
                                  type="number"
                                  step="any"
                                  defaultValue={data.weight}
                                  placeholder="Product weight"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="color"
                                  type="text"
                                  defaultValue={data.color}
                                  placeholder="Product color"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="quantity"
                                  type="text"
                                  defaultValue={data.quantity}
                                  placeholder="Product quantity"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="price"
                                  type="number"
                                  step="any"
                                  defaultValue={data.price}
                                  placeholder="Product price"/>
                </Form.Group>
                <Button className="my-3"
                        variant="secondary"
                        type="submit">EDIT PRODUCT</Button>
                <Link to="/products"
                      className="btn btn-outline-dark ml-2"
                      role="button"
                      aria-pressed="true">&#8678;BACK</Link>
            </Form>
        </div>
    )
};

export default editProduct;