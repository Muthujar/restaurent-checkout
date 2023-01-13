import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Cart } from "./components/cart/Cart";
import { Pricesum } from "./components/price summary/pricesum";
import Data from "../src/components/data";
import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  // const [count, setCount] = useState(1);

  const { products } = Data;
  const { newProducts } = Data;
  console.log(newProducts, "gg");

  const onAdd = (item) => {
    const productExist = products.find((product) => product.id === item.id);
    // console.log(item.id, "idss");
    // console.log(productExist, "productExist");

    if (productExist) {
      setCart(
        products.map((product) =>
          product.id === item.id
            ? {
                ...productExist,
                quantity: productExist.quantity++,
              }
            : product
        )
      );
    }
  };

  const handleAdd = (newProducts) => {
    setNewCart(newProducts, newProducts.quantity++);
    console.log(newCart, "newCart");
  };

  const onDelete = (item) => {
    const productExist = products.find((product) => product.id === item.id);
    if (productExist.quantity === 1) {
      setCart(products.filter((product) => product.id !== item.id));
    } else {
      setCart(
        products.map((product) =>
          product.id === item.id
            ? { ...productExist, quantity: productExist.quantity-- }
            : product
        )
      );
    }
  };

  // else {
  //   setCart([...cart, { ...item, quantity: +1 }]);
  // }

  console.log(cart, "ss");

  return (
    <div className="App">
      <Header />
      <div className="row content  g-0">
        <div className="col-md-6 col-12-sm ">
          <Cart
            products={products}
            newProducts={newProducts}
            // count={items.length}
            // count={count}
            // increment={increment}
            onAdd={onAdd}
            onDelete={onDelete}
            cart={cart}
            newCart={newCart}
            handleAdd={handleAdd}
          />
        </div>
        <div className="col-md-6  col-12-sm ">
          <Pricesum
            products={products}
            newproducts={newProducts}
            onAdd={onAdd}
            onDelete={onDelete}
            handleAdd={handleAdd}
            cart={cart}
            newCart={newCart}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
