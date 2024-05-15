import Nav from "../../components/Nav";
import arrow from "../../assets/arrow.png";
import hero from "../../assets/hero.png";
import chart from "../../assets/pie.png";
import section from "../../assets/section.png";
import xFooter from "../../assets/xFooter.png";
import footer2 from "../../assets/footer2.png";
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
    <div className="">
      <div className="pt-[35px] lg:pt-[100px]">
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 }}
          className="sticky top-0 left-0 z-40"
        >
          <Nav />
        </motion.div>
        <div
          className="mt-[26px] lg:mt-[68px] lg:mb-[194px] mx-[5%] lg:mx-[8%] rounded-[13px] lg:rounded-[40px] bg-primary"
          id="home"
        >
          <motion.div
            ref={ref7}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView7 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-between flex-col lg:flex-row items-center lg:pt-[60px] lg:pr-[68px] lg:pl-[122px] px-[70px] lg:px-0 pt-[36px]"
          >
            <div className="flex flex-col items-center ">
              <div className=" text-center lg:transform lg:rotate-1 lg:origin-center">
                <h1 className="text-[29px] lg:text-[60px] text-white colab leading-[35px] lg:leading-[50px]">
                  DOGELONWIF
                </h1>
                <h2 className="text-[91px] lg:text-[185px] leading-[80px] lg:leading-[182px] text-white colab">
                  HAT
                </h2>
                <p className="comics text-white font-[700] text-[10px] lg:text-[17px] leading-[13px] lg:leading-[18px] tracking-[3%] lg:px-[3%] text-center">
                  DogelonWifHat is on a mission to get to the Moon! Wif a Hat of
                  course :) , Embark with us on this journey to solidify our
                  place as the top doggy wif a hat on Solana. We will harness
                  the power of Elon Musk, Doge, and Wif!
                </p>
                <p className="comics text-white font-[700] text-[10px] lg:text-[17px] leading-[17px] tracking-[3%] lg:px-[11%] text-center pt-1 lg:pt-4">
                  Won't you come and make history Wif us?
                </p>
              </div>
              <button className="flex justify-center bg-[#FFF858] items-center pt-1 lg:pt-0 px-2 gap-2 h-[20px] lg:h-[40px] mt-[20px] lg:mt-[50px] lg:w-[155px] bg-yellow rounded-full leading-[18px] cal font-[800] text-[10px] lg:text-[13px] tracking-[3%]">
                BUY NOW <img src={arrow} alt="" />
              </button>
            </div>

            <img
              src={hero}
              alt=""
              className="lg:mr-[120px] h-[260px] w-[290px] lg:w-[584px] lg:h-[628px]"
            />
          </motion.div>
        </div>

        <div
          id="roadmap"
          className="mt-[52px] lg:mt-[142px] lg:pb-[160px] flex flex-col items-center colab"
        >
          <h1 className="text-secondary text-center text-[52px] lg:text-[140px] tracking-[-4px] lg:pt-[68px] leading-[64px] lg:leading-[133px]">
            Road <br />
            Map
          </h1>

          <div className="roadmapBg pt-14 flex justify-center gap-32 relative  w-full">
            <img src={section} alt="" className="relative" />
            <div className="hidden lg:flex justify-between absolute w-full pt-[40px] items-start">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -100 }}
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
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 100 }}
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
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -100 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex justify-between absolute bottom-20 w-full pt-[130px] items-start"
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
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : 100 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex bg-white mt-[280px] mr-[22%] shadow-md pl-[10px] pr-[2px] pb-4 transform rotate-3 origin-center w-[479px] comics text-center relative font-[700] pt-[50px]"
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

        <div
          className="pt-[80px] lg:pt-[70px] flex items-center flex-col "
          id="tokenomics"
        >
          <h1 className="text-[33px] lg:text-[120px] colab text-secondary leading-[42px] lg:leading-[150px] tracking-[-2px] lg:tracking-[-6px]">
            Tokenomics
          </h1>
          <p className="text-center baloo text-[13px] lg:text-[42px] leading-[14px] lg:leading-[33px] text-black tracking-[-2px] pb-[47px] lg:pb-[128px]">
            TOTAL SUPPLY : <span className="text-secondary">1,000,000,000</span>
          </p>

          <div className="w-[85%] rounded-t-[100px] pb-[100px]">
            <ul className="flex flex-col text-center gap-[10px] lg:gap-[25px]  text-secondary comics text-[13px] lg:text-[32px] leading-[14px] lg:leading-[37px] font-[600] px-[10%] lg:px-[22%] pb-[40px] lg:pb-[145px]">
              <li className=" flex justify-center gap-5 items-center">
                <div className="h-[6px] lg:h-[10px] w-[6px] lg:w-[10px] rounded-full bg-secondary"></div>{" "}
                Initial burned Liquidity Pool: 70%
              </li>
              <li className="flex justify-center w-full gap-3 lg:gap-5 items-start">
                <span className="h-[6px] w-[17px] lg:h-[10px] lg:w-[30px] mt-2 lg:mt-4 rounded-full bg-secondary"></span>
                20% of the supply is being held in a multi-sig wallet only to be
                used as tokens for future Centralized exchange listings, Bridges
                and Liquidity pools.
              </li>
              <li className=" flex justify-center gap-5 items-center">
                <div className="h-[6px] lg:h-[10px] w-[6px] lg:w-[10px] rounded-full bg-secondary"></div>
                Marketing and promotion : 10%
              </li>
            </ul>

            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center px-[5%]"
            >
              <img src={chart} alt="" />
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={ref6}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center flex-col lg:flex-row lg:ml-10 items-center pb-[50px] lg:pb-[180px] lg:pt-[100px] relative"
        >
          <div className="bg-primary lg:pt-[97px] rounded-[18px] flex flex-col gap-5 items-center px-[20px] lg:px-[120px] pb-[220px] lg:pb-[109px] relative">
            <img
              src={Container}
              alt=""
              className="lg:flex absolute hidden -left-20 -top-10"
            />
            <h2 className="text-[42px] leading-[52px] lg:text-[76px] lg:pl-[280px] lg:leading-[96px] text-center text-[#FFE6CE] colab pt-[120px] lg:pt-0">
              Join our <br /> community
            </h2>
            <div className="flex justify-center items-center gap-3 lg:pl-[280px]">
              <img
                src={xFooter}
                alt=""
                className="w-[40px] h-[40px] lg:h-[74px] lg:w-[74px]"
              />
              <img
                src={tgFooter}
                alt=""
                className="w-[40px] h-[40px] lg:h-[74px] lg:w-[74px]"
              />
            </div>
          </div>

          <img src={footer2} alt="" className="lg:hidden -mt-[170px] relative z-40" />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
