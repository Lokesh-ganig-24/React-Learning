import React, { useState } from "react";
function Change(){
    const[name,SetName]=useState("");

      const handleChange=(event)=>{
        SetName(event.target.value);
            console.log(event.target.value);

        };

    return(

       
    <>
    <h1>name:{name}</h1>
    <input type="text" value={name} onChange={handleChange}/>
    </>
    );
}
export default Change;