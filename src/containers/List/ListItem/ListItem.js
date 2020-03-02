import React from "react";
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Delete from '../../Delete/Delete';


const listItem = props => {
    const editLink = "/products/" + props.data.id + "/edit";
    const viewLink = "/products/" + props.data.id;

    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.type}</td>
            <td>{props.data.weight}</td>
            <td>{props.data.color}</td>
            <td>{props.data.quantity}</td>
            <td>{props.data.price}</td>
            <td>
                <Form.Group className="d-flex justify-content-center">
                    <Form.Check/>
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