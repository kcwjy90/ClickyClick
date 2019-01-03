import React from "react";
import "./TTstyle.css";

function Title(props) {
    console.log(props)
    return <div className="header sticky" id="myHeader">
    <h2> {props.title} </h2>
    <h3> {props.number} </h3>
  </div> 
};

export default Title;