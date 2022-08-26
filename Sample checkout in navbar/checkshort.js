let products=[
    {image:"https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011517155-Green-Olive-1000011517155_01-2100.jpg",Name:"Ritik",Profession:"Full Stack Web Developer"},
    {image:"https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011517155-Green-Olive-1000011517155_01-2100.jpg",Name:"Shivam",Profession:"Full Stack Web Developer"}
]

localStorage.setItem("cart_products",JSON.stringify(products))

let cart_products=JSON.parse(localStorage.getItem("cart_products"));
let count_products=cart_products.length;

console.log(cart_products)
console.log(count_products)


// for your refference
// If the user clicks the Add to Basket button then this particular product data will be saved in an array & this array data will be saved in local Storage as a key "cart_products"

// Count the products data also like if there are 2 products in the array then show no of added products in cart at the top right

// If the user clicks on the cart then a small box will appear below the navbar & in this box, there will be products

// below the products there is a box which is related to subtotal price;

// after the above box there are two buttons 1st VIEW BASKET & 2nd CHECKOUT
