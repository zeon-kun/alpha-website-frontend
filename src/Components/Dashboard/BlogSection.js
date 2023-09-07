import React from "react";

const BlogSection = () => {
  return (
    <>
      <div className="w-full py-10 bg-white sm:text-[16px] md:text-[24px] lg:text-[30px] xl:text-[48px]">
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 w-3/4 justify-items-center items-center">
            <h1 className="font-montserrat font-[700] text-[1em] text-[#082449] text-center">
              Blog Hari Ini
            </h1>
            <div className="flex flex-col ">
              <h2 className="font-montserrat font-[500] text-[1em] text-[#082449] text-center">
                Siklus Milankovith dan Pengaruhnya pada Iklim
              </h2>
              <img src="Images/ilust_blog.png" alt="ilust_blog" />
              <div className="none">
                <p className="font-montserrat font-[400] text-[#082449] text-[0.5em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <span className="w-[5em] bg-[#082449] box-border py-1 px-4 rounded-lg font-montserrat font-[600] text-white text-[0.4em] ">
                  Lihat Lebih Lanjut
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
