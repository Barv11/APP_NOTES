import { createSlice } from "@reduxjs/toolkit";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let now = new Date().toLocaleString("es-ES", options);
now = now.charAt(0).toUpperCase() + now.slice(1);

const data = [
  {
    id: "1",
    title: "Título",
    description: "Tap to edit",
    completed: false,
    date: now
  },
];

const tasks = window.localStorage.getItem("tasks")
  ? JSON.parse(window.localStorage.getItem("tasks"))
  : data;

const initialState = tasks;

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      window.localStorage.setItem("tasks", JSON.stringify([...state]));
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
      window.localStorage.setItem("tasks", JSON.stringify([...state]));
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1);
      }
      window.localStorage.setItem("tasks", JSON.stringify([...state]));
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
