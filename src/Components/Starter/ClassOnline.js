import React from "react";
import Body from "./Body";
import SearchStarter from "./SearchStarter";
import Card2 from "./Card2";
import CardStarter from "./CardStarter";

const ClassOnline = () => {
  return (
    <>
      <Body>
        <SearchStarter />
        <div className=" text-[36px] w-1/2 my-8">
          <span className="font-poppins text-colorMain font-[700] text-[1em] px-8">
            Lanjutin lagi yuk !
          </span>
        </div>

        <div className="flex flex-row w-full mx-auto text-[36px]">
          <Card2 title={"Otomasi Industri"} percentage={"45%"} />
          <Card2 title={"Otomasi Industri"} percentage={"45%"} />
          <Card2 title={"Otomasi Industri"} percentage={"45%"} />
          <Card2 title={"Otomasi Industri"} percentage={"45%"} />
        </div>

        <div className=" text-[36px] w-1/2 my-8">
          <span className="font-poppins text-colorMain font-[700] text-[1em] px-8">
            Ayo mulai belajar hal baru!
          </span>
        </div>

        <div className="grid grid-cols-3 w-[90%] gap-6 justify-items-center content-center text-[36px]   mx-auto p-8">
          {/* card  */}

          <CardStarter
            image={"/Images/starter/operasional.png"}
            title={"Operasional"}
            name={"Operasional"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam."
            }
            price={"Rp. 1.000.000"}
          />

          <CardStarter
            image={"/Images/starter/operasional.png"}
            title={"Operasional"}
            name={"Operasional"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam."
            }
            price={"Rp. 1.000.000"}
          />

          <CardStarter
            image={"/Images/starter/operasional.png"}
            title={"Operasional"}
            name={"Operasional"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam."
            }
            price={"Rp. 1.000.000"}
          />

          {/* card 2 */}

          <CardStarter
            image={"/Images/starter/operasional.png"}
            title={"Operasional"}
            name={"Operasional"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam."
            }
            price={"Rp. 1.000.000"}
          />

          <CardStarter
            image={"/Images/starter/operasional.png"}
            title={"Operasional"}
            name={"Operasional"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam."
            }
            price={"Rp. 1.000.000"}
          />

          <CardStarter
            image={"/Images/starter/operasional.png"}
            title={"Operasional"}
            name={"Operasional"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nunc, aliquam, aliquam."
            }
            price={"Rp. 1.000.000"}
          />
        </div>
      </Body>
    </>
  );
};

export default ClassOnline;
