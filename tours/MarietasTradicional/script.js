const thumbnails = document.querySelectorAll(".carousel-thumbnails .thumbnail");
const carousel = document.getElementById("carouselExampleControlsNoTouching");

carousel.addEventListener("slid.bs.carousel", (e) => {
  const activeIndex = e.to;
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.toggle("active", index === activeIndex);
  });
});

// Inicializar estado activo de la primera miniatura
thumbnails[0].classList.add("active");
