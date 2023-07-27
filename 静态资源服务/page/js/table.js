window.onload = () => {
  let table = document.querySelector("table");
  table.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#222";
  });
};
