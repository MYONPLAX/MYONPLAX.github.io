import { serakSakwazoDwaat } from './checkSakwazoDwaat.js';
import { init } from './init.js';
window.onload = () => {
    init();
};
const wadwaatiLabel = () => {
    const html_sd_demas = document.getElementById('sd__demas');
    const html_label_sd_demas = document.getElementById('label__sd__demas');
    const html_label_sd_noz = document.getElementById('label__sd__noz');
    const html_abotokaYuruf = document.getElementById('abotoka__yuruf');
    const html_abotokaNoz = document.getElementById('abotoka__noz');
    const abotokaYuruf = html_abotokaYuruf.value;
    const abotokaNoz = html_abotokaNoz.value;
    html_sd_demas.textContent = serakSakwazoDwaat(abotokaYuruf);
    html_label_sd_demas.textContent = serakSakwazoDwaat(abotokaYuruf);
    html_label_sd_noz.textContent = serakSakwazoDwaat(abotokaNoz);
};
setInterval(wadwaatiLabel, 500);
