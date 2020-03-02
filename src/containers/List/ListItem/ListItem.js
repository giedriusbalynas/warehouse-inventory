import React from "react";
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Delete from '../../Delete/Delete';
import {InputGroup, FormControl} from "react-bootstrap";


const listItem = props => {
    const editLink = "/products/" + props.data.id + "/edit";
    const viewLink = "/products/" + props.data.id;

    const checkboxHandler = () => {
        props.checkHandler(props.data.id);
    };



    const quantityChangeHandler = (e) => {
        const value = e.target.value;
        console.log(value);
        props.quantityHandler(props.data.id, value);
    };

    let style = "text-right";
    let quantity = parseInt(props.data.quantity, 10);

    if (quantity === 0) {
        style += " bg-warning";
    }

    return (
        <tr className={style}>
            <td>{props.data.name}</td>
            <td>{props.data.type}</td>
            <td>{props.data.weight}</td>
            <td>{props.data.color}</td>
            <td>
                <InputGroup size="sm" className="mb-3">
                    <FormControl onChange={quantityChangeHandler} value={props.data.quantity} />
                </InputGroup>
            </td>
            <td>{props.data.price}</td>
            <td>
                <Form.Group className="d-flex justify-content-center">
                    <Form.Check onChange={checkboxHandler} checked={props.data.isActive} />
                </Form.Group>
            </td>
            <td className="d-flex">
                <Link to={viewLink} className="btn btn-secondary active" role="button" aria-pressed="true">VIEW</Link>
                <Link to={editLink} className="btn btn-primary active" role="button" aria-pressed="true">EDIT</Link>
                <Delete id={props.data.id} deleteHandler={props.deleteHandler}/>
            </td>
        </tr>
    )
};


export default listItem;