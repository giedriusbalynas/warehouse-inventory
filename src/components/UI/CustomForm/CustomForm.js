import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import CustomInput from "./CustomInput/CustomInput";

const CustomForm = (props) => {
    const {register, handleSubmit, errors} = useForm();
    let formFields = [
        {key: "name", label: "Name", type: "text"},
        {key: "type", label: "Type", type: "text"},
        {key: "weight", label: "Weight", type: "number", step: "0.01"},
        {key: "color", label: "Color", type: "text"},
        {key: "quantity", label: "Quantity", type: "number", step: "1"},
        {key: "price", label: "Price", type: "number", step: "0.01"}
    ];

    let mappedFields = formFields.map((field) => {
        return (
            <CustomInput
                key={field.key}
                name={field.key}
                type={field.type}
                label={field.label}
                step={field.step}
                errors={errors}
                register={register}
                data={props.data}
                inputHandler={props.inputHandler}
            />
        )
    });

    return (
        <Form className="my-5" onSubmit={handleSubmit(props.submitHandler)}>
            <h2 className="my-5">{props.formType} Product</h2>
            {mappedFields}
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