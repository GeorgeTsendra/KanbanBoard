import React, { Component } from 'react';
import moment from "moment";

export class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      textareaValue: "",
      selectValue: "",
      date: moment(),
    }
  }

hendlerInputValue = (event) => {
  this.setState({
   inputValue: event.target.value,
  })
}

hendlerTextareaValue = (event)=>{
  this.setState({
   textareaValue: event.target.value,
  })
}
hendlerRadioValue = (event)=>{
  this.setState({
   selectValue: event.target.value,
  })
  console.log(this.state.selectValue);
}

id = () => {
return '_' + Math.random().toString(36).substr(2, 9);
};


submitHendler =()=>{

  if (!this.state.selectValue) {
    alert("Plase, chose a priority")
    return
  }
  this.props.addTastsToDoIt({
    id: this.id(),
    date: this.state.date.format("DD.MM.YYYY"),
    name: this.state.inputValue,
    descriprion: this.state.textareaValue,
    priority: this.state.selectValue,
    placement: "doit",
  })
  this.setState({
    inputValue: "",
    textareaValue: "",
    selectValue: "",
  })
  this.props.closeAddField()
}


  render() {


    return (

        <div className="col-md-12 add-item">

          <div className="col-md-12 top">
             <input type="text" value={this.state.inputValue}
              onChange={this.hendlerInputValue}
              placeholder="Task name"
             />
             <input name="r1" type="radio" value="2" onClick={this.hendlerRadioValue}/> High
             <input name="r1" type="radio" value="1" onClick={this.hendlerRadioValue} /> Normal
             <input name="r1" type="radio" value="3" onClick={this.hendlerRadioValue}/> Low
            </div>
            <div className="col-md-12 bottom">


            <textarea name="descriprion" rows="5" cols="50"
            value={this.state.textareaValue}
            onChange={this.hendlerTextareaValue} placeholder="Descriprion"></textarea>
            <button className="col-md-2" type="button" name="add"
            onClick={() => {this.submitHendler()}}>Add</button>
            </div>



        </div>



    );
  }
}
