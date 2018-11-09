import React, { Component } from 'react';
import {DoIt} from "./components/do-it"
import {Doing} from "./components/doing"
import {Done} from "./components/done"
import {Aborted} from "./components/aborted"
import {AddTask} from "./components/add-task"

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
  removeFieldHeandler = () => {
    window.localStorage.clear()

    this.setState({
      doIt : [],
      doing:  [],
      done:  [],
      aborted:  [],
    })
  }

addFieldIsActiveHeandler= ()=>{
  this.setState({
    addFieldIsActive: !this.state.addFieldIsActive,
  })
}


  addTastsToDoIt = (value)=>{
    let copyOfDoIt = [...this.state.doIt, value];
    let doitNormal = []
    let doitLow = []
    let doitHight = []
    copyOfDoIt.forEach((value)=>{
      if (value.priority == 3) {
        doitLow = [...doitLow, value]
      }else if (value.priority == 2) {
          doitHight = [...doitHight, value]
      }else {
        doitNormal = [...doitNormal, value]
      }
    })

    doitNormal.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    doitLow.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    doitHight.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })


    window.localStorage.setItem(value.id, JSON.stringify(value));

    this.setState({
      doIt: [...doitHight, ...doitNormal, ...doitLow]
    })
    console.log(this.state.doIt);
}



  fromToDoToDoing = (id) => {

    let itemToChangePlacement = JSON.parse(localStorage.getItem(id))
    localStorage.removeItem(id)
    itemToChangePlacement.placement = "doing"
    localStorage.setItem(id, JSON.stringify(itemToChangePlacement))

    let elementToPushToDoing = []
    let copyOfDoIt = [...this.state.doIt]
    let indexToRemove = "";

    copyOfDoIt.forEach((value,index,arr)=>{
      if (value.id === id) {
        elementToPushToDoing = value
        indexToRemove = index
      }

    })
    copyOfDoIt.splice(indexToRemove, 1)
    let doing = [...this.state.doing, elementToPushToDoing]
    let doingNormal = []
    let doingLow = []
    let doingHight = []
    doing.forEach((value)=>{
      if (value.priority == 3) {
        doingLow = [...doingLow, value]
      }else if (value.priority == 2) {
          doingHight = [...doingHight, value]
      }else {
        doingNormal = [...doingNormal, value]
      }
    })

    doingNormal.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    doingLow.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    doingHight.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })

    console.log(doingNormal);

    this.setState({
      doIt: [...copyOfDoIt],
      doing: [...doingHight,...doingNormal, ...doingLow],
    })
 }

  fromDoingToDone = (id) => {

    let itemToChangePlacement = JSON.parse(localStorage.getItem(id))
    localStorage.removeItem(id)
    itemToChangePlacement.placement = "done"
    localStorage.setItem(id, JSON.stringify(itemToChangePlacement))

    let elementToPush = []
    let copyOfArr = [...this.state.doing]
    let indexToRemove = "";

    copyOfArr.forEach((value,index,arr)=>{
      if (value.id === id) {
        elementToPush = value
        indexToRemove = index;
      }

    })
    copyOfArr.splice(indexToRemove, 1)

    let done = [...this.state.done, elementToPush]
    let doneNormal = []
    let doneLow = []
    let doneHight = []
    done.forEach((value)=>{
      if (value.priority == 3) {
        doneLow = [...doneLow, value]
      }else if (value.priority == 2) {
        doneHight = [...doneHight, value]
      }else {
        doneNormal = [...doneNormal, value]
      }
    })

  doneNormal.sort((a,b)=>{
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    })
    doneLow.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    doneHight.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })

    this.setState({
      doing: copyOfArr,
      done: [...doneHight, ...doneNormal, ...doneLow],
    })
  }

  fromDoingToAbort = (id) => {
    let itemToChangePlacement = JSON.parse(localStorage.getItem(id))
    localStorage.removeItem(id)
    itemToChangePlacement.placement = "aborted"
    localStorage.setItem(id, JSON.stringify(itemToChangePlacement))


    let elementToPush = []
    let copyOfArr = [...this.state.doing]
    let indexToRemove = "";

    copyOfArr.forEach((value,index,arr)=>{
      if (value.id === id) {
        elementToPush = value
        indexToRemove = index;
      }

    })
    copyOfArr.splice(indexToRemove, 1)
    // ________________________________________________ABORT from Doing SORT ________________________________________
    let aborted = [...this.state.aborted, elementToPush]
    let abortedNormal = []
    let abortedLow = []
    let abortedHight = []
    aborted.forEach((value)=>{
      if (value.priority == 3) {
        abortedLow = [...abortedLow, value]
      }else if (value.priority == 2) {
          abortedHight = [...abortedHight, value]
      }else {
        abortedNormal = [...abortedNormal, value]
      }
    })

    abortedNormal.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    abortedLow.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    abortedHight.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })

    this.setState({
      doing: copyOfArr,
      aborted: [...abortedHight, ...abortedNormal, ...abortedLow],
    })
  }

  fromDoItToAbort = (id) => {
    let itemToChangePlacement = JSON.parse(localStorage.getItem(id))
    localStorage.removeItem(id)
    itemToChangePlacement.placement = "aborted"
    localStorage.setItem(id, JSON.stringify(itemToChangePlacement))



    let elementToPush = []
    let copyOfArr = [...this.state.doIt]
    let indexToRemove = "";

    copyOfArr.forEach((value,index,arr)=>{
      if (value.id === id) {
        elementToPush = value
        indexToRemove = index;
      }

    })
    copyOfArr.splice(indexToRemove, 1)
    // ________________________________________________ABORT from doit SORT ________________________________________
    let aborted = [...this.state.aborted, elementToPush]
    let abortedNormal = []
    let abortedLow = []
    let abortedHight = []
    aborted.forEach((value)=>{
      if (value.priority == 3) {
        abortedLow = [...abortedLow, value]
      }else if (value.priority == 2) {
          abortedHight = [...abortedHight, value]
      }else {
        abortedNormal = [...abortedNormal, value]
      }
    })

    abortedNormal.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    abortedLow.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    abortedHight.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    this.setState({
      doIt: copyOfArr,
      aborted: [...abortedHight, ...abortedNormal, ...abortedLow],
    })
  }

  removeItemFromDone = (id) => {
    let newcopyOfArr = [...this.state.done]
    let indexToRemoveById = "";


    localStorage.removeItem(id)

    newcopyOfArr.forEach((value,index,arr)=>{
      if (value.id === id) {
        indexToRemoveById = index;
      }
    })

    newcopyOfArr.splice(indexToRemoveById, 1)
     this.setState({
        done: [...newcopyOfArr]
      })
    }



  removeItemFromAbort = (id) => {
    let newcopyOfArr = [...this.state.aborted]
    let indexToRemoveById = "";


  localStorage.removeItem(id)



    newcopyOfArr.forEach((value,index,arr)=>{
      if (value.id === id) {
        indexToRemoveById = index;
      }
    })

    newcopyOfArr.splice(indexToRemoveById, 1)
     this.setState({
        aborted: [...newcopyOfArr]
      })

    }


editDescriptions = (id) =>{
  let itemToChangeDescription = JSON.parse(localStorage.getItem(id))
  let newDesk = prompt("Please, change desctiptions here", itemToChangeDescription.descriprion )
  localStorage.removeItem(id)
  itemToChangeDescription.descriprion = newDesk
  localStorage.setItem(id, JSON.stringify(itemToChangeDescription))
  let itemsInstate = [...this.state.doIt]
    itemsInstate.forEach((value)=>{
      if (value.id === id) {
        value.descriprion = newDesk
      }
    })
    this.setState({
      doIt: [...itemsInstate]
    })

}


componentWillMount(){
  let dataInStorege = [];
  let doit = [];
  let doing = [];
  let done = [];
  let aborted = [];

  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  dataInStorege = [...dataInStorege, JSON.parse(localStorage.getItem( localStorage.key( i )) )] ;
}
dataInStorege.forEach((value,index,arr)=>{
  if (value.placement === "doit") {
    doit = [...doit, value]
  }else if (value.placement === "doing") {
    doing = [...doing, value]
  } else if (value.placement === "done") {
    done = [...done, value]
  } else if (value.placement === "aborted") {
    aborted = [...aborted, value]
  }
})

// ________________________________________________DOIT SORT ________________________________________
let doitNormal = []
let doitLow = []
let doitHight = []
doit.forEach((value)=>{
  if (value.priority == 3) {
    doitLow = [...doitLow, value]
  }else if (value.priority == 2) {
      doitHight = [...doitHight, value]
  }else {
    doitNormal = [...doitNormal, value]
  }
})

doitNormal.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
doitLow.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
doitHight.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
// _________________________________________________________DOING SORT___________________________________________

let doingNormal = []
let doingLow = []
let doingHight = []
doing.forEach((value)=>{
  if (value.priority == 3) {
    doingLow = [...doingLow, value]
  }else if (value.priority == 2) {
      doingHight = [...doingHight, value]
  }else {
    doingNormal = [...doingNormal, value]
  }
})

doingNormal.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
doingLow.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
doingHight.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})

// ______________________________________________________DONE SORT___________________________________________
let doneNormal = []
let doneLow = []
let doneHight = []
done.forEach((value)=>{
  if (value.priority == 3) {
    doneLow = [...doneLow, value]
  }else if (value.priority == 2) {
    doneHight = [...doneHight, value]
  }else {
    doneNormal = [...doneNormal, value]
  }
})

doneNormal.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
doneLow.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
doneHight.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
// ______________________________________________________ABORT SORT___________________________________________
let abortedNormal = []
let abortedLow = []
let abortedHight = []
aborted.forEach((value)=>{
  if (value.priority == 3) {
    abortedLow = [...abortedLow, value]
  }else if (value.priority == 2) {
    abortedHight = [...abortedHight, value]
  }else {
    abortedNormal = [...abortedNormal, value]
  }
})

abortedNormal.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
abortedLow.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})
abortedHight.sort((a,b)=>{
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
})

 this.setState({
   doIt : [...doitHight, ...doitNormal, ...doitLow],
   doing: [...doingHight,...doingNormal, ...doingLow],
   done:  [...doneHight, ...doneNormal, ...doneLow],
   aborted: [...abortedHight, ...abortedNormal, ...abortedLow],
 })
}



changePriorityInDoIt = (id, newPriority) => {
 let itemToChange =  JSON.parse(window.localStorage.getItem(id));
 itemToChange.priority = newPriority;
 localStorage.setItem(id, JSON.stringify(itemToChange))
 let dataDoIt = [...this.state.doIt];
  dataDoIt.forEach((value)=>{
    if (value.id == id) {

      value.priority = newPriority;

    }
  })
  let doitNormal = []
  let doitLow = []
  let doitHight = []
  dataDoIt.forEach((value)=>{
    if (value.priority == 3) {
      doitLow = [...doitLow, value]
    }else if (value.priority == 2) {
        doitHight = [...doitHight, value]
    }else {
      doitNormal = [...doitNormal, value]
    }
  })

  doitNormal.sort((a,b)=>{
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
  })
  doitLow.sort((a,b)=>{
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
  })
  doitHight.sort((a,b)=>{
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
  })

 this.setState({
   doIt: [...doitHight, ...doitNormal,...doitLow]
 })
}


changePriorityInDoig = (id, newPriority) => {
 let itemToChange =  JSON.parse(window.localStorage.getItem(id));
 itemToChange.priority = newPriority;
 localStorage.setItem(id, JSON.stringify(itemToChange))
 let dataDoing = [...this.state.doing];
  dataDoing.forEach((value)=>{
    if (value.id == id) {
      value.priority = newPriority;
    }
  })

  let doingNormal = []
  let doingLow = []
  let doingHight = []
  dataDoing.forEach((value)=>{
    if (value.priority == 3) {
      doingLow = [...doingLow, value]
    }else if (value.priority == 2) {
        doingHight = [...doingHight, value]
    }else {
      doingNormal = [...doingNormal, value]
    }
  })

  doingNormal.sort((a,b)=>{
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
  })
  doingLow.sort((a,b)=>{
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
  })
  doingHight.sort((a,b)=>{
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
  })



 this.setState({
   doing: [...doingHight,...doingNormal,...doingLow]
 })
}


  render() {
 console.log(window.localStorage);
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
       <button type="submit" className="delete-task-button" onClick={this.removeFieldHeandler}> remove all task</button>
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
