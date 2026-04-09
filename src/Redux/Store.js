import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlice";
import todoReducer from "./todoSlice";

/* export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
}); */
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});