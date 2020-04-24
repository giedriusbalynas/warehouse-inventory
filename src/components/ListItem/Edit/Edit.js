import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link, useParams, useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import * as actionTypes from "../../../store/actions";

const EditProduct = (props) => {
    let items = props.items || [];
    let id = useParams();
    let filteredItems = items.filter((item) => {
        if (item.id === id.id) {
            return item;
        }
        return filteredItems;
    });

    let data = filteredItems[0];
    const [itemState, setItems] = useState(data);

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setItems({...itemState, [name]: value});
    };

    const browserHistory = useHistory();

    const editProductHandler = (e) => {
        e.preventDefault();
        props.handleSubmit(itemState);
        browserHistory.push('/');
    };

    return (
        <div>
            <h2 className="mt-5">Edit Product</h2>
            <Form className="my-5" onSubmit={editProductHandler}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="name"
                                  type="text"
                                  defaultValue={data.name}
                                  placeholder="Product name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="type"
                                  type="text"
                                  defaultValue={data.type}
                                  placeholder="Product type" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="weight"
                                  type="number"
                                  step="any"
                                  defaultValue={data.weight}
                                  placeholder="Product weight" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="color"
                                  type="text"
                                  defaultValue={data.color}
                                  placeholder="Product color" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="quantity"
                                  type="text"
                                  defaultValue={data.quantity}
                                  placeholder="Product quantity" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={inputChangeHandler}
                                  name="price"
                                  type="number"
                                  step="any"
                                  defaultValue={data.price}
                                  placeholder="Product price" />
                </Form.Group>
                <Button className="my-3"
                        variant="secondary"
                        type="submit">EDIT PRODUCT</Button>
                <Link to="/products"
                      className="btn btn-outline-dark ml-2"
                      role="button"
                      aria-pressed="true">&#8678;BACK</Link>
            </Form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (state) => dispatch ({
            type: actionTypes.EDIT_ITEMS,
            item: state
        })
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(EditProduct);