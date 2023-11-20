var rotateBtn = document.querySelector("#rotate-btn");
var bookShelf = document.querySelector("#shelf-container");

rotateBtn.addEventListener('click', () => {
  console.log("회전 클릭");
  if (bookShelf.style.transform === "rotate(-90deg)") {
    bookShelf.style.transform = "rotate(0deg)";
  } else {
    bookShelf.style.transform = "rotate(-90deg)";
  }
});
