import React from "react";
import "./ZCstyle.css";

function ZodiacCard(prop) {
    return (
        <div className="card">
            <img className="imageHere" alt={prop.name} src={prop.image} />
            <span className="selected" onClick={ () => prop.selected(prop.id)}> SELECT </span>
        </div>
    )

}
export default ZodiacCard;