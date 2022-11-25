document.addEventListener('DOMContentLoaded', function () {
    // Переменный для расчета оборудования

    let cameraPrice = 2690;
    let cablePrice = 42;
    let powerUnitPrice;
    let videoRecorderPrice;
    let hddPrice;
    let mountingKitPrice;

    //__________________________________________________________________________________________________________________

    // Переменный для расчета работ

    let camSetupPrice = 2350;
    let cableSetupPrice = 90;
    let bpSetupPrice = 1350;
    let vrecorderSetupPrice = 1350;
    let instruction = 850;
    let pnrSetupPrice;

    //__________________________________________________________________________________________________________________

    // Переменный для ввода и вывода данных + кнопка отправки

    let cameras = document.querySelector('.camera-count');
    let camerasOutput = document.querySelector('.output-camera');
    let archive = document.querySelector('.archive-count');
    let archiveOutput = document.querySelector('.output-archive');
    let equipPricesField = document.querySelector('.equipprices-field');
    let workpPriceField = document.querySelector('.workprice-field');
    let totalPriceField = document.querySelector('.totalprice-field');
    let sendBtn = document.querySelector('.submit__btn');

    //__________________________________________________________________________________________________________________

    // Скрытые поля input цены за оборудования, за работу и итоговой цены (для отправки формы на почту PhP)

    let hiddenEquipprices = document.querySelector('.hidden-quipprices');
    let hiddenWorkprice = document.querySelector('.hidden-workprice');
    let hiddenTotalPrice = document.querySelector('.hidden-totalprice');

    //__________________________________________________________________________________________________________________

    // Привязка значения из инпута в поле для вывода

    cameras.addEventListener("input", function () {
        camerasOutput.value = cameras.value;
        calculate();
    });

    archive.addEventListener("input", function () {
        archiveOutput.value = archive.value;
        calculate();
    });

    //__________________________________________________________________________________________________________________

    function calculate() {

        // Расчет цены за один жесткий диск

        let prodN = cameras.value * archive.value;

        if (prodN <= 55.56) {
            hddPrice = 6500;
        } else if (prodN > 55.56 && prodN <= 111.11) {
            hddPrice = 8800;
        } else if (prodN > 111.11 && prodN <= 166.67) {
            hddPrice = 11000;
        } else if (prodN > 166.67 && prodN <= 222.22) {
            hddPrice = 15200;
        } else if (prodN > 222.22 && prodN <= 333.33) {
            hddPrice = 20500;
        } else if (prodN > 333.33 && prodN <= 444.44) {
            hddPrice = 42000;
        } else {
            hddPrice = 0;
        };

        //_____________________________________________________________________________________________________________________

        // Расчет цен за блок питания, видеорегистратор, монтажный комплект

        if (cameras.value <= 4) {
            powerUnitPrice = 1000;
            videoRecorderPrice = 4590;
            mountingKitPrice = 2150;
        } else if (cameras.value > 4 && cameras.value <= 8) {
            powerUnitPrice = 1500;
            videoRecorderPrice = 5690;
            mountingKitPrice = 3300;
        } else {
            powerUnitPrice = 3000;
            videoRecorderPrice = 10800;
            mountingKitPrice = 4500;
        };

        //_____________________________________________________________________________________________________________________

        // Расчет цен за ПНР

        if (cameras.value <= 4) {
            pnrSetupPrice = 3500;
        } else if (cameras.value > 4 && cameras.value <= 8) {
            pnrSetupPrice = 5500;
        } else {
            pnrSetupPrice = 7500;
        };

        //_____________________________________________________________________________________________________________________

        // Итоговая цена за оборудование

        const camerasPrice = cameras.value * cameraPrice; // Цена за все камеры
        const cablesPrice = cameras.value * 10 * cablePrice; // Цена за весь кабель

        const totalEquipPrices = camerasPrice + cablesPrice + hddPrice + powerUnitPrice + videoRecorderPrice + mountingKitPrice;
        let resultEquipPrices = totalEquipPrices.toLocaleString(); // Разделение числа на разряды

        equipPricesField.value = resultEquipPrices + ' руб.';
        hiddenEquipprices.value = equipPricesField.value;

        //_____________________________________________________________________________________________________________________

        // Итоговая цена за работу

        const camerasSetupPrice = cameras.value * camSetupPrice; // Цена за работу по установки всех камер
        const cablesSetupPrice = cameras.value * 10 * cableSetupPrice; // Цена за прокладку всего кабеля

        const totalSetupPrices = camerasSetupPrice + cablesSetupPrice + bpSetupPrice + vrecorderSetupPrice + instruction + pnrSetupPrice;
        let resultSetupPrices = totalSetupPrices.toLocaleString(); // Разделение числа на разряды

        workpPriceField.value = resultSetupPrices + ' руб.';
        hiddenWorkprice.value = workpPriceField.value;

        //_____________________________________________________________________________________________________________________

        // Итоговая цена за оборудование и за работу

        const totalPrice = (totalEquipPrices + totalSetupPrices);
        let resultTotalPrice = totalPrice.toLocaleString(); // Разделение числа на разряды

        hiddenTotalPrice.value = resultTotalPrice + ' руб.';

        if (hddPrice === 0) {
            totalPriceField.classList.add('warning-message');
            archive.classList.add('warning-range');
            totalPriceField.value = 'Указан слишком большой размер архива - требуется дополнительный расчет. Закажите обратный звонок и наш специалист свяжется с Вами.';
            equipPricesField.value = 0 + ' руб.';
            workpPriceField.value = 0 + ' руб.';
            sendBtn.style.display = "none";
        } else {
            totalPriceField.classList.remove('warning-message');
            archive.classList.remove('warning-range');
            totalPriceField.value = resultTotalPrice + ' руб.';
            sendBtn.style.display = "inline-block";
        };

    };

    calculate();
});