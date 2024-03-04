import { dwaatAbotoka } from './dwaatAbotoka.js';
export function init() {
    const redwaat = () => {
        const html_sdNoz = document.getElementById('sd');
        dwaatAbotoka(Number(html_sdNoz.value));
    };
    const keraax = (abotokaDwaatRwer) => {
        abotokaDwaatRwer.value = '';
    };
    const keraaxYuruf = () => {
        const html_abotokaYuruf = document.getElementById('abotoka__yuruf');
        keraax(html_abotokaYuruf);
    };
    const keraaxNoz = () => {
        const html_abotokaNoz = document.getElementById('abotoka__noz');
        keraax(html_abotokaNoz);
    };
    const dwaatClipboard = (abotokaCopyRwer) => {
        abotokaCopyRwer.select();
        navigator.clipboard.writeText(abotokaCopyRwer.value);
    };
    const copyYuruf = () => {
        const html_abotokaYuruf = document.getElementById('abotoka__yuruf');
        dwaatClipboard(html_abotokaYuruf);
    };
    const copyNoz = () => {
        const html_abotokaNoz = document.getElementById('abotoka__noz');
        dwaatClipboard(html_abotokaNoz);
    };
    const html_button_redwaat = document.getElementById('redwaat');
    html_button_redwaat.addEventListener('click', () => { redwaat(); });
    const html_button_keraax_yuruf = document.getElementById('keraax__yuruf');
    html_button_keraax_yuruf.addEventListener('click', () => { keraaxYuruf(); });
    const html_button_copy_yuruf = document.getElementById('clipboard__yuruf');
    html_button_copy_yuruf.addEventListener('click', () => { copyYuruf(); });
    const html_button_keraax_noz = document.getElementById('keraax__noz');
    html_button_keraax_noz.addEventListener('click', () => { keraaxNoz(); });
    const html_button_copy_noz = document.getElementById('clipboard__noz');
    html_button_copy_noz.addEventListener('click', () => { copyNoz(); });
}
