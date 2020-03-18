'use strict';

(function () {
  var pinMain = document.querySelector('.map__pin--main');

  pinMain.addEventListener('mousedown', onPageActivate);
  pinMain.addEventListener('keydown', onPageActivate);

  function onPageActivate (evt) {
  	if ((evt.button === 0) || (evt.key === 'Enter')) {
	  	document.querySelector('.map').classList.remove('map--faded');
      window.RenderPins.displayPinsOnMap();
      window.InitializationPage.activatePage();

  	};

    function onPageActivated (evtUp) {
  		document.removeEventListener('mousedown', onPageActivate);
  		document.removeEventListener('keydown', onPageActivate);
  		document.removeEventListener('mouseup', onPageActivated);
  	};

  	document.addEventListener('mouseup', onPageActivated);
  };

  window.ActivatePage = {
    onPageActivate: onPageActivate
  };

})();
