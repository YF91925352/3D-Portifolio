import { styles } from "../styles";
import JumpingArrow from "./Arrow";
// import TextSpan from "./TextSpan";
// import { FairyCanvas } from "./canvas";
import GalaxyCanvas from "./canvas/Galaxy";
import { useState, useEffect } from "react";
// import { ComputersCanvas } from "./canvas";
// import { motion } from "framer-motion";

// import GalaxyCanvas from "./canvas/Galaxy";

const Hero = () => {
  // const title = "Hi I'm Yifan".split("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(110 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ["Full-Stack Developer", "Web Designer"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex  flex-col items- gap-5`}
      >
        {/*  <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 violet-gradient sm:h-60 " />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} font-mono text-white`}>
            Hi, {`I'm`} Yifan
          </h1>
          <h1 className={`${styles.heroSubText} `}>
            {/* {title.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00a0" : letter}
                </TextSpan>
              );
            })} */}

            <span className="bg-gradient-to-r  from-yellow-100 via-blue-100 to-blue-300 inline-block text-transparent bg-clip-text font-mono">
              {text}
            </span>
          </h1>
          <p className="w-[70%] sm:w-[50%] mt-16 font-mono ">
            As a full-stack developer, I am dedicated to turning ideas into
            developing rich web applications and seamless web experiences.
          </p>
          <a href="#about">
            <p className="mt-4 bg-gradient-to-r from-yellow-100 via-blue-100 to-blue-300 inline-block text-transparent bg-clip-text font-mono">
              More About Me {`>`}
            </p>
          </a>
        </div>
      </div>

      <GalaxyCanvas />
      {/*  <FairyCanvas /> */}
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

      {/* <div className=" flex items-center justify-center transform rotate-[90deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            transform="rotate(-90)"
          >
            <path
              d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
              fill="aliceblue"
            ></path>
          </svg>
          <span>Back To Top</span>
        </div>
        <a href="#about">
          <div className=" flex items-center justify-center transform rotate-[-90deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              transform="rotate(-90)"
            >
              <path
                d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                fill="aliceblue"
              ></path>
            </svg>
            <span>Scroll Down</span>
          </div>
        </a> */}
      <div className="absolute bottom-7 w-full flex justify-center">
        <a href="#about">
          <JumpingArrow />
        </a>
      </div>
    </section>
  );
};

export default Hero;
