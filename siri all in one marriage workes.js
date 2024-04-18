document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelectorAll(".gallery img");
    let currentSlide = 0;
    
    function showSlide(index) {
        gallery.forEach(function(slide) {
            slide.style.display = "none";
        });
        gallery[index].style.display = "block";
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % gallery.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % gallery.length;
        showSlide(currentSlide);
    }
    
    showSlide(currentSlide);
    
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
});
