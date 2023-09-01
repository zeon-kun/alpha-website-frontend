import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./../../Layout/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen mim-w-full bg-[#1FA19F]">
        <Navbar />
        {/* Bagian 1 */}
        <div className="relative">
          <div className="w-full absolute top-[50px] ">
            <div className="grid grid-cols-2 w-[90%] mx-auto py-4 p-4  justify-between">
              <div className="flex flex-row w-3/4  items-center">
                <div className="w-[80px] h-[80px] rounded-full hidden lg:flex">
                  <img
                    src="/Images/profile.png"
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="overflow-hidden">
                  <h1 className="font-montserrat text-white font-[700] text-[48px]">
                    Hai Jane Doe !
                  </h1>
                  <p className="font-montserrat text-white font-[500] text-[24px]">
                    Ayo Belajar Hal Baru
                  </p>
                </div>
              </div>
              <div className="bg-white h-[80px] rounded-3xl flex  p-6 justify-between items-center">
                <input
                  type="text"
                  placeholder="Cari Materi atau tryout yang ingin dicoba ..."
                  className="outline-none w-3/4 font-montserrat font-[400] text-[24px]"
                />
                <img src="/Images/input-search.png" className="" />
              </div>
              <div className="w-3/4 flex justify-center items-center font-montserrat text-white text-[18px] lg:text-[24px] font-[600] rounded-3xl bg-[#B7B7B7] my-4">
                Belum Berlangganan
              </div>
              <div className="bg-[#082449] py-2 rounded-3xl my-4 flex justify-center items-center">
                <p className="text-[18px] lg:text-[24px] text-center text-white font-[600] inline-block mr-2">
                  Tingkatkan ke Alpha Academy+ Sekarang Juga !
                </p>
                <img src="/Images/verif.png" />
              </div>
            </div>
            <div className="bg-white rounded-2xl w-full p-8">
              <div className="flex flex-row p-6 justify-center items-center">
                <div className="flex justify-start w-3/4 ">
                  <div className="w-1/5 hidden lg:flex justify-center items-center ">
                    <img src="/Images/speech.png" className="pr-6" />
                  </div>
                  <div>
                    <p className="text-[#082449] text-[24px] font-montserrat font-[500]">
                      TAHUKAH KAMU?
                    </p>
                    <p className="text-[#082449] text-[24px] font-montserrat font-[500]">
                      Alpha Academy memiliki Podcast yang bisa kamu dengar
                      sambil mengerjakan kepentingan lain
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-6 justify-center items-center">
                <div className="flex w-[75%] justify-between items-center">
                  <h2 className="text-[48px] font-[700] text-[#082449]">
                    Materi dan Soal Berjalan
                  </h2>
                  <div className="w-[240px] h-[30px] shrink-0 px-[54px] text-white text-[20px] font-[600] rounded-lg flex justify-center items-center bg-[#B7B7B7]">
                    Materi Gratis
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                <div className="p-4">
                  <div className="bg-[#ECF5F5] mx-auto w-[427px] h-[427px] rounded-3xl ">
                    <div className="flex flex-col justify-center items-center p-8">
                      <div className="w-[170px] h-[170px] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[10px] border-[#082449]">
                        <img src="/Images/geo.png" className="object-contain" />
                      </div>
                      <h2 className="text-[24px] py-4 font-[700] text-[#082449]">
                        Perkenalan Geografi
                      </h2>
                      <div className="w-[353px] h-[100px] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31"
                          viewBox="0 0 40 31"
                          fill="none"
                        >
                          <path
                            d="M36.3636 0.954501C34.3455 0.318137 32.1273 0.0454102 30 0.0454102C26.4545 0.0454102 22.6364 0.772683 20 2.77268C17.3636 0.772683 13.5455 0.0454102 10 0.0454102C6.45455 0.0454102 2.63636 0.772683 0 2.77268V29.409C0 29.8636 0.454545 30.3181 0.909091 30.3181C1.09091 30.3181 1.18182 30.2272 1.36364 30.2272C3.81818 29.0454 7.36364 28.2272 10 28.2272C13.5455 28.2272 17.3636 28.9545 20 30.9545C22.4545 29.409 26.9091 28.2272 30 28.2272C33 28.2272 36.0909 28.7727 38.6364 30.1363C38.8182 30.2272 38.9091 30.2272 39.0909 30.2272C39.5455 30.2272 40 29.7727 40 29.3181V2.77268C38.9091 1.9545 37.7273 1.40905 36.3636 0.954501ZM36.3636 25.5C34.3636 24.8636 32.1818 24.5909 30 24.5909C26.9091 24.5909 22.4545 25.7727 20 27.3181V6.40905C22.4545 4.86359 26.9091 3.68177 30 3.68177C32.1818 3.68177 34.3636 3.9545 36.3636 4.59086V25.5Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9999 10.9546C31.5999 10.9546 33.1454 11.1182 34.5454 11.4273V8.66366C33.109 8.39093 31.5636 8.22729 29.9999 8.22729C26.909 8.22729 24.109 8.75457 21.8181 9.73639V12.7546C23.8727 11.5909 26.7272 10.9546 29.9999 10.9546Z"
                            fill="#323232"
                          />
                          <path
                            d="M21.8179 14.5726V17.5907C23.8724 16.4271 26.727 15.7907 29.9997 15.7907C31.5997 15.7907 33.1451 15.9544 34.5451 16.2635V13.4998C33.1088 13.2271 31.5633 13.0635 29.9997 13.0635C26.9088 13.0635 24.1088 13.6089 21.8179 14.5726Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9997 17.9185C26.9088 17.9185 24.1088 18.4457 21.8179 19.4275V22.4457C23.8724 21.2821 26.727 20.6457 29.9997 20.6457C31.5997 20.6457 33.1451 20.8094 34.5451 21.1185V18.3548C33.1088 18.0639 31.5633 17.9185 29.9997 17.9185Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          30
                        </span>
                        <div className="w-[9px] h-[58px] bg-[#ddd]"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          25
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-4 ">
                  <div className="bg-[#ECF5F5] mx-auto w-[427px] h-[427px] rounded-3xl ">
                    <div className="flex flex-col justify-center items-center p-8">
                      <div className="w-[170px] h-[170px] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[10px] border-[#082449]">
                        <img src="/Images/geo.png" className="object-contain" />
                      </div>
                      <h2 className="text-[24px] py-4 font-[700] text-[#082449]">
                        Latihan Geografi 1
                      </h2>
                      <div className="w-[353px] h-[100px] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31"
                          viewBox="0 0 40 31"
                          fill="none"
                        >
                          <path
                            d="M36.3636 0.954501C34.3455 0.318137 32.1273 0.0454102 30 0.0454102C26.4545 0.0454102 22.6364 0.772683 20 2.77268C17.3636 0.772683 13.5455 0.0454102 10 0.0454102C6.45455 0.0454102 2.63636 0.772683 0 2.77268V29.409C0 29.8636 0.454545 30.3181 0.909091 30.3181C1.09091 30.3181 1.18182 30.2272 1.36364 30.2272C3.81818 29.0454 7.36364 28.2272 10 28.2272C13.5455 28.2272 17.3636 28.9545 20 30.9545C22.4545 29.409 26.9091 28.2272 30 28.2272C33 28.2272 36.0909 28.7727 38.6364 30.1363C38.8182 30.2272 38.9091 30.2272 39.0909 30.2272C39.5455 30.2272 40 29.7727 40 29.3181V2.77268C38.9091 1.9545 37.7273 1.40905 36.3636 0.954501ZM36.3636 25.5C34.3636 24.8636 32.1818 24.5909 30 24.5909C26.9091 24.5909 22.4545 25.7727 20 27.3181V6.40905C22.4545 4.86359 26.9091 3.68177 30 3.68177C32.1818 3.68177 34.3636 3.9545 36.3636 4.59086V25.5Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9999 10.9546C31.5999 10.9546 33.1454 11.1182 34.5454 11.4273V8.66366C33.109 8.39093 31.5636 8.22729 29.9999 8.22729C26.909 8.22729 24.109 8.75457 21.8181 9.73639V12.7546C23.8727 11.5909 26.7272 10.9546 29.9999 10.9546Z"
                            fill="#323232"
                          />
                          <path
                            d="M21.8179 14.5726V17.5907C23.8724 16.4271 26.727 15.7907 29.9997 15.7907C31.5997 15.7907 33.1451 15.9544 34.5451 16.2635V13.4998C33.1088 13.2271 31.5633 13.0635 29.9997 13.0635C26.9088 13.0635 24.1088 13.6089 21.8179 14.5726Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9997 17.9185C26.9088 17.9185 24.1088 18.4457 21.8179 19.4275V22.4457C23.8724 21.2821 26.727 20.6457 29.9997 20.6457C31.5997 20.6457 33.1451 20.8094 34.5451 21.1185V18.3548C33.1088 18.0639 31.5633 17.9185 29.9997 17.9185Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          5
                        </span>
                        <div className="w-[9px] h-[58px] bg-[#ddd]"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-4  ">
                  <div className="bg-[#ECF5F5] mx-auto w-[427px] h-[427px] rounded-3xl ">
                    <div className="flex flex-col justify-center items-center p-8">
                      <div className="w-[170px] h-[170px] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[10px] border-[#082449]">
                        <img src="/Images/geo.png" className="object-contain" />
                      </div>
                      <h2 className="text-[24px] py-4 font-[700] text-[#082449]">
                        Geografi 1
                      </h2>
                      <div className="w-[353px] h-[100px] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31"
                          viewBox="0 0 40 31"
                          fill="none"
                        >
                          <path
                            d="M36.3636 0.954501C34.3455 0.318137 32.1273 0.0454102 30 0.0454102C26.4545 0.0454102 22.6364 0.772683 20 2.77268C17.3636 0.772683 13.5455 0.0454102 10 0.0454102C6.45455 0.0454102 2.63636 0.772683 0 2.77268V29.409C0 29.8636 0.454545 30.3181 0.909091 30.3181C1.09091 30.3181 1.18182 30.2272 1.36364 30.2272C3.81818 29.0454 7.36364 28.2272 10 28.2272C13.5455 28.2272 17.3636 28.9545 20 30.9545C22.4545 29.409 26.9091 28.2272 30 28.2272C33 28.2272 36.0909 28.7727 38.6364 30.1363C38.8182 30.2272 38.9091 30.2272 39.0909 30.2272C39.5455 30.2272 40 29.7727 40 29.3181V2.77268C38.9091 1.9545 37.7273 1.40905 36.3636 0.954501ZM36.3636 25.5C34.3636 24.8636 32.1818 24.5909 30 24.5909C26.9091 24.5909 22.4545 25.7727 20 27.3181V6.40905C22.4545 4.86359 26.9091 3.68177 30 3.68177C32.1818 3.68177 34.3636 3.9545 36.3636 4.59086V25.5Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9999 10.9546C31.5999 10.9546 33.1454 11.1182 34.5454 11.4273V8.66366C33.109 8.39093 31.5636 8.22729 29.9999 8.22729C26.909 8.22729 24.109 8.75457 21.8181 9.73639V12.7546C23.8727 11.5909 26.7272 10.9546 29.9999 10.9546Z"
                            fill="#323232"
                          />
                          <path
                            d="M21.8179 14.5726V17.5907C23.8724 16.4271 26.727 15.7907 29.9997 15.7907C31.5997 15.7907 33.1451 15.9544 34.5451 16.2635V13.4998C33.1088 13.2271 31.5633 13.0635 29.9997 13.0635C26.9088 13.0635 24.1088 13.6089 21.8179 14.5726Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9997 17.9185C26.9088 17.9185 24.1088 18.4457 21.8179 19.4275V22.4457C23.8724 21.2821 26.727 20.6457 29.9997 20.6457C31.5997 20.6457 33.1451 20.8094 34.5451 21.1185V18.3548C33.1088 18.0639 31.5633 17.9185 29.9997 17.9185Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          27
                        </span>
                        <div className="w-[9px] h-[58px] bg-[#ddd]"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* progres bulan ini */}
              <div className="w-full flex flex-col lg:flex-row  justify-between px-16 py-12">
                <div className="flex flex-col basis-1 lg:basis-2/3 lg:mx-10">
                  <h2 className="text-[#082449] text-[48px]  font-montserrat font-[700]">
                    Progres Bulan ini
                  </h2>
                  <div className="w-full h-[500px] p-8 bg-[#E9ECEC] rounded-3xl min-w-[700px] ">
                    <div className="flex flex-row">
                      <div className="basis-1/4 text-[#082449] text-[20px] font-montserrat font-[600]">
                        Jam
                      </div>
                      <div className="basis-3/4 text-[#082449] text-[20px] font-montserrat font-[600]">
                        Konsisten dalam belajar adalah kunci
                      </div>
                    </div>
                    <div className="flex justify-center items-center my-8 text-[#082449] text-[70px] font-montserrat font-[800]">
                      Grafik
                    </div>
                  </div>
                </div>
                <div className="flex flex-col basis-1/3">
                  <div className="flex flex-row justify-start items-center">
                    <h2 className="text-[#082449] text-[48px] font-montserrat font-[700] pr-8">
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
                  <div className="w-full max-h-[500px] min-w-[300px] bg-[#E9ECEC] rounded-3xl">
                    <div className="flex flex-col p-8 justify-center items-center">
                      <div className="flex flex-row justify-between items-center">
                        <span className="text-[20px] font-montserrat mr-4 font-[600] text-[#082449]">
                          Tetap Konsisten!
                        </span>
                        <div className="w-[116px] h-[32px] bg-[#082449] rounded-[15px] text-white font-montserrat text-[16px] font-[600] flex justify-center items-center">
                          Rincian
                        </div>
                      </div>
                      <div className="my-4">
                        <img src="/Images/calendar.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col  px-16 py-12">
                <div className="flex flex-row justify-between w-full items-center">
                  <h2 className="text-[#082449] text-[48px] font-montserrat font-[700]">
                    Video Pembelajaran Berjalan
                  </h2>
                  <div className="w-[240px] h-[30px] shrink-0 px-[54px] text-white text-[20px] font-[600] rounded-lg flex justify-center items-center bg-[#B7B7B7]">
                    Materi Gratis
                  </div>
                </div>
                <div className="flex flex-col  justify-center items-center px-24 py-20 max-w-[1553px] max-h-[980px] mx-auto rounded-3xl bg-[#E9ECEC]">
                  <img src="/Images/rect.png" className="w-full" />
                  <div className="flex flex-col justify-start items-start w-full  shrink">
                    <h2 className="text-[#082449] text-[20px] lg:text-[48px] font-[700] font-montserrat">
                      Judul
                    </h2>
                    <h2 className="text-[#082449] text-[20px] lg:text-[48px] font-[700] font-montserrat">
                      Deskripsi
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#0D3A74] py-16 flex flex-col justify-center items-center">
              <div className="flex flex-col w-[70%] justify-center items-center">
                <h1 className="text-white text-[48px] text-center font-[700] font-montserrat">
                  Fitur-Fitur Alpha Academy
                </h1>
                <p className="text-white text-[24px] text-center font-[500] font-montserrat">
                  Alpha Academy akan membantumu dalam persiapan dan pendampingan
                  olimpiade sains dengan materi yang berkualitas dan
                  komprehensif
                </p>
              </div>
              <div className="w-full  bg-white rounded-[60px] py-8 px-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                  <div className="flex flex-col ">
                    <div className="flex flex-row py-8">
                      <div className="flex flex-col  basis-1/2 justify-start items-center group ">
                        <div className="flex justify-center  items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <img src="/Images/tryout.png" />
                        </div>
                        <h3 className="text-[#082449] text-[24px] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          Try Out
                        </h3>
                      </div>
                      <div className="flex flex-col basis-1/2 justify-start items-center group">
                        <div className="flex justify-center items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <img src="/Images/pelatihan.png" />
                        </div>
                        <h3 className="text-[#082449] text-[24px] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          Pelatihan
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col basis-1/2 justify-start items-center group">
                        <div className="flex justify-center items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <img src="/Images/materi.png" />
                        </div>
                        <h3 className="text-[#082449] text-[24px] text-center font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          Materi komprehensif
                        </h3>
                      </div>
                      <div className="flex flex-col basis-1/2 justify-start items-center group">
                        <div className="flex justify-center items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <img src="/Images/blog.png" />
                        </div>
                        <h3 className="text-[#082449] text-[24px] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          Blog
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="basis-1/3 hidden lg:flex justify-center items-center">
                    <img src="/Images/medali.png" className="" />
                  </div>

                  <div className="flex flex-col ">
                    <div className="flex flex-row py-8">
                      <div className="flex flex-col  basis-1/2 justify-start items-center group">
                        <div className="flex justify-center items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <img src="/Images/podcast.png" />
                        </div>
                        <h3 className="text-[#082449] text-center text-[24px] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          Webinar & Podcast
                        </h3>
                      </div>
                      <div className="flex flex-col basis-1/2 justify-start items-center group">
                        <div className="flex justify-center items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <img src="/Images/course.png" />
                        </div>
                        <h3 className="text-[#082449] text-[24px] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          Short Course
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col basis-1/2 justify-start items-center group">
                        <div className="flex justify-center items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <img src="/Images/tutor.png" />
                        </div>
                        <h3 className="text-[#082449] text-[24px] text-center  font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          Find Your Tutor
                        </h3>
                      </div>
                      <div className="flex flex-col basis-1/2 justify-start items-center group">
                        <div className="flex justify-center items-center bg-[#E7D4BF] w-[136px] h-[136px] rounded-[2rem] box-border border-[10px] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                          <div className="grid grid-cols-3 gap-5">
                            <span className="w-[1rem] h-[1rem] bg-[#082449] rounded-full"></span>
                            <span className="w-[1rem] h-[1rem] bg-[#082449] rounded-full"></span>
                            <span className="w-[1rem] h-[1rem] bg-[#082449] rounded-full"></span>
                          </div>
                        </div>
                        <h3 className="text-[#082449] text-[24px] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                          More
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white ">
              <div className="grid grid-cols-1 gap-20 justify-items-center py-16">
                <h1 className="font-montserrat font-[700] text-center text-[48px] text-[#082449]">
                  Artikel-Artikel Pilihan Untukmu Hari Ini
                </h1>
                <div className="flex flex-row w-4/5 bg-[#ECF5F5] px-16 py-12 rounded-3xl">
                  <div className="flex flex-col basis-2/3">
                    <h2 className="font-montserrat font-[600] text-[#082449] text-[44px]">
                      Perubahan Aturan Olimpiade di Tahun 2023? Berikut Hal-Hal
                      yang Berubah
                    </h2>
                    <p className="font-montserrat font-[400] text-[#082449] text-[32px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sem nulla pharetra diam sit amet. Nisi quis
                      eleifend quam adipiscing vitae.
                    </p>
                    <Link className="flex justify-center items-center w-[240px] h-[30px] bg-[#082449] text-white font-montserrat rounded-lg hover:scale-110 transition-all duration-500">
                      Lihat Lebih Lanjut
                    </Link>
                  </div>
                  <div className="basis-1/3">
                    <img src="/Images/artikel-1.png" />
                  </div>
                </div>

                <div className="flex flex-row w-4/5 bg-[#ECF5F5] px-16 py-12 rounded-3xl">
                  <div className="basis-1/3">
                    <img src="/Images/artikel-2.png" />
                  </div>
                  <div className="flex flex-col basis-2/3">
                    <h2 className="font-montserrat font-[600] text-[#082449] text-[44px]">
                      Berikut adalah wilayah penyumbang olimpiade terbanyak di
                      Indonesia
                    </h2>
                    <p className="font-montserrat font-[400] text-[#082449] text-[32px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sem nulla pharetra diam sit amet. Nisi quis
                      eleifend quam adipiscing vitae.
                    </p>
                    <Link className="flex justify-center items-center w-[240px] h-[30px] bg-[#082449] text-white font-montserrat rounded-lg hover:scale-110 transition-all duration-500">
                      Lihat Lebih Lanjut
                    </Link>
                  </div>
                </div>

                <div className="flex flex-row w-4/5 bg-[#ECF5F5] px-16 py-12 rounded-3xl">
                  <div className="flex flex-col basis-2/3">
                    <h2 className="font-montserrat font-[600] text-[#082449] text-[44px]">
                      Mata pelajaran apa yang sulit dihadapi ditingkat
                      olimpiade? Matematika salah satunya lho
                    </h2>
                    <p className="font-montserrat font-[400] text-[#082449] text-[32px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Sem nulla pharetra diam sit amet. Nisi quis
                      eleifend quam adipiscing vitae.
                    </p>
                    <Link className="flex justify-center items-center w-[240px] h-[30px] bg-[#082449] text-white font-montserrat rounded-lg hover:scale-110 transition-all duration-500">
                      Lihat Lebih Lanjut
                    </Link>
                  </div>
                  <div className="basis-1/3">
                    <img src="/Images/artikel-3.png" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#FF9620] ">
              <div className="flex flex-col justify-center items-center py-20">
                <div className="grid grid-cols-1 w-3/4 justify-items-center items-center gap-4">
                  <h2 className="font-montserrat font-[700] text-center text-white text-[48px]">
                    Rekomendasi Belajar
                  </h2>
                  <p className="font-montserrat font-[500] text-center text-white text-[32px]">
                    Alpha Academy memberikanmu rekomendasi belajar yang relevan
                    sesuai dengan materi-materi yang telah anda pilih dan jalani
                  </p>
                  <div className="flex w-[50%] rounded-[18px] justify-center text-center items-center bg-[#082449] text-white font-montserrat font-[600] text-[24px] px-2 py-4">
                    Khusus Pelanggan Alpha Academy +
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M22 10.5L19.56 7.71L19.9 4.02L16.29 3.2L14.4 0L11 1.46L7.6 0L5.71 3.19L2.1 4L2.44 7.7L0 10.5L2.44 13.29L2.1 16.99L5.71 17.81L7.6 21L11 19.53L14.4 20.99L16.29 17.8L19.9 16.98L19.56 13.29L22 10.5ZM8.38 14.51L6 12.11C5.61 11.72 5.61 11.09 6 10.7L6.07 10.63C6.46 10.24 7.1 10.24 7.49 10.63L9.1 12.25L14.25 7.09C14.64 6.7 15.28 6.7 15.67 7.09L15.74 7.16C16.13 7.55 16.13 8.18 15.74 8.57L9.82 14.51C9.41 14.9 8.78 14.9 8.38 14.51Z"
                        fill="#1FA19F"
                      />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center items-center py-12">
                  <div className="bg-[#FFFFFF] mx-auto w-[370px] h-[370px] rounded-3xl mx-2">
                    <div className="flex flex-col justify-center items-center p-8">
                      <div className="w-[170px] h-[170px] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[10px] border-[#082449]">
                        <img src="/Images/geo.png" className="object-contain" />
                      </div>
                      <h2 className="text-[24px] py-4 font-[700] text-[#082449]">
                        Perkenalan Geografi
                      </h2>
                      <div className="w-[305px] h-[82px] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31"
                          viewBox="0 0 40 31"
                          fill="none"
                        >
                          <path
                            d="M36.3636 0.954501C34.3455 0.318137 32.1273 0.0454102 30 0.0454102C26.4545 0.0454102 22.6364 0.772683 20 2.77268C17.3636 0.772683 13.5455 0.0454102 10 0.0454102C6.45455 0.0454102 2.63636 0.772683 0 2.77268V29.409C0 29.8636 0.454545 30.3181 0.909091 30.3181C1.09091 30.3181 1.18182 30.2272 1.36364 30.2272C3.81818 29.0454 7.36364 28.2272 10 28.2272C13.5455 28.2272 17.3636 28.9545 20 30.9545C22.4545 29.409 26.9091 28.2272 30 28.2272C33 28.2272 36.0909 28.7727 38.6364 30.1363C38.8182 30.2272 38.9091 30.2272 39.0909 30.2272C39.5455 30.2272 40 29.7727 40 29.3181V2.77268C38.9091 1.9545 37.7273 1.40905 36.3636 0.954501ZM36.3636 25.5C34.3636 24.8636 32.1818 24.5909 30 24.5909C26.9091 24.5909 22.4545 25.7727 20 27.3181V6.40905C22.4545 4.86359 26.9091 3.68177 30 3.68177C32.1818 3.68177 34.3636 3.9545 36.3636 4.59086V25.5Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9999 10.9546C31.5999 10.9546 33.1454 11.1182 34.5454 11.4273V8.66366C33.109 8.39093 31.5636 8.22729 29.9999 8.22729C26.909 8.22729 24.109 8.75457 21.8181 9.73639V12.7546C23.8727 11.5909 26.7272 10.9546 29.9999 10.9546Z"
                            fill="#323232"
                          />
                          <path
                            d="M21.8179 14.5726V17.5907C23.8724 16.4271 26.727 15.7907 29.9997 15.7907C31.5997 15.7907 33.1451 15.9544 34.5451 16.2635V13.4998C33.1088 13.2271 31.5633 13.0635 29.9997 13.0635C26.9088 13.0635 24.1088 13.6089 21.8179 14.5726Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9997 17.9185C26.9088 17.9185 24.1088 18.4457 21.8179 19.4275V22.4457C23.8724 21.2821 26.727 20.6457 29.9997 20.6457C31.5997 20.6457 33.1451 20.8094 34.5451 21.1185V18.3548C33.1088 18.0639 31.5633 17.9185 29.9997 17.9185Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          30
                        </span>
                        <div className="w-[9px] h-[58px] bg-[#ddd]"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          25
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ke - 2 */}
                  <div className="bg-[#FFFFFF] mx-auto w-[370px] h-[370px] rounded-3xl mx-2">
                    <div className="flex flex-col justify-center items-center p-8">
                      <div className="w-[170px] h-[170px] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[10px] border-[#082449]">
                        <img src="/Images/geo.png" className="object-contain" />
                      </div>
                      <h2 className="text-[24px] py-4 font-[700] text-[#082449]">
                        Perkenalan Geografi
                      </h2>
                      <div className="w-[305px] h-[82px] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31"
                          viewBox="0 0 40 31"
                          fill="none"
                        >
                          <path
                            d="M36.3636 0.954501C34.3455 0.318137 32.1273 0.0454102 30 0.0454102C26.4545 0.0454102 22.6364 0.772683 20 2.77268C17.3636 0.772683 13.5455 0.0454102 10 0.0454102C6.45455 0.0454102 2.63636 0.772683 0 2.77268V29.409C0 29.8636 0.454545 30.3181 0.909091 30.3181C1.09091 30.3181 1.18182 30.2272 1.36364 30.2272C3.81818 29.0454 7.36364 28.2272 10 28.2272C13.5455 28.2272 17.3636 28.9545 20 30.9545C22.4545 29.409 26.9091 28.2272 30 28.2272C33 28.2272 36.0909 28.7727 38.6364 30.1363C38.8182 30.2272 38.9091 30.2272 39.0909 30.2272C39.5455 30.2272 40 29.7727 40 29.3181V2.77268C38.9091 1.9545 37.7273 1.40905 36.3636 0.954501ZM36.3636 25.5C34.3636 24.8636 32.1818 24.5909 30 24.5909C26.9091 24.5909 22.4545 25.7727 20 27.3181V6.40905C22.4545 4.86359 26.9091 3.68177 30 3.68177C32.1818 3.68177 34.3636 3.9545 36.3636 4.59086V25.5Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9999 10.9546C31.5999 10.9546 33.1454 11.1182 34.5454 11.4273V8.66366C33.109 8.39093 31.5636 8.22729 29.9999 8.22729C26.909 8.22729 24.109 8.75457 21.8181 9.73639V12.7546C23.8727 11.5909 26.7272 10.9546 29.9999 10.9546Z"
                            fill="#323232"
                          />
                          <path
                            d="M21.8179 14.5726V17.5907C23.8724 16.4271 26.727 15.7907 29.9997 15.7907C31.5997 15.7907 33.1451 15.9544 34.5451 16.2635V13.4998C33.1088 13.2271 31.5633 13.0635 29.9997 13.0635C26.9088 13.0635 24.1088 13.6089 21.8179 14.5726Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9997 17.9185C26.9088 17.9185 24.1088 18.4457 21.8179 19.4275V22.4457C23.8724 21.2821 26.727 20.6457 29.9997 20.6457C31.5997 20.6457 33.1451 20.8094 34.5451 21.1185V18.3548C33.1088 18.0639 31.5633 17.9185 29.9997 17.9185Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          30
                        </span>
                        <div className="w-[9px] h-[58px] bg-[#ddd]"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          25
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ke - 3 */}
                  <div className="bg-[#FFFFFF] mx-auto w-[370px] h-[370px] rounded-3xl mx-2">
                    <div className="flex flex-col justify-center items-center p-8">
                      <div className="w-[170px] h-[170px] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[10px] border-[#082449]">
                        <img src="/Images/geo.png" className="object-contain" />
                      </div>
                      <h2 className="text-[24px] py-4 font-[700] text-[#082449]">
                        Perkenalan Geografi
                      </h2>
                      <div className="w-[305px] h-[82px] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31"
                          viewBox="0 0 40 31"
                          fill="none"
                        >
                          <path
                            d="M36.3636 0.954501C34.3455 0.318137 32.1273 0.0454102 30 0.0454102C26.4545 0.0454102 22.6364 0.772683 20 2.77268C17.3636 0.772683 13.5455 0.0454102 10 0.0454102C6.45455 0.0454102 2.63636 0.772683 0 2.77268V29.409C0 29.8636 0.454545 30.3181 0.909091 30.3181C1.09091 30.3181 1.18182 30.2272 1.36364 30.2272C3.81818 29.0454 7.36364 28.2272 10 28.2272C13.5455 28.2272 17.3636 28.9545 20 30.9545C22.4545 29.409 26.9091 28.2272 30 28.2272C33 28.2272 36.0909 28.7727 38.6364 30.1363C38.8182 30.2272 38.9091 30.2272 39.0909 30.2272C39.5455 30.2272 40 29.7727 40 29.3181V2.77268C38.9091 1.9545 37.7273 1.40905 36.3636 0.954501ZM36.3636 25.5C34.3636 24.8636 32.1818 24.5909 30 24.5909C26.9091 24.5909 22.4545 25.7727 20 27.3181V6.40905C22.4545 4.86359 26.9091 3.68177 30 3.68177C32.1818 3.68177 34.3636 3.9545 36.3636 4.59086V25.5Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9999 10.9546C31.5999 10.9546 33.1454 11.1182 34.5454 11.4273V8.66366C33.109 8.39093 31.5636 8.22729 29.9999 8.22729C26.909 8.22729 24.109 8.75457 21.8181 9.73639V12.7546C23.8727 11.5909 26.7272 10.9546 29.9999 10.9546Z"
                            fill="#323232"
                          />
                          <path
                            d="M21.8179 14.5726V17.5907C23.8724 16.4271 26.727 15.7907 29.9997 15.7907C31.5997 15.7907 33.1451 15.9544 34.5451 16.2635V13.4998C33.1088 13.2271 31.5633 13.0635 29.9997 13.0635C26.9088 13.0635 24.1088 13.6089 21.8179 14.5726Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9997 17.9185C26.9088 17.9185 24.1088 18.4457 21.8179 19.4275V22.4457C23.8724 21.2821 26.727 20.6457 29.9997 20.6457C31.5997 20.6457 33.1451 20.8094 34.5451 21.1185V18.3548C33.1088 18.0639 31.5633 17.9185 29.9997 17.9185Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          30
                        </span>
                        <div className="w-[9px] h-[58px] bg-[#ddd]"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          25
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ke - 4 */}

                  <div className="bg-[#FFFFFF] mx-auto w-[370px] h-[370px] rounded-3xl mx-2">
                    <div className="flex flex-col justify-center items-center p-8">
                      <div className="w-[170px] h-[170px] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[10px] border-[#082449]">
                        <img src="/Images/geo.png" className="object-contain" />
                      </div>
                      <h2 className="text-[24px] py-4 font-[700] text-[#082449]">
                        Perkenalan Geografi
                      </h2>
                      <div className="w-[305px] h-[82px] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31"
                          viewBox="0 0 40 31"
                          fill="none"
                        >
                          <path
                            d="M36.3636 0.954501C34.3455 0.318137 32.1273 0.0454102 30 0.0454102C26.4545 0.0454102 22.6364 0.772683 20 2.77268C17.3636 0.772683 13.5455 0.0454102 10 0.0454102C6.45455 0.0454102 2.63636 0.772683 0 2.77268V29.409C0 29.8636 0.454545 30.3181 0.909091 30.3181C1.09091 30.3181 1.18182 30.2272 1.36364 30.2272C3.81818 29.0454 7.36364 28.2272 10 28.2272C13.5455 28.2272 17.3636 28.9545 20 30.9545C22.4545 29.409 26.9091 28.2272 30 28.2272C33 28.2272 36.0909 28.7727 38.6364 30.1363C38.8182 30.2272 38.9091 30.2272 39.0909 30.2272C39.5455 30.2272 40 29.7727 40 29.3181V2.77268C38.9091 1.9545 37.7273 1.40905 36.3636 0.954501ZM36.3636 25.5C34.3636 24.8636 32.1818 24.5909 30 24.5909C26.9091 24.5909 22.4545 25.7727 20 27.3181V6.40905C22.4545 4.86359 26.9091 3.68177 30 3.68177C32.1818 3.68177 34.3636 3.9545 36.3636 4.59086V25.5Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9999 10.9546C31.5999 10.9546 33.1454 11.1182 34.5454 11.4273V8.66366C33.109 8.39093 31.5636 8.22729 29.9999 8.22729C26.909 8.22729 24.109 8.75457 21.8181 9.73639V12.7546C23.8727 11.5909 26.7272 10.9546 29.9999 10.9546Z"
                            fill="#323232"
                          />
                          <path
                            d="M21.8179 14.5726V17.5907C23.8724 16.4271 26.727 15.7907 29.9997 15.7907C31.5997 15.7907 33.1451 15.9544 34.5451 16.2635V13.4998C33.1088 13.2271 31.5633 13.0635 29.9997 13.0635C26.9088 13.0635 24.1088 13.6089 21.8179 14.5726Z"
                            fill="#323232"
                          />
                          <path
                            d="M29.9997 17.9185C26.9088 17.9185 24.1088 18.4457 21.8179 19.4275V22.4457C23.8724 21.2821 26.727 20.6457 29.9997 20.6457C31.5997 20.6457 33.1451 20.8094 34.5451 21.1185V18.3548C33.1088 18.0639 31.5633 17.9185 29.9997 17.9185Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          30
                        </span>
                        <div className="w-[9px] h-[58px] bg-[#ddd]"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
                            fill="#323232"
                          />
                        </svg>
                        <span className="font-montserrat text-[32px] font-[700] text-black">
                          25
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian 2 */}
      </div>
    </>
  );
};

export default Dashboard;
