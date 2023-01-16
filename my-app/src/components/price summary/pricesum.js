import React from "react";
import "../price summary/pricesum.css";
import bg2 from "../../img/bg2.png";
import veg from "../../img/veg.png";
import nveg from "../../img/nveg.png";

export const Pricesum = ({ cart, products, newProducts, newCart }) => {
  console.log(newCart, "getty");
  const itemTotalOne = products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );
  const itemTotalTwo = newCart.price * newCart.quantity;

  console.log(itemTotalTwo, "gud");

  return (
    <div className="heady1">
      <h4>Price summary</h4>
      <div className="pt-4 ">
        <h6>Available Now</h6>
        <div className="d-flex ">
          <p>Item Total</p>
          <p className="dollor1  ">${itemTotalOne}</p>
        </div>
        <div className="d-flex">
          <p>Delivery charges</p>
          <p className="dollor2  ">$50</p>
        </div>
        <hr></hr>
        <h6>Advanced order </h6>
        <div className="d-flex ">
          <p>Item Total</p>
          <p className="dollor3">${itemTotalTwo}</p>
        </div>
        <div className="d-flex ">
          <p>Delivery charges</p>
          <p className="dollor4">$50</p>
        </div>
        <hr></hr>
        <div className="d-flex ">
          <p>
            Tax<br></br> (estimated for india)
          </p>
          <p className="dollor5">$62</p>
        </div>
        <hr></hr>
        <div className="d-flex ">
          <h6 className="colorg">Grand Total</h6>
          <p className="dollor6">${itemTotalOne + itemTotalTwo + 162} </p>
        </div>
      </div>
      <hr></hr>

      <button className="btc text-white text-center">Create order</button>

      <div className="d-flex justify-content-end pr-5 lastb ">
        <div className="d-flex align-items-center">
          <img classname="veg " alt="" src={veg}></img>
          <p className="my-3 mx-2">VEG</p>
        </div>
        <div className="d-flex  align-items-center">
          <img classname="nveg px-5" alt="" src={nveg}></img>
          <p className="my-3 mx-2">NON-VEG</p>
        </div>
      </div>
    </div>
  );
};
