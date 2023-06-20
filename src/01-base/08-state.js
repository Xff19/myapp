import React, { Component } from 'react'

export default class App extends Component {
//   state={
//       mytext:'收藏',
//       flag:'true'
//   }
  constructor(){
      super()
      this.state={
        mytext:'收藏',
        flag:'true'
    }
  }
    render() {
    return (
      <div>
        app
        <button onClick={()=>{
           this.setState({flag:!this.state.flag}) 
        }}>{this.state.flag?'收藏':'取消'}</button>
      </div>
    )
  }
}
