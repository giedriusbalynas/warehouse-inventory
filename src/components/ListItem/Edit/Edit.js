import React, {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import CustomForm from '../../UI/CustomForm/CustomForm';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actions';

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

    const editProductHandler = (form, e) => {
        e.preventDefault();
        props.handleSubmit(itemState);
        browserHistory.push('/');
    };


    return (
        <div>
            <CustomForm
                data={itemState}
                inputHandler={inputChangeHandler}
                submitHandler={editProductHandler}
                formType="Edit"
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
            type: actionTypes.EDIT_ITEMS,
            item: state
        })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);