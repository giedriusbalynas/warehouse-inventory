import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import ListItem from '../../components/ListItem/ListItem';
import {connect} from "react-redux";
import * as actionTypes from "../../store/actions";

const List = (props) => {
    let listItems = props.items;

    const quantityChangeHandler = (id, value) => {
        for (let i = 0; i < listItems.length; i++) {
            if (id === listItems[i].id) {
                listItems[i].quantity = value;
            }
        }
        let newArr = [...listItems];
        // setState(newArr);
        // localStorage.setItem('items', JSON.stringify(newArr));
    };

    const priceChangeHandler = (id, value) => {
        for (let i = 0; i < listItems.length; i++) {
            if (id === listItems[i].id) {
                listItems[i].price = value;
            }
        }
        let newArr = [...listItems];
        // setState(newArr);
        // localStorage.setItem('items', JSON.stringify(newArr));
    };

    const quantityHistoryHandler = (id, value) => {
        for (let i = 0; i < listItems.length; i++) {
            let historyLastIndex = listItems[i].quantityHistory.length - 1;
            let historyLastValue = listItems[i].quantityHistory[historyLastIndex];

            if (id === listItems[i].id) {
                if (historyLastValue !== value) {
                    listItems[i].quantityHistory.push(value);
                    if (listItems[i].quantityHistory.length > 5) {
                        listItems[i].quantityHistory.splice(0, listItems[i].quantityHistory.length - 5);
                    }
                }
            }
        }
        let newArr = [...listItems];
        // setState(newArr);
        // localStorage.setItem('items', JSON.stringify(newArr));
    };

    const priceHistoryHandler = (id, value) => {
        let currentTime = Date.now();
        for (let i = 0; i < listItems.length; i++) {
            let historyLastIndex = listItems[i].priceHistory.length - 1;
            let historyLastValue = listItems[i].priceHistory[historyLastIndex];

            if (id === listItems[i].id) {
                if (historyLastValue[0] !== value) {
                    listItems[i].priceHistory.push([currentTime, value]);
                    if (listItems[i].priceHistory.length > 5) {
                        listItems[i].priceHistory.splice(0, listItems[i].priceHistory.length - 5);
                    }
                }
            }
        }
        let newArr = [...listItems];
        // setState(newArr);
        // localStorage.setItem('items', JSON.stringify(newArr));
    };

    let mappedItems = listItems.map((item, index) => {
        return <ListItem
            data={item}
            key={index}
            quantityHandler={quantityChangeHandler}
            priceHandler={priceChangeHandler}
            quantityHistory={quantityHistoryHandler}
            priceHistory={priceHistoryHandler}/>
    });


    return (
        <Table responsive className="my-5">
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Weight(kg)</th>
                <th>Color</th>
                <th>Quantity</th>
                <th className="px-3">Price(&euro;)</th>
                <th>Active</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {mappedItems}
            </tbody>
        </Table>
    );
};

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (state) => dispatch ({
            type: actionTypes.EDIT_ITEMS,
            item: state
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);