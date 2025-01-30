import { getCartFromLS } from "./getCartFromLS"
import { showCartValue } from "./showCartValue";

export const reoveCardFromTrip = (event, id)=>{
    let cartProducts = getCartFromLS()

    cartProducts = cartProducts.filter((curProd)=> curProd.id != id)
     
    localStorage.setItem("productitem", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`)
    if(removeDiv){
        removeDiv.remove()
    }
    showCartValue(cartProducts)
}