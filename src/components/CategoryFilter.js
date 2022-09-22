import React from "react";

function CategoryFilter({categories, allTasks, setTasksToShow}) {

  function handleCategoryClick(event){
    const category = event.target.textContent

    if(category === "All"){
      setTasksToShow(allTasks)
    }else{
      const newTasksToShow = allTasks.filter(task => {
        return task.category === category
      })
  
      setTasksToShow(newTasksToShow)
    }
  }

  const buttons = categories.map(category => {
    return <button onClick={handleCategoryClick}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
