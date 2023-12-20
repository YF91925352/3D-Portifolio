import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const JumpingArrow = () => {
  const controls = useAnimation();

  const jumpAnimation = {
    y: [0, -10, 0, -10, 0], // Define the jump trajectory
    transition: { duration: 2, repeat: Infinity }, // Duration and repeat options
  };

  useEffect(() => {
    controls.start(jumpAnimation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
        fill="aliceblue"
        animate={controls}
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </motion.svg>
    </div>
  );
};

export default JumpingArrow;
