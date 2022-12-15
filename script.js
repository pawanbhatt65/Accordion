let accoridion = document.getElementsByClassName("contentBx");
for (var i = 0; i < accoridion.length; i++) {
  accoridion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
