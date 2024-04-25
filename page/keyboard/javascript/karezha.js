import { latin, magnik, stebyaats } from './keyboard.js';
export default class Karezha {
    gan1;
    gan2;
    ganx1;
    ganx2;
    lat1;
    lat2;
    latx1;
    latx2;
    karezhach;
    constructor(karezhach) {
        this.gan1 = karezhach[0];
        this.gan2 = karezhach[1];
        this.ganx1 = karezhach[2] === '' ? karezhach[0] : karezhach[2];
        this.ganx2 = karezhach[3] === '' ? karezhach[1] : karezhach[3];
        this.lat1 = karezhach[4];
        this.lat2 = karezhach[5];
        this.latx1 = karezhach[6] === '' ? karezhach[4] : karezhach[6];
        this.latx2 = karezhach[7] === '' ? karezhach[5] : karezhach[7];
        this.karezhach = [
            this.gan1, this.gan2, this.ganx1, this.ganx2, this.lat1, this.lat2,
            this.latx1, this.latx2
        ];
    }
    queKarezha() {
        let sunam = 0;
        if (!magnik)
            sunam += 1;
        if (stebyaats)
            sunam += 2;
        if (latin)
            sunam += 4;
        return (this.karezhach[sunam]);
    }
}
