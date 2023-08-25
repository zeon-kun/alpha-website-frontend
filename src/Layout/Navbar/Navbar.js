import React from "react";
import logo from 'src/assets/logoAlpha.png';
import logoSmall from 'src/assets/alpha-small.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="md:pl-12 md:pr-12 w-full z-50 fixed">
        <div className="flex bg-white h-20 p-4 pl-10 pr-10 md:rounded-b-3xl justify-between shadow-xl items-center">
          <img src={logo} alt="logo-alpha-wide" className="hidden xl:block w-[200px]" />
          <img src={logoSmall} alt="logo-alpha-small" className="xl:hidden w-[63px]" />
          <ul className="hidden lg:flex">
            <li className="ml-2 mr-2 pl-2 pr-2">
              <Link to="/about" relative="path" className="font-montserrat font-medium rounded-xl text-gray-400 text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Tentang Alpha Academy
              </Link>
            </li>
            <li className="ml-2 mr-2 pl-2 pr-2">
              <Link to="/features" className="rounded-xl text-gray-400 font-montserrat font-medium text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Fitur
              </Link>
            </li>
            <li className="ml-2 mr-2 pl-2 pr-2">
              <Link to="/blog" className="rounded-xl text-gray-400 font-montserrat font-medium text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Blog
              </Link>
            </li>
            <li className="ml-2 mr-2 pl-2 pr-2">
              <Link to="/faq" className="rounded-xl text-gray-400 font-montserrat font-medium text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              FAQ
              </Link>
            </li>
          </ul>
          <ul className="hidden md:flex">
            <li className="ml-2 mr-2 pl-2 pr-2">
              <Link to="/login" className="rounded-xl text-gray-400 font-montserrat font-medium text-l hover:text-blueGray-800 p-2 m-0 block w-full h-full">
              Masuk
              </Link>
            </li>
            <li className="mr-2 pr-2">
              <Link to="/register" className="rounded-3xl font-montserrat font-medium text-l border-transparent border-2 bg-blueGray-800 text-white hover:text-blueGray-800 hover:bg-white hover:border-blueGray-800 pt-2 pb-2 pl-5 pr-5 m-0 block w-full h-full">
              Daftar
              </Link>
            </li>
          </ul>
        </div> 
      </nav>
    </>
  )
};

export default Navbar;
