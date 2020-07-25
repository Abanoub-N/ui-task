var swiper = new Swiper('.swiper-container', {

    slidesPerView: 'auto',
    loop: true,

    autoplay: {
        delay: 4000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});