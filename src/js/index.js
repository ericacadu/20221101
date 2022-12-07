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
