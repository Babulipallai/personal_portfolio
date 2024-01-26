import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FoodieGo from "../../img/foodiego.png";
import Movix from "../../img/movix.png";
import Ecommerce from "../../img/ecommerce.png";
import Youtube from "../../img/youtube.png";
import Dashboard from "../../img/dashboard.png";
import { themeContext } from "../../Context";

import { Link } from "react-router-dom";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <Link to="https://foodiego.netlify.app">
            <img src={FoodieGo} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="https://movix-1.netlify.app">
            <img src={Movix} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="https://youtubemax.netlify.app">
            <img src={Youtube} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="https://cartflix.netlify.app">
            <img src={Ecommerce} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="https://foodiego-admin-dashboard.netlify.app">
            <img src={Dashboard} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
