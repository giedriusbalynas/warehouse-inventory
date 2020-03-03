import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import ProductDetails from '../../containers/ProductDetails/ProductDetails'

const preview = () => (
    <Tabs className="my-5" defaultActiveKey="list" id="uncontrolled-tab-example">
        <Tab eventKey="list" title="Product details">
                <ProductDetails />
        </Tab>
        <Tab eventKey="quantity" title="Quantity history">

        </Tab>
        <Tab eventKey="price" title="Price history">

        </Tab>
    </Tabs>
);

export default preview;