import React, { useContext } from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Gmail from "@iconscout/react-unicons/icons/uil-envelope-alt";

import { Link } from "react-router-dom";

const Footer = () => {
  const emailAddress = "babulipalai6@gmail.com";

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <Link to="https://www.instagram.com/babulipallai1">
            <Insta color="white" size={"3rem"} />
          </Link>

          <Link to="https://www.facebook.com/babuli.pallai.75">
            <Facebook color="white" size={"3rem"} />
          </Link>

          <Link to="https://github.com/Babulipallai">
            <Gitub color="white" size={"3rem"} />
          </Link>

          <Link to={`mailto:${emailAddress}`}>
            <Gmail color="white" size={"3rem"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
