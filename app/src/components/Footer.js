import React from 'react'
import PropTypes from 'prop-types';
//adviceTemp
import './global/css/Footer.css'

export default class Footer extends React.Component{
  static propTypes = {
    copyright : PropTypes.string
  }
  constructor(){
    super()
  }

  render(){
      const { copyright= '&copyright react 2017'} = this.props;
    return(
      <div className="Footer">

          <p dangerouslySetInnerHTML={{ __html: copyright}}></p>
      </div>
    );
  }
}
