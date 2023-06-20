import React, { Component } from 'react'
import "./css/01-index.css"
import Film from "./component/Film"
import Cinema from "./component/Cinema"
import Center from "./component/Center"
import axios from 'axios'

class Card extends Component{}

export default class App extends Component {
    constructor(){
        super()
            
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8107142",
            method:"get",
            headers:{
               'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16872628347653146390167553", "bc":"110100"}',
                "X-Host":"mall.film-ticket.cinema.list"
            }
        }).then(res=>{console.log(res);}).catch(err=>{console.log(err);})

    }
    state={
        navlist:[
            {id:1,text:"电影"},
            {id:2,text:"影院"},
            {id:3,text:"我的"}
        ],
        current:0
    }
  render() {
    return (
      <div>
          <Film />
          <Cinema />
          <Center />
        <ul>
            {this.state.navlist.map((item,index)=><li key={item.id} className={this.state.current===index?"active":''} onClick={()=>{
                this.handleActive(index)
            }}>{item.text}</li>)}
        </ul>
      </div>
    )
  }
  handleActive=(index)=>{
      this.setState({current:index})
  }
}
