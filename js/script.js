function startAnim() {
  const animTitle = document.querySelector(".main-one__text");
  animTitle.classList.add("active");
}

window.addEventListener("scroll", function (event) {
  if (Math.floor(scrollY) > 50) {
    startAnim();
  }
});
let headerRight_bottom = document.querySelector(".header__right_lang-none"); //. список

let headerRight = document.querySelector(".header__right_lang"); //. общий

headerRight.addEventListener("mouseover", function () {
  headerRight_bottom.classList.add("_active");
  headerRight.classList.add("_active2");
});

headerRight.addEventListener("mouseout", function () {
  headerRight_bottom.classList.remove("_active");
  headerRight.classList.remove("_active2");
});

headerRight.addEventListener("click", function () {
  headerRight_bottom.classList.toggle("_active");
  headerRight.classList.toggle("_active2");
});
