import React from "react";
import { Product } from "./product";
import bg1 from "../../img/bg1.png";

export const Cart = ({
  products,
  onAdd,
  cart,
  onDelete,
  newProducts,
  handleAdd,
}) => {
  //const { products } = props;
  // console.log(products, "ddd");
  return (
    <div>
      <div className="d-flex heady">
        {/* <img alt="" src={bg1}></img> */}
        <h4>Cart summary</h4>
        <button className="addbut ">Add more</button>
      </div>

      <div>
        <Product
          products={products}
          onAdd={onAdd}
          onDelete={onDelete}
          cart={cart}
          handleAdd={handleAdd}
          newProducts={newProducts}
        />
      </div>
    </div>
  );
};
