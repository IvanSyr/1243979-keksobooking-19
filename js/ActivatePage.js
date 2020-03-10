'use strict';

(function () {
  var pinMain = document.querySelector('.map__pin--main');

  pinMain.addEventListener('mousedown', onPageActivate);
  pinMain.addEventListener('keydown', onPageActivate);

  function onPageActivate (evt) {
  	
  	function pressEnter (evt) {
  	  if ((evt.button === 0) || (evt.key === 'Enter')) {
  	  	return true;
  	  }
  	  return false;
  	};

  	pressEnter(evt) ? document.querySelector('.map').classList.remove('map--faded') : null;
    
  	var onPageActivated = function (upEvt) {
  		document.removeEventListener('mousedown', onPageActivate);
  		document.removeEventListener('keydown', onPageActivate);
  		document.removeEventListener('mouseup', onPageActivated);
  	}

  	document.addEventListener('mouseup', onPageActivated);
  };
  	
  window.ActivatePage = {
    onPageActivate: onPageActivate
  };

})();