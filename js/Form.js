'use strict';

(function() {

var form = document.querySelector('.ad-form');
var titleInput = form.querySelector('#title');
var priceInput = form.querySelector('#price');
var typeInput = form.querySelector('#type');
var roomNumberInput = form.querySelector('#room_number');
var capacityInput = form.querySelector('#capacity');

window.InitializationPage.setStartCoordinates()

window.InitializationPage.disablePage();

function validateTitle () {
  titleInput.addEventListener('invalid', function () {
    switch (true) {
      case titleInput.validity.valueMissing:
        titleInput.setCustomValidity('Обязательное поле');
        break;
      case titleInput.validity.tooShort:
        titleInput.setCustomValidity('Заголовок должно состоять минимум из 30-ти символов');
        break;
      case titleInput.validity.tooLong:
        titleInput.setCustomValidity('Имя не должно превышать 100 символов');
        break;
      default:
        titleInput.setCustomValidity('');
    };
  });
};

function validatePrice () {
  priceInput.addEventListener('invalid', function() {
    switch (true) {
      case priceInput.validity.valueMissing:
        priceInput.setCustomValidity('Обязательное поле');
        break;
      case priceInput.validity.rangeUnderflow:
        priceInput.setCustomValidity('Минимальное значение не может быть меньше ' + priceInput.min);
        break;
      case priceInput.validity.stepMismatch:
        priceInput.setCustomValidity('Значение не соответствует указаному шагу, равному ' + priceInput.step);
        break;
      case priceInput.validity.rangeOverflow:
        priceInput.setCustomValidity('Максимальное значение не может быть больше ' + priceInput.max);
        break;
      default:
        priceInput.setCustomValidity('');
    };
  });
};

function validateType () {
  var MIN_PRICE_BUNGALO = 0;
  var MAX_PRICE_BUNGALO = 999;
  var MIN_PRICE_FLAT = 1000;
  var MAX_PRICE_FLAT = 4999;
  var MIN_PRICE_HOUSE = 5000;
  var MAX_PRICE_HOUSE = 9999;
  var MIN_PRICE_PALACE = 10000;
  var MAX_PRICE_PALACE = 1000000;

  typeInput.addEventListener('change', function () {
    var indexSelectValue = typeInput.options.selectedIndex;
    var selectValue = typeInput.options[indexSelectValue].value;
    var setMinPrice = function (minVal, maxVal) {
      priceInput.value = "";
      priceInput.max = maxVal;
      priceInput.min = minVal;
      priceInput.placeholder = minVal;
    };
    switch (selectValue) {
      case 'bungalo':
        setMinPrice(MIN_PRICE_BUNGALO, MAX_PRICE_BUNGALO);
        break;
      case 'flat':
        setMinPrice(MIN_PRICE_FLAT, MAX_PRICE_FLAT);
        break;
      case 'house':
        setMinPrice(MIN_PRICE_HOUSE, MAX_PRICE_HOUSE);
        break;
      case 'palace':
        setMinPrice(MIN_PRICE_PALACE, MAX_PRICE_PALACE);
        break;
    }
  });
};

function validateCapacity () {

  roomNumberInput.addEventListener('change', function (evt) {
    var roomIndexSelectValue = roomNumberInput.options.selectedIndex;
    var roomNumberSelectValue = roomNumberInput.options[roomIndexSelectValue].value;
    var capacityIndexSelectValue = capacityInput.options.selectedIndex;
    var capacitySelectValue = capacityInput.options[capacityIndexSelectValue].value;
    var target = evt.target;
    if (target) {
      for (var i = 0; i < capacityInput.options.length; i++) {
        capacityInput.options[i].removeAttribute('disabled', true);
        if (capacityInput.options[i].value > roomNumberSelectValue) {
          capacityInput.options[i].setAttribute('disabled', true);
        }
      }
      if (roomNumberSelectValue < capacitySelectValue) {
        target.setCustomValidity('Неподходящее количество комнат');
      } else {
        target.setCustomValidity('');
      }
    }

    // for (var i = 0; i < capacityInput.options.length; i++) {
    //   capacityInput.options[i].setAttribute('disabled', 'disabled');
    //   if (capacityInput.options[i].value <= roomNumberSelectValue && capacityInput.options[i].value != 0) {
    //     capacityInput.options[i].removeAttribute('disabled', true);
    //   };
    // };

    // if (roomNumberSelectValue == 0) {
    //     capacityInput.options[3].removeAttribute('disabled', true);
    //   };

    // if (roomNumberSelectValue >= capacitySelectValue) {
    //   capacityInput.setCustomValidity('');
    // } else {
    //   capacityInput.setCustomValidity('Невалидное число гостей ');
    // }

  });
};

validateCapacity();
validateTitle ();
validatePrice();
validateType();


window.Form = {
  validateTitle: validateTitle,
  validatePrice: validatePrice,
  validateType: validateType,
  validateCapacity: validateCapacity
};

})();
