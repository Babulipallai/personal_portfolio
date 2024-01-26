import React, { useContext, useState, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import ArrowUpLine from "remixicon-react/ArrowUpLineIcon";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPoint = 200;

    // Show/hide the button based on the scroll position
    setIsVisible(scrollY > triggerPoint);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Intro" id="Intro">
        {/* left name side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Babuli Pallai</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <ScrollLink to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </ScrollLink>
          {/* social icons */}
          <div className="i-icons">
            <RouterLink to="https://github.com/Babulipallai">
              <img src={Github} alt="" />
            </RouterLink>

            <RouterLink to="https://www.linkedin.com/in/babuli-pallai-1290891b8/">
              <img src={LinkedIn} alt="" />
            </RouterLink>

            <RouterLink to="https://www.instagram.com/babulipallai1">
              <img src={Instagram} alt="" />
            </RouterLink>
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv img={crown} text1="Web" text2="Developer" />
          </motion.div>

          {/* animation */}
          <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          >
            {/* floatinDiv mein change hy dark mode ka */}
            <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
          </motion.div>

          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>

      <div
        className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <ArrowUpLine />
      </div>
    </>
  );
};

export default Intro;
