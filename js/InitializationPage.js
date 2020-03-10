'use strict';

(function () {
  
  var check = 3;

  function aa (ch) {
    var mapFilters = document.querySelector('.map__filters');
    var mapFiltersSelect = mapFilters.querySelectorAll('select');
    var mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
    var form = document.querySelector('.ad-form');
    var formFieldset = form.querySelectorAll('fieldset');
    
    function disablActiveElements (param) {
      param.forEach(function(param) {
        addOrRemoveAttribute(param);
      }); 
    };

    function addOrRemoveAttribute (elem, ch) {
      if (2 < ch) {
        elem.setAttribute('disabled', 'disabled');     
      } else {
        elem.removeAttribute('disabled', 'disabled');
      }
    };

    disablActiveElements(mapFiltersSelect);  
    disablActiveElements(mapFiltersFieldset);
    disablActiveElements(formFieldset); 
    addOrRemoveAttribute(form);
  };

  aa(check);
  window.InitializationPage = {
      check: check,
      aa: aa  
  };
})();