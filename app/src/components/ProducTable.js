import React from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default class ProducTable extends React.Component{
  constructor(){
    super();

  }


  render(){

     let rows =  []
     let last_caterogory = null

     if(this.props.products != null){
      this.props.products.forEach((product) => {
          if(product.category != last_caterogory)

            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)

            rows.push(<ProductRow product={product.name} key={product.name}/>)

        })
      }else{
        rows.push(<h1>Loading...</h1>)
      }


    return(
      <div>
      {rows}
      </div>
    );
  }
}
