import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.44,0.55,1)",
        "scale3d(0.75,1.25,1)",
        "scale3d(1.25,0.85,1)",
        "scale3d(0.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: { times: [0, 0.4, 0.5, 0.6, 0.7, 0.8] },
    });
    setIsPlaying(true);
  };
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
};
TextSpan.propTypes = {
  children: PropTypes.string.isRequired,
};
export default TextSpan;
