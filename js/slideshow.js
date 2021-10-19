let currentImage = 0;

let images = [
  { src: "../img/pbr.png", caption: "PBR rendering in Ivy game engine" },
  {
    src: "../img/collision.png",
    caption: "GJK and EPA collision system in Ivy",
  },
  {
    src: "../img/gizmos_dark.png",
    caption: "Gizmos system with darkened color when occluded",
  },
  {
    src: "../img/light.png",
    caption: "Visualization of light sources in post processing",
  },
  { src: "../img/text_rendering.png", caption: "TTF text rendering" },
];

let frame = document.getElementById("slideshow");
let img = document.getElementById("slideshow-image");
let caption = document.getElementById("slideshow-caption");
let indicator = document.getElementById("slideshow-indicator");

let playing = true;

function slideshow() {
  if (playing) {
    nextImage();
  }
}

function nextImage() {
  setImage();

  currentImage = (currentImage + 1) % images.length;
}

function prevImage() {
  setImage();

  currentImage = (currentImage + images.length - 1) % images.length;
}

function setImage() {
  let image = images[currentImage];
  img.src = image.src;
  caption.textContent = image.caption;
}

// Pause the slideshow when navigating manually
function stopSlideshow() {
  playing = false;
  updateIndicator();
}

function toggleSlideshow() {
  playing = !playing;
  updateIndicator();
}

// Update play pause indicator
function updateIndicator() {
  if (playing) {
    indicator.classList = "fa fa-pause";
  } else {
    indicator.classList = "fa fa-play";
  }
}

nextImage();

setInterval(slideshow, 2500);
