//<select> element was referenced https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

import React from 'react';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      input1: null,
      input2: null,
      finalResult: null,
    }
  }

  //submit handler to prevent automatic script running
  submitHandler = (event) => {
    event.preventDefault();
  }

  //Changing the state object using this.setState() for input1
  //@link: https://www.w3schools.com/react/react_forms.asp
  changeInputOne = (event) => {
    this.setState({input1: event.target.value});
    this.handleAddChange();
  }

  changeInputTwo = (event) => {
    this.setState({input2: event.target.value});
    this.handleAddChange();
  }

  //add operator action trying to parse into integer
  handleAddChange = (event) => {
    let x = parseInt(this.state.input1)
    let y = parseInt(this.state.input2)
    let z = this.state.input1 + this.state.input2
    this.setState({finalResult: z});
  }

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
              onChange={this.changeInputOne}
              ></input>
            </li>
            <li>
              <label htmlFor="operation">Operation:</label>
              <select name="operators" id="operators">
                  <option>Please choose an operator</option> 
                  <option value="add" onChange={this.finalResult}>+</option>
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
              onChange={this.changeInputTwo}
              ></input>
            </li>
            <li>
              <label htmlFor="calculate">
              <input type="submit" value="Calculate!"></input>
              </label>
            </li>
            <li>
              <label htmlFor ="result">Result: {this.state.finalResult}</label>
            </li>
            </ul>
          </form>
        </header>
      </div>
    );
  }
}
export default App;
