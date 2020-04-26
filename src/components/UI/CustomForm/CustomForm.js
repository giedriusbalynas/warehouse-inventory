import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const CustomForm = (props) => {
    const {register, handleSubmit, errors} = useForm();
    return (
        <Form className="my-5" onSubmit={handleSubmit(props.submitHandler)}>
            <h2 className="my-5">{props.formType} Product</h2>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="name"
                              type="text"
                              defaultValue={props.data.name}
                              placeholder="Product name"
                              ref={register({required: true})}/>
            </Form.Group>
            {errors.name && <p style={{color: "red"}}>Product name is required</p>}
            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="type"
                              type="text"
                              defaultValue={props.data.type}
                              placeholder="Product type"
                              ref={register({required: true})}/>
            </Form.Group>
            {errors.type && <p style={{color: "red"}}>Product type is required</p>}
            <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="weight"
                              type="number"
                              step="any"
                              defaultValue={props.data.weight}
                              placeholder="Product weight"
                              ref={register({required: true})}/>
            </Form.Group>
            {errors.weight && <p style={{color: "red"}}>Product weight is required</p>}
            <Form.Group>
                <Form.Label>Color</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="color"
                              type="text"
                              defaultValue={props.data.color}
                              placeholder="Product color"
                              ref={register({required: true})}/>
            </Form.Group>
            {errors.color && <p style={{color: "red"}}>Product color is required</p>}
            <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="quantity"
                              type="text"
                              defaultValue={props.data.quantity}
                              placeholder="Product quantity"
                              ref={register({required: true})}/>
            </Form.Group>
            {errors.quantity && <p style={{color: "red"}}>Product quantity is required</p>}
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={props.inputHandler}
                              name="price"
                              type="number"
                              step="any"
                              defaultValue={props.data.price}
                              placeholder="Product price"
                              ref={register({required: true})}/>
            </Form.Group>
            {errors.price && <p style={{color: "red"}}>Product price is required</p>}
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