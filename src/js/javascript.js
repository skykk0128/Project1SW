'use strict';

// Highlight menu item when navigating
document.getElementById("homepage").addEventListener("click", event => {

  document.getElementById("homepage").classList.add("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("aboutpage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.add("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("resumepage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.add("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("projectspage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.add("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("contactpage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.add("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("blogpage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.add("current");
});

// Changeable Position
var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});

// Sticky Navigation Bar
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
window.onscroll = () => {
  if (window.pageYOffset >= sticky+10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
// $(document).ready(function() {
//   var start = 0;
//   var navbar = $('#navbar');
//   var offset = navbar.offset();
//   if (navbar.length) {
//     $(document).scroll(function() {
//       start = $(document).scrollTop();
//       if (start > offset.top) {
//         $('#navbar').css('background-color', '#ffffff');
//       }
//     } else {
//       $('#navbar').css('background-color', 'transparent');
//     }
//   }
// });




$(window).load(function() {
  $('#loading').hide();
});
