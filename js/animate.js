function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

function animateProjects() {
  let target = document.getElementById("projects");
  if (target == null) {
    return;
  }

  const coords = { height: 0 };
  const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
    .to({ height: 1 }, 1000)
    .easing(TWEEN.Easing.Back.Out)
    .onUpdate(() => {
      target.style.setProperty(
        "transform",
        `scale(1, ${coords.height})`,
      );
    })
    .start(); // Start the tween immediately.
}

function animateNavbar() {
  let target = document.getElementsByTagName("nav")[0];
  const coords = { width: 0 };
  const tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
    .to({ width: 1 }, 1000)
    .easing(TWEEN.Easing.Quintic.Out)
    .onUpdate(() => {
      target.style.setProperty(
        "transform",
        `scale(${coords.width}, 1)`,
      );
    })
    .start(); // Start the tween immediately.
}

animateProjects();
animateNavbar();
