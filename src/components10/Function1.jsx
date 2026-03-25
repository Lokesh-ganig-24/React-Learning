import React from "react";

function Function1(){

    const data={
        color:"red",
        backgroundColor:"yellow",
        marginTop:"100px",
    };

    return(
        <div>
            <h1 style={data}>Function One</h1>
            <h2 style={{color:"green",backgroundColor:"yellow",margin:"100px"}}>Heading Two</h2>

        </div>
    );
}


export default Function1;