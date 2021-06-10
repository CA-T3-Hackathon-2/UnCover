import React from "react";
import { Link } from "react-router-dom";
import HeroButton from "./styled/HeroButton";

const Main = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "32rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "6rem" }}>
            Discover<p style={{ color: "blue" }}> events </p>in your city
          </h1>
          <p style={{ marginTop: "3rem" }}>
            Find events to match your interests! Start planning today, have a
            great time tomorrow!{" "}
          </p>
          <HeroButton>Get Started</HeroButton>
        </div>
        <div>HERO IMAGE</div>
      </div>
    </section>
  );
};

export default Main;
