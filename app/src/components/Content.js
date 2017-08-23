import React from 'react'
//adviceTemp
import './global/css/Content.css'

export default class Content extends React.Component{

  constructor(props){
    super(props);
    //console.log(this.props);
    this.state={
      count: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
  }



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

  render(){
    return(
      <div className="Content">
          <h2>counter : {this.state.count}</h2>
          <p>
            <button id="add" onClick={this.handleCountClick}>+</button>
            <button id="subtract" onClick={this.handleCountClick}>-</button>
            <button id="reset" onClick={this.handleCountClick}>Reset</button>
          </p>
      </div>
    );
  }
}
