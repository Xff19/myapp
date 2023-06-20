import React, { Component } from 'react'

export default class App extends Component {
    state={
        list:[
            '11111',
            '22222',
            '33333',
        ]
    }
  render() {
    return (
      <div>
          <ul>
          {this.state.list.map(item=><li key={item}>{item}</li>)}
          </ul>
      </div>
    )
  }
}
