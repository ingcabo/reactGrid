import React, {Component} from "react"
import items  from "../data/menu.js"
import { Nav, NavItem, Glyphicon } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./global/css/Header.css"

export default class MenuSim extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Promover</a>
                        </div>
                        <ul className="nav nav-pills">
                            {
                                items && items.map((item, key) => <li key={key}> <Link to={item.href}> {item.title} </Link> </li>)
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
