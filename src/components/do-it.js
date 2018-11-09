import React, { Component } from 'react';
import {ItemDoIt} from './items/item-do-it';


export class DoIt extends Component {
 render() {
    const {
      nextOnClickfromToItToDoing,
      nextOnClickfromToItToAbort,
      doItData,
      editDescriptionsInDoIt,
      changePriorityInDoIt
    } = this.props;

  return (
      <div className="col-md-3 do-it">
        <h1> Do It </h1>
         {doItData.map((value,index,arr)=>{
           return (
             <ItemDoIt key={index}
                   item={value}
                   nextOnClickInItemfromToItToDoing = {nextOnClickfromToItToDoing}
                   nextOnClickInItemfromToItToAbort = {nextOnClickfromToItToAbort}
                   editDescriptionsInDoItInItem = {editDescriptionsInDoIt}
                   inItemChangePriorityInDoIt = {changePriorityInDoIt}
            />
           )
         })}
        </div>
      );
  }
}
