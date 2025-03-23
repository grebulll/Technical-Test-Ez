import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamePresenter } from '../../types/models/GamePresenter';

interface GamePresentersState {
  presenters: GamePresenter[];
}

const initialState: GamePresentersState = {
  presenters: [
    { id: '1', name: 'John Doe', shift: 'morning' },
    { id: '2', name: 'Jane Smith', shift: 'afternoon' },
    { id: '3', name: 'Bob Johnson', shift: 'night' },
  ],
};

const gamePresentersSlice = createSlice({
  name: 'gamePresenters',
  initialState,
  reducers: {
    setGamePresenters: (state, action: PayloadAction<GamePresenter[]>) => {
      state.presenters = action.payload;
    },
    addGamePresenter: (state, action: PayloadAction<GamePresenter>) => {
      state.presenters.push(action.payload);
    },
    editGamePresenter: (state, action: PayloadAction<GamePresenter>) => {
      const index = state.presenters.findIndex(
        (p) => p.id === action.payload.id
      );
      if (index !== -1) {
        state.presenters[index] = action.payload;
      }
    },
    deleteGamePresenter: (state, action: PayloadAction<string>) => {
      state.presenters = state.presenters.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const {
  setGamePresenters,
  addGamePresenter,
  editGamePresenter,
  deleteGamePresenter,
} = gamePresentersSlice.actions;
export default gamePresentersSlice.reducer;
