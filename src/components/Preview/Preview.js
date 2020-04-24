import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import ProductDetails from './ProductDetails/ProductDetails'
import QuantityHistory from './QuantityHistory/QuantityHistory';
import PriceHistory from './PriceHistory/PriceHistory';
import {Link} from 'react-router-dom';

const Preview = (props) => (
    <div>
    <Tabs className="my-5" defaultActiveKey="list" id="uncontrolled-tab-example">
        <Tab eventKey="list" title="Product details">
            <ProductDetails />
        </Tab>
        <Tab eventKey="quantity" title="Quantity history">
            <QuantityHistory />
        </Tab>
        <Tab eventKey="price" title="Price history">
            <PriceHistory />
        </Tab>
    </Tabs>
    <Link to="/products" className="btn btn-secondary active" role="button" aria-pressed="true">&#8678;BACK</Link>
    </div>
);

export default Preview;