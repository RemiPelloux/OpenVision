import { NDv } from "./A3u.js";
import { Hlg, Ps, _ug, si } from "./HVr.js";
import { dr } from "./arrays.js";
import { bn } from "./async.js";
import { vI } from "./extpath.js";
import { qM } from "./glob.js";
import { Ze } from "./instantiation.js";
import { bu } from "./objects.js";
import { ba } from "./path_2.js";
import { vn } from "./qIc.js";
import { cQd } from "./searchExtTypes.js";
import { x } from "./tslib.es6.js";
var Tqi, jee, Det, imo, ewt, N2n, rmo, smo, lQd, DX, uQd, Eqi, omo, amo, xqi;
export { DX, Det, Eqi, N2n, Tqi, amo, ewt, imo, jee, lQd, omo, rmo, smo, uQd, xqi };
var __wakaru_sE_initialized = false;
export function sE() {
if (__wakaru_sE_initialized) return;
__wakaru_sE_initialized = true;
"use strict";
x(), dr(), qM(), bu(), vI(), Ps(), Ze(), ba(), si(), cQd(), bn(), Tqi = "workbench.view.search", jee = "workbench.view.search", Det = "search-result", imo = "search.exclude", ewt = 2e4, N2n = {}, rmo = "\u27EA ", smo = " characters skipped \u27EB", lQd = (rmo.length + smo.length + 5) * 2, DX = vn("searchService"), uQd = class {
    constructor(e){
        this.resource = e, this.results = [];
    }
}, Eqi = class {
    constructor(e, t, n, i){
        this.rangeLocations = [], this.webviewIndex = i;
        const r = Array.isArray(t) ? t : [
            t
        ];
        if (n && n.matchLines === 1 && NDv(r)) {
            e = _ug(e, n.matchLines);
            let s = "", o = 0, a = 0;
            const c = Math.floor(n.charsPerLine / 5);
            for (const l of r){
                const u = Math.max(l.startColumn - c, 0), h = l.startColumn + n.charsPerLine;
                if (u > a + c + lQd) {
                    const p = rmo + (u - a) + smo;
                    s += p + e.slice(u, h), o += u - (a + p.length);
                } else s += e.slice(a, h);
                a = h, this.rangeLocations.push({
                    source: l,
                    preview: new amo(0, l.startColumn - o, l.endColumn - o)
                });
            }
            this.previewText = s;
        } else {
            const s = Array.isArray(t) ? t[0].startLineNumber : t.startLineNumber, o = Hlg(t, (a)=>({
                    preview: new omo(a.startLineNumber - s, a.startColumn, a.endLineNumber - s, a.endColumn),
                    source: a
                }));
            this.rangeLocations = Array.isArray(o) ? o : [
                o
            ], this.previewText = e;
        }
    }
}, omo = class {
    constructor(e, t, n, i){
        this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = i;
    }
}, amo = class extends omo {
    constructor(e, t, n){
        super(e, t, e, n);
    }
}, xqi = class extends Error {
    constructor(e, t){
        super(e), this.code = t;
    }
};

}
