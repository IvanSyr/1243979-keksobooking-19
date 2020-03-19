'use strict';

(function () {

  var COUNT_PINS = 5;
  var PINS_WIDTH = 50;
  var PINS_HEIGHT = 70;


  var map = document.querySelector('.map');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  function renderPins (arrayOffers) {
    var pinElement = pinTemplate.cloneNode(true);

    pinElement.style = 'left: ' + (arrayOffers.location.x - (PINS_WIDTH / 2)) + 'px; top: ' + (arrayOffers.location.y - PINS_HEIGHT) + 'px;';
    pinElement.querySelector('img').src = arrayOffers.author.avatar;
    pinElement.querySelector('img').alt = arrayOffers.offer.title;
    return pinElement;
  };

  var fragment = document.createDocumentFragment();

  window.load(function (array) {
    for (var j = 0; j < COUNT_PINS; j++) {
      fragment.appendChild(renderPins(array[j]));
    }
  });

  function displayPinsOnMap () {
    map.querySelector('.map__pins').appendChild(fragment);
  };

  window.RenderPins = {
    displayPinsOnMap: displayPinsOnMap
  };

})();
