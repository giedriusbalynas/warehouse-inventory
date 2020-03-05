import React from "react";
import {ListGroup} from 'react-bootstrap';
import {useParams} from "react-router-dom";

const ProductDetails = () => {
    let id = useParams();
    let items = JSON.parse(localStorage.getItem('items')) || [];

    let mappedItems = items.filter((item) => {
        if (item.id === id.id) {
            return item;
        }
        return mappedItems;
    });

    let data = mappedItems[0];

    return(
        <div>
            <h2 className="mt-5">{data.name}</h2>
            <ListGroup variant="flush" className="my-5 d-flex">
                <ListGroup.Item><strong>Type: </strong>{data.type}</ListGroup.Item>
                <ListGroup.Item><strong>Weight: </strong>{data.weight}</ListGroup.Item>
                <ListGroup.Item><strong>Color: </strong>{data.color}</ListGroup.Item>
                <ListGroup.Item><strong>Quantity: </strong>{data.quantity}</ListGroup.Item>
                <ListGroup.Item><strong>Price: </strong>{data.price}</ListGroup.Item>
                <hr />
            </ListGroup>
        </div>
    );
};

export default ProductDetails;