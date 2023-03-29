import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(9).fill(""),
  xIsNext: false,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeXIsNext: (state) => {
      return { ...state, xIsNext: !state.xIsNext };
    },

    setSign: (state, action) => {
      const { index, winner } = action.payload;
      const newBoard = [...state.board];
      if (winner || newBoard[index]) {
        return { ...state };
      }
      newBoard[index] = state.xIsNext ? "X" : "O";
      return { ...state, board: newBoard };
    },

    refresh: (state) => {
      return { ...initialState };
    },
  },
});

export const { changeXIsNext, setSign, refresh } = boardSlice.actions;

export default boardSlice.reducer;
