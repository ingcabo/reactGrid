import React from 'react'

import PropTypes from 'prop-types';
//adviceTemp
import './global/css/Content.css'

export default class Content extends React.Component{

  static PropTypes ={
    body: PropTypes.object.isRequired
  };


/*

  constructor(props){
    super(props);
    //console.log(this.props);
    this.state={
      count: 0,
      number1 :'',
      number2: '',
      result :0

    };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

// comprueba si el componente ya cargo
  componentDidMount(){
    this.setState({
      count :1
    });
  }

  handleCountClick(e){
    if (e.target.id === 'add'){
      this.setState({
        count :this.state.count + 1
      })
    }else if (e.target.id === 'subtract' && this.state.count > 0 ){
      this.setState({
        count :this.state.count - 1
      })
    }else {
      this.setState({
        count :0
      })
    }
  }

  handleResultClick(e){
    this.setState({
      result : this.state.number1 + this.state.number2
    });
  }

  handleInputChanged(e){
    if(e.target.id==="number1"){
      this.setState({

        number1:Number(e.target.value)
      })
    }else{
      this.setState({
        number2:Number(e.target.value)
      })
    }
  }
*/
  render(){

    const {body} = this.props;

    return(

      <div className="Content">
        {body}
      </div>
    );
  }
}
