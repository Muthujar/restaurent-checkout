import React from "react";
import "./header.css";
import companylogo from "../../img/comlogo.png";
import location from "../../img/location.png";
import toggle from "../../img/toggle.png";
import bell from "../../img/bell.png";
import pic from "../../img/Pic.png";

export const Header = () => {
  return (
    <div className="navbar">
      <div className="d-flex">
        <div className="company-logo ml-4 py-1">
          <img classname="" alt="" src={companylogo}></img>
        </div>

        <div className="location  ">
          <img classname="" alt="" src={location}></img>
        </div>
        <div className="text-white mx-3 ">
          <p className="my-2">Chennai</p>
        </div>
        <div className="px-4  ">
          <input className="searchbox "></input>
        </div>
        <div className="">
          <img classname="" alt="" src={toggle}></img>
        </div>
        <div className="text-white mx-3 ">
          <p className="my-2">Chef Mode</p>
        </div>
        <div className="">
          <img classname="" alt="" src={bell}></img>
        </div>
        <div className="rows    ">
          <img className="bound" alt="" src={pic}></img>
          <h3 className=" my text-white mtext ">M</h3>
        </div>
      </div>
    </div>
  );
};
