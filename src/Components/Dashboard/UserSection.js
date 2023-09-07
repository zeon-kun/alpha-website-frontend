import React from "react";
import MateriSection from "./MateriSection";
import ProgresSection from "./ProgresSection";
import VideoPembelajaranSection from "./VideoPembelajaranSection";

const UserSection = () => {
  return (
    <>
      <div className="bg-white rounded-2xl w-full p-8 text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[48px]">
        <div className="flex flex-row p-6 justify-center items-center">
          <div className="flex justify-start w-3/4 ">
            <div className="w-1/5 flex justify-center items-center min-w-[0.5em] ">
              <img
                src="/Images/speech.png"
                className="w-full h-[1.35em] object-contain"
                alt="speech"
              />
            </div>
            <div>
              <p className="text-[#082449] text-[0.5em] font-montserrat font-[500]">
                TAHUKAH KAMU?
              </p>
              <p className="text-[#082449] text-[0.5em] font-montserrat font-[500]">
                Alpha Academy memiliki Podcast yang bisa kamu dengar sambil
                mengerjakan kepentingan lain
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full p-6 justify-center items-center text-[18px] sm:text-[24px] lg:text-[30px] xl:text-[48px]">
          <div className="flex w-[75%] justify-between items-center">
            <h2 className="text-[1em] font-[700] text-[#082449]">
              Materi dan Soal Berjalan
            </h2>
            <div className="w-[15em] h-[1.875em] shrink-0 px-[1.125em] text-white text-[0.4166em] font-[600] rounded-lg flex justify-center items-center bg-[#B7B7B7]">
              Materi Gratis
            </div>
          </div>
        </div>

        <MateriSection />

        {/* progres bulan ini */}
        <ProgresSection />
        {/* VIdeo Pembelajaran */}
        <VideoPembelajaranSection />
      </div>
    </>
  );
};

export default UserSection;
