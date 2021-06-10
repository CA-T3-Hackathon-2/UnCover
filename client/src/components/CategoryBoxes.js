import React from 'react';

const CategoryBoxes = () => {
  const categories = [
    {
      id: 1,
      description: "Arts"
    },
    {
      id: 3,
      description: "Education"
    },
    {
      id: 6,
      description: "Music"
    },
    {
      id: 7,
      description: "Sports"
    },
    {
      id: 11,
      description: "Exhibitions"
    },
    {
      id: 190,
      description: "Lifestyle"
    },
    {
      id: 246,
      description: "All"
    },
  ]

  const sectionBoxesStyles = {
    display: "flex",
    flexDirection: "row"
  }

  const categoryBoxStyles = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "5px",
    margin: "1rem",
    padding: "1rem"
  }

  return(
    <div style={sectionBoxesStyles}>
      <div>
        {categories.map((category) => (
          <p style={categoryBoxStyles} key={category.id}>{category.description}</p>
        ))}
      </div>
    </div>
  )
}

export default CategoryBoxes;