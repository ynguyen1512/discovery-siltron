function checkScrollPosition() {
  // console.log('checking scroll position: ', window.scrollY);
  var buttons = document.getElementById("float-buttons");
  var icons = document.getElementById("float-icons");
  if (window.scrollY <= 500) {
    console.log("Scrollbar is at the top");
    buttons.style.display = "none";
    icons.style.display = "flex";
  } else {
    console.log("Scrollbar is not at the top");
    icons.style.display = "none";
    buttons.style.display = "flex";
  }
}

// Check scroll position on page load
window.onload = checkScrollPosition;

// Check scroll position on scroll
window.onscroll = checkScrollPosition;
