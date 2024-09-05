const multiplier = {
    translate: .1,
    rotate: .01
}

new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 90,
    centeredSlides: true,
    loop: true,
    grabCursor: true
})

function calculateWheel() {
    const slides = document.querySelectorAll('.single')
    slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect()
        const r = window.innerWidth * .5 - (rect.x + rect.width * .5)
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate

        if (ty < 0) {
            ty = 0
        }
        const transformOrigin = r < 0 ? 'left top' : 'right top'
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`
        slide.style.transformOrigin = transformOrigin
    })
}

function raf() {
    requestAnimationFrame(raf)
    calculateWheel()
}

raf();

 // Function to handle the search operation and redirect
 function searchLocation() {
    const location = document.getElementById('input').value;
    if (location) {
      // Redirect to map.html with the location as a URL parameter
      window.location.href = `map.html?location=${encodeURIComponent(location)}`;
    } else {
      alert("Please enter a location.");
    }
  }

  // Adding an event listener to the button for the search action
  document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.btn-search');
    searchButton.addEventListener('click', searchLocation);
  });