import React, { Component } from 'react';
import {ItemAborter} from './items/item-aboard';


export class Aborted extends Component {
  render() {
      const {
        onClickRemoveItemFromAbort,
        aborted
      } = this.props;

  return (
      <div className="col-md-3 abordet">
        <h1> Aborted </h1>
         {aborted.map((value,index,arr)=>{
           return (
             <ItemAborter
             onClickRemoveItemFromAbortInItem = {onClickRemoveItemFromAbort}
             key={index}
             item={value}/>
           )
         })}
         </div>
      );
   }
}
