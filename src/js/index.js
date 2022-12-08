import json from "./data.json";

const $ = (e) => document.querySelector(e);
const lanterns = document.querySelectorAll(".shop span");

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

const toggleSticky = (flag) => $("nav").classList.toggle("sticky", flag);
const toggleBounce = (flag) =>
  $(".shop-rabbit").classList.toggle("bounceInUp", flag);

function watch(target, fn) {
  const observer = new IntersectionObserver(fn);
  observer.observe(target);
}

watch($(".shop"), (entries) => {
  entries.forEach((entry) => toggleBounce(entry.isIntersecting));
});
watch($("header"), (entries) => {
  entries.forEach((entry) => toggleSticky(!entry.isIntersecting));
});
