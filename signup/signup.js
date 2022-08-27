var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function enterOTP(){
let content = document.getElementById("content");
content.innerHTML =  `<div id="content">
            <h1>Sign up or Sign in</h1>
            <p>Enjoy the convenience of a single account across all participating brands</p>
            <h5>Enter OTP</h5>
            <div id="otp_div"><input class="otp_input" type="text" id="one"><input class="otp_input" type="text" id="two"><input class="otp_input" type="text" id="three"><input class="otp_input" type="text" id="four"></div>
            <div id="t_c">
                <p>By creating your account you agree to our </p> <a href=""> Terms and Conditions</a>
            </div>
            <button id="conutinue_button" onclick="getName()">CONTINUE</button>
        </div>`

        
}

function getName(){
let one = document.getElementById("one").value;
let two = document.getElementById("two").value;
let three = document.getElementById("three").value;
let four = document.getElementById("four").value;

if(one === "1" && two === "2" && three === "3" && four === "4"){
    let content = document.getElementById("content");
content.innerHTML =  `<div id="content">
            <h1>Sign up or Sign in</h1>
            <p>Enjoy the convenience of a single account across all participating brands</p>
            <h5>Enter Name</h5>
            <input type="text" id="name" placeholder="Enter Name">
            <div id="t_c">
                <p>By creating your account you agree to our </p> <a href=""> Terms and Conditions</a>
            </div>
            <button id="conutinue_button" onclick="signup()">CONTINUE</button>
        </div>`
}
else{
    alert("Wrong OTP");
}
}


//  let name = JSON.parse(localStorage.getItem("username"));

function signup() {
let name = document.getElementById("name").value;

localStorage.setItem("username",JSON.stringify(name));
alert("Succesfull");
modal.style.display = "none";
}