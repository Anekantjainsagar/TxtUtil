import React from "react";

export default function card(props) {
  return (
    <div className="card" style={props.style}>
        <img src={props.img} className="card-img-top" alt="..." style={{borderRadius:"10px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h4>{props.title}</h4>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
  );
}
