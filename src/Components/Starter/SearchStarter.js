import React from "react";
import { Dropdown, Item } from "flowbite-react";

const SearchStarter = () => {
  return (
    <>
      <div className=" text-[36px] flex w-1/2 ">
        <div className="flex flex-row basis-2/3 justify-between items-center bg-colorMain px-8 py-1 rounded-xl">
          <div className="flex flex-row justify-between  items-center bg-[#D0D5EB] w-[12.1875em] h-[0.90625em] rounded-[0.53125em]">
            <div className="flex justify-center items-center">
              <img
                src="Images/starter/Search.png"
                className="w-[0.651375em] h-[0.508375em] mx-2 cursor-pointer"
                alt="search"
                onClick={() => {
                  console.log("search");
                }}
              />
              <input
                type="text"
                placeholder="Search"
                className="text-[0.46875em] font-poppins bg-[#D0D5EB] outline-none"
              />
            </div>
            <img
              src="Images/starter/Close.png"
              className="w-[0.651375em] h-[0.508375em] mx-2 cursor-pointer"
              alt="search"
              onClick={() => {
                console.log("clear");
              }}
            />
          </div>

          <div className="flex flex-col justify-between items-center font-poppins font-[700] text-colorMain2 text-[0.6em] ">
            <Dropdown
              label="Tipe"
              className="w-[13.8541em] rounded-lg px-2 py-0.5 text-black font-poppins font-[500] text-[0.83333em]"
            >
              <div className="hover:bg-colorMain2 px-2 py-0.5  rounded-lg cursor-pointer">
                Dashboard
              </div>
              <div className="hover:bg-colorMain2 px-2 py-0.5 rounded-lg cursor-pointer">
                Settings
              </div>
              <div className="hover:bg-colorMain2 px-2 py-0.5 rounded-lg cursor-pointer">
                Earnings
              </div>
              <Dropdown.Divider className="bg-black border-[1px] border-slate-600" />
              <div className="hover:bg-colorMain2 px-2 py-0.5 rounded-lg cursor-pointer">
                Separated link
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchStarter;
