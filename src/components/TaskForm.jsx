import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { useHistory, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import s from "./TaskForm.module.css";


export default function TaskForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let now = new Date().toLocaleString("es-ES", options);
  now = now.charAt(0).toUpperCase() + now.slice(1);
  let idx = "idx" + Math.ceil(Math.random() * 100 + 1000).toString();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          id: idx,
          ...task,
          completed: false,
          date: now,
        })
      );
    }
    history.push("/");
  };

  useEffect(() => {
    if (id) {
      setTask(tasks.find((el) => el.id === id));
    }
  }, [id, tasks]);

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={task.title}
        className={s.text}
      />

      <textarea
        name="description"
        onChange={handleChange}
        value={task.description}
        placeholder="Description"
        className={s.textarea}
        rows="3"
        data-min-rows="3"
        autoFocus
      ></textarea>

      <button type="submit" className={s.icon}>
        <span class="material-symbols-outlined">save</span>
      </button>
      <NavLink to={"/"} className={s.icon2}>
        <span class="material-symbols-outlined">home</span>
      </NavLink>
    </form>
  );
}
