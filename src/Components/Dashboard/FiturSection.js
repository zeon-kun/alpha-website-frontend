import React from "react";

const FiturSection = () => {
  return (
    <>
      <div className="w-full bg-[#0D3A74] py-16 flex flex-col justify-center items-center text-[24px] lg:text-[30px] xl:text-[48px]">
        <div className="flex flex-col w-[70%] justify-center items-center">
          <h1 className="text-white text-[1em] text-center font-[700] font-montserrat">
            Fitur-Fitur Alpha Academy
          </h1>
          <p className="text-white text-[0.5em] text-center font-[500] font-montserrat">
            Alpha Academy akan membantumu dalam persiapan dan pendampingan
            olimpiade sains dengan materi yang berkualitas dan komprehensif
          </p>
        </div>
        <div className="w-full  bg-white rounded-[1.25em] py-8 px-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            <div className="flex flex-col ">
              <div className="flex flex-row py-8">
                <div className="flex flex-col  basis-1/2 justify-start items-center group ">
                  <div className="flex justify-center overflow-hidden  items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <img
                      src="/Images/tryout.png"
                      className=" h-[1.58em] object-contain"
                      alt="tryout"
                    />
                  </div>
                  <h3 className="text-[#082449] text-[0.5em] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                    Try Out
                  </h3>
                </div>
                <div className="flex flex-col basis-1/2 justify-start items-center group">
                  <div className="flex overflow-hidden justify-center items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <img
                      src="/Images/pelatihan.png"
                      className=" h-[1.58em] object-contain"
                    />
                  </div>
                  <h3 className="text-[#082449] text-[0.5em] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                    Pelatihan
                  </h3>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col basis-1/2 justify-start items-center group">
                  <div className="flex justify-center overflow-hidden items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <img
                      src="/Images/materi.png"
                      className=" h-[1.58em] object-contain"
                    />
                  </div>
                  <h3 className="text-[#082449] text-[0.5em] text-center font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                    Materi komprehensif
                  </h3>
                </div>
                <div className="flex flex-col basis-1/2 justify-start items-center group">
                  <div className="flex justify-center overflow-hidden items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <img
                      src="/Images/blog.png"
                      className=" h-[1.58em] object-contain"
                    />
                  </div>
                  <h3 className="text-[#082449] text-[0.5em] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
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
                  <div className="flex justify-center overflow-hidden items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <img
                      src="/Images/podcast.png"
                      className=" h-[1.58em] object-contain"
                    />
                  </div>
                  <h3 className="text-[#082449] text-center text-[0.5em] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                    Webinar & Podcast
                  </h3>
                </div>
                <div className="flex flex-col basis-1/2 justify-start items-center group">
                  <div className="flex justify-center overflow-hidden items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <img
                      src="/Images/course.png"
                      className=" h-[1.58em] object-contain"
                    />
                  </div>
                  <h3 className="text-[#082449] text-[0.5em] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                    Short Course
                  </h3>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col basis-1/2 justify-start items-center group">
                  <div className="flex justify-center overflow-hidden items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <img
                      src="/Images/tutor.png"
                      className=" h-[1.58em] object-contain"
                    />
                  </div>
                  <h3 className="text-[#082449] text-[0.5em] text-center  font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                    Find Your Tutor
                  </h3>
                </div>
                <div className="flex flex-col basis-1/2 justify-start items-center group">
                  <div className="flex justify-center items-center bg-[#E7D4BF] w-[2.833em] h-[2.833em] rounded-[2rem] box-border border-[0.208em] border-[#0D3A74] group-hover:scale-110 transition-all duration-500">
                    <div className="grid grid-cols-3 gap-3 lg:gap-5">
                      <span className="w-[0.33em] h-[0.33em] bg-[#082449] rounded-full"></span>
                      <span className="w-[0.33em] h-[0.33em] bg-[#082449] rounded-full"></span>
                      <span className="w-[0.33em] h-[0.33em] bg-[#082449] rounded-full"></span>
                    </div>
                  </div>
                  <h3 className="text-[#082449] text-[0.5em] font-montserrat font-[500] group-hover:translate-y-4 group-hover:scale-110 transition-all duration-500">
                    More
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiturSection;
