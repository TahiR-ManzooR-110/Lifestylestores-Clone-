import {noraml,collect} from './components/shipping-method.js';

let shipping_method=document.getElementById("shipping-method")
let home_delivery_div=document.getElementById("home_delivery")
let collect_div=document.getElementById("collect")
normalMethod()
document.getElementById("home_delivery").addEventListener("click",normalMethod)
document.getElementById("collect").addEventListener("click",collectMethod)
function normalMethod(){
    // event.preventDefault();
    home_delivery_div.style.border="2px solid orange"
    collect_div.style.border="2px solid grey"
    shipping_method.innerHTML=null;
    shipping_method.innerHTML=noraml();
}

function collectMethod(){
    event.preventDefault();
    home_delivery_div.style.border="2px solid grey"
    collect_div.style.border="2px solid orange"
    shipping_method.innerHTML=null;
    shipping_method.innerHTML=collect();
    let input=document.getElementById("search");
    input.addEventListener("keypress",(el)=>{
        if(el.key=="Enter" || el.key=="Go"){
             event.preventDefault();
             let q=input.value;
             console.log(q)
             map(q)
        }
    })
}

let map=(q)=>{
    let iframe=document.getElementById("map");
    iframe.src=`https://www.google.com/maps/embed/v1/place?key=AIzaSyCH9TfNqNKvnv02kxeAp1miJRhr6TPp4SA&q=${q}`
}

let total_price=0;
let appendProducts=()=>{
    let products=JSON.parse(localStorage.getItem("cart_products"))
    let container=document.getElementById("products");
    container.innerHTML=null;
    products.forEach((el)=>{
        let div=document.createElement("div");       
        let image=document.createElement("img");
        image.src=el.image;
        image.setAttribute("class","img_of_pro")
        let name=document.createElement("p");
        name.innerText=el.title;
        let price=document.createElement("p")
        price.innerText=`₹${el.price}`;
        price.style.fontWeight="bold"
        price.style.marginTop="3%"
        total_price+=+el.price;
        let div2=document.createElement("div")
        div2.append(name,price)
        div2.setAttribute("class","title_price_div")
        div.append(image,div2);
        container.append(div)
      })
}
appendProducts()

let tp=document.getElementById("total_price");
tp.innerText=`₹${total_price}`
