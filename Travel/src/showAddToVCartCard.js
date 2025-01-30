import "./style.css";
import Products from "../api/product.json";
import { getCartFromLS } from "./getCartFromLS";
import { fetchLSdata } from "./fetchLSdata";
import { reoveCardFromTrip } from "./removeCardTrip";
import { incrementFunc } from "./increment";
import { decrementFunc } from "./decrement";
import { updatecartTotalPrice } from "./updateCardTotal";

let cartProducts = getCartFromLS();

let filter = Products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

const ProductContainer = document.querySelector("#productContainer");
const ProductMain = document.querySelector(".third-main");
const ProductTemplate = document.querySelector("#templateContainer");

const showCartProduct = () => {
  filter.forEach((curProd) => {
    const {
      name,
      text,
      image,
      cutoff,
      description,
      id,
      price,
      user,
      stock,
      val,
      remove,
    } = curProd;

    const ProductClone = document.importNode(ProductTemplate.content, true);
    4;

    const LSactualData = fetchLSdata(id, price);

    ProductClone.querySelector("#cardvalue").setAttribute("id", `card${id}`);
    ProductClone.querySelector(".place").textContent = name;
    ProductClone.querySelector(".imgcontainer").src = image;
    ProductClone.querySelector(".main-text").textContent = description;
    ProductClone.querySelector(".booknow").textContent = remove;
    ProductClone.querySelector(".user-svg").src = user;
    ProductClone.querySelector(".imgcontainer").alt = name;

    ProductClone.querySelector(".price-acct").textContent = `$${LSactualData.price}`;
    ProductClone.querySelector(".person-increment").textContent =
      LSactualData.quantity;

    ProductClone.querySelector("#removeCard").addEventListener(
      "click",
      (event) => {
        reoveCardFromTrip(event, id);
      }
    );

    ProductClone.querySelector(".cardIncrement").addEventListener(
      "click",
      (event) => {
        incrementFunc(event, id, stock, price);
      }
    );
    ProductClone.querySelector(".cardDecrement").addEventListener(
      "click",
      (dada) => {
        decrementFunc(dada, id, stock, price);
      }
    );

    ProductMain.append(ProductClone);
  });
};

showCartProduct();

updatecartTotalPrice()
