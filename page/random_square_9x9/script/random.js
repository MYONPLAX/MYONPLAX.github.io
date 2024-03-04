'use strict';

function random() {
  let rand_square = rand_square_9x9();
  let square = document.getElementsByClassName('number');
  for (let i = 0; i < rand_square.length; ++i) {
	square[i].innerHTML = rand_square[i];
  }
}