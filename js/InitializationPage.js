'use strict';

(function () {

  var MainPin = {
    WIDTH: 65,
    HEIGHT: 65,
  }

  var ObjectsPage = {
    mainPin: document.querySelector('.map__pin--main'),
    addressForm: document.querySelector('#address')
  };


  var formElements = {
    mapFiltersSelect: document.querySelector('.map__filters').querySelectorAll('select'),
    mapFiltersFieldset: document.querySelector('.map__filters').querySelectorAll('fieldset'),
    formFieldset: document.querySelector('.ad-form').querySelectorAll('fieldset')
  };

  function setStartCoordinates () {
    var startCoordinatesMainPinX = Math.round(ObjectsPage.mainPin.offsetLeft + (MainPin.WIDTH / 2));
    var startCoordinatesMainPinY = Math.round(ObjectsPage.mainPin.offsetTop + (MainPin.HEIGHT / 2));
    ObjectsPage.addressForm.setAttribute('value', startCoordinatesMainPinX + ', ' + startCoordinatesMainPinY);
  };

  function disablePage () {
    function disablElementsOnPage (param) {
      param.forEach(function(param) {
        param.setAttribute('disabled', 'disabled');
      });
    };

    for (var key in formElements) {
      disablElementsOnPage(formElements[key]);
    };
  };

  function activatePage () {
    function activateElementsOnPage (param) {
      param.forEach(function(param) {
        param.removeAttribute('disabled');
      });
    };

    for (var k in formElements) {
      activateElementsOnPage(formElements[k]);
    };
  };

  window.InitializationPage = {
    ObjectsPage: ObjectsPage,
    formElements: formElements,
    setStartCoordinates: setStartCoordinates,
    disablePage: disablePage,
    activatePage: activatePage
  };
})();
