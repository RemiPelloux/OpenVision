import { Ei } from "./Iwo.js";
import { Xs, yo } from "./cancellation.js";
import { or } from "./configuration.js";
import { szo } from "./defaultDocumentColorProvider.js";
import { Dg } from "./languageFeatures.js";
import { xp } from "./model.js";
import { E } from "./tslib.es6.js";
var rVd, sVd, oVd;
export { oVd, rVd, sVd };
var __wakaru_kEr_initialized = false;
export function kEr() {
if (__wakaru_kEr_initialized) return;
__wakaru_kEr_initialized = true;
"use strict";
E(), yo(), Ei(), xp(), Dg(), szo(), or(), rVd = class {
    constructor(){}
    async compute(t, e, n, i) {
        const r = await t.provideDocumentColors(e, n);
        if (Array.isArray(r)) for (const s of r)i.push({
            colorInfo: s,
            provider: t
        });
        return Array.isArray(r);
    }
}, sVd = class {
    constructor(){}
    async compute(t, e, n, i) {
        const r = await t.provideDocumentColors(e, n);
        if (Array.isArray(r)) for (const s of r)i.push({
            range: s.range,
            color: [
                s.color.red,
                s.color.green,
                s.color.blue,
                s.color.alpha
            ]
        });
        return Array.isArray(r);
    }
}, oVd = class {
    constructor(t){
        this.colorInfo = t;
    }
    async compute(t, e, n, i) {
        const r = await t.provideColorPresentations(e, this.colorInfo, Xs.None);
        return Array.isArray(r) && i.push(...r), Array.isArray(r);
    }
};

}
