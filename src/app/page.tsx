/* eslint-disable react/no-unescaped-entities */
import SimpleSlider from "@/components/slider";
import Link from "next/link";
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import ProductHome from "./home/page";
// import { Link } from 'next/link';

const Home = () => {
  return (
    <div className=" w-full max-w-7xl mx-auto flex-col container">
      <div className="flex items-center mb-[40px] justify-between">
        <span className="flex font-semibold text-sm text-gray-300">
          Smartfonlar va gadjetlar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
          Noutbuklar, kompyuterlar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
          TV va proektorlar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
          Audiotexnikalar
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
          Uy uchun texnika
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
          Go'zallik va sog'liq
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
          Oshxona uchun texnika
        </span>
        <span className="flex font-semibold text-sm text-gray-300">
          Aqlli uy
        </span>
        <span className="flex font-semibold items-center  gap-2 text-sm ">
          Yana <FaChevronDown />
        </span>
      </div>
      <SimpleSlider />
      <div className="flex items-start mt-[30px] flex-col">
        <div className="flex items-center mb-[30px] gap-3">
          <span className="text-[22px] font-semibold">Chegirmalar🔥</span>
          <Link
            href="./products"
            className="flex text-blue-400 mx-1 font-semibold items-center gap-1 text-[22px]"
          >
            Hammasini ko'rish <FaChevronRight size={18} />
          </Link>
        </div>
        <ProductHome/>

      </div>
    </div>
  );
};

export default Home;
