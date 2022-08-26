const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlides(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i;
    let slides=document.getElementsByClassName("myslides")
    let dots=document.getElementsByClassName("dot")
    if(n>slides.length)
       { 
        slideIndex=1 
    }
       if(n<1){
        slideIndex=slides.length
       }
       for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
       }
    
       for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","")
        }
        slides[slideIndex-1].style.display="block"
       dots[slideIndex-1].className+= "active"
        }
        //autoslide

        let slideIndex0;
        showSlides()

        function showSlides(){
            let i;
            let slides=document.getElementsByClassName("myslides")
            for(i=0;i<slides.length;i++){
                slides[i].style.display="none"
            }
            slideIndex++;
            if(slideIndex>slides.length){
                slideIndex=1
            }
            slides[slideIndex-1].style.display="block"
            setTimeout(showSlides,3000)
        }


       
       

    