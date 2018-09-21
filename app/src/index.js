//dependencies
import React from "react"
import {render} from "react-dom"
import { Provider, connect } from "react-redux"


import AppRoutes  from  "./route.js"

const app = document.getElementById("app")
//ReactDOM.render(<FiltrableProducTable store={db} />,app)
render(
    <AppRoutes/>
    ,app)
//https://www.youtube.com/watch?v=aaMoVAcP5-w
