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

// Contact Map
(function () {
    var setting = {"height":200,"width":400,"zoom":20,"queryString":"Carnegie VIC, Australia","place_id":"ChIJb4uHlo5p1moRQNyMIXVWBAU","satellite":false,"centerCoord":[-37.89376058556284,145.05607450719017],"cid":"0x5045675218cdc40","lang":"en","cityUrl":"/australia/carnegie-60300","cityAnchorText":"Map of Carnegie, Victoria, Australia","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"341002"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=341002';
    s.async = true;
    s.onload = function (e) {
      window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();


$(window).load(function() {
  $('#loading').hide();
});
