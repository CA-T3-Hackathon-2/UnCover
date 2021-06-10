import React from "react";

const About = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "8rem",
            width: "40%",
            padding: "3rem",
          }}
        >
          This is <span style={{ color: "#007bff" }}>UnCover</span>{" "}
        </h2>
        <p
          style={{
            fontSize: "2rem",
            padding: "3rem",
          }}
        >
          UnCover was created as part of a 48 hour hackathon for
        </p>
      </div>
    </section>
  );
};

export default About;
