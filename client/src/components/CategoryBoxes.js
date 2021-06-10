import React from 'react';

const CategoryBoxes = () => {
  const categories = [
    {
      id: 6,
      description: "Music"
    },
    {
      id: 1,
      description: "Performing Arts"
    },
    {
      id: 7,
      description: "Sports and Outdoors"
    },
    {
      id: 190,
      description: "Festivals and Lifestyle"
    },
    {
      id: 11,
      description: "Exhibitions"
    },
    {
      id: 3,
      description: "Workshops and Education"
    },
    {
      id: 246,
      description: "All Events"
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
    padding: "1rem",
    height: "150px",
    width: "150px"
  }

  return(
    <div >
      <div style={sectionBoxesStyles}>
        {categories.map((category) => (
          <span style={categoryBoxStyles} key={category.id}>{category.description}</span>
        ))}
      </div>
    </div>
  )
}

export default CategoryBoxes;