import react from "react";

function Sample(Props){
    console.log("i hava props",Props);
    let {obj}=Props;
    let data=obj.map((value) => {

    
    return(
        <div className="heading">
            <h1> name: {value.name} </h1>
            <h1>Employer :{value.employer}</h1>
        </div>
    );
});
return <div>{data}</div>;
}
export default Sample;