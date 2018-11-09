import React, { Component } from 'react';
import {Button} from "./button/button"

export class ItemDone extends Component {
 render() {
    const {
      item,
      onClickRemoveItemFromDoneInItem
    } = this.props;
    let style;

   if (item.priority == 3) {
      style = "item low"

   }else if (item.priority == 2) {
     style = "item high"
   }else {
     style = "item normal"
   }

    return (
        <div className={style}>
           <h6>{item.name} </h6>
           <p>{item.descriprion}</p>
           <p className="date">{item.date}</p>
           <Button
            method={onClickRemoveItemFromDoneInItem}
            itemId={item.id}
            content='Delete task'
            className = "delete"
           />
          </div>
        );
     }
   }
