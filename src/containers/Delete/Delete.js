import React from "react";
import {Button} from 'react-bootstrap';

const deleteProduct = (props) => {

    const handleClick = () => {
        props.deleteHandler(props.id);
    };

    return (
        <div>
            <Button onClick={handleClick} variant="danger">DELETE</Button>
        </div>
    )
};

export default deleteProduct;