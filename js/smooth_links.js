document.addEventListener('DOMContentLoaded', function () {

    let smoothLink = document.querySelectorAll('.smooth-link');

    smoothLink.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            let topOffset = 0;
            if (window.innerWidth < 1024) {
                topOffset = 90;
            } else {
                topOffset = 50;
            };
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth',
            });
        });
    });

});