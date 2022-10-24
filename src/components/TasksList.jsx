import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Task from "./Task";
import s from "./TasksList.module.css";

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className={s.container}>
      <div className={s.tasks}>
        {tasks?.map((el) => (
          <Task
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            date={el.date}
          />
        ))}
      </div>

      <NavLink to={"/create"} className={s.icon}>
        <span class="material-symbols-outlined">note_add</span>
      </NavLink>
    </div>
  );
}
