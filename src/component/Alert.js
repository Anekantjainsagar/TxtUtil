import React from "react";

function Alert(props) {
  const capitalise = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  const style = {
    height:"50px"
  }
  return (
    <div style={style}>
    {props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {capitalise(props.alert.type)}:{props.alert.message}
    </div>}
    </div>
  );
}

export default Alert;
