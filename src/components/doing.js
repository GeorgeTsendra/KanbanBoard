import React, { Component } from 'react';
import {ItemDoing} from './items/item-doing';


export class Doing extends Component {




  render() {
    console.log(this.props);
    const {
      nextOnClickfromDoingToAbort,
      nextOnClickfromDoingToDone,
      doingData,
      changePriorityInDoig
    } = this.props;


    return (

      <div className="col-md-3 doing">
      <h1> Doing </h1>
       {doingData.map((value,index,arr)=>{
         return (
           <ItemDoing key={index}
                 item={value}
                 nextOnClickInItemfromDoingToDone = {nextOnClickfromDoingToDone}
                 nextOnClickInUtemfromDoingToAbort = {nextOnClickfromDoingToAbort}
                 inItemChangePriorityInDoig = {changePriorityInDoig}
          />
         )
       })}


      </div>



    );
  }
}
