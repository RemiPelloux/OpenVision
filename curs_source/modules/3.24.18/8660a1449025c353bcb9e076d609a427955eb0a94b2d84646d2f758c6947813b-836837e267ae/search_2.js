import { A_y, Ei, Fa, J_y } from "./Iwo.js";
import { jn } from "./SZu.js";
import { bo } from "./arrays.js";
import { qn } from "./async.js";
import { pP } from "./extpath.js";
import { NB } from "./glob.js";
import { It } from "./instantiation.js";
import { cp } from "./objects.js";
import { Ul } from "./path_2.js";
import { tG1 } from "./searchExtTypes.js";
import { E } from "./tslib.es6.js";
import { iG1 } from "./yBp.js";
var Zqe, WKa, GKa, ZEn, xJr, qKa, zKa, hBm, ICe, pBm, AJr, VKa, KKa, RJr;
export { AJr, GKa, ICe, KKa, RJr, VKa, WKa, ZEn, Zqe, hBm, pBm, qKa, xJr, zKa };
var __wakaru_wL_initialized = false;
export function wL() {
if (__wakaru_wL_initialized) return;
__wakaru_wL_initialized = true;
"use strict";
E(), bo(), NB(), cp(), pP(), Fa(), It(), Ul(), Ei(), tG1(), qn(), Zqe = "workbench.view.search", WKa = "search-result", GKa = "search.exclude", ZEn = 2e4, xJr = {}, qKa = "\u27EA ", zKa = " characters skipped \u27EB", hBm = (qKa.length + zKa.length + 5) * 2, ICe = jn("searchService"), pBm = class {
    constructor(t){
        this.resource = t, this.results = [];
    }
}, AJr = class {
    constructor(t, e, n, i){
        this.rangeLocations = [], this.webviewIndex = i;
        const r = Array.isArray(e) ? e : [
            e
        ];
        if (n && n.matchLines === 1 && iG1(r)) {
            t = J_y(t, n.matchLines);
            let s = "", o = 0, a = 0;
            const l = Math.floor(n.charsPerLine / 5);
            for (const c of r){
                const u = Math.max(c.startColumn - l, 0), d = c.startColumn + n.charsPerLine;
                if (u > a + l + hBm) {
                    const h = qKa + (u - a) + zKa;
                    s += h + t.slice(u, d), o += u - (a + h.length);
                } else s += t.slice(a, d);
                a = d, this.rangeLocations.push({
                    source: c,
                    preview: new KKa(0, c.startColumn - o, c.endColumn - o)
                });
            }
            this.previewText = s;
        } else {
            const s = Array.isArray(e) ? e[0].startLineNumber : e.startLineNumber, o = A_y(e, (a)=>({
                    preview: new VKa(a.startLineNumber - s, a.startColumn, a.endLineNumber - s, a.endColumn),
                    source: a
                }));
            this.rangeLocations = Array.isArray(o) ? o : [
                o
            ], this.previewText = t;
        }
    }
}, VKa = class {
    constructor(t, e, n, i){
        this.startLineNumber = t, this.startColumn = e, this.endLineNumber = n, this.endColumn = i;
    }
}, KKa = class extends VKa {
    constructor(t, e, n){
        super(t, e, t, n);
    }
}, RJr = class extends Error {
    constructor(t, e){
        super(t), this.code = e;
    }
};

}
