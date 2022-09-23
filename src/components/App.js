import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToShow, setTasksToShow] = useState(TASKS)

  function addTask(event){
    console.log(event)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} allTasks={TASKS} setTasksToShow={setTasksToShow}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={tasksToShow} setTasksToShow={setTasksToShow} />
    </div>
  );
}

export default App;
