import React, { useState } from "react";
import Drawer from "./Drawer";

const TopNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className=" text-[#333] bg-[#c2c2af] py-[10px] px-[20px] text-[14px] lg:text-[16px] font-suisse-regular text-left lg:text-center">
        <p>
          Trained Aesop consultations are available to provide bespoke skin care
          advise.
          <span className=" pl-2 hover:underline underline lg:no-underline font-semibold cursor-pointer font-suisse-medium text-[#333]">
            Book a video consultation
          </span>
        </p>
      </div>
      <div className="lg:h-[46px] pt-[12px] px-[20px] pb-[8px] text-[#fffef2] bg-[#252525] font-suisse-regular text-[14px] lg:text-[16px]">
        <button
          onClick={toggleDrawer}
          className="hover:border-b border-white lg:mx-64 flex items-center gap-4 lg:text-center text-left"
        >
          <p>
            Click and Collect is now available at Hong Kong stores. Enjoy
            complimentary shipping on orders over HK$400
          </p>
          <p className="text-[#c2c2af]">+</p>
        </button>
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      </div>
    </>
  );
};

export default TopNav;
