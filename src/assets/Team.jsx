import React from "react";
import { Component } from "react";
class Team extends Component{
    constructor(){
        super();
      //  this.handleclick=this.handleclick.bind(this);
    }
    handleclick=()=>{
        console.log(this);
    };
    render(){
        return <button onClick={this.handleclick.bind(this)}>submit</button>;

        
    }

}
export default Team;