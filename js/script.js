// Recommend / slick.js
// ==================================================
$(function(){
    $('#rec-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
        centerPadding: '100px',
        centerMode: true,
            responsive: [
                {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                centerMode: true,
                }
            }
        ]
    });
});

// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

// FAQ
// ==================================================
$(function(){
    $('.js-accordion').on('click',function(){
        $(this).next().slideToggle();
    })
});

// animation / wow.js
// ==================================================
$(function(){
    new WOW().init();
});


//reservation

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}