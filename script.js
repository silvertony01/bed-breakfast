//form
function scrollToForm() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    function handleSubmit(event) {
      event.preventDefault();
      alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    }

//carosello
let currentSlide = 0;

function changeSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-image');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}
