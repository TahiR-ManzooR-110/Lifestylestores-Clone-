let noraml = () => {
    return'<h3>Add your shipping address</h3> <label for="">Full Name</label><br> <input type="text" placeholder="Enter your full name"><br> <label for="">Mobile Number</label><br> <input type="text" placeholder="Enter your mobile number"><br> <label for="">Pincode</label><br> <input type="number" placeholder="Enter your Pincode"><br> <label for="">City</label><br> <input type="text" placeholder="Select your city or Town"><br> <label for="">State</label><br> <select aria-placeholder="Select your State"> <option value="">Select your State</option> <option value="Delhi">Delhi</option> <option value="Mumbai">Mumbai</option> <option value="Hyderabad">Hyderabad</option> <option value="Pune">Pune</option> <option value="Rajasthan">Rajasthan</option> <option value="Bihar">Bihar</option> <option value="Banguluru">Banguluru</option> </select><br> <label for="">Building name or number</label><br> <input type="text" placeholder="Enter Building Name"><br> <label for="">Street name or number</label><br> <input type="text" placeholder="Flat/House number, Floor, Building"><br> <label for="">Landmark</label><br> <input type="text" placeholder="Landmark"><br> <label for="">Address Type</label><br> <div id="address_type"> <input type="radio" name="address_type"> <label for="">Home</label> <input type="radio" name="address_type"> <label for="">Office</label> </div>'
}
let collect=()=>{
    return'<h3 id="h3ofmap">Select your collection store</h3> <p class="p_grey">Search or use our map view to find your nearest store</p> <div><i class="bi bi-search"></i> <input type="text" id="search" placeholder="Seach By Mall or City"></div> <iframe id="map" width="680" height="400" frameborder="0" style="border:0"referrerpolicy="no-referrer-when-downgrade"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCH9TfNqNKvnv02kxeAp1miJRhr6TPp4SA&q=India"></iframe><h3>Add your contact details</h3><div id="contact_details"><div><p>Full Name</p><input class="input_contact" type="text" placeholder="Enter your Full Name"></div><div><p>Mobile Number</p><input class="input_contact" type="text" placeholder="Enter your Mobile Number"></div></div>'
}
export {noraml,collect};