import Nav from "../../components/Nav";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import hero from "../../assets/hero.png";
import chart from "../../assets/pie.png";
// import paper from "../../assets/paper.png";
// import paper2 from "../../assets/paper2.png";
// import Container from "../../assets/Container.png";

const Landing = () => {
  return (
    <div className="">
      <div className=" pt-[100px]">
        <div className="sticky top-0 z-40">
          <Nav />
        </div>
        <div className="headerBg mt-[68px] mx-[6%] rounded-[40px] bg-primary" id="home">
          <div className="flex justify-center items-center flex-col">
            <img src={logo} alt="" />
            <p className="cals text-white font-[600] text-[25px] leading-[26px] tracking-[3%] w-[50%] text-center">
              Completely stealth launched, no presale bullshit, zero taxes
              (ever). Almost entire LP burned.{" "}
              <span className="text-yellow">$nodiddy</span> is built by the
              people, for the people.
            </p>

            <button className="flex justify-center items-center gap-2 h-[55px] mt-[30px] w-[206px] bg-yellow rounded-full leading-[18px] cals font-[600] text-[17px] tracking-[3%]">
              BUY NOW <img src={arrow} alt="" />
            </button>

            <img src={hero} alt="" />
          </div>
        </div>

        <div
          id="roadmap"
          className="roadmapBg mt-[142px] pb-[160px] flex flex-col items-center baloo "
        >
          <h1 className="text-white text-[234px] tracking-[-20px] leading-[190px]">
            RoadMap
          </h1>

          <div className="pt-14 flex justify-center gap-32">
            <div className="flex flex-col items-start gap-16">
              <div className="bg-yellow rounded-[25px] py-[25px] px-3 transform rotate-1 origin-center w-[330px] text-center relative">
                {/* <img src={paper} alt="" className="absolute -top-14 -left-16" /> */}
                <h1 className="baloo text-[41px]">
                  <span className="text-[#66441D]">PHASE</span> 1
                </h1>
                <ul className="text-left baloo pl-4">
                  <li className="text-[30px] leading-[48px]">
                    - STEALTH LAUNCH{" "}
                    <span className="text-[#66441D]">$NODIDDY</span>
                  </li>
                  <li className="text-[30px] leading-[48px]">- 100 HOLDERS</li>
                  <li className="text-[30px] leading-[48px]">
                    - SPREAD THE WORD ON SOCIAL MEDIA USING #NODIDDY
                  </li>
                </ul>
              </div>
              <div className="bg-yellow rounded-[25px] py-[30px] px-3 transform rotate-3 origin-center w-[330px] text-center relative">
                <h1 className="baloo text-[41px]">
                  <span className="text-[#66441D] pb-3">PHASE</span> 3
                </h1>
                <ul className="text-left baloo pl-4">
                  <li className="text-[30px] leading-[48px]">
                    - 1,000 HOLDERS
                  </li>
                  <li className="text-[30px] leading-[48px]">
                    - COINBASE/GEMINI LISTINGS
                  </li>
                  <li className="text-[30px] leading-[48px]">
                    - <span className="text-[#66441D]">$NODIDDY</span>{" "}
                    DECENTRALIZED EXCHANGE
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start gap-10 mt-10">
              <div className="bg-yellow rounded-[25px] py-[25px] px-3 transform -rotate-2 origin-center w-[330px] text-center relative">
                <h1 className="baloo text-[41px]">
                  <span className="text-[#66441D]">PHASE</span> 2
                </h1>
                <ul className="text-left baloo pl-4">
                  <li className="text-[30px] leading-[48px]">
                    - COINGECKO / COINMARKETCAP LISTINGS
                  </li>
                  <li className="text-[30px] leading-[48px]">
                    - COMMUNITY PARTNERSHIPS
                  </li>
                  <li className="text-[30px] leading-[48px]">- CEX LISTINGS</li>
                  <li className="text-[30px] leading-[48px]">
                    - CREATE <span className="text-[#66441D]">$NODIDDY</span>{" "}
                    DISCORD
                  </li>
                </ul>
              </div>
              <div className="bg-yellow rounded-[25px] py-[65px] px-3 transform -rotate-4 origin-center w-[330px] text-center relative">
                {/* <img
                  src={paper2}
                  alt=""
                  className="absolute -bottom-[80px] -right-16"
                /> */}
                <h1 className="baloo text-[41px]">
                  <span className="text-[#66441D]">PHASE</span> 1
                </h1>
                <p className="text-center baloo pl-4 text-[30px] leading-[48px]">
                  WE VIBE OUT AND RIDE THE MOON, NODIDDY
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[230px] flex items-center flex-col baloo" id="tokenomics">
          <h1 className="text-[145px] text-white leading-[122px] tracking-[-6px]">
            Tokenomics
          </h1>
          <p className="text-center text-[42px] leading-[33px] text-white tracking-[-2px] pb-[100px]">
            TOTAL SUPPLY : <span className="text-yellow">1,000,000,000</span>
          </p>

          <div className="w-[85%] bg-gradient-to-b from-colFrom to-colTo pt-[95px] rounded-t-[100px] pb-[100px]">
            <ul className="flex flex-col text-center gap-[25px] list-disc text-white cals text-[32px] leading-[37px] font-[600] px-[22%] pb-[145px]">
              <li className="">Initial burned Liquidity Pool: 70%</li>
              <li>
                20% of the supply is being held in a multi-sig wallet only to be
                used as tokens for future Centralized exchange listings, Bridges
                and Liquidity pools.
              </li>
              <li>Marketing and promotion : 10%</li>
            </ul>

            <div className="flex justify-center items-center">
                <img src={chart} alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-10">
{/* <img src={Container} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
