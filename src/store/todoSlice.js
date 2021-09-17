import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [
      { id: 1, title: 'Do task 1', done: false},
      { id: 2, title: 'Do task 2', done: true},
      { id: 3, title: 'Do task 3', done: false},
    ],
    petList: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload]
    },
    setPetList: (state, {payload}) => {
      state.petList = payload
    }
  }
})

// Thunk function
export async function fetchPetList(dispatch, getState) {
  const { data } = await axios.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
  dispatch({type: 'todo/setPetList', payload: data })
}

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions

export default todoSlice.reducer