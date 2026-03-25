import React, { useState } from "react";

function LearnUseState(){
    const[name,setName]=useState("David");

    const handleClick=()=>{
        setName("Johnson");

    };
    return(
        <div>
            <h1>Name={name}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default LearnUseState;