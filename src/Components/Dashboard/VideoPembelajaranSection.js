import React from "react";

const VideoPembelajaranSection = () => {
  return (
    <>
      <div className="w-full flex-col  px-16 py-12">
        <div className="flex flex-row justify-between w-full items-center">
          <h2 className="text-[#082449] text-[1em] font-montserrat font-[700]">
            Video Pembelajaran Berjalan
          </h2>
          <div className="w-[5em] h-[0.625em] shrink-0 px-[1.125em] rounded-lg flex justify-center items-center bg-[#B7B7B7]">
            <p className="text-white text-[0.4166em] font-[600]">
              Materi Gratis
            </p>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center px-24 py-20 max-w-[32.3441em] max-h-[20.4em] mx-auto rounded-3xl bg-[#E9ECEC]">
          <img src="/Images/rect.png" className="w-full" />
          <div className="flex flex-col justify-start items-start w-full  shrink">
            <h2 className="text-[#082449] text-[0.4166em] lg:text-[1em] font-[700] font-montserrat">
              Judul
            </h2>
            <h2 className="text-[#082449] text-[0.4166em] lg:text-[1em] font-[700] font-montserrat">
              Deskripsi
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPembelajaranSection;
