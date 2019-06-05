import React, { Component } from 'react'
import {Button} from "reactstrap";

class Logout  extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    logout = () => {
        let access_token = localStorage.getItem("access_token");
        console.log(access_token);
        if(access_token != null){
            localStorage.removeItem("access_token");
            window.location.replace("/");
        } 
    }
    componentDidMount(){
        this.logout();
    }
 render() {
     
  return(
   <div>
   </div>
    )
   }
 }

export default Logout; 