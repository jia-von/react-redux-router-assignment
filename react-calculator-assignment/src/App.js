//<select> element was referenced https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
//class based components are called Stateful Component @link: https://www.golangprograms.com/react-js-calculator.html

import React from 'react';
import Calculator from './Calculator'

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      input1: "",
      input2: "",
      operators: ""
    }
  }

  //clone  this.state to store input1
  changeInput1(input1){
    this.setState({input1});
  }
  
  //clone this.state to store input2
  changeInput2(input2){
    this.setState({input2});
  }
  
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Jia's Calculator!</h1>
          <form onSubmit={e=>e.preventDefault()}>
            <ul>
            <li>
              <label htmlFor="labelInput1">Input 1: </label>
              <input 
              type="number" 
              id="input1" 
              name="input1"
              required
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
              id="input2" 
              name="input2" 
              required
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
