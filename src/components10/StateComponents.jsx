

import React, { Component } from "react";
class StateComponents extends Component{

    constructor(){
        super();
      this.state=this.handleclick.bind(this);
      this.handleclick = this.handleclick(this);
    }
    handleclick=()=>{
       // this.setState({name:"johnson"});
        this.state={name:"johnson"};
    };
    render(){
        return(
            <div>
                <h1>name:{this.state.name}</h1>
                <button onClick={this.handleclick}>submit</button>
            </div>
        );

        
    }

}
export default StateComponents;