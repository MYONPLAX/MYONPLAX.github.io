const DcmELL = ['\u1FB9', '\u1FB1', '\u1FD9', '\u1FD1'];
const DcmLAT = [
    '\u00C7', '\u00E7', '\u0160', '\u0161', '\u010C', '\u010D', '\u017D',
    '\u017E', '\u1E62', '\u1E63', '\u1E24', '\u1E25', '\u0100', '\u0101',
    '\u0112', '\u0113', '\u012A', '\u012B', '\u014C', '\u014D'
];
const karezhaELL1 = new RegExp(/[\u{03B1}-\u{03C9}\u{0391}-\u{03A9}]/u);
export function checkSakwazoDwaat(abotoka) {
    const checkDcm = (abtka, Dcm) => {
        return Dcm.some(krz => abtka.normalize().includes(krz));
    };
    const checkKrz = (abtka, Krz) => {
        return Krz.test(abtka);
    };
    const poshDCM = checkDcm(abotoka, DcmLAT) ? true : false;
    if (checkDcm(abotoka, DcmELL)) {
        return 3;
    }
    if (checkKrz(abotoka, karezhaELL1)) {
        if (!poshDCM)
            return 4;
    }
    else {
        if (poshDCM)
            return 1;
        else
            return 2;
    }
    return 3;
}
export function serakSakwazoDwaat(abotoka) {
    switch (checkSakwazoDwaat(abotoka)) {
        case 1:
            return 'L1';
        case 2:
            return 'L2';
        case 3:
            return 'E1';
        case 4:
            return 'E2';
        default:
            return '-';
    }
}
