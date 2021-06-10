import React from "react";

import Form from "./Form";
import CategoryBoxes from "./CategoryBoxes";

const Find = ({ formData, dispatch }) => {
  return (
    <section
      style={{
        width: "100vw",
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form formData={formData} dispatch={dispatch} />
      <CategoryBoxes dispatch={dispatch} />
    </section>
  );
};

export default Find;
