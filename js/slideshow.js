let currentImage = 0;
let images = [
  { src: "/img/pbr.png", caption: "PBR rendering in Ivy game engine" },
  { src: "/img/collision.png", caption: "GJK and EPA collision system in Ivy" },
  {
    src: "/img/gizmos_dark.png",
    caption: "Gizmos system with darkened color when occluded",
  },
  {
    src: "/img/light.png",
    caption: "Visualization of light sources in post processing",
  },
  { src: "/img/text_rendering.png", caption: "TTF text rendering" },
];

let frame = document.getElementById("slideshow");
let img = frame.children[0];
let caption = frame.children[1];

function slideshow() {
  let image = images[currentImage];
  img.src = image.src;
  caption.textContent = image.caption;

  currentImage = (currentImage + 1) % images.length;
}

slideshow();

setInterval(slideshow, 2000);
