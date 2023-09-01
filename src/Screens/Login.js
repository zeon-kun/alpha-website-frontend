import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-[#5FA7A7] w-[100%] min-h-screen flex justify-between px-[6rem] py-[10rem]">
        <div className="flex justify-center items-center">
          <img
            src="/Images/login-background.png"
            className="w-[685px] h-[806px]"
          />
        </div>
        <div className="flex flex-col content-between  bg-white py-[36px] px-[33px] rounded-[25px]">
          <h1 className="text-[#082449] font-bold tracking-wide text-[40px] font-montserrat mb-[10px]">
            Hai! Senang Berjumpa Kembali
          </h1>
          <p className="font-montserrat text-[24px] font-bold">
            Masuk untuk lanjutkan
          </p>
          <label className="font-montserrat mt-[30px] text-[20px] font-[500]">
            Email / Username
          </label>
          <input className="border-[1px] border-[#C4C4C4] rounded-[25px] px-[20px] py-[10px] mt-[10px] focus:outline-none" />
          <label className="font-montserrat mt-[30px] text-[20px] font-[500]">
            Password
          </label>
          <div className="border-[1px] border-[#C4C4C4] rounded-[25px] px-[20px] py-[10px] mt-[10px] focus:outline-none flex justify-between">
            <input className="w-4/5 outline-none" />
            <img src="/Images/passw-open.png" className="" />
          </div>
          {/* checkbox */}
          <div className="flex justify-between items-center my-[30px]">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border-[1px] border-[#C4C4C4] px-[20px] py-[10px] focus:outline-none"
              />
              <label className="font-montserrat flex items-center font-normal ml-[10px]">
                Ingatkan saya
              </label>
            </div>
            <div className="flex items-center">
              <Link to="/forgot-password">
                <label className="font-montserrat flex items-center font-normal ml-[10px]">
                  Lupa Password?
                </label>
              </Link>
            </div>
          </div>
          {/* button */}
          <div className="h-[50px] rounded-[25px] bg-[#FF9620] p-2 my-[30px]">
            <input
              type="button"
              value="Masuk"
              className="font-montserrat text-white text-[24px] w-full h-full bg-[#FF9620] rounded-[25px] focus:outline-none"
            />
          </div>
          <div className="flex justify-center items-center text-[20px] font-montserrat font-[500]">
            atau
          </div>

          <div className="flex justify-center h-[50px] border-[1px] border-[#C4C4C4] rounded-[25px] bg-white p-2 my-[30px]">
            <img src="/Images/search.png" className="mr-[20px]" />
            <input
              type="button"
              value="Masuk dengan Google"
              className="font-montserrat font-[500] text-[24px] bg-white rounded-[25px] focus:outline-none"
            />
          </div>

          <div className="flex justify-center items-center text-[20px] font-montserrat font-[500]">
            belum punya akun?{" "}
            <span className="text-[#FF9620] ml-[10px]">
              <Link to="/register">Daftar di sini</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
