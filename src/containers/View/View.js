import React from "react";
import {ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";

const view = () => {
    return(
        <div>
            <h2 className="mt-5">Pavadinimas</h2>
            <ListGroup variant="flush" className="my-5">
                <ListGroup.Item>Type: </ListGroup.Item>
                <ListGroup.Item>Weight: </ListGroup.Item>
                <ListGroup.Item>Color: </ListGroup.Item>
                <ListGroup.Item>Quantity: </ListGroup.Item>
                <ListGroup.Item>Price: </ListGroup.Item>
                <hr />
            </ListGroup>
            <Link to="/products" className="btn btn-secondary active" role="button" aria-pressed="true">&#8678;BACK</Link>
        </div>
    );
};

export default view;