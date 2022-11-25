document.addEventListener('DOMContentLoaded', function () {
    // Валидация формы

    let calculateForm = document.querySelector('.calculator__form');
    let formInputs = document.querySelectorAll('.js_input');
    let inputEmail = document.querySelector('._email');
    let inputPhone = document.querySelector('._phone');
    let inputCheckbox = document.querySelector('._checkbox');
    let checkboxContainer = document.querySelector('.form__agreement');

    function validateEmail(email) {
        // Регулярное выражение для email, на которое будет проверка
        let valE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return valE.test(String(email).toLowerCase());
    };

    function validatePhone(phone) {
        // Регулярное выражение для номера телефона, на которое будет проверка
        let vlaP = /^[\d\+][\d\(\)\ -]{4,20}\d$/;
        return vlaP.test(String(phone));
    }

    calculateForm.onsubmit = function () {
        let verdict = true;
        let emailValue = inputEmail.value;
        let phoneValue = inputPhone.value;
        let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

        formInputs.forEach(function (input) {  // Проверка полей на ввод и добавление/удаление класса об ошибке заполнения

            if (input.value === '') {
                input.classList.add('_error');
            } else {
                input.classList.remove('_error');
            };

        });

        if (!inputCheckbox.checked) {
            checkboxContainer.classList.add('_error'); // Проверка состояния чекбокса
            verdict = false;
        } else {
            checkboxContainer.classList.remove('_error');
        };

        if (!validatePhone(phoneValue)) {  // Проверка номера телефона на валидность
            inputPhone.classList.add('_error');
            verdict = false;
        } else {
            inputPhone.classList.remove('_error');
        };

        if (!validateEmail(emailValue)) {  // Проверка email на валидность
            inputEmail.classList.add('_error');
            verdict = false;
        } else {
            inputEmail.classList.remove('_error');
        };

        if (emptyInputs.length !== 0) {  // Проверка наличия пустых полей и запрет на отправку формы
            verdict = false;
        };

        return verdict;
    };
});