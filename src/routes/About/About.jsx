import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
const About = () => {
  const skillItemVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
      rotate: Math.random() * (10 - -10) + -10,
      transition: {},
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        bounce: 0.9,
        damping:10
      },
    },
  };
  return (
    <div className="about-main">
      <TitleAnim titleString={"About me"} className="about-title" />
      <div className="about-content">
        <motion.div
          className="description"
          initial={{
            y: "100vh",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 50, delay: 2.2 },
          }}
          exit={{ y: "100vh" }}
        >
          <p>
            What I enjoy most is creating experiences backed up by high usability and interaction. I
            endorse efficiency and prefer minimalistic approaches. Perfectionistic as I am, I also
            like working pixel perfect and I absolutely love putting effort into creating dynamic
            and reusable code.
          </p>
        </motion.div>

        <div className="skill-title-container">
          <motion.span
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 50, delay: 2.7 },
            }}
            exit={{ y: "100vh" }}
          >
            Technology:
          </motion.span>
          <motion.span
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 50, delay: 2.8 },
            }}
            exit={{ y: "100vh" }}
          >
            Software:
          </motion.span>
        </div>
        <div className="skill-item-container">
          <motion.ul
            className="skills"
            transition={{ delayChildren: 3.2, staggerChildren: 0.2 }}
            initial="hidden"
            animate="show"
            exit={{ y: "-120vh" }}
          >
            <motion.li variants={skillItemVariants}>C/C++/C#</motion.li>
            <motion.li variants={skillItemVariants}>Java</motion.li>
            <motion.li variants={skillItemVariants}>Javascript</motion.li>
            <motion.li variants={skillItemVariants}>TypeScript</motion.li>
            <motion.li variants={skillItemVariants}>CSS/SASS/Bootstrap</motion.li>
            <motion.li variants={skillItemVariants}>React</motion.li>
            <motion.li variants={skillItemVariants}>Node.js/Express</motion.li>
            <motion.li variants={skillItemVariants}>MongoDB</motion.li>
            <motion.li variants={skillItemVariants}>postgreSQL</motion.li>
          </motion.ul>
          <motion.ul
            className="skills"
            transition={{ delayChildren: 3.3, staggerChildren: 0.2 }}
            initial="hidden"
            animate="show"
            exit={{ y: "-100vh" }}
          >
            <motion.li variants={skillItemVariants}>Unity</motion.li>
            <motion.li variants={skillItemVariants}>Autodesk Maya</motion.li>
            <motion.li variants={skillItemVariants}>Adobe Photoshop</motion.li>
            <motion.li variants={skillItemVariants}>Adobe Illustrator</motion.li>
            <motion.li variants={skillItemVariants}>Figma</motion.li>
            <motion.li variants={skillItemVariants}>FL Studio</motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
