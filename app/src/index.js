//dependencies
import React from 'react'
//import {Component} from 'react' este es un comentario
import ReactDOM from 'react-dom'

//Components
import Header  from  './Components/Header'
import Content from  './Components/Content'
import Footer  from  './Components/Footer'

//data
import items   from  './data/menu'

const app = document.getElementById('app')
//ReactDOM.render(<FiltrableProducTable store={db} />,app)
ReactDOM.render(
    <div className="App">
      <Header title="Un Buen titulo" items={items} />
      <Content />
      <Footer />
    </div>
  ,app)
