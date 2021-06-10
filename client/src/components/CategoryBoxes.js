import React from "react";
import AllImage from "../assets/all.svg";
import ArtsImage from "../assets/arts.svg";
import MusicImage from "../assets/music.svg";
import SportsImage from "../assets/sports.svg";
import EducationImage from "../assets/education.svg";
import Header from "./styled/Header";
import { Link } from "react-router-dom";

const CategoryBoxes = ({ dispatch }) => {
  const categories = [
    {
      id: 6,
      description: "Music",
      image: MusicImage,
    },
    {
      id: 1,
      description: "Performing Arts",
      image: ArtsImage,
    },
    {
      id: 7,
      description: "Sports and Outdoors",
      image: SportsImage,
    },
    {
      id: 190,
      description: "Festivals and Lifestyle",
    },
    {
      id: 11,
      description: "Exhibitions",
    },
    {
      id: 3,
      description: "Workshops and Education",
      image: EducationImage,
    },
    {
      id: 246,
      description: "All Events",
      image: AllImage,
    },
  ];

  const sectionBoxesStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "3rem",
  };

  const categoryBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    border: "2px solid black",
    borderRadius: "5px",
    boxShadow: "3px 3px 3px 0 rgba(0,0,0,.2)",
    margin: "1rem",
    padding: "1rem",
    height: "15.8rem",
    width: "15.8rem",
  };

  return (
    <>
      <Header style={{ marginTop: "5rem" }}>
        Not sure what you're after yet? Browse quickly by category.
      </Header>
      <div style={sectionBoxesStyles}>
        {categories.map((category) => (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={() =>
              dispatch({ type: "setCategory", data: category.description })
            }
            to="/results"
            key={category.id}
            className="hover-over"
          >
            <div style={categoryBoxStyles} key={category.id}>
              <img
                src={category.image}
                width={80}
                style={{ marginBottom: ".7rem" }}
                alt="category"
              />
              {category.description}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryBoxes;
