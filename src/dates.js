/* eslint-disable */

import React from 'react';
import Activity from './activity';


class Dates extends React.Component {

  render(){

const nextSevenDays = [];
 
for (var i = 0; i < 7; i++) {

const weekday = ['Sunday', 'Monday' ,'Tuesday' ,'Wednesday' ,'Thursday' ,'Friday' ,'Saturday' ];
const date = new Date();
date.setDate(date.getDate() + i);

const dateMsg = `${weekday[date.getDay()].slice(0,3)} ${date.getDate()} `;
  nextSevenDays.push(dateMsg);

}

   return (
      <div>
        
        <table>
          <tbody>
            <tr>
                <th className="achievementThClass">Enjoyment</th>
                <th className="achievementThClass">Achievement</th>
            </tr>
              {nextSevenDays.map((item) => 
              <tr className="tableRow" key={item} >
                
              <td >{item}</td>
              
              <td><Activity id={item+'e'} className="enjoymentClass"/></td>
              
              <td><Activity id={item+'a'} className="achievementClass"/></td>
              
              </tr>
              )}

            
          </tbody>
        </table>
       </div>
    )
  
}

 
} //end class

export default Dates;