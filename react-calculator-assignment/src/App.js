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
      selectedOperators: null,
    }
  }
  //submit handler to prevent automatic script running
  submitHandler = (event) => {
    event.preventDefault();
    switch(this.state.selectedOperators) {
      case ("add"):
      this.setState({finalResult: parseInt(this.state.input1) + parseInt(this.state.input2)});
      break;

      case ("minus"): 
      this.setState({finalResult: parseInt(this.state.input1) - parseInt(this.state.input2)});
      break;

      case ("multiplication"):
      this.setState({finalResult: parseInt(this.state.input1) * parseInt(this.state.input2)});
      break;

      case ("division"):
      this.setState({finalResult: parseInt(this.state.input1) / parseInt(this.state.input2)});

      default: 
      break;
    }
  }

  //Changing the state object using this.setState() for input1
  //@link: https://www.w3schools.com/react/react_forms.asp

  changeInputOne = (event) => {
    this.setState({input1: event.target.value});
  }

  changeInputTwo = (event) => {
    this.setState({input2: event.target.value});
  }

  setOperators =(event) => {
    this.setState({selectedOperators: event.target.value})
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
              <select name="operators" id="operators" onChange = {this.setOperators}>
                  <option>Please choose an operator</option> 
                  <option value="add">+</option>
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
