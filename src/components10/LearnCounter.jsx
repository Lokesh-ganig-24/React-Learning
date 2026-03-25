import React, { useState } from "react";
function LearnCounter(){
    const[count,SetCount]=useState(0);


    const handelClick=()=>{
        SetCount(count+1);
    }
    const handelClickk=()=>{
        SetCount(count-1);
    }
    
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={handelClick}>counter</button>
        <button onClick={handelClickk}>dislike</button>
        </>
    )
}
export default LearnCounter;