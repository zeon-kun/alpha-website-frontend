import React from "react";
import Body from "./Body";
import CardTutor from "./CardTutor";

const Tutors = () => {
  return (
    <>
      <Body>
        <div className=" text-[36px] w-1/2 my-8">
          <span className="font-poppins text-colorMain font-[700] text-[1em] px-8">
            Yuk belajar bareng tutor-tutor keren!
          </span>
        </div>

        <div className="w-[90%] grid grid-cols-3 gap-4 text-[36px] ">
          <CardTutor />
          <CardTutor />
          <CardTutor />
        </div>
      </Body>
    </>
  );
};

export default Tutors;
