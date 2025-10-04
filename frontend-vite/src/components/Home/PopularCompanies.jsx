import React from "react";
import { FaGoogle, FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Amazon",
      location: "Street 10 Bangalore, India",
      openPositions: 50,
      icon: <FaAmazon />,
    },
    {
      id: 2,
      title: "Google",
      location: "Street 20 gurugram, India",
      openPositions: 10,
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Flipkart",
      location: "Street 50 Pune, India",
      openPositions: 30,
      icon: <SiFlipkart />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;