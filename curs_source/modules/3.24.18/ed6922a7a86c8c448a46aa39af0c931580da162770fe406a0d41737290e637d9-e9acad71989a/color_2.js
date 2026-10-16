import { si } from "./HVr.js";
import { Ar, Ji } from "./cancellation.js";
import { Cn } from "./configuration.js";
import { Mis } from "./defaultDocumentColorProvider.js";
import { kh } from "./languageFeatures.js";
import { Ll } from "./model.js";
import { x } from "./tslib.es6.js";
var h$c, p$c, m$c;
export { h$c, m$c, p$c };
var __wakaru_xyi_initialized = false;
export function xyi() {
if (__wakaru_xyi_initialized) return;
__wakaru_xyi_initialized = true;
"use strict";
x(), Ar(), si(), Ll(), kh(), Mis(), Cn(), h$c = class {
    constructor(){}
    async compute(e, t, n, i) {
        const r = await e.provideDocumentColors(t, n);
        if (Array.isArray(r)) for (const s of r)i.push({
            colorInfo: s,
            provider: e
        });
        return Array.isArray(r);
    }
}, p$c = class {
    constructor(){}
    async compute(e, t, n, i) {
        const r = await e.provideDocumentColors(t, n);
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
}, m$c = class {
    constructor(e){
        this.colorInfo = e;
    }
    async compute(e, t, n, i) {
        const r = await e.provideColorPresentations(t, this.colorInfo, Ji.None);
        return Array.isArray(r) && i.push(...r), Array.isArray(r);
    }
};

}
