import React from 'react'

import PropTypes from 'prop-types';
//adviceTemp
import './global/css/Content.css'

export default class Content extends React.Component{

  static PropTypes ={
    body: PropTypes.object.isRequired
  };

  render(){

    const {body} = this.props;

    return(
      <div className="Content">

        {body}

      </div>
    );
  }
}
