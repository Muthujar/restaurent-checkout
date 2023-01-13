import React from "react";
import companylogo from "../../img/footerlogo.png";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="">
        <img className="logo-footer " alt="" src={companylogo}></img>
      </div>
    </div>
  );
};
