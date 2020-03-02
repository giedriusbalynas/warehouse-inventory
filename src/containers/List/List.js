import React, {useState} from "react";
import {Table} from 'react-bootstrap';
import ListItem from './ListItem/ListItem';


const list = () => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    const [listState, setState] = useState(items);

    const deleteProductHandler = (id) => {
        let newArr = [];
        for (let i = 0; i < items.length; i++) {
            if (id === listState[i].id) {
                listState.splice(i, 1);
            }
        }
        newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(listState));
    };

    const checkboxHandler = (id) => {
        let newArr = [];
        console.log(id);
        for (let i = 0; i < listState.length; i++) {
            if (id === listState[i].id) {
                listState[i].isActive = !listState[i].isActive;
            }
        }
        newArr = [...listState];
        setState(newArr);
        localStorage.setItem('items', JSON.stringify(newArr));
    };

    let mappedItems = listState.map((item, index) => {
        return <ListItem
            data={item}
            key={index}
            deleteHandler={deleteProductHandler}
            checkHandler={checkboxHandler} />
    });


    return (
        <Table responsive className="my-5">
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
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

export default list;