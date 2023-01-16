import React from "react";
import companylogo from "../../img/footerlogo.png";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row ">
        <div className=" col-5 box1 ">
          <img className="  logo-footer " alt="" src={companylogo}></img>
        </div>

        <div className="col-3 box2   text-right">
          <p className="colc text-white">Mission</p>
          <p className="colc text-white">FAQ</p>
          <p className="colc text-white">Privacy Policy</p>
          <p className="colc text-white">Terms and Condition</p>
          <p className="colc text-white">Licenses & Registration</p>
        </div>

        <div className="col-3 box3 text-secondary d-flex">
          <div>
            <div className=" mx-5  line1 text-white"></div>
            <hr></hr>
          </div>
          <div className="mt-4 ">
            <p className="text-white px-5">
              Get in touch with us at{" "}
              <span className="text-warning">support@thecheflane.com</span>
            </p>
            <button className="btn btn-light mx-5 px-4 ">Contact us</button>
          </div>
        </div>

        <div className="text-white">
          <hr></hr>

          <p>Copyright © 2021 Specialist Foods. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
