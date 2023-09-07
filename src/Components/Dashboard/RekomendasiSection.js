import React from "react";

const RekomendasiSection = () => {
  return (
    <>
      <div className="w-full bg-[#FF9620] text-[24px] lg:text-[30px] xl:text-[38px]">
        <div className="flex flex-col justify-center items-center py-20">
          <div className="grid grid-cols-1 w-3/4 justify-items-center items-center gap-4">
            <h2 className="font-montserrat font-[700] text-center text-white text-[1em]">
              Rekomendasi Belajar
            </h2>
            <p className="font-montserrat font-[500] text-center text-white text-[0.65em]">
              Alpha Academy memberikanmu rekomendasi belajar yang relevan sesuai
              dengan materi-materi yang telah anda pilih dan jalani
            </p>
            <div className="flex w-[50%] rounded-[0.375em] justify-center text-center items-center bg-[#082449] text-white font-montserrat font-[600] text-[0.5em] px-2 py-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-main gap-8 lg:gap-4 justify-items-center items-center py-12">
            <div className="bg-[#FFFFFF] w-[7.7em] h-[7.7em] rounded-3xl mx-auto ">
              <div className="flex flex-col justify-center items-center p-8">
                <div className="w-[3.54em] h-[3.54em] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[0.2em] border-[#082449]">
                  <img
                    src="/Images/geo.png"
                    className="w-[2.08em] h-[2.52em] object-cover"
                    alt="geo"
                  />
                </div>
                <h2 className="text-[0.5em] py-4 font-[700] text-[#082449]">
                  Perkenalan Geografi
                </h2>
                <div className="w-[6.36em] h-[1.71em] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
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
                  <span className="font-montserrat text-[0.66em] font-[700] text-black">
                    30
                  </span>
                  <div className="w-[0.1875em] h-[1.21em] bg-[#ddd]"></div>
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
                  <span className="font-montserrat text-[0.67em] font-[700] text-black">
                    25
                  </span>
                </div>
              </div>
            </div>

            {/* ke - 2 */}
            <div className="bg-[#FFFFFF] w-[7.7em] h-[7.7em] rounded-3xl mx-auto">
              <div className="flex flex-col justify-center items-center p-8">
                <div className="w-[3.54em] h-[3.54em] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[0.2em] border-[#082449]">
                  <img
                    src="/Images/geo.png"
                    className="w-[2.08em] h-[2.52em] object-cover"
                    alt="geo"
                  />
                </div>
                <h2 className="text-[0.5em] py-4 font-[700] text-[#082449]">
                  Perkenalan Geografi
                </h2>
                <div className="w-[6.36em] h-[1.71em] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
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
                  <span className="font-montserrat text-[0.66em] font-[700] text-black">
                    30
                  </span>
                  <div className="w-[0.1875em] h-[1.21em] bg-[#ddd]"></div>
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
                  <span className="font-montserrat text-[0.67em] font-[700] text-black">
                    25
                  </span>
                </div>
              </div>
            </div>

            {/* ke - 3 */}
            <div className="bg-[#FFFFFF] w-[7.7em] h-[7.7em] rounded-3xl mx-auto">
              <div className="flex flex-col justify-center items-center p-8">
                <div className="w-[3.54em] h-[3.54em] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[0.2em] border-[#082449]">
                  <img
                    src="/Images/geo.png"
                    className="w-[2.08em] h-[2.52em] object-cover"
                    alt="geo"
                  />
                </div>
                <h2 className="text-[0.5em] py-4 font-[700] text-[#082449]">
                  Perkenalan Geografi
                </h2>
                <div className="w-[6.36em] h-[1.71em] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
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
                  <span className="font-montserrat text-[0.66em] font-[700] text-black">
                    30
                  </span>
                  <div className="w-[0.1875em] h-[1.21em] bg-[#ddd]"></div>
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
                  <span className="font-montserrat text-[0.67em] font-[700] text-black">
                    25
                  </span>
                </div>
              </div>
            </div>

            {/* ke - 4 */}

            <div className="bg-[#FFFFFF] w-[7.7em] h-[7.7em] rounded-3xl mx-auto">
              <div className="flex flex-col justify-center items-center p-8">
                <div className="w-[3.54em] h-[3.54em] flex justify-center items-center bg-[#E7D4BF] rounded-full box-border border-[0.2em] border-[#082449]">
                  <img
                    src="/Images/geo.png"
                    className="w-[2.08em] h-[2.52em] object-cover"
                    alt="geo"
                  />
                </div>
                <h2 className="text-[0.5em] py-4 font-[700] text-[#082449]">
                  Perkenalan Geografi
                </h2>
                <div className="w-[6.36em] h-[1.71em] bg-[#E7D4BF] flex flex-row justify-between px-10 items-center rounded-xl">
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
                  <span className="font-montserrat text-[0.66em] font-[700] text-black">
                    30
                  </span>
                  <div className="w-[0.1875em] h-[1.21em] bg-[#ddd]"></div>
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
                  <span className="font-montserrat text-[0.67em] font-[700] text-black">
                    25
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RekomendasiSection;
