import { DSa } from "./IconColorPickerGlyphs.js";
import { fd } from "./icon.js";
import { L6S, TZh, wZh } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { c as EZh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as N6S } from "./react-runtime/react/esm-index-production.js";
import { jsx as w4r } from "./react-runtime/react/esm-jsx-runtime-production.js";
var C4r, T4r, Zmi, E4r, IZh, xZh;
export { C4r, E4r, IZh, T4r, Zmi, xZh };
var __wakaru_F6S_initialized = false;
export function F6S() {
if (__wakaru_F6S_initialized) return;
__wakaru_F6S_initialized = true;
"use strict";
E(), TZh(), DSa(), fd(), C4r = "none", T4r = "slash-circle", Zmi = 10, E4r = 29, IZh = {
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
}, xZh = N6S(function(e) {
    const n = EZh(13), { icons: i, height: r, listRef: s, selectedIcon: o } = e, a = Math.ceil(i.length / Zmi);
    let l;
    n[0] !== i || n[1] !== o ? (l = {
        icons: i,
        selectedIcon: o
    }, n[0] = i, n[1] = o, n[2] = l) : l = n[2];
    const c = l;
    let u;
    n[3] === Symbol.for("react.memo_cache_sentinel") ? (u = {
        className: "ui-h8yej3 ui-6ikm8r ui-1odjw0f ui-1rohswg ui-fk6m8"
    }, n[3] = u) : u = n[3];
    const d = u, h = Math.ceil(r / E4r);
    let p;
    n[4] !== r ? (p = {
        ...d.style,
        height: r
    }, n[4] = r, n[5] = p) : p = n[5];
    let g;
    return n[6] !== r || n[7] !== s || n[8] !== h || n[9] !== a || n[10] !== c || n[11] !== p ? (g = w4r(wZh, {
        listRef: s,
        className: d.className,
        defaultHeight: r,
        rowComponent: L6S,
        rowCount: a,
        rowHeight: E4r,
        rowProps: c,
        overscanCount: h,
        style: p
    }), n[6] = r, n[7] = s, n[8] = h, n[9] = a, n[10] = c, n[11] = p, n[12] = g) : g = n[12], g;
});

}
