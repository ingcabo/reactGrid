import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

import Header  from  './Header.js';
import Content from  './Content.js';
import Footer2  from  './Footer2.js';
import items from '../data/menu.js';

import MenuSim  from  './MenuSim.js';
import "babel-polyfill";

export default class App extends Component{

static PropTypes = {
  children: PropTypes.object.isRequired
};

  render(){
    const { children  } = this.props;
    return(
      <div className="App">
        <Header
            title="Promover"
            items ={items}
        />
          <Content body={children} />
        <Footer2 />
      </div>
    );
  }
}
