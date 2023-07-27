window.onload = () => {
  //事件委托给父级
  let table = document.querySelector("table");
  table.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#222";
  });
};
