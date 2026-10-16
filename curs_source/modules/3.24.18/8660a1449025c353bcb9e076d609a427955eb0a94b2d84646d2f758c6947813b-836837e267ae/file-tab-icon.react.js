import { st0 } from "./Asv.js";
import { W5, zt } from "./LYd.js";
import { k_ } from "./editor-panel-tab-kind.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { jsx as Aql } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as it0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as rt0 } from "./react-runtime/react/esm-index-production.js";
var RIs, dcv, hcv;
export { RIs, dcv, hcv };
var __wakaru_ot0_initialized = false;
export function ot0() {
if (__wakaru_ot0_initialized) return;
__wakaru_ot0_initialized = true;
"use strict";
E(), Mt(), k_(), RIs = {
    fileIcon: {
        kmuXW: "glass-2lah0s",
        keTefX: "glass-1v2ppyh",
        kzqmXN: "glass-ek66a6",
        $$css: !0
    },
    pathFileIcon: {
        kmuXW: "glass-2lah0s",
        keTefX: "glass-1v2ppyh",
        kzqmXN: "glass-ek66a6",
        kB7OPa: "glass-9f619",
        kZKoxP: "glass-1a6rlst glass-brl3j7",
        "--icon-size": "glass-gebx3k glass-dg29tg",
        kXHlph: "glass-1plvlek",
        kORKVm: "glass-ryxfnj",
        $$css: !0
    }
}, dcv = {
    color: "currentColor",
    flexShrink: 0
}, hcv = rt0(function(e) {
    const n = it0(6), { stable: i, tab: r } = e;
    if (i) {
        let l;
        return n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = Aql(zt, {
            name: "file",
            rootStyle: RIs.fileIcon,
            size: "base"
        }), n[0] = l) : l = n[0], l;
    }
    let s;
    n[1] !== r ? (s = st0(r), n[1] = r, n[2] = s) : s = n[2];
    const o = s;
    if (o === void 0) {
        let l;
        return n[3] === Symbol.for("react.memo_cache_sentinel") ? (l = Aql(zt, {
            name: "file",
            rootStyle: RIs.fileIcon,
            size: "base"
        }), n[3] = l) : l = n[3], l;
    }
    let a;
    return n[4] !== o ? (a = Aql(W5, {
        name: o,
        rootStyle: RIs.pathFileIcon,
        size: "base",
        style: dcv
    }), n[4] = o, n[5] = a) : a = n[5], a;
});

}
