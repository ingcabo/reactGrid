
import React, {Component} from 'react';
import NavItems from './NavItems.js';

var Navbar = React.createClass({

	getDefaultProps: function(){
		return {
			navColor: "",
			navBorder: "",
			brandColor: ""
		}
	},
  	render: function(){
			var createLinkItem = function(item,index) {
				var linkColor="";
				if(item.color)
					linkColor = item.color;
				return <NavItems key={item.title+index} title={item.title} href={item.href} color={linkColor}/>
			}

      var styles =
			{
				navStyle: {
	        background: this.props.navColor,
					borderColor: this.props.navBorder
	      },
				brandStyle: {
	        color: this.props.brandColor
	      }
		  };

    	return (
						<nav className="navbar navbar-inverse" style={styles.navStyle}>
									<div className="navbar-header">
										<button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
										<div className="navbar-brand" style={styles.brandStyle}>Promover</div>
									</div>
									<div className="collapse navbar-collapse" id="nav-collapse">
										<ul className="nav navbar-nav">
											{this.props.items.map(createLinkItem)}
										</ul>
									</div>
						</nav>
		    );
  }
});

module.exports = Navbar;
