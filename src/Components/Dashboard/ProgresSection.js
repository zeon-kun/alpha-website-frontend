import React from "react";

const ProgresSection = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row  justify-between px-16 py-12">
        <div className="flex flex-col basis-1 lg:basis-2/3 lg:mx-10">
          <h2 className="text-[#082449] text-[1em]  font-montserrat font-[700]">
            Progres Bulan ini
          </h2>
          <div className="w-full h-[10.416em] p-8 bg-[#E9ECEC] rounded-3xl min-w-[14.5833em] ">
            <div className="flex flex-row">
              <div className="basis-1/4">
                <p className="text-[#082449] text-[0.4166em] font-montserrat font-[600]">
                  Jam
                </p>
              </div>
              <div className="basis-3/4">
                <p className="text-[#082449] text-[0.4166em] font-montserrat font-[600]">
                  Konsistensi dalam belajar adalah kunci
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center my-8 text-[#082449] text-[1.45833em] font-montserrat font-[800]">
              Grafik
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/3">
          <div className="flex flex-row justify-start items-center">
            <h2 className="text-[#082449] text-[1em] font-montserrat font-[700] pr-8">
              Study Track
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="44"
              viewBox="0 0 34 44"
              fill="none"
            >
              <ellipse
                cx="20.125"
                cy="28.75"
                rx="7.8125"
                ry="10.9375"
                fill="#082449"
              />
              <path
                d="M32.5835 23.2291C29.3127 14.7291 17.6668 14.2707 20.4793 1.91655C20.6877 0.999885 19.7085 0.291552 18.9168 0.770719C11.3543 5.22905 5.91683 14.1666 10.4793 25.8749C10.8543 26.8332 9.72933 27.7291 8.91683 27.1041C5.146 24.2499 4.75016 20.1457 5.0835 17.2082C5.2085 16.1249 3.79183 15.6041 3.18766 16.4999C1.771 18.6666 0.333496 22.1666 0.333496 27.4374C1.12516 39.104 10.9793 42.6874 14.521 43.1457C19.5835 43.7916 25.0627 42.8541 29.0002 39.2499C33.3335 35.2291 34.9168 28.8124 32.5835 23.2291ZM13.2502 33.7082C16.2502 32.979 17.7918 30.8124 18.2085 28.8957C18.896 25.9165 16.2085 22.9999 18.021 18.2915C18.7085 22.1874 24.8335 24.6249 24.8335 28.8749C25.0002 34.1457 19.2918 38.6665 13.2502 33.7082Z"
                fill="#1FA19F"
              />
            </svg>
          </div>
          <div className="w-full max-h-[10.4166em] min-w-[6.25em] bg-[#E9ECEC] rounded-3xl pb-4">
            <div className="flex flex-col p-8 justify-center items-center">
              <div className="flex flex-row justify-between items-center">
                <span className="text-[0.4166em] font-montserrat mr-4 font-[600] text-[#082449]">
                  Tetap Konsisten!
                </span>
                <div className="w-[2.4166em] h-[0.66em] bg-[#082449] rounded-[0.3125em]  flex justify-center items-center">
                  <p className="text-white font-montserrat text-[0.333em] font-[600]">
                    Rincian
                  </p>
                </div>
              </div>
              <div className="my-4 max-h-[8em] max-w-[6em]">
                <img
                  src="/Images/calendar.png"
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgresSection;
