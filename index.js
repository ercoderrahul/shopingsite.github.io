const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let dropdown = document.querySelector("#header>i");
let navbar = document.querySelector('#navbar');

var flag = 0; 

dropdown.addEventListener("click", function () {
  if(flag ===0 ){
    navbar.style.display = 'flex';
    flag = 1;
  }
  else{ 
    navbar.style.display = 'none';
    flag = 0;
  }
});
