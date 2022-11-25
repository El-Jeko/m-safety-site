document.addEventListener('DOMContentLoaded', function () {

    let body = document.querySelector('body');
    let burgerBtn = document.querySelector('.burger__btn');
    let closeBtn = document.querySelector('.mob-menu__close-btn');
    let mobMenu = document.querySelector('.mob-menu');
    let header = document.querySelector('.header');

    burgerBtn.addEventListener('click', function () {
        mobMenu.classList.add('mob-menu--open');
        body.classList.add('flowhidden');
        header.classList.add('shadow');
    });
    closeBtn.addEventListener('click', function () {
        mobMenu.classList.remove('mob-menu--open');
        body.classList.remove('flowhidden');
        header.classList.remove('shadow');
    });

});