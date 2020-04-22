import React from "react";
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {InputGroup, FormControl} from "react-bootstrap";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

const ListItem = props => {
    const editLink = "/products/" + props.data.id + "/edit";
    const viewLink = "/products/" + props.data.id;
    console.log("ListItem: ", props);

    const checkboxHandler = () => {
        props.checkHandler(props.data.id);
    };

    const quantityChangeHandler = (e) => {
        const value = e.target.value;
        props.quantityHandler(props.data.id, value);
    };

    const priceChangeHandler = (event) => {
        const value = event.target.value;
        props.priceHandler(props.data.id, value);
    };

    let style = "text-right";
    let quantity = parseInt(props.data.quantity, 10);
    if (quantity === 0) {
        style += " bg-warning";
    }

    const quantityHistoryHandler = (event) => {
        const value = event.target.value;
        props.quantityHistory(props.data.id, value)
    };

    const priceHistoryHandler = (event) => {
        const value = event.target.value;
        props.priceHistory(props.data.id, value)
    };

    return (
        <tr className={style}>
            <td>{props.data.name}</td>
            <td>{props.data.type}</td>
            <td>{props.data.weight}</td>
            <td>{props.data.color}</td>
            <td>
                <InputGroup size="sm">
                    <FormControl onChange={quantityChangeHandler}
                                 onBlur={quantityHistoryHandler}
                                 value={props.data.quantity}
                                 className="text-right"
                                 type="number" min="0" step="1"/>
                </InputGroup>
            </td>
            <td>
                <InputGroup size="sm">
                    <FormControl onChange={priceChangeHandler}
                                 onBlur={priceHistoryHandler}
                                 value={props.data.price}
                                 className="px-1 text-right"
                                 type="number" min="0" step="0.01"/>
                </InputGroup>
            </td>
            <td>
                <Form.Group className="d-flex justify-content-center">
                    <Form.Check onChange={checkboxHandler}
                                checked={props.data.isActive}/>
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

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (id) => dispatch({
            type: actionTypes.DELETE_ITEMS,
            itemId: id
        })
    }
};

export default connect(null, mapDispatchToProps)(ListItem);