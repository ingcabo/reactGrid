//dependencies
import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
//assets
import './global/css/Header.css';
import logo from './global/images/logo.svg';

export default class Header extends React.Component{

  static propTypes = {
    title : PropTypes.string.isRequired,
    items : PropTypes.array.isRequired
  }

  constructor(){
    super()
  }

  render(){
    const { title,items} = this.props;
    //console.log(items);
    return(
      <div className="Header">
        <div className="Logo">

          <h2>{title}</h2>
          <img src={logo} className="App-logo" alt="logo" />

          <ul className="Menu">
            {
                items && items.map((item, key) => <li key={key}> <Link to={item.url}> {item.title} </Link> </li>)
            }
          </ul>
        </div>

      </div>
    );
  }
}
