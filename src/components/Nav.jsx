import React from "react";
import { useSelector } from "react-redux";
import s from "./Nav.module.css";

export default function Nav() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <nav className={s.container}>
      <h1 className={s.title}>Notes</h1>
      <span className={s.number}>{tasks.length} notes</span>
    </nav>
  );
}
