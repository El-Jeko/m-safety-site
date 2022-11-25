document.addEventListener('DOMContentLoaded', function () {

    let FirstGroupBtns = document.querySelectorAll('.first-group-tab');
    let SecondGroupBtns = document.querySelectorAll('.second-group-tab');
    let FirstGroupProjects = document.querySelectorAll('.first-projects-group');
    let SecondGroupProjects = document.querySelectorAll('.second-projects-group');

    FirstGroupBtns.forEach(function (tab) {
        tab.addEventListener('click', function () {

            let currentTab = tab;
            let tabId = currentTab.getAttribute('data-tab');
            let project = document.querySelector(tabId);

            if (!currentTab.classList.contains('tab--active')) {
                FirstGroupBtns.forEach(function (item) {
                    item.classList.remove('tab--active');
                });
                FirstGroupProjects.forEach(function (item) {
                    item.classList.remove('project__container--active');
                });

                currentTab.classList.add('tab--active');
                project.classList.add('project__container--active');
            };

        });
    });

    SecondGroupBtns.forEach(function (tab) {
        tab.addEventListener('click', function () {

            let currentTab = tab;
            let tabId = currentTab.getAttribute('data-tab');
            let project = document.querySelector(tabId);

            if (!currentTab.classList.contains('tab--active')) {
                SecondGroupBtns.forEach(function (item) {
                    item.classList.remove('tab--active');
                });
                SecondGroupProjects.forEach(function (item) {
                    item.classList.remove('project__container--active');
                });

                currentTab.classList.add('tab--active');
                project.classList.add('project__container--active');
            };

        });
    });

    document.querySelector('.first-group-tab').click();
    document.querySelector('.second-group-tab').click();

});