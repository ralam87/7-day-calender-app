/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import AddWindow from './addWindow';


class Activity extends React.Component {
 
    render(){

        function add(e){
            ReactDOM.render(<AddWindow className={e.target.className}/>, document.getElementById('actBox'))
        }
        
        return(
            <div className={this.props.className} onClick={add}>Add new+</div>
            
        )
    }
} //end class

export default Activity;