import React, { Component } from 'react';
import {DoIt} from "./components/do-it"
import {Doing} from "./components/doing"
import {Done} from "./components/done"
import {Aborted} from "./components/aborted"
import {AddTask} from "./components/add-task"
import removeFieldHeandler from "./actions/clearingAll"
import addTastsToDoItFunc from "./actions/addTastsToDoItFunc"
import fromToDoToDoingFunc from "./actions/fromToDoToDoingFunc"
import fromDoingToDoneFunc from "./actions/fromDoingToDoneFunc"
import fromDoingToAbortFunc from "./actions/fromDoingToAbortFunc"
import fromDoItToAbortFunc from "./actions/fromDoItToAbortFunc"
import removeItemFromAbortFunc from "./actions/removeItemFromAbortFunc"
import removeItemFromDoneFunc from "./actions/removeItemFromDoneFunc"
import editDescriptionsFunc from "./actions/editDescriptionsFunc"
import componentWillMountFunc from "./actions/componentWillMountFunc"
import changePriorityInDoItFunc from "./actions/changePriorityInDoItFunc"
import changePriorityInDoigFunc from "./actions/changePriorityInDoigFunc"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      doIt : [],
      doing:  [],
      done:  [],
      aborted:  [],
      addFieldIsActive: false,
  }
}
removeFieldHeandlerApp = () => {
    this.setState(
        removeFieldHeandler()
    )
}
addFieldIsActiveHeandler= ()=>{
  this.setState({
    addFieldIsActive: !this.state.addFieldIsActive,
  })
}
addTastsToDoIt = (value)=>{
    this.setState({
      doIt: addTastsToDoItFunc(value, this.state.doIt )
  })
}
fromToDoToDoing = (id) => {
    this.setState(
      fromToDoToDoingFunc(id, this.state)
    )
 }

fromDoingToDone = (id) => {
    this.setState(
      fromDoingToDoneFunc(id, this.state)
    )
  }

fromDoingToAbort = (id) => {
   this.setState(
      fromDoingToAbortFunc(id, this.state),
    )
  }

fromDoItToAbort = (id) => {
    this.setState(
      fromDoItToAbortFunc(id, this.state)
    )
  }
removeItemFromDone = (id) => {
     this.setState(
       removeItemFromDoneFunc(id, this.state)
     )
  }
removeItemFromAbort = (id) => {
     this.setState(
       removeItemFromAbortFunc(id, this.state)
     )
   }
editDescriptions = (id) =>{
  this.setState({
      doIt: editDescriptionsFunc(id, this.state)
  })
}
 componentWillMount(){
 this.setState(
    componentWillMountFunc()
 )
}
 changePriorityInDoIt = (id, newPriority) => {
  this.setState({
   doIt: changePriorityInDoItFunc(id, newPriority, this.state)
 })
}
 changePriorityInDoig = (id, newPriority) => {
   this.setState({
   doing: changePriorityInDoigFunc(id,newPriority, this.state)
 })
}
render() {
    return (
      <div className="App">
      <div className= "container">
       <div className="col-md-12 kanban-lists">
       <div className="col-md-12 kanban-lists-top">
       <DoIt
        doItData = {this.state.doIt}
        nextOnClickfromToItToDoing = {this.fromToDoToDoing}
        nextOnClickfromToItToAbort = {this.fromDoItToAbort}
        editDescriptionsInDoIt = {this.editDescriptions}
        changePriorityInDoIt = {this.changePriorityInDoIt}
       />
       <Doing
        doingData = {this.state.doing}
        nextOnClickfromDoingToDone = {this.fromDoingToDone}
        nextOnClickfromDoingToAbort = {this.fromDoingToAbort}
        changePriorityInDoig = {this.changePriorityInDoig}
       />
       <Done
        doneData = {this.state.done}
        onClickRemoveItemFromDone = {this.removeItemFromDone}
       />
       <Aborted
        aborted = {this.state.aborted}
        onClickRemoveItemFromAbort = {this.removeItemFromAbort}
       />
       </div>
       <div className="col-md-12 kanban-lists-bottom">

       <button type="submit" className="add-task-button" onClick={this.addFieldIsActiveHeandler}> add task</button>
       <button type="submit" className="delete-task-button" onClick={this.removeFieldHeandlerApp}> remove all tasks</button>
       </div>
        {this.state.addFieldIsActive ? <AddTask
          addTastsToDoIt = {this.addTastsToDoIt}
          closeAddField = {this.addFieldIsActiveHeandler}
          />: <div></div>}
       </div>
      </div>
    </div>
   );
  }
}

export default App;
