let toggleBtn = document.querySelectorAll(".book-sentence");

toggleBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    OpenChild(btn);
  })
})
 
function OpenChild(name){
  name.classList.toggle("active");
  var panel = name.nextElementSibling;
  if (panel.style.display === "flex") {
    panel.style.display = "none";
  } else {
    panel.style.display = "flex";
  }
}

