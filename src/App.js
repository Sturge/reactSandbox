import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import MoodIcon from '@material-ui/icons/Mood';

import './App.css';

// class MyForm extends Component {
//   constructor() {
//     super()
//     this.state = {
//       inputValue: ""
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if(this.state.inputValue !== prevState.inputValue) {
//       console.log("State CHANGEROO")
//     }    
//   }

//   handleChange = (event) => {
//     this.setState({
//       inputValue: event.target.value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Name:
//           <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
//         </label>
//         <p> {this.state.inputValue} </p>
//       </form>
//     )
//   }
// }

class App extends Component {
  constructor() {
    super()
  } 

  render() {
    return (
      <div className="App">
        <Button color="secondary">Click Me <MoodIcon color="primary" /></Button>
        
      </div>
    )
  }
}

export default App;