import { OKl, Rut } from "./design-note-pill-styles.js";
import { Hn } from "./dom_2.js";
import { ece } from "./index_27.ts";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { createContext as kp0 } from "./react-runtime/react/esm-index-production.js";
var r_v, s_v, IAs, KKl, o_v, a_v, l_v, c_v, u_v, d_v, Q5i, xAs, PQt, AAs, sre;
export { AAs, IAs, KKl, PQt, Q5i, a_v, c_v, d_v, l_v, o_v, r_v, s_v, sre, u_v, xAs };
var __wakaru_YKl_initialized = false;
export function YKl() {
if (__wakaru_YKl_initialized) return;
__wakaru_YKl_initialized = true;
"use strict";
E(), ece(), $b(), Hn(), Rut(), r_v = {
    kVAEAm: "glass-10l6tqk",
    kY2c9j: "glass-oegz02",
    k1xSpc: "glass-78zum5",
    kXwgrk: "glass-dt5ytf",
    kskxy: "glass-1jols5v",
    kfzvcC: "glass-67bb7w",
    $$css: !0
}, s_v = {
    kVAEAm: "glass-10l6tqk",
    kY2c9j: "glass-zkaem6",
    kB7OPa: "glass-9f619",
    kMzoRj: "glass-vndefy",
    ksu8eU: "glass-bsl7fq",
    kVAM5u: "glass-jk4g2u",
    kaIpWk: "glass-1828qc5",
    kWkggS: "glass-1g72bda",
    kfzvcC: "glass-47corl",
    $$css: !0
}, IAs = 12, KKl = OKl, o_v = 640, a_v = 250, l_v = "500px", c_v = "[data-design-css-dock-handle]", u_v = "button, input, textarea, select, [role='button'], [role='combobox']", d_v = "transform 240ms cubic-bezier(0.22, 1, 0.36, 1)", Q5i = {
    docked: !0,
    corner: "top-right",
    width: KKl,
    height: null
}, xAs = new Set, PQt = {
    get: ()=>Q5i,
    subscribe: (t)=>(xAs.add(t), ()=>xAs.delete(t)),
    update: (t)=>{
        Q5i = {
            ...Q5i,
            ...t
        };
        for (const e of xAs)e();
    }
}, AAs = kp0(null), sre = {
    panel: (t, e)=>[
            r_v,
            {
                kzqmXN: t != null ? "glass-5lhr3w" : t,
                $$css: !0
            },
            {
                "--x-width": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-maxHeight": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(`min(calc(100% - ${IAs * 2}px), ${e})`)
            }
        ],
    ghost: (t, e)=>[
            s_v,
            {
                kzqmXN: t != null ? "glass-5lhr3w" : t,
                kZKoxP: e != null ? "glass-16ye13r" : e,
                $$css: !0
            },
            {
                "--x-width": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-height": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ],
    "top-left": {
        k87sOh: "glass-1tk7jg1",
        kbCHJM: "glass-pnmzw7",
        $$css: !0
    },
    "top-right": {
        k87sOh: "glass-1tk7jg1",
        kCIrl2: "glass-lftelb",
        $$css: !0
    },
    "bottom-left": {
        krVfgx: "glass-n0vg7t",
        kbCHJM: "glass-pnmzw7",
        $$css: !0
    },
    "bottom-right": {
        krVfgx: "glass-n0vg7t",
        kCIrl2: "glass-lftelb",
        $$css: !0
    },
    edge: {
        kVAEAm: "glass-10l6tqk",
        kY2c9j: "glass-1vjfegm",
        $$css: !0
    },
    x: {
        k87sOh: "glass-13vifvy",
        krVfgx: "glass-1ey2m1c",
        kzqmXN: "glass-1v4s8kt",
        kkrTdU: "glass-7eptgl",
        $$css: !0
    },
    y: {
        kbCHJM: "glass-u96u03",
        kCIrl2: "glass-3m8u43",
        kZKoxP: "glass-ols6we",
        kkrTdU: "glass-1e5i8e3",
        $$css: !0
    },
    xy: {
        kzqmXN: "glass-smyaan",
        kZKoxP: "glass-1kpxq89",
        kY2c9j: "glass-htitgo",
        $$css: !0
    },
    left: {
        kbCHJM: "glass-1iazeee",
        $$css: !0
    },
    right: {
        kCIrl2: "glass-kkrawi",
        $$css: !0
    },
    top: {
        k87sOh: "glass-1e0gzzx",
        $$css: !0
    },
    bottom: {
        krVfgx: "glass-48lskh",
        $$css: !0
    },
    nwse: {
        kkrTdU: "glass-16djdpl",
        $$css: !0
    },
    nesw: {
        kkrTdU: "glass-1yl03ai",
        $$css: !0
    }
};

}
