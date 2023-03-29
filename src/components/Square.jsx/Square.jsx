import React from "react";
import "./Square.css";

export default function Square(props) {
  const { value, onClick } = props;
  return (
    <button className="squareWrapper" onClick={() => onClick()}>
      {value}
    </button>
  );
}
