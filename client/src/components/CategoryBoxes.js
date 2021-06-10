import React from 'react';

const CategoryBox = ({ category, setCategory }) => {
  
  const boxesSectionStyles = {
    display: "flex",
    flexDirection: "row"
  }

  const categoryBoxStyles = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
  }

  return(
    <div>
      <div >
        <p>Hello I render</p>
        {category}
      </div>
    </div>
  )
}

export default CategoryBox;