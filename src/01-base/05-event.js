import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input/>
        <button onClick={()=>{console.log(1)}}>add</button>
        <button onClick={this.handleClick}>add1</button>
        <button onClick={()=>{this.handleClick()}}>add1</button>
      </div>
    )
  }
  handleClick(){
      console.log("click2")
  }
}
