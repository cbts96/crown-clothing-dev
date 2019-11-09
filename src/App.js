import React from 'react';
import {Route,Switch} from "react-router-dom";

import './App.css';
import Hompage from '../src/Component/Homepage/homepage';
import Shop from "../src/Shop/Shop";
import Header from './Component/Header/Header';
import Signinandsignup from './Component/signinandsignup/Signinandsignup';
import {auth, createuserprofiledocument} from "./Firebase/FirebaseUltil"



export default class App extends React.Component {
  constructor() {
    super()
    this.state={
      currentuser:null
    }
  }
  unsubcriblefromauth=null;
  componentDidMount(){
    this.unsubcriblefromauth= auth.onAuthStateChanged(async user=>{
     createuserprofiledocument(user)
      
    })

  }
  componentWillUnmount() {
    this.unsubcriblefromauth();
  }
  
  
  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
      <Switch>
        <Route exact path="/" component={Hompage}/>
        <Route path="/shops" component={Shop}/>
        <Route path="/signin" component={Signinandsignup}/>
      </Switch>
      
    
      </div>
    )
  }
}

