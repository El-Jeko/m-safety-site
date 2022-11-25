document.addEventListener('DOMContentLoaded', function () {

    let swipers = document.querySelectorAll('.swiper');

    swipers.forEach((el) => {
        let swiper = new Swiper(el, {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 15,
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: el.querySelector('.swiper-pagination'),
            }
        });
    });
});