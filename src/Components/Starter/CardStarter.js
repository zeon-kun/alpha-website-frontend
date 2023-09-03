import React from "react";

const CardStarter = ({ image, title, name, desc, price }) => {
  return (
    <>
      <div className="flex flex-col w-[8.9722222em] h-[13.02777em] bg-colorMain rounded-[0.5277777em]">
        <div className="w-full">
          <img src={image} className="object-contain" alt="operasional" />
        </div>
        <div className="flex flex-col w-full content-start px-4">
          <h1 className="font-poppins font-[700] text-[0.8333em] text-[#FCCE47]">
            {title}
          </h1>
          <p className="font-poppins font-[500] text-[0.4444444em] text-[#D0D5EB]">
            {name}
          </p>
          <p className="font-poppins mt-4 font-[500] text-[0.361111em] text-[#9A9A9A]">
            {desc}
            <span className="underline cursor-pointer">details</span>
          </p>
          <p className="my-2 text-[#FCCE47] font-poppins font-[700] text-[0.5555em]">
            {price}
          </p>
          <div className="w-full flex justify-center items-center">
            <div className=" mt-4 flex justify-center items-center font-poppins font-[500] text-[#4A4A4A]  bg-colorMain2 w-[7.472222em] h-[0.8333em] rounded-[0.2em]">
              <input type="button" value="Beli" className="text-[0.444em]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStarter;
