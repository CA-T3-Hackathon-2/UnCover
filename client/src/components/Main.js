import React from "react";
import { Link } from "react-router-dom";
import HeroButton from "./styled/HeroButton";
import HeroImage from "../assets/hero.png";

const heroImageStyle = {
  backgroundImage: "url('../src/assets/hero.png')",
  width: "80%",
  height: "auto",
};

const Main = () => {
  return (
    <section
      style={{
        width: "100%",
        marginTop: "15rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 10%",
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
          <Link>
            <HeroButton>Get Started</HeroButton>
          </Link>
        </div>
        <div>
          <img style={heroImageStyle} src={HeroImage} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Main;
