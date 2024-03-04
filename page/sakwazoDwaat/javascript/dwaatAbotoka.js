import { hweSDE1, hweSDE2, hweSDL1, hweSDL2 } from './changeSakwazoDwaat.js';
import { serakSakwazoDwaat } from './checkSakwazoDwaat.js';
export function dwaatAbotoka(sdNoz) {
    const keraaxKomp = (komp) => {
        if (komp !== null)
            while (komp.firstChild)
                komp.removeChild(komp.firstChild);
    };
    const serakHweSD = (sd, abtka) => {
        switch (sd) {
            case 1:
                return hweSDL1(abtka);
            case 2:
                return hweSDL2(abtka);
            case 3:
                return hweSDE1(abtka);
            case 4:
                return hweSDE2(abtka);
            default:
                return abtka;
        }
    };
    const html_sdDemas = document.getElementById('sd__demas');
    const html_abotokaYuruf = document.getElementById('abotoka__yuruf');
    const html_abotokaNoz = document.getElementById('abotoka__noz');
    const abotokaYuruf = html_abotokaYuruf.value;
    const abotokaNoz = serakHweSD(sdNoz, abotokaYuruf);
    keraaxKomp(html_abotokaNoz);
    keraaxKomp(html_abotokaYuruf);
    html_sdDemas.textContent = serakSakwazoDwaat(abotokaYuruf);
    html_abotokaNoz.value = abotokaNoz;
}
