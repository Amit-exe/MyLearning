const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

// what i did
console.log(navs);
// navs.forEach((nav, i) => {
//   nav.addEventListener('click', e => {
//     e.preventDefault();
//     document
//       .querySelector(`#section--${i + 1}`)
//       .scrollIntoView({ behavior: 'smooth' });
//   });
// });

// navs.forEach(n => {
//   n.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     // console.log(this.href);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
//   console.log(n);
// });

const navss = document.querySelector(".nav__links");

console.log(navss);

navss.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link"))
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
});
