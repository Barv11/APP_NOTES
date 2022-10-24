import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";
import s from "./Task.module.css";

export default function Task({ id, title, description, date }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div key={id} className={s.card}>
      <div className={s.flex}>
        <h3 className={s.title}>{title}</h3>
        <button className={s.buttonDelete} onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
      <span className={s.date}>{date}</span>
      <NavLink to={`/edit/${id}`} className={s.buttonEdit}>
          <div className={s.cardDescrip}>
            <p className={s.paragr}>{description}</p>
          </div>
      </NavLink>
    </div>
  );
}
