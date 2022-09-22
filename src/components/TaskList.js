import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasksToShow}) {

  function handleDelete(event){
    const taskText = event.target.parentElement.querySelector('.text').textContent

    const newTasksToShow = tasks.filter(task => {
      return task.text != taskText
    })

    setTasksToShow(newTasksToShow)
  }

  const taskList = tasks.map(task => {
    return <Task key={task.text} taskName={task.text} taskCategory={task.category} handleDelete={handleDelete}/>
  })
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
