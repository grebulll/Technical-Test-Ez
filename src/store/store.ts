import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import gamePresentersReducer from "../features/gamePresenters/gamePresentersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    gamePresenters: gamePresentersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
