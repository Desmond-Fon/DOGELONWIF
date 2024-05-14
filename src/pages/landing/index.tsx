import Nav from "../../components/Nav";
import arrow from "../../assets/arrow.png";
import hero from "../../assets/hero.png";
import chart from "../../assets/pie.png";
import section from "../../assets/section.png";
import xFooter from "../../assets/xFooter.png";
import tgFooter from "../../assets/tgFooter.png";
import Container from "../../assets/footer.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="overflow-x-hidden">
      <div className=" pt-[100px]">
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          className="sticky top-0 z-40"
        >
          <Nav />
        </motion.div>
        <div
          className="mt-[68px] mb-[194px] mx-[8%] rounded-[40px] bg-primary"
          id="home"
        >
          <motion.div
            ref={ref7}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView7 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center pt-[60px] pr-[68px] pl-[122px]"
          >
            <div className="flex flex-col items-center ">
              <div className=" text-center transform rotate-1 origin-center">
                <h1 className="text-[60px] text-white colab leading-[50px]">
                  DOGELONWIF
                </h1>
                <h2 className="text-[185px] leading-[182px] text-white colab">
                  HAT
                </h2>
                <p className="comics text-white font-[700] text-[17px] leading-[17px] tracking-[3%] px-[3%] text-center">
                  DogelonWifHat is on a mission to get to the Moon! Wif a Hat of
                  course :) , Embark with us on this journey to solidify our
                  place as the top doggy wif a hat on Solana. We will harness
                  the power of Elon Musk, Doge, and Wif!
                </p>
                <p className="comics text-white font-[700] text-[17px] leading-[17px] tracking-[3%] px-[11%] text-center pt-4">
                  Won't you come and make history Wif us?
                </p>
              </div>
              <button className="flex justify-center bg-[#FFF858] items-center gap-2 h-[40px] mt-[50px] w-[155px] bg-yellow rounded-full leading-[18px] cal font-[800] text-[13px] tracking-[3%]">
                BUY NOW <img src={arrow} alt="" />
              </button>
            </div>

            <img src={hero} alt="" className="mr-[120px]" />
          </motion.div>
        </div>

        <div
          id="roadmap"
          className="mt-[142px] pb-[160px] flex flex-col items-center colab"
        >
          <h1 className="text-secondary text-center text-[140px] tracking-[-4px] pt-[68px] leading-[133px]">
            Road <br />
            Map
          </h1>

          <div className="roadmapBg pt-14 flex justify-center gap-32 relative  w-full">
            <img src={section} alt="" className="relative" />
            <div className="flex justify-between absolute w-full pt-[40px] items-start">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -200 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md pl-[30px] mx-[16%] pr-[7px] pb-4 transform -rotate-2 origin-center w-[659px] comics text-center relative font-[700] pt-[50px]"
              >
                <h1 className="colab text-white flex justify-center items-center flex-col gap-0 absolute h-[93px] w-[93px] bg-[#FF9C4A] rounded-full -top-10 -left-10 text-[18px]">
                  <span className="text-[#A55200] text-[18px]">PHASE</span> 1
                </h1>
                <ul className="text-left pl-4">
                  <li className="text-[20px] leading-[32px]">
                    - STEALTH LAUNCH{" "}
                    <span className="text-[#66441D]">$DOGELONWIFHAT</span>
                  </li>
                  <li className="text-[20px] leading-[32px]">- 100 HOLDERS</li>
                  <li className="text-[20px] leading-[32px]">
                    - SPREAD THE WORD ON SOCIAL MEDIA
                  </li>
                </ul>
              </motion.div>

              <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 200 }}
                transition={{ duration: 0.5 }}
                className="bg-white mt-[100px] mr-[10%] shadow-md pl-[10px] pr-[2px] pb-4 transform rotate-3 origin-center w-[679px] comics text-center relative font-[700] pt-[50px]"
              >
                <h1 className="colab text-white flex justify-center items-center flex-col gap-0 absolute h-[93px] w-[93px] bg-[#FF9C4A] rounded-full -top-10 -right-10 text-[18px]">
                  <span className="text-[#A55200] text-[18px]">PHASE</span> 2
                </h1>
                <ul className="text-left pl-4">
                  <li className="text-[20px] leading-[32px]">
                    - COINGECKO/COINMARKETCAP LISTING
                  </li>
                  <li className="text-[20px] leading-[32px]">
                    - COMMUNITY PARTNERSHIPS
                  </li>
                  <li className="text-[20px] leading-[32px]">- CEX LISTINGS</li>
                  <li className="text-[20px] leading-[32px]">
                    - CREATE COMMUNITY DISCORD
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -200 }}
              transition={{ duration: 0.5 }}
              className="flex justify-between absolute bottom-20 w-full pt-[130px] items-start"
            >
              <div className="bg-white shadow-md pl-[30px] mx-[13%] pr-[7px] pb-4 transform -rotate-2 origin-center w-[459px] comics text-center relative font-[700] pt-[50px]">
                <h1 className="colab text-white flex justify-center items-center flex-col gap-0 absolute h-[93px] w-[93px] bg-[#FF9C4A] rounded-full -top-10 -left-10 text-[18px]">
                  <span className="text-[#A55200] text-[18px]">PHASE</span> 3
                </h1>
                <ul className="text-left pl-4">
                  <li className="text-[20px] leading-[32px]">- 1000 HOLDERS</li>
                  <li className="text-[20px] leading-[32px]">
                    - COINBASE/GEMINI LISTING
                  </li>
                  <li className="text-[20px] leading-[32px]">
                    - - LAUNCH DECENTRALIZED EXCHANGE
                  </li>
                </ul>
              </div>

              <motion.div
                ref={ref4}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : 200 }}
                transition={{ duration: 0.5 }}
                className="bg-white mt-[280px] mr-[22%] shadow-md pl-[10px] pr-[2px] pb-4 transform rotate-3 origin-center w-[479px] comics text-center relative font-[700] pt-[50px]"
              >
                <h1 className="colab text-white flex justify-center items-center flex-col gap-0 absolute h-[93px] w-[93px] bg-[#FF9C4A] rounded-full -top-10 -right-10 text-[18px]">
                  <span className="text-[#A55200] text-[18px]">PHASE</span> 4
                </h1>
                {/* <ul className="text-left pl-4"> */}
                <p className="text-[22px] leading-[32px]">
                  VIBE OUT AND <br /> RIDE IT TO THE MOON
                </p>
                {/* </ul> */}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="pt-[70px] flex items-center flex-col " id="tokenomics">
          <h1 className="text-[120px] colab text-secondary leading-[150px] tracking-[-6px]">
            Tokenomics
          </h1>
          <p className="text-center baloo text-[42px] leading-[33px] text-black tracking-[-2px] pb-[128px]">
            TOTAL SUPPLY : <span className="text-secondary">1,000,000,000</span>
          </p>

          <div className="w-[85%] rounded-t-[100px] pb-[100px]">
            <ul className="flex flex-col text-center gap-[25px]  text-secondary comics text-[32px] leading-[37px] font-[600] px-[22%] pb-[145px]">
              <li className=" flex justify-center gap-5 items-center">
                <div className="h-[10px] w-[10px] rounded-full bg-secondary"></div>{" "}
                Initial burned Liquidity Pool: 70%
              </li>
              <li className="flex justify-center w-full gap-5 items-start">
                <span className="h-[10px] w-[30px] mt-4 rounded-full bg-secondary"></span>
                20% of the supply is being held in a multi-sig wallet only to be
                used as tokens for future Centralized exchange listings, Bridges
                and Liquidity pools.
              </li>
              <li className=" flex justify-center gap-5 items-center">
                <div className="h-[10px] w-[10px] rounded-full bg-secondary"></div>
                Marketing and promotion : 10%
              </li>
            </ul>

            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <img src={chart} alt="" />
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={ref6}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView6 ? 1 : 0, x: inView6 ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center pb-[180px] pt-[100px] relative"
        >
          <div className="bg-primary pt-[97px] rounded-[18px] flex flex-col gap-5 items-center px-[190px] pb-[109px] relative">
            <img src={Container} alt="" className="absolute -left-40 -top-5" />
            <h2 className="text-[76px] leading-[96px] text-center text-[#FFE6CE] colab">
              Join our <br /> community
            </h2>
            <div className="flex justify-center items-center gap-3">
              <img src={xFooter} alt="" />
              <img src={tgFooter} alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
