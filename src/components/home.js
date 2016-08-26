import React, { Component } from 'react';

export default class Home extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.name}</h1>
        <p>React Application works</p>
      </header>
    )
  }
}