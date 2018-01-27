import React, {Component} from 'react';

var NavItems = React.createClass({
    getInitialState: function(){
      return {hover: false};
    },
    mouseOver: function() {
      this.setState({hover: true});
    },
    mouseOut: function() {
      this.setState({hover: false});
    },
  	render: function(){
      var color = "";
      if(this.props.color)
        color = this.props.color;

      var styles = {
        color: color
      };
    	return (
            <li className={this.state.hover ? "active":""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}><a href={this.props.href} style={styles}>{this.props.title}</a></li>
		    );
  }
});

module.exports = NavItems;
