import React, { useContext } from 'react';
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiGithubFill, RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithSahil.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/sahil-verma-bb95a6279/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/x___sahil_075/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={"https://github.com/sahil-verma665/Job-Portal-Web-app"} target="_blank">
          <RiGithubFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer
 