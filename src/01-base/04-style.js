import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  render() {
      const myName='a'
      const bgYe={
          backgroundColor:'red'
      }
    return (
      <div>
    <p style={bgYe} className='active'>{myName}</p>
      </div>
    )
  }
}
