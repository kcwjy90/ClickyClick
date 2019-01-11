import React from "react";
import "./TTstyle.css";

function Title(props) {
    console.log(props)
    return <div className="header sticky" id="myHeader">
    <div className="container">
    <div className="row">
    <p className="col-sm-4 titlescore"> Highest: {props.highest}</p>
    <p className="col-sm-4 titlescore"> {props.title} </p>
    <p className="col-sm-4 titlescore"> Current: {props.points} </p>
  </div> 
  </div>
  </div>
};

export default Title;