import React, { Component } from 'react';

export class EditPriority extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectValue: "",
    }
  }

  hendlerRadioValue = (event)=>{
    this.setState({
     selectValue: event.target.value,
    })
    console.log(this.state.selectValue);
  }


  render() {
    const {
      itemId,
      inItemChangePriorityInDoIt,
      editPriorityButtonHandler
    } = this.props


    return (

        <div className="col-md-12 change-priprity-item">

          <div className="col-md-12 top">

             <input name="r1" type="radio" value="2" onClick={this.hendlerRadioValue}/> High
             <input name="r1" type="radio" value="1" onClick={this.hendlerRadioValue} /> Normal
             <input name="r1" type="radio" value="3" onClick={this.hendlerRadioValue}/> Low
            </div>

            <button type="submit" className="button-hendler" onClick={()=>{inItemChangePriorityInDoIt(itemId, this.state.selectValue) ; editPriorityButtonHandler()}}>
             Confirm
            </button>

            </div>




    );
  }
}
