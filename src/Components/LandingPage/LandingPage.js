import React from "react";
// import { Link } from "react-router-dom";
import PialaAndSimul from "./PialaAndSimul";
import Background from "./Background";
import Features from "./Features";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <PialaAndSimul />
        <Background />
        <Features />
      </div>
    </>
  );
};

export default LandingPage;
