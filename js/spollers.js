document.addEventListener('DOMContentLoaded', function () {
    let spollers = document.querySelectorAll('.spollers__item');

    spollers.forEach(function (spoller) {
        spoller.addEventListener('click', function () {
            let currentSpoller = spoller;
            let currentContent = currentSpoller.querySelector('.spollers__content');

            if (!currentSpoller.classList.contains('spoller--open')) {
                spollers.forEach(function (item) {
                    item.classList.remove('spoller--open');
                    item.querySelector('#spoller').style.maxHeight = null;
                });
                currentSpoller.classList.add('spoller--open');
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
            } else {
                currentSpoller.classList.remove('spoller--open');
                currentContent.style.maxHeight = null;
            };
        });
    });
});