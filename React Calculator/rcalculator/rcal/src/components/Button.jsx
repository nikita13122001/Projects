import React from "react";

function Button(props){
    return (
        <>
            <button onClick={props.fx}>{props.name}</button>
        </>
    )
}
export default Button;