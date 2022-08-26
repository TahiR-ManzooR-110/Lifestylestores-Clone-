let status_img=document.getElementById("status");
let status_p=document.getElementById("status_p");
let status=()=>{
    setTimeout(()=>{
        status_img.src="https://i.pinimg.com/originals/30/7f/2c/307f2c75edf56e65b1517978ced5f081.gif"
        status_p.innerText="Your Payment has been done successfully"
    },2000)
    setTimeout(()=>{
        let container=document.getElementById("container");
        container.style.marginTop="10vh"
        status_img.style.width="40vw"
        status_img.src="https://cdn.dribbble.com/users/1197989/screenshots/5585685/delivery-boy.gif"
        status_p.innerText="Your order has been dispatched successfully"
    },4000)    
}