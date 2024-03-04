'use strict';

function calculator() {
  let o = document.getElementById('output');
  o.removeChild(o.firstChild);
  o.appendChild(document.createTextNode(
      calculate(`${document.getElementsByTagName('input')[0].value}\n`, 3, 2)));
}
