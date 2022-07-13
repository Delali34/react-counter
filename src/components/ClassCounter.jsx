import React, { Component } from 'react'

 class ClassCounter extends Component {
    constructor(props){
        super();
        this.state = {count:0}
    }
    handleIncrease=()=>{
        this.setState({count: this.state.count +1})
    }
    handleDecrease=()=>{
        this.setState({count: this.state.count -1})
    }
  render() {
    return (
      <>
        <h1>Let COUNT {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increment</button>
        <button onClick={this.handleDecrease}>Decrement</button>
      
      
      
      
      
      </>
    )
  }
}
export default ClassCounter
