import { Qe } from "./Iwo.js";
import { KYt, lee } from "./Ycg.js";
import { qn } from "./async.js";
import { Hn } from "./dom_2.js";
import { Kye } from "./glass-dnd-data.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { aDn } from "./utilities.esm.js";
import { Bs } from "./window.js";
var vhv, _hv, Fzl, bhv;
export { Fzl, _hv, bhv, vhv };
var __wakaru_Bzl_initialized = false;
export function Bzl() {
if (__wakaru_Bzl_initialized) return;
__wakaru_Bzl_initialized = true;
"use strict";
E(), Mt(), lee(), aDn(), Hn(), Bs(), qn(), Qe(), Kye(), vhv = 16, _hv = {
    dropTarget: {
        kMeerF: "glass-1k57tk5 glass-p08swy",
        k3XXqK: "glass-1t137rt glass-gumkl",
        kjBf7l: "glass-csvsa1",
        kInvED: "glass-1wfwxd8 glass-ak544s",
        $$css: !0
    }
}, Fzl = _hv.dropTarget, bhv = ({ activatorEvent: t, activeNodeRect: e, transform: n })=>{
    const i = t === null ? null : KYt(t);
    return i === null || e === null ? n : {
        ...n,
        x: n.x + i.x - e.left - vhv
    };
};

}
