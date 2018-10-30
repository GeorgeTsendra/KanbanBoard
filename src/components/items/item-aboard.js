import React, { Component } from 'react';


export class ItemAborter extends Component {





  render() {
    const {
      onClickRemoveItemFromAbortInItem,
      item,
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
         <button type="submit" className="delete"
         onClick={()=>{onClickRemoveItemFromAbortInItem(item.id)}}
         > Delete task </button>
       </div>



    );
  }
}
