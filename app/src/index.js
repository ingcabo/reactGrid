import React from 'react'
//import {Component} from 'react' este es un comentario
import ReactDOM from 'react-dom'

import Header from './Components/Header.js'

//import FiltrableProducTable from './Components/FiltrableProducTable.js'
/*
const db = [
  {category: "Sporting Goods", price: "$49.89", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.89", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
*/




const app = document.getElementById('app')
//ReactDOM.render(<FiltrableProducTable store={db} />,app)
ReactDOM.render(<Header />,app)