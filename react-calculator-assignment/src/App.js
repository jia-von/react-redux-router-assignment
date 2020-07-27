//<select> element was referenced https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
import React from 'react';

//import './App.css';

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Jia's Calculator!</h1>
          <form id="calculator" name="calculator">
            <ul>
            <li>
              <label for="labelInput1">Input 1: </label>
              <input type="number" id="input1" name="input1"></input>
            </li>
            <li>
              <label for="operation">Operation:</label>
              <select name="operators" id="operators">
                  <option>Please choose an Operator</option> 
                  <option value="plus">+</option>
                  <option value="minus">-</option>
                  <option value="multiplication">x</option>
                  <option value="division">÷</option>
              </select>
            </li>
            <li>
              <label for="labelInput2">Input 2: </label>
              <input type="number" id="input2" name="input2"></input>
            </li>
            <li>
              <label for="calculate">
              <input type="submit" value="Calculate!"></input>
              </label>
            </li>
            </ul>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
