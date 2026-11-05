const shuffle = new Shuffle(document.getElementById("clubs"), {
  itemSelector: ".grid-item",
  gutterWidth: 20
});

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
    const f = btn.dataset.filter;
    shuffle.filter(f === "all" ? Shuffle.ALL_ITEMS : f);
  });
});