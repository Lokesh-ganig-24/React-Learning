import React from "react";
function Ipl(props){
    const{name,handle}=props;
    return(
        <>
        <h1>hello{props.name} </h1>
        <button onClick={handle}></button>
        
        
        </>
    );

}
export default Ipl;