'use strict';

(function() {

var MainPin = {
  WIDTH: 65,
  HEIGHT: 85,
  START_X: 570,
  START_Y: 375
};

var mainPin = document.querySelector('.map__pin--main');
var addressForm = document.querySelector('#address');

mainPin.addEventListener('mousedown', onMainPinMouseDown);

function onMainPinMouseDown (evt) {

  var startCoordinates = {
  	x: evt.clientX,
  	y: evt.clientY
  };

  var onMainPinMouseMove = function (moveEvt) {

    var shift = {
      x: startCoordinates.x - moveEvt.clientX,
      y: startCoordinates.y - moveEvt.clientY
  	};

    startCoordinates = {
      x: moveEvt.clientX,
  	  y: moveEvt.clientY
    };

  var coordinateX = mainPin.offsetLeft - shift.x;
  var coordinateY = mainPin.offsetTop - shift.y;

  var compareCoordinates = function(min, max, current) {
    if (current < min) {
      return min;
    } else {
        if (current > max) {
          return max;
        }
      }
    return current;
  };

  var coordMaxX = window.Utilities.Сoordinates.MAX_X;
  var coordMinX = window.Utilities.Сoordinates.MIN_X;
  var coordMaxY = window.Utilities.Сoordinates.MAX_Y;
  var coordMinY = window.Utilities.Сoordinates.MIN_Y;

  var left = compareCoordinates((coordMinX - Math.round(MainPin.WIDTH / 2)), (coordMaxX - Math.round(MainPin.WIDTH / 2)), coordinateX);
  var top = compareCoordinates((coordMinY - MainPin.HEIGHT), (coordMaxY - MainPin.HEIGHT), coordinateY);

  mainPin.style.left = left + 'px';
  mainPin.style.top = top + 'px';
  var leftCoordinate = left + Math.round(MainPin.WIDTH / 2);
  var topCoordinate = top + MainPin.HEIGHT;

  addressForm.setAttribute('value', leftCoordinate + ', ' + topCoordinate);
  };

  var onMainPinMouseUp = function (upEvt) {
    document.removeEventListener('mousemove', onMainPinMouseMove);
    document.removeEventListener('mouseup', onMainPinMouseUp);
  };

  document.addEventListener('mousemove', onMainPinMouseMove);
  document.addEventListener('mouseup', onMainPinMouseUp);
};

window.mainPin = {
    MainPin: MainPin,
    onMainPinMouseDown: onMainPinMouseDown
  };
})();
