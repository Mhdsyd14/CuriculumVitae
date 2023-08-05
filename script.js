// hamburger
let divburger = document.getElementById("hamburger-btn");
window.addEventListener("resize", function () {
  if (window.innerWidth > 810) {
    divburger.innerHTML = "";
  }
});
let tampil = false;
function Hamburger() {
  let navbar = `  <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="projek.html">Experience</a></li>
          <li><a href="testimonial.html">Skill</a></li>
        </ul>`;
  let divburger = document.getElementById("hamburger-btn");
  if (tampil === false) {
    divburger.innerHTML = navbar;
    tampil = true;
  } else {
    divburger.innerHTML = "";
    tampil = false;
  }
}
