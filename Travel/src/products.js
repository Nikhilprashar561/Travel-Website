import { homeToggle } from "./homeToggle"
import { homeDecrement } from "./homeDecrement"
import { portfolio } from "./portfolio"
import { login } from "./login"
import { addToCart } from "./addToCart"

const ProductContainer = document.querySelector("#productContainer")
const ProductMain = document.querySelector(".third-main")
const ProductTemplate = document.querySelector("#templateContainer")
const port = document.querySelector('.portfolio')
 


export const showContainer = (Tuhura)=>{
    if(!Tuhura){
        return false;
    }
    Tuhura.forEach((curProd)=>{
        const {name , text , image, cutoff, description, id, price , user , stock , val, remove } = curProd;

        const ProductClone = document.importNode(ProductTemplate.content, true);

        ProductClone.querySelector("#cardvalue").setAttribute("id",`card${id}`)

        ProductClone.querySelector('.place').textContent = name;
        ProductClone.querySelector('.imgcontainer').src = image;
        ProductClone.querySelector('.main-text').textContent = description;
        ProductClone.querySelector('.booknow').textContent = text;
        ProductClone.querySelector('.user-svg').src = user;
        ProductClone.querySelector('.price-acct').textContent = `$${price}`;
        ProductClone.querySelector('.imgcontainer').alt = name;
        ProductClone.querySelector('.price-hide').textContent = `$${cutoff}`;

        ProductClone.querySelector('.cardIncrement').addEventListener('click', (event)=>{
            homeToggle(event , id , stock)
        })
        ProductClone.querySelector('.cardDecrement').addEventListener('click',(dada)=>{
             homeDecrement(dada , id , stock)
            })
        ProductClone.querySelector('.booknow').addEventListener('click',(event)=>{
            addToCart(event, id, stock)
        })

        portfolio()
        login()



        ProductMain.append(ProductClone)
        
    })
}