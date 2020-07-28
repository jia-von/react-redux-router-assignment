//<select> element was referenced https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
//class based components are called Stateful Component @link: https://www.golangprograms.com/react-js-calculator.html

import React from 'react';
import * as math from 'mathjs';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      input1: null,
      input2: null,
    }
  }

  //submit handler to prevent automatic script running
  submitHandler = (event) => {
    event.preventDefault();
  }

  //Changing the state object using this.setState() for input1
  changeInputs = (event) => {
    let inputs = event.target.name
    let values = event.target.value
    this.setState({[inputs]: values});
  }

  //Changing the state object using this.setState() for input2
 // changeInputTwo = (event) => {
  //  this.setState({input2: event.target.value});
 // }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Jia's Calculator!</h1>
          <form onSubmit={this.submitHandler}>
            <ul>
            <li>
              <label htmlFor="labelInput1">Input 1: </label>
              <input 
              type="number" 
              name="input1"
              required
              onChange={this.changeInputs}
              ></input>
            </li>
            <li>
              <label htmlFor="operation">Operation:</label>
              <select name="operators" id="operators">
                  <option>Please choose an operator</option> 
                  <option value="plus">+</option>
                  <option value="minus">-</option>
                  <option value="multiplication">x</option>
                  <option value="division">÷</option>
              </select>
            </li>
            <li>
              <label htmlFor="labelInput2">Input 2: </label>
              <input 
              type="number" 
              name="input2"
              required
              onChange={this.changeInputs}
              ></input>
            </li>
            <li>
              <label htmlFor="calculate">
              <input type="submit" value="Calculate!"></input>
              </label>
            </li>
            <li>
              <label htmlFor ="result">Result:</label>
            </li>
            </ul>
          </form>
        </header>
      </div>
    );
  }
}
export default App;
