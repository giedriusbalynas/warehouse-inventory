import React from "react";
import {Table} from 'react-bootstrap';
import ListItem from '../../components/ListItem/ListItem';
import {connect} from "react-redux";

const List = (props) => {
    let listItems = props.items;

    let mappedItems = listItems.map((item) => {
        return <ListItem
            data={item}
            key={item.id}
        />
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

export default connect(mapStateToProps)(List);