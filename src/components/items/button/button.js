import React, { Component } from 'react';


export class Button extends Component {
  remove = (id)=> {
    this.props.method(this.props.itemId, this.props.selectValue)
    if (this.props.methodTwo) {
      this.props.methodTwo()
    }
  }

  render() {
    const {
      className,
      content
    } = this.props

     return (
       <button type="submit" className={className}
         onClick={this.remove}
         > {content} </button>
     );
  }
}
