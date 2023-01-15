var swiper = new Swiper(".main__swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

var clientsSwiper = new Swiper(".clients__swiper", {
    pagination: {
        el: ".clients__progress-swiper",
        type: 'progressbar',
        clickable: true,

    },
    navigation: {
        nextEl: ".clients__swiper-next",
        prevEl: ".clients__swiper-prev",
    },

    slidesPerView: 4,
    // spaceBetween: 40,
    slidesPerColumn: 2,
    slidesPerGroup: 2,


});
var clientsPaging = new Swiper(".clients__swiper", {
    pagination: {
        el: ".clients__number-swiper",
        type: "fraction",
    },
    slidesPerView: 4,
    // spaceBetween: 0,
    slidesPerColumn: 2,
    slidesPerGroup: 2,
    // navigation: {
    //     nextEl: ".clients__swiper-next",
    //     prevEl: ".clients__swiper-prev",
    // },
});
clientsSwiper.controller.control = clientsPaging;

