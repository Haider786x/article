const shareBtn = document.querySelector(".share-btn");
const sharePopup = document.getElementById("sharePopup");

shareBtn.addEventListener("click", function () {
  sharePopup.classList.toggle("active");
});
