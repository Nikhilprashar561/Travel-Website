const cartVal = document.querySelector('#cartValue')

export const showCartValue = (getCartProduct)=>{
    cartVal.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${getCartProduct.length} </i>`
}