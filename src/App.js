import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewProduct from './containers/NewProduct/NewProduct';
import Layout from "./hoc/Layout/Layout";
import Preview from './components/Preview/Preview';
import List from './containers/List/List';
import Edit from './containers/Edit/Edit';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar/>
                    <Layout>
                        <Switch>
                            <Redirect exact from="/" to="/products" />
                            <Route exact path="/products" component={List}>
                            </Route>
                            <Route path="/products/create" component={NewProduct}>
                            </Route>
                            <Route exact path="/products/:id" component={Preview}>
                            </Route>
                            <Route path="/products/:id/edit" component={Edit}>
                            </Route>
                        </Switch>
                    </Layout>
                </Router>

            </React.Fragment>
        );
    }
}

export default App;
