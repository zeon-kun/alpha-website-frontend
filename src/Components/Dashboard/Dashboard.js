import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./../../Layout/Navbar/Navbar";
import ProfileSection from "./ProfileSection";
import UserSection from "./UserSection";
import FiturSection from "./FiturSection";
import ArtikelSection from "./ArtikelSection";
import RekomendasiSection from "./RekomendasiSection";
import BlogSection from "./BlogSection";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen mim-w-full bg-[#1FA19F]">
        <Navbar />
        {/* Bagian 1 */}
        <div className="relative">
          <div className="w-full absolute top-[6rem] ">
            <ProfileSection />

            <UserSection />

            <FiturSection />

            <ArtikelSection />

            <RekomendasiSection />

            <BlogSection />
          </div>
        </div>

        {/* Bagian 2 */}
      </div>
    </>
  );
};

export default Dashboard;
