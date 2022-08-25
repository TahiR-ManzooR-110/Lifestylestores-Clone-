function navbar(){
    return `<div id="navdesk">
    <div id="sub_navdesk">
      <div id="shipment">
        <div>
          <i class="fa-solid fa-truck"></i>
          <p>Free Shipping</p>
        </div>
        <div>
          <i class="fa-solid fa-house-circle-check"></i>
          <p>Click & Collect</p>
        </div>
        <div>
          <i class="fa-solid fa-house-circle-check"></i>
          <p>Return to store</p>
        </div>
      </div>
      <div id="download">
        <p>Download Our Apps</p>
        <p>Store Locator</p>
        <p>Help</p>
      </div>
    </div>
  </div>
  <div id="nav_category">
    <div id="logo">
      <img
        src="https://blog.lifestylestores.com/wp-content/uploads/2021/02/Lifestyle-Logo-1160x444-1-1097x420.webp"
        alt="Logo"
      />
    </div>
    <div id="category">
      <p class="dropdown">Women</p>
      <p class="dropdown">Men</p>
      <p class="dropdown">Kids</p>
      <p class="dropdown">Shoes & Bags</p>
      <p class="dropdown">Beauty</p>
    </div>
    <div id="search">
      <input type="search" placeholder="What are you looking for?" />
    </div>
    <div id="more_sign">
      <p>More</p>
      <p>Sign Up / Sign In</p>
    </div>
    <div id="cart">
      <i class="fa-regular fa-heart fa-lg (11% increase)"></i>
      <i class="fa-solid fa-cart-shopping fa-lg (11% increase)"></i>
    </div>
  </div>`;
}
export {navbar};