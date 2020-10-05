$(document).ready(function () {
   $('.teachers__slider-wrapper').slick({
      setting- name: setting - value
   });
});
$(document).ready(function () {
   $('.teachers__slider-wrapper').slick({
      dots: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      slidesToShow: 1,
   });
});
$(document).ready(function () {
   $('.testimonials__slider-wrapper').slick({
      dots: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      slidesToShow: 2,
       responsive: [
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});
var acc = document.getElementsByClassName("questions__item-title");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
      } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
$(window).scroll(function () {
   if ($(window).scrollTop() > 1000) {
      $('#totop').show()
   }

})
'use strict';

(function () {
   var body = document.body;
   var burgerMenu = document.getElementsByClassName('b-menu')[0];
   var burgerContain = document.getElementsByClassName('b-container')[0];
   var burgerNav = document.getElementsByClassName('b-nav')[0];

   burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
         el.classList.toggle('open');
      });
   }, false);
})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICQoJy55b3VyLWNsYXNzJykuc2xpY2soe1xyXG4gICB9KTtcclxufSk7Il19
