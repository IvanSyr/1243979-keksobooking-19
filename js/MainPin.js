'use strict';

(function() {
  
var Сoordinates = {
  MIN_X: 0,
  MIN_Y: 130,
  MAX_X: 1200,
  MAX_Y: 630
};

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
    
  var left = compareCoordinates((Сoordinates.MIN_X - Math.round(MainPin.WIDTH / 2)), (Сoordinates.MAX_X - Math.round(MainPin.WIDTH / 2)), coordinateX);
  var top = compareCoordinates((Сoordinates.MIN_Y - MainPin.HEIGHT), (Сoordinates.MAX_Y - MainPin.HEIGHT), coordinateY);
  
  mainPin.style.left = left + 'px';
  mainPin.style.top = top + 'px';
  
  addressForm.setAttribute('value', left + ', ' + top);
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