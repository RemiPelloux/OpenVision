import { KGl } from "./IconColorPickerGlyphs.js";
import { fAf, nVl, rVl } from "./f0s.js";
import { sp } from "./icon.js";
import { x } from "./tslib.es6.js";
import { memo as gAf } from "./react-runtime/react/esm-index-production.js";
import { jsx as mLi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as sVl } from "./react-runtime/react/esm-compiler-runtime-production.js";
var gLi, fLi, aTn, vLi, oVl, aVl;
export { aTn, aVl, fLi, gLi, oVl, vLi };
var __wakaru__Af_initialized = false;
export function _Af() {
if (__wakaru__Af_initialized) return;
__wakaru__Af_initialized = true;
"use strict";
x(), rVl(), KGl(), sp(), gLi = "none", fLi = "slash-circle", aTn = 10, vLi = 29, oVl = {
    cell: {
        kVAEAm: "ui-1n2onr6",
        k1xSpc: "ui-78zum5",
        kzqmXN: "ui-h8yej3",
        kZKoxP: "ui-170hpbr",
        k7Eaqz: "ui-euugli",
        kmuXW: "ui-2lah0s",
        kkrTdU: "ui-1ypdohk",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kEafiO: "ui-972fbf",
        kPef9Z: "ui-1ejq31n",
        kWqL5O: "ui-gfja2r",
        kSWEuD: "ui-11pwa6s",
        kt9PQ7: "ui-1qhh985",
        kfdmCh: "ui-1sy0etr",
        kZ1KPB: "ui-yj58a3",
        k4WBpm: "ui-1b16gh4",
        kaIpWk: "ui-1m7fhj7",
        kMeerF: "ui-1k57tk5",
        k3XXqK: "ui-1t137rt",
        kInvED: "ui-1wfwxd8",
        kjBf7l: "ui-1uczgqu",
        kLKAdn: "ui-exx8yu",
        kpe85a: "ui-1xpa7k",
        kGO01o: "ui-18d9i69",
        kE3dHu: "ui-1uhho1l",
        k1ekBW: "ui-1gbuem2",
        kIyJzY: "ui-g3p6pi ui-sagj69",
        kAMwcw: "ui-6ekqhr",
        kGVxlE: "ui-1gnnqk1 ui-23750h",
        $$css: !0
    }
}, aVl = gAf(function(t) {
    const n = sVl(13), { icons: i, height: r, listRef: s, selectedIcon: o } = t, a = Math.ceil(i.length / aTn);
    let c;
    n[0] !== i || n[1] !== o ? (c = {
        icons: i,
        selectedIcon: o
    }, n[0] = i, n[1] = o, n[2] = c) : c = n[2];
    const l = c;
    let u;
    n[3] === Symbol.for("react.memo_cache_sentinel") ? (u = {
        className: "ui-h8yej3 ui-6ikm8r ui-1odjw0f ui-1rohswg ui-fk6m8"
    }, n[3] = u) : u = n[3];
    const h = u, p = Math.ceil(r / vLi);
    let g;
    n[4] !== r ? (g = {
        ...h.style,
        height: r
    }, n[4] = r, n[5] = g) : g = n[5];
    let f;
    return n[6] !== r || n[7] !== s || n[8] !== p || n[9] !== a || n[10] !== l || n[11] !== g ? (f = mLi(nVl, {
        listRef: s,
        className: h.className,
        defaultHeight: r,
        rowComponent: fAf,
        rowCount: a,
        rowHeight: vLi,
        rowProps: l,
        overscanCount: p,
        style: g
    }), n[6] = r, n[7] = s, n[8] = p, n[9] = a, n[10] = l, n[11] = g, n[12] = f) : f = n[12], f;
});

}
