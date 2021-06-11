import React from "react";

const boxStyle = {
  padding: ".5rem 1rem",
  textAlign: "center",
  background: "#3b9bd1",
  color: "#eee",
  cursor: "pointer",
  marginRight: "1rem",
};

const activeStyle = {
  ...boxStyle,
  background: "#f9efbe",
  color: "#444",
};

const PageBox = ({ page, currentPage, handleClick }) => {
  return (
    <div
      style={page === currentPage ? activeStyle : boxStyle}
      onClick={handleClick}
    >
      <span>{page}</span>
    </div>
  );
};

export default PageBox;
