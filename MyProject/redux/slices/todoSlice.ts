import { Todo } from "../../models/Todo";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

interface TodoState {
    todos: Array <Todo>
    loading: 'reject' | 'pending' | 'fullfilled' | null,
    error: any
}

const initialState : TodoState ={
    todos : [],
    loading : null,
    error : null
}

export const getTodos = createAsyncThunk('get/todos', async () => {
    const response = await axios.get("https://64568d9d2e41ccf169201e42.mockapi.io/users/users")
    
    return response.data
  
    
})

export const postTodo = createAsyncThunk('post/todos', async (payload: Todo) => {
    const response = await axios.post("https://64568d9d2e41ccf169201e42.mockapi.io/users/users",payload)
    return response.data
    
    
})
export const removed = createAsyncThunk('REMOVE/todos', async (payload:any) => {
    const response = await axios.delete("https://64568d9d2e41ccf169201e42.mockapi.io/users/users")
    let a=response.data.filter((a:any) => a.id != payload)
    console.log("adsl;dsmfksdfksdnf",a);
    
    return a

    
    
})
let arr: any[] = [];

export const complet = createAsyncThunk('completed/todos', async (payload: Todo) => {
    const response = await axios.get("https://64568d9d2e41ccf169201e42.mockapi.io/users/users/" + payload);
    const newData = { ...response.data }; 

    arr.push(newData); 
    console.log(arr);
       
    return [...arr]; 
});

const todoSlice = createSlice({
    name: 'Todos',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTodos.pending, (state) => {
            state.loading = 'pending'
        }).addCase(getTodos.fulfilled, (state, action) => {
            state.loading = 'fullfilled',
                state.todos = action.payload
        }).addCase(getTodos.rejected, (state) => {
            state.loading = 'reject'
        })
        builder.addCase(postTodo.pending, (state) => {
            state.loading = 'pending'
        })
            .addCase(postTodo.fulfilled, (state, action) => {
                state.loading = 'fullfilled'
                state.todos.push(action.payload)

            })
        builder.addCase(removed.pending, (state) => {
                state.loading = 'pending'
            })
                .addCase(removed.fulfilled, (state, action) => {
                    state.loading = 'fullfilled'
                    state.todos.push(action.payload)
    
                })


    }

})
const tamam = createSlice({
    name: 'Todo',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(complet.pending, (state) => {
            state.loading = 'pending'
        }).addCase(complet.fulfilled, (state, action) => {
            state.loading = 'fullfilled',
                state.todos = action.payload
        }).addCase(complet.rejected, (state) => {
            state.loading = 'reject'
        })


    }

})
export const todoReducer = todoSlice.reducer;
export const tamamReducer = tamam.reducer;
