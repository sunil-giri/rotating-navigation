const container = document.querySelector(".container");
const opens = document.getElementById("open");
const closes = document.getElementById("close");
const navigation = document.getElementById("navigation");

opens.addEventListener("click", () => {
  container.classList.add("show-nav");
  opens.style.opacity = 0;
  closes.style.opacity = 1;
  navigation.style.left = 0;
});

closes.addEventListener("click", () => {
  container.classList.remove("show-nav");
  opens.style.opacity = 1;
  closes.style.opacity = 0;
  navigation.style.left = "-150px";
});
