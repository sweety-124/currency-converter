import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IHistoryItem {
  source_currency: string,
  target_currency: string,
  source_value: string,
  converted_value: number,
  date_time: string
}

export interface IHistoryState {
  history: IHistoryItem[]
}

const initialState: IHistoryState = {
  history: []
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<IHistoryItem>) => {
      state.history.push(action.payload);
    }
  },
});

export const { addToHistory } = historySlice.actions;

export const historyReducer = historySlice.reducer;