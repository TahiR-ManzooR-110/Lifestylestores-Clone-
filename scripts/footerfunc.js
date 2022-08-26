function onclick(){
    let input = document.getElementById("user_email");
    let please=document.getElementById("please");
    input.addEventListener("click",function(){
        if(input.value==""){
            please.innerText="Enter your email address";
        }
    });
}
onclick(); 
    
    function sendmail() {
      let email = document.getElementById("user_email").value;
      let please=document.getElementById("please");
      let submit = document.getElementById("submit_details");
      submit.addEventListener("click", () => {
        if (email.value == "") {
          error();
        } else {
          please.innerText="";
          sendEmail();
          let thankyou=document.getElementById("thankyou");
          thankyou.innerText="Thanks for signing up to our newsletter.";
          thankyou.style.color="rgb(70, 178, 117)";
        }
      });
    }
    sendmail();
    function error() {
      console.log("Please enter your email address");
    }
    function sendEmail() {
      emailjs.send("service_x1gjf3g", "template_k0lfjgw", {
        from_name: "Lifestylestores",
        to_name: document.getElementById("user_email").value,
        message: "Thanks for signing up to our newsletter.",
      });
    }

    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }