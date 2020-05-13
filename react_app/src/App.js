import React, {Component} from 'react';
import './App.css';

import Rect from './Rect';


let theme = {
  light:{
    backgroundColor:"#eef",
    color:"#006",
    padding:"10px",
  },
  dark:{
    backgroundColor:"#006",
    color:"#eef",
    padding:"10px",    
  }
};

const ThemeContext = React.createContext(theme.light);

class App extends Component {
  static contextType = ThemeContext;

  render(){
    return (
      <div style={this.context}>
        <h1>Context</h1>
        <Title value="Content page" />
        <Message value="This is content sample." />
      </div>
    );
  }
}

class Title extends Component{
  static contextType = ThemeContext;

  render(){
    return(
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render(){
    return(
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    );
  }
}


export default App;
