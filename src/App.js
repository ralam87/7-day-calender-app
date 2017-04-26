/* eslint-disable */

import React from 'react';
import Dates from './dates';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Table />
        <div id="actBox"> 
        </div>
      </div>
    );
  }

} // end class


class Table extends React.Component {

  render(){
    return (
      <div>
       <table>
        <tbody>
          <tr>
            <th colSpan="2">
              <h2 id="title">7 day planner App</h2>
            </th>
          </tr>
          <tr>
            <th id="dates"></th>
          </tr>
          <tr>
            <td>
              <Dates/>
            </td>
          </tr>
        </tbody>
       </table>
      </div>
    )
  }
}


export default App;
