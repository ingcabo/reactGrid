import React, {Component} from 'react';
import PropTypes from 'prop-types';


//import App from './Components/App';
import Header  from  './Header.js'
import Content from  './Content.js'
import Footer  from  './Footer.js'

export default class App extends Component{
static PropTypes ={
  children: PropTypes.object.isRequired
};

  render(){
    const { children  } = this.props;
    return(
      <div className="App">
        <Header
          title="CodeJobs"
          items ={items}
        />
        <Content body={children} />
        <Footer />

      </div>
    );
  }
}
