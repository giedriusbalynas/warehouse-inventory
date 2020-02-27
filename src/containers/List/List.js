import React from "react";
import {Table} from 'react-bootstrap';
import ListItem from './ListItem/ListItem';


const list = (props) => {

    let items = JSON.parse(localStorage.getItem('items')) || [];
    console.log(items[1].name);

    return (
        <Table responsive>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <ListItem />
             </tbody>
        </Table>
    );
};

export default list;