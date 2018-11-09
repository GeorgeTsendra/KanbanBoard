import React, { Component } from 'react';


export class Button extends Component {
  remove = (id)=> {
    this.props.method(this.props.itemId)
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
