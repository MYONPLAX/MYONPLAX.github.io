'use strict';

import {default as init, rand_square_9x9} from './random_number_9x9_wasm.js';

async function run() {
  await init('./script/random_number_9x9_wasm_bg.wasm');
  window.rand_square_9x9 = rand_square_9x9;
}
run();