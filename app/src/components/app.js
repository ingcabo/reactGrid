import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header  from  './Header.js';
import Content from  './Content.js';
import Footer2  from  './Footer2.js';
import items from '../data/menu.js';
import { Navbar } from 'react-bootstrap';

export default class App extends Component{
static PropTypes ={
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
          <Navbar className="NavbarSep">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Product List</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <Content body={children} />
        <Footer2 />
        
      </div>
    );
  }
}
