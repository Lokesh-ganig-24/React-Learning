import React, { Component } from "react";
class Classone extends Component{
    constructor(){
        super();
       
        this.state={city:"bangalore"};
    }

    handleclick=()=>{
        console.log("hello connsole");
    };
    render(){
        console.log(this.props);
        const{name}=this.props;
        return(
            <div>
            <h1>hello class{name}from {this.state.city} </h1>
            <button onClick={this.handleclick}> say hi</button>
            </div>
        );

    }
}
export default Classone;