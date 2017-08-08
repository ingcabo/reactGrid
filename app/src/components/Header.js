import React from 'react'

import './global/css/Header.css'
//require('./global/css/Header.css')

export default class Header extends React.Component{

  constructor(){
    super()
  }

  render(){
    return(
      <div className="Header">
        <div className="Logo">

          <h2>hola mundo</h2>
          <img src={ require("./global/images/logo.svg")} alt="logo" />
          <ul className="Menu">
            {
            /*  items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )*/
            }
          </ul>
        </div>
      </div>
    );
  }
}
