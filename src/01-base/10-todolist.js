import React, { Component } from 'react'

export default class App extends Component {
  myref=React.createRef()
  state={
      list:[{id:1,myname:'a'},{id:2,myname:'b'}]
  }
    render() {
    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={()=>{
            // console.log(this.myref.current);
        this.handleValue()
        }}>add</button>
        <ul>
        {this.state.list.map((item,index)=><li key={item.id}>{item.myname}<button onClick={()=>{this.handleDel(index)}}>del</button></li>)}
        </ul>
        {this.state.list.length===0&&<div>暂无待办事项</div>}
      </div>
    )
  }
  handleValue=()=>{
    let newList=  [...this.state.list]
    newList.push({id:Math.random()*1000000000,myname:this.myref.current.value})
      this.setState({list:newList})
    // 清空内容
    this.myref.current.value=''
  }
  handleDel=(index)=>{
    let newList=  [...this.state.list]
    newList.splice(index,1)
    this.setState({list:newList})
  }
}
