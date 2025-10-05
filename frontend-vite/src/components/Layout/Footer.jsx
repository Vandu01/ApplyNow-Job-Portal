import React, { useContext } from 'react';
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiGithubFill, RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithVANDANA.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/vandana-verma-96653b291/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/xbgxhab/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://github.com/Vandu01/ApplyNow-Job-Portal.git"} target="_blank">
          <RiGithubFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer
 