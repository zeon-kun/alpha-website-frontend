import React from "react";

const Body = ({ children }) => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-starter relative py-16 px-16">
        <div className="absolute w-full mx-auto top-20">{children}</div>
      </div>
    </>
  );
};

export default Body;
