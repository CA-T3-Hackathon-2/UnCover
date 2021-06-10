import React from 'react';

const CategoryBoxes = () => {
  const categories = [
    {
      id: 6,
      description: "Music",
      image: "url('../assets/music.svg')"
    },
    {
      id: 1,
      description: "Performing Arts",
      image: "url('../assets/arts.svg')"
    },
    {
      id: 7,
      description: "Sports and Outdoors",
      image: "url('../assets/sports.svg')"
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
      description: "Workshops and Education",
      image: "url('../assets/education.svg')"
    },
    {
      id: 246,
      description: "All Events",
      image: "url('../assets/all.svg')"
    },
  ]

  const sectionBoxesStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
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
      <div style={sectionBoxesStyles}>
        {categories.map((category) => (
          <span style={categoryBoxStyles} key={category.id}>
            <img src={category.image} alt="category" />
            {category.description}
          </span>
        ))}
    </div>
  )
}

export default CategoryBoxes;