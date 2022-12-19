const $ = (e) => document.querySelector(e);
const lanterns = document.querySelectorAll(".shop span");
const links = document.querySelectorAll("span[hash-target]");

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
  $(".shop-rabbit").classList.toggle("bounceInUp", shopTop < shopHeight);
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = $(link.getAttribute("hash-target"));
    const navHeight = $("nav").offsetHeight;
    const distance = target.offsetTop - navHeight;

    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    window.scroll({
      top: distance,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", triggerScroll);

lottie.loadAnimation({
  container: $("#lottie-store"),
  animType: "svg",
  loop: true,
  path: "./js/store.json",
});

lottie.loadAnimation({
  container: $("#lottie-store2"),
  animType: "svg",
  loop: true,
  path: "./js/store2.json",
});
