import React from "react";
import { Link } from "react-router-dom";

const ArtikelSection = () => {
  return (
    <>
      <div className="w-full bg-white sm:text-[16px] md:text-[24px] lg:text-[30px] xl:text-[48px]">
        <div className="grid grid-cols-1 gap-20 justify-items-center py-16">
          <h1 className="font-montserrat font-[700] text-center text-[1em] text-[#082449]">
            Artikel-Artikel Pilihan Untukmu Hari Ini
          </h1>

          <div className="flex flex-row w-4/5 bg-[#ECF5F5] px-16 py-12 rounded-3xl">
            <div className="flex flex-col basis-2/3">
              <h2 className="font-montserrat font-[600] text-[#082449] text-[0.91em]">
                Perubahan Aturan Olimpiade di Tahun 2023? Berikut Hal-Hal yang
                Berubah
              </h2>
              <p className="font-montserrat font-[400] text-[#082449] text-[0.66em]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                nulla pharetra diam sit amet. Nisi quis eleifend quam adipiscing
                vitae.
              </p>
              <Link className="flex justify-center items-center w-[11em] h-[2em] bg-[#082449] text-white text-[0.416em] font-montserrat rounded-lg hover:scale-110 transition-all duration-500">
                Lihat Lebih Lanjut
              </Link>
            </div>
            <div className="basis-1/3">
              <img src="/Images/artikel-1.png" alt="artikel-1" />
            </div>
          </div>

          <div className="flex flex-row w-4/5 bg-[#ECF5F5] px-16 py-12 rounded-3xl">
            <div className="flex flex-col basis-2/3">
              <h2 className="font-montserrat font-[600] text-[#082449] text-[0.91em]">
                Perubahan Aturan Olimpiade di Tahun 2023? Berikut Hal-Hal yang
                Berubah
              </h2>
              <p className="font-montserrat font-[400] text-[#082449] text-[0.66em]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                nulla pharetra diam sit amet. Nisi quis eleifend quam adipiscing
                vitae.
              </p>
              <Link className="flex justify-center items-center w-[11em] h-[2em] bg-[#082449] text-white text-[0.416em] font-montserrat rounded-lg hover:scale-110 transition-all duration-500">
                Lihat Lebih Lanjut
              </Link>
            </div>
            <div className="basis-1/3">
              <img src="/Images/artikel-1.png" alt="artikel-1" />
            </div>
          </div>

          <div className="flex flex-row w-4/5 bg-[#ECF5F5] px-16 py-12 rounded-3xl">
            <div className="flex flex-col basis-2/3">
              <h2 className="font-montserrat font-[600] text-[#082449] text-[0.91em]">
                Perubahan Aturan Olimpiade di Tahun 2023? Berikut Hal-Hal yang
                Berubah
              </h2>
              <p className="font-montserrat font-[400] text-[#082449] text-[0.66em]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                nulla pharetra diam sit amet. Nisi quis eleifend quam adipiscing
                vitae.
              </p>
              <Link className="flex justify-center items-center w-[11em] h-[2em] bg-[#082449] text-white text-[0.416em] font-montserrat rounded-lg hover:scale-110 transition-all duration-500">
                Lihat Lebih Lanjut
              </Link>
            </div>
            <div className="basis-1/3">
              <img src="/Images/artikel-1.png" alt="artikel-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtikelSection;
