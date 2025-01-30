import { getCartFromLS } from "./getCartFromLS" 
import { updatecartTotalPrice } from "./updateCardTotal"
export const incrementFunc = (event, id, stock, price)=>{
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
         if(event.target.className = "cardIncrement"){
            if(quantity < stock){
                quantity += 1;
            } else if(quantity === stock){
                quantity = stock;
                LocalStoragePrice = price * stock
            }
        }

        LocalStoragePrice =  price * quantity

        let updateCart = { id, price : LocalStoragePrice , quantity }
        updateCart = arrFromLS.map((curProd) => {
          return curProd.id === id ? updateCart : curProd;
        })
        localStorage.setItem("productitem", JSON.stringify(updateCart));

        productQuantity.innerText = quantity;
        productPrice.innerText = `$${LocalStoragePrice}`
        productQuantity.setAttribute("data-quantity", quantity.toString());
        return quantity  
}
updatecartTotalPrice()