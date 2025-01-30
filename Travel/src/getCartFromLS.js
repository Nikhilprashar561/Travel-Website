import { showCartValue } from "./showCartValue"

export const getCartFromLS = ()=>{
    let getCartProduct = localStorage.getItem('productitem')
    if(!getCartProduct){
        return []
    }
    getCartProduct = JSON.parse(getCartProduct)

    showCartValue(getCartProduct)
    
    return getCartProduct
}