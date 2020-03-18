'use strict';

(function () {

  var Сoordinates = {
    MIN_X: 0,
    MIN_Y: 130,
    MAX_X: 1200,
    MAX_Y: 630
  };



  function getRandom (param) {
    return Math.floor(Math.random() * param);
  };

  function getRandomIntInclusive (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function getRandomArray (array) {

    var randomArray = [];
    var count = 0;

    if (count == 1) {
      count = 0;
      randomArray.length = 0;
    };

    var t = getRandomIntInclusive(0, array.length);

    for (var c = 0; c < t; c++) {
      var r = Math.floor(Math.random() * (array.length - c)) + c;
      var ar = array[r];
      array[r] = array[c];
      array[c] = ar;

      randomArray.push(ar);
    };

    count++;
    return randomArray;
  };

  window.Utilities = {
    Сoordinates: Сoordinates,
    getRandom: getRandom,
    getRandomArray: getRandomArray,
    getRandomIntInclusive: getRandomIntInclusive
  };

})();
