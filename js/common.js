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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgJCgnLnRlYWNoZXJzX19zbGlkZXItd3JhcHBlcicpLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDMwMDAwLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcblxyXG4gICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICQoJy50ZXN0aW1vbmlhbHNfX3NsaWRlci13cmFwcGVyJykuc2xpY2soe1xyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgLy8gYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgfSk7XHJcbn0pO1xyXG52YXIgYWNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInF1ZXN0aW9uc19faXRlbS10aXRsZVwiKTtcclxudmFyIGk7XHJcblxyXG5mb3IgKGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIHZhciBwYW5lbCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICB9KTtcclxufVxyXG4vLyBHZXQgdGhlIG1vZGFsXHJcbnZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcclxuXHJcbi8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXHJcbnZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15QnRuXCIpO1xyXG5cclxuLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcclxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcblxyXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbCBcclxuYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn1cclxuXHJcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxyXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICB9XHJcbn1cclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAxMDAwKSB7XHJcbiAgICAgICQoJyN0b3RvcCcpLnNob3coKVxyXG4gICB9O1xyXG5cclxufSlcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCAxMDAwKSB7XHJcbiAgICAgICQoJyN0b3RvcCcpLmhpZGUoKVxyXG4gICB9O1xyXG5cclxufSlcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICB2YXIgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItbWVudScpWzBdO1xyXG4gICB2YXIgYnVyZ2VyQ29udGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ItY29udGFpbmVyJylbMF07XHJcbiAgIHZhciBidXJnZXJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiLW5hdicpWzBdO1xyXG5cclxuICAgYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzZXMoKSB7XHJcbiAgICAgIFtib2R5LCBidXJnZXJDb250YWluLCBidXJnZXJOYXZdLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgfSk7XHJcbiAgIH0sIGZhbHNlKTtcclxufSkoKTtcclxuIl19
