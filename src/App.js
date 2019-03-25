import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class App extends Component {
  constructor (props){
    super(props);
    this.state = { isOn : true};
  } 
  buttonCick = () => {
    this.setState(prevState => ({
        isOn: !prevState.isOn
    }));
  }
  render() {
    return (
      <div className="App">
      <button className ="ToggleButton" onClick ={ this.buttonCick}>This is button
        { this.state.isOn ? " ON":" OFF"}
      </button> 
        
    </div>
      
    );
  }
}

export default App;
// export default ToggleButton;