import React, { Component } from 'react';
import {Button} from "./button/button"


export class ItemAborter extends Component {
  render() {
    const {
      onClickRemoveItemFromAbortInItem,
      item,
     } = this.props;

     let style;
     let content = "Delete task"
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
          method={onClickRemoveItemFromAbortInItem}
          itemId={item.id}
          content={content}
          className= {"delete"}
         />
       </div>
     );
  }
}
