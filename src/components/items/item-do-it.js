import React, { Component } from 'react';
import {EditPriority} from "../edit-priority"

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
  console.log(this.state.editPriorityIsActive);
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
           <button type="submit " className="edit edit-description" onClick={()=>{editDescriptionsInDoItInItem(item.id)}}>
             Edit descriprion</button>
           <p className="date"> {item.date}</p>
           <button type="submit" className=" edit-priority edit" onClick={()=>{this.editPriorityButtonHandler()}}>
           Edit priority</button>

           {this.state.editPriorityIsActive ? <EditPriority
             inItemChangePriorityInDoIt = {inItemChangePriorityInDoIt}
             editPriorityButtonHandler = {this.editPriorityButtonHandler}
             itemId = {item.id}
             />: <div></div>}

           <button type="submit" className="next"
           onClick={()=>{nextOnClickInItemfromToItToDoing(item.id)}}
           > Next </button>

           <button type="submit" className="abort"
           onClick={()=>{nextOnClickInItemfromToItToAbort(item.id)}}
           > Abort </button>



          </div>



      );




  }
}
