import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import gamePresentersReducer from "../features/gamePresenters/gamePresentersSlice";
import tablesReducer from "../features/tables/tablesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    gamePresenters: gamePresentersReducer,
    tables: tablesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
