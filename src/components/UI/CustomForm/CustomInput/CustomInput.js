import React from 'react';
import {Form} from "react-bootstrap";

const CustomInput = (props) => (
    <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
            onChange={props.inputHandler}
            name={props.name}
            type={props.type}
            step={props.step}
            defaultValue={props.data[props.name]}
            placeholder={"Product " + props.name}
            ref={props.register({required: true})}/>
        {props.errors[props.name] && <p style={{color: "red"}}>Product {props.name} is required</p>}
    </Form.Group>
    );

export default CustomInput;