import React from "react";
import logo from '../../assets/logoAlpha.png';
import logoSmall from '../../assets/alpha-small.png';

const Navbar = () => {
  return (
    <>
      {/* <div class="bg-white flex flex-row ml-[80px] mr-[80px] h-[86px] rounded-br-lg rounded-bl-lg z-50"> */}
      <div class="md:pl-12 md:pr-12 fixed w-full z-50">
        <div class="flex bg-white h-20 p-4 pl-10 pr-10 md:rounded-b-3xl justify-between shadow-xl items-center">
          <img src={logo} alt="logo-alpha-wide" class="hidden xl:block w-[200px]" />
          <img src={logoSmall} alt="logo-alpha-small" class="xl:hidden w-[63px]" />
          <ul class="hidden lg:flex">
            <li class="ml-2 mr-2 pl-2 pr-2">
              <a href="/about" class="rounded-xl text-gray-400 font-semibold text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Tentang Alpha Academy
              </a>
            </li>
            <li class="ml-2 mr-2 pl-2 pr-2">
              <a href="/features" class="rounded-xl text-gray-400 font-semibold text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Fitur
              </a>
            </li>
            <li class="ml-2 mr-2 pl-2 pr-2">
              <a href="/about" class="rounded-xl text-gray-400 font-semibold text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Blog
              </a>
            </li>
            <li class="ml-2 mr-2 pl-2 pr-2">
              <a href="/about" class="rounded-xl text-gray-400 font-semibold text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              FAQ
              </a>
            </li>
          </ul>
          <ul class="hidden md:flex">
            <li class="ml-2 mr-2 pl-2 pr-2">
              <a href="/" class="rounded-xl text-gray-400 font-semibold text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Masuk
              </a>
            </li>
            <li class="mr-2 pr-2">
              <a href="/" class="rounded-3xl font-semibold text-l border-transparent border-2 bg-blueGray-800 text-white hover:text-blueGray-800 hover:bg-white hover:border-blueGray-800 pt-2 pb-2 pl-5 pr-5 m-0 block w-full h-full">
              Daftar
              </a>
            </li>
          </ul>
        </div> 
      </div>
    </>
  )
};

export default Navbar;
