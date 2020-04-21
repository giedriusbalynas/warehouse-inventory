import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import ListItem from '../../components/ListItem/ListItem';


const List = () => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    const [listState, setState] = useState(items);

    const deleteProductHandler = (id) => {
        for (let i = 0; i < listState.length; i++) {
            if (id === listState[i].id) {
                listState.splice(i, 1);
            }
        }
        let newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(listState));
    };

    const checkboxHandler = (id) => {
        for (let i = 0; i < listState.length; i++) {
            if (id === listState[i].id) {
                listState[i].isActive = !listState[i].isActive;
            }
        }
        let newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(newArr));
    };
    const quantityChangeHandler = (id, value) => {
        for (let i = 0; i < listState.length; i++) {
            if (id === listState[i].id) {
                listState[i].quantity = value;
            }
        }
        let newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(newArr));
    };

    const priceChangeHandler = (id, value) => {
        for (let i = 0; i < listState.length; i++) {
            if (id === listState[i].id) {
                listState[i].price = value;
            }
        }
        let newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(newArr));
    };

    const quantityHistoryHandler = (id, value) => {
        for (let i = 0; i < listState.length; i++) {
            let historyLastIndex = listState[i].quantityHistory.length - 1;
            let historyLastValue = listState[i].quantityHistory[historyLastIndex];

            if (id === listState[i].id) {
                if (historyLastValue !== value) {
                    listState[i].quantityHistory.push(value);
                    if (listState[i].quantityHistory.length > 5) {
                        listState[i].quantityHistory.splice(0, listState[i].quantityHistory.length - 5);
                    }
                }
            }
        }
        let newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(newArr));
    };

    const priceHistoryHandler = (id, value) => {
        let currentTime = Date.now();
        for (let i = 0; i < listState.length; i++) {
            let historyLastIndex = listState[i].priceHistory.length - 1;
            let historyLastValue = listState[i].priceHistory[historyLastIndex];

            if (id === listState[i].id) {
                if (historyLastValue[0] !== value) {
                    listState[i].priceHistory.push([currentTime, value]);
                    if (listState[i].priceHistory.length > 5) {
                        listState[i].priceHistory.splice(0, listState[i].priceHistory.length - 5);
                    }
                }
            }
        }
        let newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(newArr));
    };

    let mappedItems = listState.map((item, index) => {
        return <ListItem
            data={item}
            key={index}
            deleteHandler={deleteProductHandler}
            checkHandler={checkboxHandler}
            quantityHandler={quantityChangeHandler}
            priceHandler={priceChangeHandler}
            quantityHistory={quantityHistoryHandler}
            priceHistory={priceHistoryHandler} />
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

export default List;