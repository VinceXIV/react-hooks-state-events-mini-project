import React from "react";

function CategoryFilter({categories}) {

  const buttons = categories.map(category => {
    return <button>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
