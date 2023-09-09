import React from "react";
import { Link } from "react-router-dom";
import logoWhite from '../../assets/logo-white.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';

const Footer = () => {
  return (
    <>
      <footer class="px-2 md:px-12 bg-white">
        <div class="w-full rounded-t-3xl bg-teal-600 flex text-white lg:p-32 lg:flex-row p-2 flex-col text-center lg:text-left font-montserrat">
          <div class="flex-[1_0_30%] p-6 flex items-center flex-col lg:block">
            <img src={logoWhite} alt="alpha-logo-white" class="w-[200px]" />
            <p class="mt-10">
              Platform persiapan dan pendampingan bagi siswa yang berfokus pada Olimpiade Sains
            </p>
          </div>
          <div class="flex-[1_0_20%] p-6">
            <h1 class="text-xl font-bold">Fitur</h1>
            <ul class="mt-8">
              <li>
                <Link to="/try-out">Try Out</Link>
              </li>
              <li class="mt-1">
                <Link to="/online-course">Pelatihan</Link>
              </li>
              <li class="mt-1">
                <Link to="/freemium">Materi Komprehensif</Link>
              </li>
              <li class="mt-1">
                <Link to="/blog">Blog</Link>
              </li>
              <li class="mt-1">
                <Link to="/webinar">Webinar</Link>
              </li>
              <li class="mt-1">
                <Link to="/podcast">Podcast</Link>
              </li>
              <li class="mt-1">
                <Link to="/short-course">Short Course</Link>
              </li>
              <li class="mt-1">
                <Link to="/find-tutor">Find Your Tutor</Link>
              </li>
            </ul>
          </div>
          <div class="flex-[1_0_20%] p-6">
            <h1 class="text-xl font-bold">Tentang</h1>
            <ul class="mt-8">
              <li>
                <Link to="/">Profil Perusahaan</Link>
              </li>
              <li class="mt-1">
                <Link to="/">Karir</Link>
              </li>
            </ul>
          </div>
          <div class="flex-[1_0_30%] p-6">
            <h1 class="text-xl font-bold">Hubungi Kami</h1>
            <ul class="mt-8">
                <li class="flex justify-center flex-row items-center lg:justify-start">
                    <Link to="https://www.instagram.com/alpha.academy_official/#" class="pr-2"><img src={instagram} width="40" alt="Instagram" /></Link>
                    <Link to="/" class="px-2"><img src={twitter} width="40" alt="Twitter" /></Link>
                    <Link to="/" class="px-2"><img src={linkedin} width="40" alt="Linkedin" /></Link>
                    <Link to="/" class="pl-2"><img src={youtube} width="40" alt="Youtube" /></Link>
                </li>
                <li class="mt-4">
                    <Link to="/partnership">Partnership</Link>
                </li>
                <li class="mt-1">
                    <Link to="/faq">FAQ</Link>
                </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
