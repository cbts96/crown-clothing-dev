import React, { Component } from 'react'
import "./Homepage.scss";
import Directory from '../Directory/Directory';
export class Hompage extends Component {
    render() {
        return (
            
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <Directory />
     </div>
            
        )
    }
}

export default Hompage;
