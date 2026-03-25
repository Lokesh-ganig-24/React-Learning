import React, { useEffect, useState } from "react";

function SideEffect(){

const[value,setValue]=useState(0);
const[dep,setDep]=useState(false);

useEffect(()=>{
    // setTimeout(()=>{
        setValue(value+1);
    // },1000);
},[dep]);

const handleClick=()=>{
    setDep(!dep);
};

    return(
        <div>
            <h1>
                Value is {value}
            </h1>
            <button onClick={handleClick}>Button</button>
        </div>
    );
}

export default SideEffect;