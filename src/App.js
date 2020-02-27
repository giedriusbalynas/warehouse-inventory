import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import NewProduct from './containers/NewProduct/NewProduct'
import Layout from "./hoc/Layout/Layout";
import List from './containers/List/List'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Layout>
              <List />
              {/*<NewProduct />*/}
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
