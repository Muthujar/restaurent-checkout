import React from "react";

import "../cart/cart.css";
import vegi from "../../img/veg.png";
import nvegi from "../../img/nveg.png";
import { NavItem } from "react-bootstrap";

export const Product = (props) => {
  const { products, cart, onAdd, onDelete, newProducts, handleAdd } = props;

  return (
    <>
      {products.map((product) => (
        <div className="card  ">
          <div className="row ">
            <div className="col-4 ">
              <img className="proimage" src={product.Image} alt="" />
            </div>
            <div className="col-8 mar1 text-start">
              <div className="d-flex   ">
                <h6 className="namet">{product.name}</h6>
                {/* <img className="h-50 " src={product.color} alt="" /> */}
                <div>
                  {product.color === "veg" ? (
                    <img className="h-25 mb-1 mx-1" src={vegi} alt="" />
                  ) : (
                    <img className="h-25 mb-1 mx-1" src={nvegi} alt="" />
                  )}
                </div>
                <div className="dprice">
                  <p className="">${product.price}</p>
                </div>
              </div>

              <p className="dfont">{product.description}</p>
              <div className="d-flex">
                <button className="butam">{product.details}</button>
                <button className="butad mx-2 ">{product.vng}</button>
                <div className="buttonend">
                  <button
                    className="butar butar2"
                    onClick={() => onDelete(product)}
                  >
                    -
                  </button>
                  <button className="butar">{product.quantity}</button>
                  <button className="butar" onClick={() => onAdd(product)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="card  ">
        <div className="row ">
          <div className="col-4 ">
            <img className="proimage" src={newProducts.Image} alt="" />
          </div>
          <div className="col-8 mar1 text-start">
            <div className="d-flex   ">
              <h6 className="namet">{newProducts.name}</h6>
              <div>
                {newProducts.color === "veg" ? (
                  <img className="h-25 mb-1 mx-1" src={vegi} alt="" />
                ) : (
                  <img className="h-25 mb-1 mx-1" src={nvegi} alt="" />
                )}
              </div>
              <div className="dprice">
                <p className="pricecol">${newProducts.price}</p>
              </div>
            </div>

            <p className="dfont">{newProducts.description}</p>
            <div className="d-flex">
              <button className="butam">{newProducts.details}</button>
              <button className="butad mx-2">{newProducts.vng}</button>
              <div className="buttonend">
                <button
                  className="butar butar2"
                  onClick={() => onDelete(newProducts)}
                >
                  -
                </button>
                <button className="butar butar3">{newProducts.quantity}</button>
                <button
                  className="butar"
                  onClick={() => handleAdd(newProducts)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
