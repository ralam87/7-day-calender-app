/* eslint-disable */

import React from 'react';
import enjoyment from './enjoyment';
import achievement from './achievement';

class AddWindow extends React.Component{

    render(){

        return(
            <div>
                <div className="addScreen" >
                    <AddScreen className={this.props.className} />
                </div>
            </div>
        )
    }
}


 function showAchievmentOptions() {
        return(
            <div>
                <br/>
                  <p> Select an achievement</p>
                     <select id="SelectAchievement" >
                        {achievement.map((Aactivity) => 
                            <option value={Aactivity.id} key={Aactivity.id}>{Aactivity.task}</option>
                        )}
                     </select>
                <br/>
                <p>Select a time</p>
                    <input type="time" />
                <br/>
                 <button id="confirmButton" onClick={submitTask}>OK</button>
                 
            </div>
            
        )
        
    } //end showA


function showEnjoymentOptions() {
    return(
        <div>
            <br/>
                <p>Select an enjoyment</p>
                    <select id="SelectEnjoyment" >
                    {enjoyment.map((Eactivity) => 
                        <option value={Eactivity.id} key={Eactivity.id}>{Eactivity.task}</option>
                    )}
                    </select>
            <br/>
                
            <p>Select a time</p>
                <input type="time" />
            <br/>
            <button id="confirmButton" onClick={submitTask}>OK</button>
        </div>
    )
    
} //end showE


class AddScreen extends React.Component {

    render(){

     if (this.props.className === "enjoymentClass"){
         return <div> {showEnjoymentOptions()}</div>
            
         } else {
            return (
            <div>
                {showAchievmentOptions()}
            </div>
                )
                }
            
        }
        
    } //end class

const submitTask = (task) => {
     console.log(task.target);
  }


export default AddWindow;
