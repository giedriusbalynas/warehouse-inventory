import React from "react";
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom";


const listItem = props => {
    // const passData = {
    //   pathname: "/products/:id/edit",
    //   data: props.data
    // };
const editLink = "/products/" + props.data.id + "/edit";
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.type}</td>
            <td>{props.data.weight}</td>
            <td>{props.data.color}</td>
            <td>{props.data.quantity}</td>
            <td>{props.data.price}</td>
            <td>
                <Form.Group>
                    <Form.Check/>
                </Form.Group>
            </td>
            <td className="d-flex">
                <Link to="/products/view" className="btn btn-secondary active" role="button" aria-pressed="true">VIEW</Link>
                <Link to={editLink} className="btn btn-primary active" role="button" aria-pressed="true">EDIT</Link>
                <Link to="#" className="btn btn-danger active" role="button" aria-pressed="true">DELETE</Link>
            </td>
        </tr>
    )
};


export default listItem;