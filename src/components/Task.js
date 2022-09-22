import React from "react";

function Task({taskName, taskCategory, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskName}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
