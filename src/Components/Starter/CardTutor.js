import React from "react";

const CardTutor = () => {
  return (
    <>
      <div className="flex flex-col  px-14">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[6.777em] h-[7.63888em] overflow-hidden">
            <img
              src="Images/starter/tutor.png"
              alt="tutor"
              className="w-full object-contain"
            />
          </div>
          <h1 className="font-poppins font-[700] text-colorMain text-[0.83333em]">
            Bagus Indrasoecipto
          </h1>
          <p className="font-poppins font-[500] text-colorMain text-[0.6666em]">
            Tutor OR 1
          </p>
        </div>

        <div className="mt-5">
          <p className="font-poppins font-[700] text-colorMain text-[0.5555em]">
            Pengalaman
          </p>
          <ul className="list-disc  px-10   font-poppins font-[500] text-colorMain text-[0.5555em]">
            <li>Menjadi pemateri pada Webinar A</li>
            <li>Japan Student Ex 2019</li>
            <li>CEO Starter Academy</li>
            <li>IISMA New Zealand</li>
          </ul>
        </div>

        <div className="mt-5">
          <p className="font-poppins font-[700] text-colorMain text-[0.5555em]">
            Pencapaian
          </p>
          <ul className="list-disc  px-10   font-poppins font-[500] text-colorMain text-[0.5555em]">
            <li>Menjadi pemateri pada Webinar A</li>
            <li>Japan Student Ex 2019</li>
            <li>CEO Starter Academy</li>
            <li>IISMA New Zealand</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardTutor;
