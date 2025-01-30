import { getCartFromLS } from "./getCartFromLS"

export const fetchLSdata = (id, price)=>{
    let cartProducts = getCartFromLS()

    let existinProd = cartProducts.find((curProd)=> curProd.id === id)

    let quantity = 1

    if(existinProd){
        quantity = existinProd.quantity
        price = existinProd.price
    }
    return {quantity, price}
}