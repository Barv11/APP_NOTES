import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path={'/'}>
        <TasksList />
      </Route>
      <Route path={'/create'}>
        <TaskForm />
      </Route>
      <Route path={'/edit/:id'}>
        <TaskForm />
      </Route>
    </div>
  );
}
