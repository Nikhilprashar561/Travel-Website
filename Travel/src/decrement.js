import { getCartFromLS } from "./getCartFromLS"

export const decrementFunc = (dada, id, stock, price)=>{
    const currentcard =  document.querySelector(`#card${id}`)

    const productQuantity = currentcard.querySelector('.person-increment')
    let productPrice = currentcard.querySelector('.price-acct')
    let quantity = 1
    let LocalStoragePrice = 0

     let arrFromLS = getCartFromLS();

     let existingProd = arrFromLS.find((curProd)=> curProd.id  === id)

     if(existingProd){
        quantity = existingProd.quantity
        LocalStoragePrice = existingProd.price
     } else {
        localStorage = price
        price = price
     }

     if(dada.target.className = "cardDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    LocalStoragePrice =  price * quantity

    let updateCart = { id, price : LocalStoragePrice , quantity }
    updateCart = arrFromLS.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    })
    localStorage.setItem("productitem", JSON.stringify(updateCart));

    productQuantity.innerText = quantity
    productPrice.innerText = `$${LocalStoragePrice}`
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity
}
