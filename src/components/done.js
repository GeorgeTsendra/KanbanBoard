import React, { Component } from 'react';
import {ItemDone} from './items/item-done';


export class Done extends Component {



  render() {
    console.log(this.props);

    const {
      doneData,
      onClickRemoveItemFromDone
    } = this.props;


    return (

        <div className="col-md-3 done">
        <h1> Done </h1>
         {doneData.map((value,index,arr)=>{
           return (
             <ItemDone
             key={index}
             item={value}
             onClickRemoveItemFromDoneInItem = {onClickRemoveItemFromDone}
             />
           )
         })}


        </div>



    );
  }
}
