import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

export function makeStore() {
  return configureStore({
    reducer: {},
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof makeStore>["getState"];
export type AppStore = ReturnType<typeof makeStore>;
