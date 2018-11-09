import React, { Component } from 'react';
import {EditPriority} from "../edit-priority"
import {Button} from "./button/button"
export class ItemDoIt extends Component {

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
      nextOnClickInItemfromToItToDoing,
      nextOnClickInItemfromToItToAbort,
      editDescriptionsInDoItInItem,
      inItemChangePriorityInDoIt
    } = this.props;

    let style;
    let contentInNext = "Next"
    let contentInAbort = "Abort"

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
           <p >{item.descriprion}</p>
           <Button
            method={editDescriptionsInDoItInItem}
            itemId={item.id}
            content='Edit descriprion'
            className = "edit edit-description"
           />
           <p className="date"> {item.date}</p>
           <Button
            method={this.editPriorityButtonHandler}
            itemId={item.id}
            content='Edit priority'
            className = "edit-priority edit"
           />
           {this.state.editPriorityIsActive ? <EditPriority
             inItemChangePriorityInDoIt = {inItemChangePriorityInDoIt}
             editPriorityButtonHandler = {this.editPriorityButtonHandler}
             itemId = {item.id}
             />: <div></div>}
             <Button
              method={nextOnClickInItemfromToItToDoing}
              itemId={item.id}
              content={contentInNext}
              className = {"next"}
             />
             <Button
              method={nextOnClickInItemfromToItToAbort}
              itemId={item.id}
              content={contentInAbort}
              className = {"abort"}
             />
          </div>
        );
      }
    }
