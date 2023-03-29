import React from "react";
import Square from "../Square.jsx/Square";

import "./GameBoard.css";

function GameBoard({ squares, click }) {
  return (
    <div className="boardWrapper">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
}

export default GameBoard;
