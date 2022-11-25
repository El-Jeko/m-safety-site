let center = [55.813172, 37.597872];

function init() {
    let map = new ymaps.Map("map", {
        center: center,
        zoom: 16
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '../icons/m-safety-icon.png',
        iconImageSize: [25, 25],
        iconImageOffset: [-20, -20],
    });

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
};

ymaps.ready(init);