import React from "react";
import "./status.css";

function Status(props) {
    console.log(props)
    return <div className="container">
    <div className="row statusmsg">
    <p className="status col-6"> {props.message} </p>
  </div> 
  </div>

};

export default Status;