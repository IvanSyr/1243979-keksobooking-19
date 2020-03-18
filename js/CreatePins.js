'use strict';

(function () {

  var Pins = {
    WIDTH: 50,
    HEIGHT: 70
  };

  var Offers = {
    COUNT_PINS: 9,
    MAX_PRICE: 5000,
    ROOMS: ['1 комната', '2 комнаты', '3 комнаты', '100 комнат'],
    GUESTS: ['для 1 гостя', 'для 2 гостей', 'для 3 гостей', 'не для гостей'],
    TYPE_OF_PLASES: ['palace', 'flat', 'house', 'bungalo'],
    CHECKIN_IN: ['после 12:00', 'после 13:00', 'после 14:00'],
    CHECKIN_OUT: ['выезд до 12:00', 'выезд до 13:00', 'выезд до 14:00'],
    ADVANTAGES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
  };
  var listOffers = [];

  function getCoordinatePinsX () {
    return window.Utilities.getRandomIntInclusive(window.Utilities.Сoordinates.MIN_X, window.Utilities.Сoordinates.MAX_X);
  };

  function getCoordinatePinsY () {
    return window.Utilities.getRandomIntInclusive(window.Utilities.Сoordinates.MIN_Y, window.Utilities.Сoordinates.MAX_Y);
  };

  for (var i = 1; i < Offers.COUNT_PINS; i++) {

    var coordinatePinsX = getCoordinatePinsX();
    var coordinatePinsY = getCoordinatePinsY();

    listOffers.push({
      'author': {
        'avatar': 'img/avatars/user0' + i + '.png'
      },
      'offer': {
        'title': 'заголовок предложения',
        'address': (coordinatePinsX + Pins.WIDTH / 2) + ', ' + (coordinatePinsY + Pins.HEIGHT),
        'price': window.Utilities.getRandom(Offers.MAX_PRICE),
        'type': Offers.TYPE_OF_PLASES[window.Utilities.getRandom(Offers.TYPE_OF_PLASES.length)],
        'rooms': Offers.ROOMS[window.Utilities.getRandom(Offers.ROOMS.length)],
        'guests': Offers.GUESTS[window.Utilities.getRandom(Offers.GUESTS.length)],
        'checkin': Offers.CHECKIN_IN[window.Utilities.getRandom(Offers.CHECKIN_IN.length)],
        'checkout': Offers.CHECKIN_OUT[window.Utilities.getRandom(Offers.CHECKIN_OUT.length)],
        'features': window.Utilities.getRandomArray(Offers.ADVANTAGES),
        'description': 'строка с описанием',
        'photos': window.Utilities.getRandomArray(Offers.PHOTOS)
      },
      'location': {
        'x': coordinatePinsX,
        'y': coordinatePinsY,
      }
    });
  }

  window.CreatePins = {
    Pins: Pins,
    Offers: Offers,
    listOffers: listOffers,
  };

})();


