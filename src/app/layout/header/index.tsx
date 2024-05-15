import ThemeSwitch from "@/components/darkMode/Theme-dark";
import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className=" flex container max-w-7xl h-[76px] gap-8 items-center justify-between px-5 mx-auto">
      <div className="flex items-center gap-2 ">
      <Link href="/">
      <h1 className="flex text-[32px] font-bold">Logo</h1></Link>
        <div className="flex items-center rounded-md px-2 gap-2 bg-green-400 w-[186px] h-[44px]">
          <button>
            <IoMdMenu size={32} color="white" />
          </button>
          <h1 className="flex font-semibold text-white text-sm">
            Tovarlar katalogi
          </h1>
        </div>
      </div>
      <div className="flex items-center bg-green-400 h-[44px] justify-start px-1 pr-2 gap-1 rounded-md w-[548px] ">
        <input
          type="search"
          placeholder="Tovarlarni izlash"
          className="w-[100%] outline-none border-none pl-2 rounded-md h-[38px]"
        />
        <IoSearch size={32} color="white" />
      </div>
      <div className="flex justify-between items-center gap-6 ">
        <div className="flex flex-col items-center">
          <MdOutlineShoppingCart size={28} />
          <span className="flex text">Savat</span>
        </div>
        <div className="flex flex-col items-center">
          <MdFavoriteBorder size={28} />
          <span className="flex text">Saralanganlar</span>
        </div>
        <div className="flex flex-col items-center">
          <button className=" rounded-md border-green-400 border-2  h-[44px] w-[76px]">
            Kirish
          </button>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
