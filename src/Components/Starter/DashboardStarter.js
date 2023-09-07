import React from "react";
import { Dropdown, Item } from "flowbite-react";
import CardStarter from "./CardStarter";
import SearchStarter from "./SearchStarter";
import Body from "./Body";

const DashboardStarter = () => {
  return (
    <>
      <Body>
        <SearchStarter />
        <div className="flex justify-center items-center text-[30px] xl:text-[36px] w-1/2 my-8">
          <span className="font-poppins text-colorMain font-[700] text-[1em] px-8">
            Ayo mulai belajar hal baru!
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 gap-6 justify-items-center content-center text-[20px] md:text-[25px] lg:text-[30px] xl:text-[36px]   mx-auto p-8">
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

export default DashboardStarter;
