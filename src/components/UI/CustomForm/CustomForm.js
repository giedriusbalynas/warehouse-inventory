import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CustomForm = (props) => {
    return (
        <Form className="my-5" onSubmit={props.submitHandler}>
            <h2 className="my-5">{props.formType} Product</h2>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="name"
                              type="text"
                              defaultValue={props.data.name}
                              placeholder="Product name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="type"
                              type="text"
                              defaultValue={props.data.type}
                              placeholder="Product type"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="weight"
                              type="number"
                              step="any"
                              defaultValue={props.data.weight}
                              placeholder="Product weight"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Color</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="color"
                              type="text"
                              defaultValue={props.data.color}
                              placeholder="Product color"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="quantity"
                              type="text"
                              defaultValue={props.data.quantity}
                              placeholder="Product quantity"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="price"
                              type="number"
                              step="any"
                              defaultValue={props.data.price}
                              placeholder="Product price"/>
            </Form.Group>
            <Button className="my-3"
                    variant="secondary"
                    type="submit">{props.formType.toUpperCase()} PRODUCT</Button>
            <Link to="/products"
                  className="btn btn-outline-dark ml-2"
                  role="button"
                  aria-pressed="true">&#8678;BACK</Link>
        </Form>
    )
};

export default CustomForm;