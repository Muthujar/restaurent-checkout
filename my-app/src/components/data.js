import chisalad from "../img/chisalad.png";
import cream from "../img/cream.png";
import shallots from "../img/shallots.png";
import nveg from "../img/nveg.png";
import veg from "../img/veg.png";
const Data = {
  products: [
    {
      id: 1,
      name: "Chicken Salad",
      Image: cream,
      details: "Sugar Free",
      vng: "Egg",
      color: "nveg",
      price: "230",
      quantity: 1,
      stock: 10,

      description:
        "About dish Lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text more",
    },
    {
      id: 2,
      name: "Cream of tartar",
      Image: chisalad,
      details: "Sugar Free",
      vng: "No Egg",
      color: "veg",
      price: "200",
      quantity: 1,
      stock: 10,

      description:
        "About dish Lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text more",
    },
  ],
  newProducts: {
    id: 3,
    heading: "Advanced order for tommorrow",

    name: "Shallots",
    Image: shallots,
    details: "Sugar Free",
    vng: "Egg",
    color: "nveg",
    price: "500",
    quantity: 1,
    stock: 10,

    description:
      "About dish Lorem ipsum dummy text lorem ipsum dummy text lorem ipsum dummy text more",
  },
};

export default Data;
