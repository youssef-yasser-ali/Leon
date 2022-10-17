const links = document.querySelector(".links");
const link = document.querySelector(".link");
const sections = document.querySelectorAll("section");
const head = document.querySelector("header");
const landing = document.querySelector(".landing");
const heightHead = head.getBoundingClientRect().height;
const imgHome = head.querySelector("img");
///

links.addEventListener("click", () => {
  link.classList.toggle("disp");
});
imgHome.addEventListener("click", () => {
  // go to up
  window.scrollTo(0, 0);
});

link.addEventListener("click", (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  document.querySelector(`${href}`).scrollIntoView({ behavior: "smooth" });
});
const headSticky = function (entries, observer) {
  const [ent] = entries;
  if (!ent.isIntersecting) {
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }
};

const obsOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${heightHead}px`,
};

const headerobserver = new IntersectionObserver(headSticky, obsOption);

headerobserver.observe(landing);
