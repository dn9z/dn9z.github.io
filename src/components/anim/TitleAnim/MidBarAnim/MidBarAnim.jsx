import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MidBarAnim.scss";
import { MyContext } from "../../../Context/Context";
import { useViewportScroll, useTransform } from "framer-motion";

const MidBarAnim = () => {
  const { location } = useContext(MyContext);
  const { scrollYProgress } = useViewportScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);

  const inputRange = [0, 1];
  const barSize = [71, 120];
  const tranformedBarSize = useTransform(scrollYProgress, inputRange, barSize);

  useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]); 

  const barVariants = {
    hidden: {
      y: "100vh",
    },
    transition: {
      y: "25rem",
    },
    show: {
      y: 0,
      transition: {
        duration: location.pathname === "/" ? 2: 1,
        type: 'spring',
        bounce: 0.15
        // stiffness:50
      },
    },
    showDynamic: {
      y: 0,
      height: `${tranformedBarSize.current}vh`,
      transition: {
        duration: 1,
      },
    },
    showLong: {
      y: 0,
      height: `80vh`,
      transition: {
        duration: 1,
        type: 'spring',
        bounce: 0.15
      },
    },

    exit: {
      y: "30rem",
    },
  };
  return (
    <motion.div
      className="title-bar"
      variants={barVariants}
      initial={location.pathname === "/" ? "hidden" : "transition"}
      animate={location.pathname === "/work" ? "showDynamic" : location.pathname === "/about" ? 'showLong' : "show"}
      exit={location.pathname === "/" ? "hidden" : "transition"}
      custom={hookedYPostion}
    ></motion.div>
  );
};

export default MidBarAnim;
