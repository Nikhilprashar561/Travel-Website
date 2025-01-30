export const homeToggle = (event, id, stock)=>{
    const currentcard =  document.querySelector(`#card${id}`)

    const productQuantity = currentcard.querySelector('.person-increment')

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className = "cardIncrement"){
        if(quantity < stock){
            quantity += 1;
        } else if(quantity === stock){
            quantity = stock;
            alert("Ticket is Full")
        }
    }
    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity
}