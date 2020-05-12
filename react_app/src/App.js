import React, {Component} from 'react';
import './App.css';

import Rect from './Rect';


class App extends Component {

  input = '';

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }

  inputStyle = {
    fontSize:"12pt",
    padding:"5px",
  }

  constructor(props){
    super(props);
    this.state = {
      message:'type your name:'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doCheck(event){
    alert(event.target.value + "too logn! (max=10)");
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: 'Hello, '+this.input + '!!'
    });
    event.preventDefault();
  }

  render() {
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <Message maxlength="10" onCheck={this.doCheck} />
    </div>;
  }
}

class Message extends Component {
  li = {
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding:"0px",
  }

  constructor(props){
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e){
    if(e.target.value.length > this.props.maxlength){
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0,this.props.maxlength);
    }
  }

  render(){
    return <input type="text" style={this.inputStyle} onChange={this.doChange} />
  }
}

export default App;
