const logo = document.querySelector(".share-tooltip");
const container = document.getElementsByClassName("container_big")[0];
const content = container.getElementsByClassName("content")[0];
const pic = container.getElementsByClassName("pic")[0];
var display = 0;
function setFirstImageWidth() {
  const contentWidth = window.getComputedStyle(content).width;

  // Apply the width directly to the image
  pic.style.width = contentWidth;
}

function setFirstImageHeight() {
  const contentHeight = window.getComputedStyle(content).height;

  // Apply the height directly to the image
  pic.style.height = contentHeight;
}

setFirstImageHeight();
window.addEventListener("resize", setFirstImageHeight);

setFirstImageWidth();
window.addEventListener("resize", setFirstImageWidth);

function hideShow() {
  if (display == 1) {
    logo.style.display = "flex";
    display = 0;
  } else {
    logo.style.display = "none";
    display = 1;
  }
}
