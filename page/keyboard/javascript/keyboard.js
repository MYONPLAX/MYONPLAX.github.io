import { alphach1, alphach2, alphach3, alphach4, thigor } from './alphaArray.js';
export let magunik = false;
export let latin = false;
export let tsebyaats = false;
export let desktop = false;
let radius = false;
const fakitsButton = (komp, karezhach, id, func, value, flag) => {
    const node = document.createElement('button');
    node.appendChild((document.createTextNode(karezhach)));
    if (id !== null)
        node.id = id;
    if (value !== null)
        node.value = value;
    node.type = 'button';
    if (flag !== null)
        node.className = flag ? 'on' : 'off';
    node.addEventListener('click', func);
    komp.appendChild(node);
};
const dwaat = (e) => {
    document.getElementById('abotokch').value +=
        e.target.value;
};
const torenyuosAlpha = (alphaArray, komp) => {
    for (const alphach of alphaArray) {
        const karezha = alphach.queKarezha();
        fakitsButton(komp, karezha, null, dwaat, karezha, null);
    }
};
const keraaxAlpha = (komp) => {
    while (komp.hasChildNodes() && komp.firstChild !== null)
        komp.removeChild(komp.firstChild);
};
function torenyuosTsebyaats() {
    const buttonNoz = (text, id, func, flag) => {
        const komp = document.getElementById('tsebyaats');
        fakitsButton(komp, text, id, func, null, flag);
    };
    const kaihMag = () => {
        magunik = !magunik;
        wadwaatiAlpha();
    };
    const kaihLat = () => {
        latin = !latin;
        wadwaatiAlpha();
    };
    const kaihTseb = () => {
        tsebyaats = !tsebyaats;
        wadwaatiAlpha();
    };
    const kaihRad = () => {
        radius = !radius;
        document.getElementById('radKeyboard').href =
            radius ? './style/keyboardRadius.css' : './style/keyboardSquare.css';
        document.getElementById('buttonRad').className =
            radius ? 'on' : 'off';
    };
    const kaihDesktop = () => {
        desktop = !desktop;
        document.getElementById('magnikKeyboard').href =
            desktop ? './style/keyboardDesktop.css' : './style/keyboardMobile.css';
        document.getElementById('buttonDsk').className =
            desktop ? 'on' : 'off';
    };
    const keraaxAbotokch = () => {
        document.getElementById('abotokch').value = '';
    };
    const nwikonsupa = () => {
        const htmlAbotokch = document.getElementById('abotokch');
        htmlAbotokch.value = htmlAbotokch.value.slice(0, -1);
    };
    const konsupathi = () => {
        document.getElementById('abotokch').value += ' ';
    };
    const clipboard = () => {
        const textArea = document.getElementById('abotokch');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
    };
    buttonNoz('⬆', null, kaihMag, magunik);
    buttonNoz('🔄', null, kaihLat, latin);
    buttonNoz('☑', null, kaihTseb, tsebyaats);
    buttonNoz('🆑', null, keraaxAbotokch, false);
    buttonNoz('⬅️', null, nwikonsupa, false);
    buttonNoz('_', null, konsupathi, false);
    buttonNoz('🔵', 'buttonRad', kaihRad, radius);
    buttonNoz('🖥', 'buttonDsk', kaihDesktop, desktop);
    buttonNoz('📋', null, clipboard, false);
}
function keraaxKeyboard() {
    keraaxAlpha(document.getElementById('alphach1'));
    keraaxAlpha(document.getElementById('alphach2'));
    keraaxAlpha(document.getElementById('alphach3'));
    keraaxAlpha(document.getElementById('alphach4'));
    keraaxAlpha(document.getElementById('thigor'));
    keraaxAlpha(document.getElementById('tsebyaats'));
}
function torenyuosKeyboard() {
    torenyuosAlpha(alphach1, document.getElementById('alphach1'));
    torenyuosAlpha(alphach2, document.getElementById('alphach2'));
    torenyuosAlpha(alphach3, document.getElementById('alphach3'));
    torenyuosAlpha(alphach4, document.getElementById('alphach4'));
    torenyuosAlpha(thigor, document.getElementById('thigor'));
    torenyuosTsebyaats();
}
function wadwaatiAlpha() {
    keraaxKeyboard();
    torenyuosKeyboard();
}
window.onload = () => {
    torenyuosKeyboard();
};
