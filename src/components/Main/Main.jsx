import React, { useState } from "react";
import "./Main.css";
import GameBoard from "../Board.jsx/GameBoard";
import { getWinner } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { changeXIsNext, setSign, refresh } from "../../store/boardSlice";

export default function Main() {
  const { board } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  function handleClick(index) {
    const winner = getWinner(board);
    dispatch(setSign({ index, winner }));
    dispatch(changeXIsNext());
  }

  const startNewGame = () => {
    dispatch(refresh());
    console.log("ll");
  };

  return (
    <div className="mainWrapper">
      <GameBoard squares={board} click={handleClick} />
      <button onClick={startNewGame}>REFRESH</button>
    </div>
  );
}
