import { styles } from "../styles";
// import TextSpan from "./TextSpan";
import { FairyCanvas } from "./canvas";
import GalaxyCanvas from "./canvas/Galaxy";

// import { ComputersCanvas } from "./canvas";
// import { motion } from "framer-motion";

// import GalaxyCanvas from "./canvas/Galaxy";

const Hero = () => {
  // const title = "Hi I'm Yifan".split("");

  return (
    <section className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex  flex-col items- gap-5`}
      >
        {/*  <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 violet-gradient sm:h-60 " />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {/* {title.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00a0" : letter}
                </TextSpan>
              );
            })} */}
            Hi, {`I'm`}
            <span className="bg-gradient-to-r from-blue-300 via-purple-100 to-pink-300 inline-block text-transparent bg-clip-text">
              Yifan
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-4  text-white-100`}>
            A Front-End Software Developer
          </p>
          <a href="#about">
            <p className="mt-8 bg-gradient-to-r from-blue-300 via-purple-100 to-pink-300 inline-block text-transparent bg-clip-text">
              About Me {`>`}
            </p>
          </a>
        </div>
      </div>

      <GalaxyCanvas />
      <FairyCanvas />
      {/* <ComputersCanvas /> */}
      {/* <div className=" hidden sm:flex absolute bottom-0 pr-20 pb-20 w-full  justify-end items-center">
        <a href="#about">
          <div className="w-[35px] h-[58px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mt-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
