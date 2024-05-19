import icon1 from "../assets/logo.png";
import x from "../assets/xHeader.png";
import telegram from "../assets/tgHeader.png";
import { NavHashLink } from "react-router-hash-link";
import menu from "../assets/menu.png";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-[5%] lg:mx-[14%]  py-[8px] lg:py-[9px] px-[64px] lg:px-[145px] flex justify-between items-center bg-[#F7F7F7] rounded-full colab ">
      <div
        className={`${
          isOpen
            ? "fixed bg-primary top-0 right-0 w-[60%] flex-col transition-all duration-300 ease-in-out py-[10px] px-[24px] rounded-l-[10px] flex justify-between gap-[25px] h-[100vh] pt-[30px] text-white lg:hidden activeNav"
            : "fixed right-[-100%] transition-all duration-300 ease-in-out"
        } `}
      >
        <div className="text-center flex flex-col justify-start items-end pr-10 gap-[45px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-10 h-10 text-white"
            onClick={toggleMenu}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="/#home"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            Home
          </NavHashLink>
          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="/#roadmap"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            RoadMap
          </NavHashLink>
          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="/#tokenomics"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            Tokenomics
          </NavHashLink>
          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="/#whereToBuy"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            Where to Buy
          </NavHashLink>

          <div className="flex justify-center items-center gap-[9px] ">
            <img src={x} alt="" className="w-[30px]" />
            <img src={telegram} alt="" className="w-[30px]" />
          </div>
        </div>
      </div>
      <img src={icon1} alt="" className="w-[22px] lg:w-[60px]" />
      <img
        src={menu}
        alt=""
        className="w-[20px] lg:w-[60px] lg:hidden"
        onClick={toggleMenu}
      />
      <div className="hidden lg:flex justify-center items-center gap-[40px] text-[22px] lg:text-[15px] text-secondary font-[400]">
        <NavHashLink
          smooth
          to="/#home"
          className="leading-[18px] hover:text-primary/75 text-[18px]"
        >
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#roadmap"
          className="leading-[18px] hover:text-primary/75 text-[18px]"
        >
          RoadMap
        </NavHashLink>
        {/* <NavHashLink
          smooth
          to="/#tokenomics"
          className="leading-[18px] hover:text-primary/75 text-[18px]"
        >
          Tokenomics
        </NavHashLink> */}
        <NavHashLink
          smooth
          to="/#whereToBuy"
          className="leading-[18px] hover:text-primary/75 text-[18px]"
        >
          Where to Buy
        </NavHashLink>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-[3px]">
        <a href="https://x.com/dogelonwif" target="_blank" rel="noreferrer">
          <img src={x} alt="" className="w-[15px] lg:w-[30px]" />
        </a>
        <a
          href="https://t.me/+43L6pUblRYljNjgx"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="" className="w-[15px] lg:w-[30px]" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
