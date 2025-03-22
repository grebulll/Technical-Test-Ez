import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GamePresenter {
  id: string;
  name: string;
  shift: "morning" | "afternoon" | "night";
}

interface GamePresentersState {
  presenters: GamePresenter[];
}

const initialState: GamePresentersState = {
  presenters: [
    { id: "1", name: "Jake Brown", shift: "morning" },
    { id: "2", name: "Job White", shift: "afternoon" },
    { id: "3", name: "Walter White", shift: "night" },
  ],
};

const gamePresentersSlice = createSlice({
  name: "gamePresenters",
  initialState,
  reducers: {
    setGamePresenters: (state, action: PayloadAction<GamePresenter[]>) => {
      state.presenters = action.payload;
    },
    addGamePresenter: (state, action: PayloadAction<GamePresenter>) => {
      state.presenters.push(action.payload);
    },
  },
});

export const { setGamePresenters, addGamePresenter } = gamePresentersSlice.actions;
export default gamePresentersSlice.reducer;
