//dependencies
import React from 'react';
import {PropTypes} from 'prop-types';
import {  Link, IndexRoute } from 'react-router';
//import { Nav, NavItem, Glyphicon } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
//assets
import './global/css/Header.css';
import logo from './global/images/logo.svg';

import items from '../data/menu.js';

//import MenuSim  from  './MenuSim.js';


export default class Header extends React.Component{

  static propTypes = {
    //title : PropTypes.string.isRequired,
  //  items : PropTypes.array.isRequired
  }

  constructor(){
    super()

  }

  render(){
    return(
      <div className="Header">
        <div className="Logo">
            <h2>Promover</h2>
              <img src={logo} className="App-logo" alt="logo" />
          </div>
      </div>
    );
  }
}
