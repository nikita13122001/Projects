import React from "react";

function Input(props){
    return (
        <>

            <label>value</label> <input onChange={props.onchange} value={props.value} ></input>
        </>
    )
}

export default Input;