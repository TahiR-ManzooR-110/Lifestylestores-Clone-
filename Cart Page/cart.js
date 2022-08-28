import {navdesk,navbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"
document.getElementById("navdesk").innerHTML=navdesk();
document.getElementById("navbar").innerHTML=navbar();

let cart_products=JSON.parse(localStorage.getItem("cart_products"))
let count=document.getElementById("products-count")
let products_count=()=>{
     count.innerHTML=null;
     count.innerText=`${cart_products.length} Products`
}
products_count()

let total_price=0;

let appendingProducts=(data)=>{
    let store_products=document.getElementById("store-products")
    store_products.innerHTML=null;
    data.forEach((el,index)=>{
        let main1_div=document.createElement("div");
        let main_div=document.createElement("div")
        let div=document.createElement("div");       
        let image=document.createElement("img");
        image.src=el.image;
        image.setAttribute("class","img_of_pro")
        let name=document.createElement("p");;
        name.innerText=el.title;
        name.style.fontWeight="bold"
        let price=document.createElement("p")
        price.innerText=`₹${el.price}`;
        price.style.fontWeight="bold"
        total_price+=+el.price;
        let color=document.createElement("p");
        color.innerText=el.color;
        div.append(image)
        let div2=document.createElement("div")
        div2.append(name,price,color)
        div2.style.marginLeft="-40%",div2.style.marginTop="-2%"
        main_div.append(div,div2)
        let delivery=document.createElement("div")
        let icon=document.createElement("i");
        icon.setAttribute("class","bi bi-calendar2-week")
        let p=document.createElement("p")
        p.innerText="Delievery in 2-4 days";
        p.style.fontSize="13px",p.style.color="grey",p.style.marginLeft="1%"
        delivery.append(icon,p)
        delivery.style.alignItems="center";
        delivery.style.borderBottom="1px solid grey",delivery.style.width="100%";;
        let buttons=document.createElement("div")
        buttons.style.color="orange",buttons.style.display="flex",buttons.style.justifyContent="space-evenly",buttons.style.marginTop="-2%",buttons.style.marginBottom="0"
        let remove=document.createElement("p")
        let movetofav=document.createElement("p")
        remove.innerText="Remove";
        remove.onclick=()=>{
             removefunc(index)
        }
        movetofav.innerText="Move to favourite"
        buttons.append(remove,movetofav)
        main1_div.append(main_div,delivery,buttons)
        main1_div.style.border="1px solid grey",main1_div.style.marginBottom="2%",main1_div.style.paddingLeft="3%",main1_div.style.paddingRight="3%"
        store_products.append(main1_div)
    })
}

let removefunc=(index)=>{
    console.log(index);
    cart_products=cart_products.filter((el,i)=>{
        if(index==i){
            // slice is using el but it's not showing in here
           cart_products.slice(i,1)
        }else{
            return i!=index;
        }
    })
    localStorage.setItem("cart_products",JSON.stringify(cart_products))
    window.location.href="cart.html"
}


let appendChekout=()=>{
    let checkout_section=document.getElementById("checkout-section");
    checkout_section.innerHTML=null;
    let pricing_section=document.createElement("div");
    let checkout=document.createElement("div");
    let t_mrp=document.createElement("p");
    let t_mrp_a=document.createElement("p");
    t_mrp.innerText="Total MRP";
    t_mrp.style.fontSize="14px"
    t_mrp_a.innerText=`₹${total_price}`
    t_mrp_a.style.fontWeight="bold"
    let div1=document.createElement("div")
    div1.append(t_mrp,t_mrp_a)
    let of_discount=document.createElement("p")
    of_discount.innerText=`Offer Discount`;
    of_discount.style.fontSize="14px"
    let of_discount_a=document.createElement("p")
    of_discount_a.innerText=`-₹339`;
    let discount_price=339;
    of_discount_a.style.color="green"
    let div2=document.createElement("div")
    div2.append(of_discount,of_discount_a)
    let s_charge=document.createElement("p")
    s_charge.innerText=`Shipping Charge`
    s_charge.style.fontSize="14px"
    let s_charge_a=document.createElement("p")
    s_charge_a.innerText="Free"
    s_charge_a.style.fontWeight="bold"
    let div3=document.createElement("div")
    div3.append(s_charge,s_charge_a)
    checkout.append(div1,div2,div3)

    let div_total=document.createElement("div")
    let total_p1=document.createElement("p")
    let total_p2=document.createElement("p")
    total_p1.innerText=`Total`
    total_p2.innerText=`₹${total_price-discount_price}`;
    div_total.append(total_p1,total_p2)

    let checkout_btn_div=document.createElement("div")
    let checkout_a=document.createElement("a")
    let checkout_btn=document.createElement("button");
    checkout_btn.innerText="Checkout Now"
    checkout_btn.style.backgroundColor="orange"
    checkout_btn.style.color="white"
    checkout_a.setAttribute("href","../Chekout Page/quickcheckout.html")
    checkout_btn_div.append(checkout_btn)
    checkout_a.append(checkout_btn_div)

    let shipping_div=document.createElement("div")
    let shiipping_p=document.createElement("p")
    shiipping_p.innerText="Shipping charges might vary based on pincode delivery location"
    shipping_div.append(shiipping_p)
    pricing_section.append(checkout,div_total,checkout_a,shipping_div)

    let reward_point=document.createElement("div")
    let reward_div1=document.createElement("div")
    reward_div1.style.display="flex",reward_div1.style.justifyContent="space-between"
    let reward_text=document.createElement("p");
    reward_text.innerText="Landmark Reward points"
    let enrol_btn=document.createElement("button")
    enrol_btn.innerText="Enrol Now"
    enrol_btn.setAttribute("id","enrol_btn")
    reward_div1.append(reward_text,enrol_btn);
    let reward_p=document.createElement("p")
    reward_p.innerText="Tap now to enrol for Landmark Rewards and get 3 points with this purchase and redeem for discounts in next eligible purchase(s)"
    let last_a=document.createElement("a")
    let last_btn=document.createElement("button")
    last_btn.setAttribute("id","last_btn")
    last_btn.innerText="Learn more";
    last_a.append(last_btn)
    last_a.setAttribute("href","")
    reward_point.append(reward_div1,reward_p,last_a)
    checkout_section.append(pricing_section,reward_point)
}
appendingProducts(cart_products)
appendChekout()

document.getElementById("footer").innerHTML=footer();