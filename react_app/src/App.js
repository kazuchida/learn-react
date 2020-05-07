import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect.js'
import { queryAllByAttribute } from '@testing-library/react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  msgStyle1 = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }
  msgStyle2 = {
    fontSize:"20pt",
    color:"white",
    backgroundColor:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }
  btnStyle = {
    fontSize: "20pt",
    padding: "0px 10px"
  }

  constructor(props){
    super();
    this.state = {
      counter: 0,
      msg: 'Count click:',
      flg:true
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(e){
    this.setState((state)=>({
      counter: state.counter + 1,
      msg: state.counter,
      flg: !state.flg
    }));
  }

  render() {
    return <div>
      <h1>React</h1>
      {this.state.flg ?
      <p style={this.msgStyle1}>count: {this.state.msg}</p>
      :
      <p style={this.msgStyle2}>{this.state.msg}です。</p>
    }
      <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
  }
}


export default App;
