'use strict';

var pins = {
  WIDTH: 50,
  HEIGHT: 70
};

var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
var CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
var listOffers = [];

var getRandom = function (array) {
  return Math.floor(Math.random() * (array.length - 1));
};

var map = document.querySelector('.map');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var getListOffers = function () {
  for (var i = 1; i < 9; i++) {
    var cardOffer = {
      'author': {
        'avatar': 'img/avatars/user0' + i + '.png'
      },
      'offer': {
        'title': 'строка, заголовок предложения',
        'address': 'location.x, location.y',
        'price': 'число, стоимость',
        'type': getRandom(TYPE),
        'rooms': 'число, количество комнат',
        'guests': 'число, количество гостей, которое можно разместить',
        'checkin': getRandom(CHECKIN_TIMES),
        'checkout': getRandom(CHECKOUT_TIMES),
        'features': getRandom(FEATURES),
        'description': 'строка с описанием',
        'photos': getRandom(PHOTOS)
      },
      'location': {
        'x': 100,
        'y': 250
      }
    };
    listOffers.push(cardOffer);
  }
};

var renderPins = function (arrayOffers) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.style = 'left: ' + (arrayOffers.location.x - (pins.WIDTH / 2)) + 'px; top: ' + (arrayOffers.location.y - pins.HEIGHT) + 'px;';
  pinElement.querySelector('img').src = arrayOffers.author.avatar;
  pinElement.querySelector('img').alt = arrayOffers.offer.title;
  return pinElement;
};

var fragment = document.createDocumentFragment();
getListOffers();
for (var j = 0; j < 8; j++) {
  fragment.appendChild(renderPins(listOffers[j]));
}
map.querySelector('.map__pins').appendChild(fragment);
