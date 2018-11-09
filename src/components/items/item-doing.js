import React, { Component } from 'react';
import {EditPriority} from "../edit-priority"
import {Button} from "./button/button"

export class ItemDoing extends Component {

  constructor(props){
    super(props)
    this.state = {
      editPriorityIsActive: false,
    }
  }

  editPriorityButtonHandler = () => {
    this.setState({
      editPriorityIsActive: !this.state.editPriorityIsActive,
    })
  }

render() {
    const {
      item,
      nextOnClickInUtemfromDoingToAbort,
      nextOnClickInItemfromDoingToDone,
      inItemChangePriorityInDoig
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
            method={this.editPriorityButtonHandler}
            itemId={item.id}
            content='Edit priority'
            className = "edit-priority edit"
           />
           {this.state.editPriorityIsActive ? <EditPriority
             inItemChangePriorityInDoIt = {inItemChangePriorityInDoig}
             editPriorityButtonHandler = {this.editPriorityButtonHandler}
             itemId = {item.id}
             />: <div></div>}
             <Button
              method={nextOnClickInItemfromDoingToDone}
              itemId={item.id}
              content='Next'
              className = "next"
             />
             <Button
              method={nextOnClickInUtemfromDoingToAbort}
              itemId={item.id}
              content='Abort'
              className = "abort"
             />
           </div>
        );
      }
}
