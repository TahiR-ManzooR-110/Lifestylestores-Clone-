let products=[
    {Name:"Ritik",Profession:"Full Stack Web Developer"},
    {Name:"Shivam",Profession:"Full Stack Web Developer"}
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
