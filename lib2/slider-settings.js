var swiper = new Swiper(".main__swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".main__swiper-next",
        prevEl: ".main__swiper-prev",
    },
    // loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
});

var mainNavSwiper = new Swiper(".main__nav-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 2,
    // spaceBetween: 40,
    slidesPerColumn: 2,
    slidesPerGroup: 2,

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



    breakpoints: {
        // when window width is <= 320px

        320: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        // when window width is <= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        // when window width is <= 640px
        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },


    },


});
var clientsPaging = new Swiper(".clients__swiper", {
    pagination: {
        el: ".clients__number-swiper",
        type: "fraction",
    },


    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        // when window width is <= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        // when window width is <= 640px
        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
    },
});
clientsSwiper.controller.control = clientsPaging;



















var clientsSwiper2 = new Swiper(".clients-swiper__swiper", {
    pagination: {
        el: ".clients__progress-swiper",
        type: 'progressbar',
        clickable: true,

    },
    navigation: {
        nextEl: ".clients__swiper-next",
        prevEl: ".clients__swiper-prev",
    },

    slidesPerView: 6,
    // spaceBetween: 40,
    slidesPerColumn: 2,
    slidesPerGroup: 6,


});
var clientsPaging2 = new Swiper(".clients-swiper__swiper", {
    pagination: {
        el: ".clients__number-swiper",
        type: "fraction",
    },
    slidesPerView: 6,
    // spaceBetween: 0,
    slidesPerColumn: 2,
    slidesPerGroup: 6,
    // navigation: {
    //     nextEl: ".clients__swiper-next",
    //     prevEl: ".clients__swiper-prev",
    // },
});
clientsSwiper2.controller.control = clientsPaging2;


var reviewsSwiper = new Swiper(".reviews__slider", {
    pagination: {
        el: ".reviews__progress-swiper",
        type: 'progressbar',
        clickable: true,

    },
    navigation: {
        nextEl: ".reviews__swiper-next",
        prevEl: ".reviews_swiper-prev",
    },

    slidesPerView: 3,
    // spaceBetween: 40,
    slidesPerColumn: 2,
    slidesPerGroup: 3,


});
var reviewsPaging = new Swiper(".reviews__slider", {
    pagination: {
        el: ".reviews__number-swiper",
        type: "fraction",
    },
    slidesPerView: 3,
    // spaceBetween: 0,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    // navigation: {
    //     nextEl: ".clients__swiper-next",
    //     prevEl: ".clients__swiper-prev",
    // },
});
reviewsSwiper.controller.control = reviewsPaging;


var servicesSliderSwiper = new Swiper(".services-slider__swiper", {
    pagination: {
        el: ".services-slider__progress-swiper",
        type: 'progressbar',
        clickable: true,

    },
    navigation: {
        nextEl: ".services-slider__swiper-next",
        prevEl: ".services-slider__swiper-prev",
    },

    slidesPerView: 6,
    spaceBetween: 20,
    slidesPerColumn: 2,
    slidesPerGroup: 6,


});
var servicesSliderPaging = new Swiper(".services-slider__swiper", {
    pagination: {
        el: ".services-slider__number-swiper",
        type: "fraction",
    },
    slidesPerView: 6,
    // spaceBetween: 0,
    slidesPerColumn: 2,
    slidesPerGroup: 6,
    // navigation: {
    //     nextEl: ".clients__swiper-next",
    //     prevEl: ".clients__swiper-prev",
    // },
});
servicesSliderSwiper.controller.control = servicesSliderPaging;