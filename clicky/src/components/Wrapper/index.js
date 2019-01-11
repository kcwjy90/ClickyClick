import React from "react";
import "./WRstyle.css"

function Wrapper(props){
    return <div className="wrapper"> {props.children} 
    </div>
}

export default Wrapper;