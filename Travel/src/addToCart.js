import { getCartFromLS } from "./getCartFromLS";
import { showCartValue } from "./showCartValue";

getCartFromLS();

export const addToCart = (event, id, stock) => {
  let arrFromLS = getCartFromLS();
  const currentCardElem = document.querySelector(`#card${id}`);
  let quantity = currentCardElem.querySelector(".person-increment").innerText;
  let price = currentCardElem.querySelector(".price-acct").innerText;
  let existingProd = arrFromLS.find((curProd) => curProd.id === id);

  if(existingProd && quantity > 1){    
    quantity = Number(existingProd.quantity) + Number(quantity)
    price = price.replace("$", "");
    price = Number(price * quantity);
    let updateCart = { id, price, quantity }
    updateCart = arrFromLS.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    })
    localStorage.setItem("productitem", JSON.stringify(updateCart));
  }

  if(existingProd) {
    alert("update cart value")
    return false;
  }
  price = price.replace("$", "");
  price = Number(price * quantity);
  quantity = Number(quantity);
  arrFromLS.push({ id, price, quantity });
  localStorage.setItem("productitem", JSON.stringify(arrFromLS));
  showCartValue(arrFromLS);
};
