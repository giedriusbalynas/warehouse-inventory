import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import CustomForm from '../../components/UI/CustomForm/CustomForm';
import {v4 as uuidv4} from 'uuid'; //this is for creating unique identifier
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';


const NewProduct = (props) => {
    const [itemsState, setItems] = useState({
        id: uuidv4(),
        name: "",
        type: "",
        weight: 0,
        color: "",
        quantity: 0,
        price: 0,
        isActive: true,
        quantityHistory: [],
        priceHistory: []
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setItems({...itemsState, [name]: value});
    };

    const browserHistory = useHistory();
    const submitHandler = (form, event) => {
        event.preventDefault();
        itemsState.quantityHistory = [itemsState.quantity];
        itemsState.priceHistory = [[Date.now(), itemsState.price]];
        props.handleSubmit(itemsState);
        browserHistory.push('/');
    };
    return (
        <div>
            <CustomForm
                data={itemsState}
                inputHandler={inputChangeHandler}
                submitHandler={submitHandler}
                formType="New"
            />
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
        handleSubmit: (state) => dispatch({
            type: actionTypes.ADD_ITEMS,
            items: state
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);