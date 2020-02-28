import React from "react";
import {Table} from 'react-bootstrap';
import ListItem from './ListItem/ListItem';


const list = () => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let mappedItems = items.map((item, index) => {
        return <ListItem data={item} key={index}/>
    });

    return (
        <Table responsive>
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