import React from "react";
import Card from "./Card";
import { data } from "../data/data";

export default function About(props) {
  const style = {
    backgroundColor: props.mode === "light" ? "white" : "black",
    color: props.mode === "light" ? "black" : "white",
    width: "18rem",
    border: "1px solid white",
    boxShadow:"2px 2px 10px white"
  };
  return (
    <div className="container mt-2">
      <h1>About</h1>
      <div
        className="container mt-4"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
      {data.map((item)=>{
        return <Card
          key={item.key}
          style={style}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      })}
      </div>
    </div>
  );
}
