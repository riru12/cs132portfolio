let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    console.log(slideIndex+n)
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("hidden-item");

    if (n > slides.length-1) { 
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length-1
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden";
    }

    slides[slideIndex].style.visibility = "visible";
}