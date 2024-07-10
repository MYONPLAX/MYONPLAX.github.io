'use strict';

import {calculate, default as init} from './calculator_wasm.js';

async function run() {
  await init('./script/calculator_wasm_bg.wasm');
  window.calculate = calculate;
}
run();