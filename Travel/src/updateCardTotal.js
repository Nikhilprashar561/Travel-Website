import { getCartFromLS } from "./getCartFromLS";

export const updatecartTotalPrice = ()=>{
    
    let ProductSubTotal = document.querySelector('.sub-val')
    let ProductFinalSubTotal = document.querySelector('.fnl-number')

    let arrFromLS = getCartFromLS();
    let initalVal = 0
    let productReduceMth = arrFromLS.reduce((accum, curElem)=>{
        let productPrice = parseInt(curElem.price) || 0
        return accum + productPrice
    },initalVal)

    ProductSubTotal.innerText = `$${productReduceMth}`
    ProductFinalSubTotal.innerText = `$${productReduceMth + 49}`

}
