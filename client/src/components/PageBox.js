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
  background: "orange",
};

const PageBox = ({ page, currentPage }) => {
  return (
    <div style={page === currentPage ? activeStyle : boxStyle}>
      <span>{page}</span>
    </div>
  );
};

export default PageBox;
