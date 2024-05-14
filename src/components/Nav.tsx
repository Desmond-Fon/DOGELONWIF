import icon1 from '../assets/logo.png'
import x from "../assets/xHeader.png";
import telegram from "../assets/tgHeader.png";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
    return (
      <div className="mx-[5%] lg:mx-[14%] border-[0.5px] py-[8px] lg:py-[9px] px-[30px] lg:px-[145px] flex justify-between items-center bg-[#F7F7F7] rounded-full colab">
        <img src={icon1} alt="" className="w-[15px] lg:w-[60px]" />
        <div className="flex justify-center items-center gap-[40px] text-[22px] lg:text-[15px] text-primary font-[400]">
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
          <NavHashLink
            smooth
            to="/#tokenomics"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            Tokenomics
          </NavHashLink>
        </div>
        <div className="flex justify-center items-center gap-[3px]">
          <img src={x} alt="" className="w-[15px] lg:w-[30px]" />
          <img src={telegram} alt="" className="w-[15px] lg:w-[30px]" />
        </div>
      </div>
    );
}
 
export default Nav;