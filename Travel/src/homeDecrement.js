export const homeDecrement = (dada , id , stock)=>{

    const currentId =  document.querySelector(`#card${id}`)

    const productQuantityId = currentId.querySelector('.person-increment')

    let quantity = parseInt(productQuantityId.getAttribute("data-quantity")) || 1;

    let show = "One Person Removed"

    if(dada.target.className = "cardDecrement"){
        if(quantity > 1){
            quantity -= 1;
            alert(`${show}`)
        }
    }

    productQuantityId.innerText = quantity
    productQuantityId.setAttribute("data-quantity", quantity.toString());
    return quantity
}