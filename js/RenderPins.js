'use strict';

(function () {

  var pins = {
    WIDTH: 50,
    HEIGHT: 70
  };

  var map = document.querySelector('.map');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  function renderPins (arrayOffers) {
    var pinElement = pinTemplate.cloneNode(true);

    pinElement.style = 'left: ' + (arrayOffers.location.x - (window.CreatePins.Pins.WIDTH / 2)) + 'px; top: ' + (arrayOffers.location.y - window.CreatePins.Pins.HEIGHT) + 'px;';
    pinElement.querySelector('img').src = arrayOffers.author.avatar;
    pinElement.querySelector('img').alt = arrayOffers.offer.title;
    return pinElement;
  };

  var fragment = document.createDocumentFragment();

  for (var j = 0; j < (window.CreatePins.Offers.COUNT_PINS - 1); j++) {
    fragment.appendChild(renderPins(window.CreatePins.listOffers[j]));
  }

  function displayPinsOnMap () {
    map.querySelector('.map__pins').appendChild(fragment);
  };

  window.RenderPins = {
    displayPinsOnMap: displayPinsOnMap
  };

})();
