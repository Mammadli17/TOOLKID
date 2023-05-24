import { configureStore } from "@reduxjs/toolkit";
import { tamamReducer, todoReducer } from "./slices/todoSlice";




export const store = configureStore({
    reducer: {
        todosSlice: todoReducer,
        tamam: tamamReducer
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>