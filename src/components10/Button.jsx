import React from "react";
function Button(){
     const handleclick=()=>{
        alert("say hi");
    };
    return(
        <div>
            <h1>payment code</h1>
            <button onClick={handleclick}>button</button>
        </div>
    )
}
export default Button;