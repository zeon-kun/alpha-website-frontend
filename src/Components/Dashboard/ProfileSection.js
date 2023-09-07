import React from "react";

const ProfileSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-[90%] mx-auto py-4 p-4  justify-between text-[12px] sm:text-[24px] lg:text-[30px] xl:text-[40px]">
        <div className="flex flex-row w-3/4  items-center">
          <div className="w-[1.666em] h-[1.666em] rounded-full hidden lg:flex">
            <img
              src="/Images/profile.png"
              className="w-full object-cover rounded-full"
              alt="profile"
            />
          </div>
          <div className="overflow-hidden">
            <h1 className="font-montserrat text-white font-[700] text-[1em]">
              Hai Jane Doe !
            </h1>
            <p className="font-montserrat text-white font-[500] text-[0.5em]">
              Ayo Belajar Hal Baru
            </p>
          </div>
        </div>
        <div className="bg-white h-[1.666em] rounded-3xl flex  p-[0.5em] justify-between items-center">
          <input
            type="text"
            placeholder="Cari Materi atau tryout yang ingin dicoba ..."
            className="outline-none w-3/4 font-montserrat font-[400] text-[0.5em]"
          />
          <img src="/Images/input-search.png" className="" alt="search" />
        </div>
        <div className="w-3/4 flex justify-center items-center font-montserrat  rounded-3xl bg-[#B7B7B7] my-4">
          <p className="text-white text-[0.375em] lg:text-[0.5em] font-[600]">
            Belum Berlangganan
          </p>
        </div>
        <div className="bg-[#082449] py-2 rounded-3xl my-4 p-2 flex justify-center items-center">
          <p className="text-[0.375em] lg:text-[0.5em] text-center text-white font-[600] inline-block mr-2">
            Tingkatkan ke Alpha Academy+ Sekarang Juga !
          </p>
          <img src="/Images/verif.png" />
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
