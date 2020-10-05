$(document).ready(function () {
   $('.teachers__slider-wrapper').slick({
      dots: true,
      autoplay: true,
      // autoplaySpeed: 30000,
      slidesToShow: 1,

   });
});
$(document).ready(function () {
   $('.testimonials__slider-wrapper').slick({
      dots: true,
      autoplay: true,
      // autoplaySpeed: 30000,
      slidesToShow: 1,

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
   };

})
$(window).scroll(function () {
   if ($(window).scrollTop() < 1000) {
      $('#totop').hide()
   };

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICQoJy50ZWFjaGVyc19fc2xpZGVyLXdyYXBwZXInKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAvLyBhdXRvcGxheVNwZWVkOiAzMDAwMCxcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG5cclxuICAgfSk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICQoJy50ZXN0aW1vbmlhbHNfX3NsaWRlci13cmFwcGVyJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgLy8gYXV0b3BsYXlTcGVlZDogMzAwMDAsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuXHJcbiAgIH0pO1xyXG59KTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAkKCcudGVhY2hlcnNfX3NsaWRlci13cmFwcGVyJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgLy8gYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICB9KTtcclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgJCgnLnRlc3RpbW9uaWFsc19fc2xpZGVyLXdyYXBwZXInKS5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAvLyBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgIH0pO1xyXG59KTtcclxudmFyIGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJxdWVzdGlvbnNfX2l0ZW0tdGl0bGVcIik7XHJcbnZhciBpO1xyXG5cclxuZm9yIChpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xyXG4gICBhY2NbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICB2YXIgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbn1cclxuLy8gR2V0IHRoZSBtb2RhbFxyXG52YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XHJcblxyXG4vLyBHZXQgdGhlIGJ1dHRvbiB0aGF0IG9wZW5zIHRoZSBtb2RhbFxyXG52YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUJ0blwiKTtcclxuXHJcbi8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXHJcbnZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xyXG5cclxuLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWwgXHJcbmJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcclxuc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgfVxyXG59XHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMTAwMCkge1xyXG4gICAgICAkKCcjdG90b3AnKS5zaG93KClcclxuICAgfTtcclxuXHJcbn0pXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDwgMTAwMCkge1xyXG4gICAgICAkKCcjdG90b3AnKS5oaWRlKClcclxuICAgfTtcclxuXHJcbn0pXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgdmFyIGJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiLW1lbnUnKVswXTtcclxuICAgdmFyIGJ1cmdlckNvbnRhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiLWNvbnRhaW5lcicpWzBdO1xyXG4gICB2YXIgYnVyZ2VyTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYi1uYXYnKVswXTtcclxuXHJcbiAgIGJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKCkge1xyXG4gICAgICBbYm9keSwgYnVyZ2VyQ29udGFpbiwgYnVyZ2VyTmF2XS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgIH0pO1xyXG4gICB9LCBmYWxzZSk7XHJcbn0pKCk7XHJcbiJdfQ==
