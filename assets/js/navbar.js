document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.getElementById("fullScreenMenu").classList.toggle("active");
  });

document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("fullScreenMenu").classList.remove("active");
});
