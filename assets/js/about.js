document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".content-section").forEach((section) => {
      section.style.display = "none";
    });
    document.querySelectorAll(".nav-link").forEach((nav) => {
      nav.classList.remove("active");
      let img = nav.querySelector(".vector-icon");
      if (img) {
        img.remove();
      }
    });
    document.getElementById(this.dataset.target).style.display = "flex";
    this.classList.add("active");
    let newImg = document.createElement("img");
    newImg.src = "./assets/images/vector-2.png";
    newImg.width = 20;
    newImg.height = 6;
    newImg.classList.add("vector-icon");
    this.prepend(newImg);
  });
});
document.getElementById("ve-chung-toi").style.display = "flex";
