import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {InputGroup, FormControl} from "react-bootstrap";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

const ListItem = props => {
    const [itemState, setItems] = useState(props.data);

    const editLink = "/products/" + props.data.id + "/edit";
    const viewLink = "/products/" + props.data.id;

    const checkboxHandler = () => {
        itemState.isActive = !itemState.isActive;
        setItems({...itemState});
        props.handleEdit(itemState);
    };

    const quantityChangeHandler = (e) => {
        setItems({
            ...itemState,
            quantity: e.target.value
        });
    };

    const priceChangeHandler = (e) => {
        setItems({
            ...itemState,
            price: e.target.value
        });
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
                <InputGroup size="sm">
                    <FormControl onChange={(e) => quantityChangeHandler(e)}
                                 onBlur={() => props.handleEdit(itemState)}
                                 value={itemState.quantity}
                                 className="text-right"
                                 type="number" min="0" step="1"/>
                </InputGroup>
            </td>
            <td>
                <InputGroup size="sm">
                    <FormControl onChange={(e) => priceChangeHandler(e)}
                                 onBlur={() => props.handleEdit(itemState)}
                                 value={itemState.price}
                                 className="px-1 text-right"
                                 type="number" min="0" step="0.01"/>
                </InputGroup>
            </td>
            <td>
                <Form.Group className="d-flex justify-content-center">
                    <Form.Check onChange={checkboxHandler}
                                checked={itemState.isActive}/>
                </Form.Group>
            </td>
            <td className="d-flex">
                <Link to={viewLink}
                      className="btn btn-secondary active"
                      role="button"
                      aria-pressed="true">VIEW</Link>
                <Link to={editLink}
                      className="btn btn-primary active"
                      role="button"
                      aria-pressed="true">EDIT</Link>
                <Button onClick={() => props.handleDelete(props.data.id)} variant="danger">DELETE</Button>
            </td>
        </tr>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (id) => dispatch({
            type: actionTypes.DELETE_ITEMS,
            itemId: id
        }),
        handleEdit: (data) => dispatch({
            type: actionTypes.EDIT_ITEMS,
            item: data
        })
    }
};

export default connect(null, mapDispatchToProps)(ListItem);