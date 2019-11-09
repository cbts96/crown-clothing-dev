import React, { Component } from 'react';
import Forminput from "../Forminput/Forminput";
import "./Signin.scss";
import Custombutton from "../Custombutton/Custombutton";
import {signInWithGoogle} from "../../Firebase/FirebaseUltil";

export default class Signin extends Component {
    constructor(props) {
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    
    handlesubmit=(event)=>{
        event.preventDefault();
        this.setState({email:"",password:""})
        
    }
    onhandlechange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account!</h1>
                <p>Signin with an account and password</p>
                <form onSubmit={this.handlesubmit}>
                    <Forminput type="email" name="email" label="email" value={this.state.email} handlechange={this.onhandlechange} required/>
                    
                    <Forminput type="password" name="password" label="password" handlechange={this.onhandlechange} value={this.state.password} required/>
                    <div className="buttons">
                        <Custombutton type="submit" value="Submit Form">Sign in</Custombutton>
                        <Custombutton onClick={signInWithGoogle} isGoogleSignin>Sign in with Google</Custombutton>
                    </div>
                    
                </form>
            </div>
        )
    }
}
