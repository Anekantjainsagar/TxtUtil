import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  var characters = text.length;
  var sliced = text.split(" ").filter((element)=>{
    return element.length!==0
  });
  var words = sliced.length;

  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase","success")
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text cleared","success")
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase","success")
  };
  const change = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard","success")
  };

  return (
    <>
      <div className="container">
        <div className="mt-2 mb-2">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={change}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{backgroundColor: props.mode === "light"?"white":"#141414", 
            color:props.mode === "light"?"#141414":"white"}}
            placeholder="Enter text here">
          </textarea>
        </div>
        <button disabled={ text.length === 0 } className= {`btn btn-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleUpper}>
          Convert to Uppercase
        </button>
        <button disabled={ text.length === 0 } className= {`btn btn-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleLower}>
          Convert to Uppercase
        </button>
        <button disabled={ text.length === 0 } className= {`btn btn-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleClear}>
          Clear text
        </button>
        <button disabled={ text.length === 0 } className= {`btn btn-${props.mode === "light"?"dark":"light"} mx-1 my-1`} onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div className="container mt-4">
        <h3>Your text summary</h3>
        <p>
          The paragraph that you entered contains <b>{words} words</b>,{" "}
          <b>{characters} characters</b> and if you are a average reader you
          took <b>{0.004 * words} minutes</b> to read this paragraph
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview here..."}</p>
      </div>
    </>
  );
}
