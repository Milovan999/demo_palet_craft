"use strict";

window.onscroll = function () {
  fixingHeaderOnTop();
};

const header = document.getElementById("topHeader");
const sticky = header.offsetTop;

function fixingHeaderOnTop() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
