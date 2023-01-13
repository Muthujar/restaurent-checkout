import React from "react";
import "../price summary/pricesum.css";
import bg2 from "../../img/bg2.png";

export const Pricesum = ({ cart, products, newProducts, newCart }) => {
  console.log(newCart, "getty");
  const itemTotalOne = products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );
  const itemTotalTwo = newCart.price * newCart.quantity;

  console.log(itemTotalTwo, "gud");

  // const grandTotal = () => {
  //   {
  //     itemTotal + 100;
  //   }
  // };

  // console.log(itemTotal, "sittos");

  return (
    <div className="heady1">
      <h4>Price summary</h4>
      <div className="pt-4">
        <h6>Available Now</h6>
        <div className="d-flex ">
          <p>Item Total</p>
          <p className="dollor">${itemTotalOne}</p>
        </div>
        <div className="d-flex">
          <p>Delivery charges</p>
          <p className="dollor ">$50</p>
        </div>
        <hr></hr>
        <h6>Advanced order </h6>
        <div className="d-flex ">
          <p>Item Total</p>
          <p className="dollor">${itemTotalTwo}</p>
        </div>
        <div className="d-flex ">
          <p>Delivery charges</p>
          <p className="dollor">$50</p>
        </div>
        <hr></hr>
        <div className="d-flex ">
          <p>
            Tax<br></br> (estimated for india)
          </p>
          <p className="dollor">$62</p>
        </div>
        <hr></hr>
        <div className="d-flex ">
          <h6>Grand Total</h6>
          <p className="dollor">${itemTotalOne + itemTotalTwo + 162} </p>
        </div>
      </div>
    </div>
  );
};
