import React, {Component} from "react"
import items  from "../data/menu.js"
import Navbar from "./nav/Navbar.js"

export default class navbarInstance extends Component{
    render(){
        return(
            <div>
                <Navbar items={items} navColor="#0C3648" navBorder="#0BEFB7" brandColor="rgba(51, 122, 183, 0.67)"/>
            </div>
        )
    }
}
//https://github.com/deadcoder0904/react-bootstrap-navbar
