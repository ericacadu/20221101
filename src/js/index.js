// import json from "./data.json";

const $ = (e) => document.querySelector(e);
const lanterns = document.querySelectorAll(".shop span");
const links = document.querySelectorAll("a[hash-target]");

lanterns.forEach((item) => {
  item.addEventListener("mouseover", function () {
    const swingTime = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--swing-time");
    const removeSwing = () => item.classList.remove("swing");

    if (item.className.includes("swing")) return;
    item.classList.add("swing");
    setTimeout(removeSwing, swingTime);
  });
});

function triggerScroll() {
  const { scrollY } = window;
  const headerHeight = $("header").offsetHeight;
  const shopTop = $(".shop").getBoundingClientRect().top;
  const shopHeight = $(".shop").offsetHeight;

  $("nav").classList.toggle("sticky", scrollY >= headerHeight);
  $(".shop-rabbit").classList.toggle("bounceInUp", shopTop < shopHeight / 2);
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = $(link.getAttribute("hash-target"));
    const navHeight = $("nav").offsetHeight;
    const distance = target.offsetTop - navHeight;

    window.scroll({
      top: distance,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", triggerScroll);
