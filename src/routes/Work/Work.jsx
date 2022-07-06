import React from "react";
import "./Work.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import fitmeScreenshot from "../../components/resources/fitme.jpg";
import portfolioScreenshot from "../../components/resources/portfolio.png";
import workInProgressImage from "../../components/resources/work-in-progress.png";

const workArray = [
  {
    name: "My Portfolio",
    pictureLink: portfolioScreenshot,
    githubLink: "https://github.com/dn9z/dn9z.github.io",
    liveLink: "",
  },
  {
    name: "Workout Progress Tracker",
    pictureLink: fitmeScreenshot,
    githubLink: "https://github.com/dn9z/workout-progress-tracker",
    liveLink: "https://workout-progress-tracker.herokuapp.com/",
  },
  {
    name: "Social Media Plattform",
    pictureLink: workInProgressImage,
    githubLink: "https://github.com/dn9z/nexus_social-media-platform",
    liveLink: "",
  },
];

const Work = () => {
  const galleryVariants = {
    hidden: {
      opacity: 0,
      transform: "matrix3d(1,0,0.00,0,0.00,0.02,1.00,-0.002,0,-1,0.02,0,0,0,0,1)",
    },
    show: (i) => {
      return {
        opacity: [0, 1, 1, 1],
        transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
      };
    },
  };

  return (
    <>
      <TitleAnim titleString={"My Work"} className="work-title" />
      <motion.div
        className="gallery"
        initial="hidden"
        animate="show"
        transition={{ delayChildren: 2.6, staggerChildren: 0.5 }}
      >
        {workArray.map((ele, i) => {
          return (
            <motion.div
              key={i}
              className="card-container"
              variants={galleryVariants}
              custom={i}
              exit={{ y: "100vh" }}
            >
              <Tilt
                className="tilt-container"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                gyroscope={true}
              >
                <img
                  style={i === 1 ? { borderRadius: "5px 5px 0 0" } : { borderRadius: "none" }} // fix for border-radius not applying to fitme.png. 
                  src={ele.pictureLink}
                  alt=""
                />
                <div className="layer-3d">
                  <h1>{ele.name}</h1>
                  {ele.githubLink && (
                    <div className="work-links-container">
                      <a
                        href={ele.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        // onClick={() => {
                        // }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32px"
                          height="32px"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                        >
                          <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                        </svg>
                      </a>
                      {ele.liveLink&&<a
                        href={ele.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        // onClick={() => {
                        // }}
                      >
                        <div className="demo-button">
                          <span>Live</span>
                          <span>Demo</span>
                        </div>
                      </a>}
                    </div>
                  )}
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Work;
