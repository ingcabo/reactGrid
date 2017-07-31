import React from 'react'

export default class SearchBar extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
          <input type="text"/>
          <input type="checkbox"/>
      </div>
    );
  }
}
