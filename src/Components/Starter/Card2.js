import React from "react";

const Card2 = ({ title, percentage }) => {
  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-xl mx-auto w-[11.25em] h-[7.305em] bg-colorMain">
        <div className="w-full ">
          <img src="Images/starter/online.png" alt="fef" />
        </div>
        <div className="flex flex-col justify-start items-start p-2">
          <h1 className="font-poppins font-[700] text-[0.7em] text-[#FCCE47]">
            {title}
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-full bg-colorMain2 h-[0.2em] rounded-lg mr-5">
              <div
                className={`w-[${percentage}] h-full bg-[#FF0000] rounded-lg`}
              ></div>
            </div>
            <p className="font-poppins font-[700] text-white text-[0.4em] ">
              {percentage}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
