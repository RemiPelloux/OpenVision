import { B0e, D$r, H_i, IP, Xne, o$ } from "./shared_2.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var B$r, MEp, DEp, NEp, LEp, OEp;
export { B$r, DEp, LEp, MEp, NEp, OEp };
var __wakaru_ew1_initialized = false;
export function ew1() {
if (__wakaru_ew1_initialized) return;
__wakaru_ew1_initialized = true;
"use strict";
E(), Va(), H_i(), B$r = {
    duration: {
        kVAEAm: "ui-10l6tqk",
        kCIrl2: "ui-19up5dg",
        krVfgx: "ui-qo3gd",
        kaIpWk: "ui-1kogg8i",
        kWkggS: "ui-8qq8ib",
        kg3NbH: "ui-1xijbu4",
        kMwMTN: "ui-fungia",
        $$css: !0
    },
    caption: {
        keoZOQ: "ui-1k70j0n",
        $$css: !0
    },
    linkNumber: {
        kzqmXN: "ui-smyaan",
        kmuXW: "ui-2lah0s",
        $$css: !0
    }
}, MEp = (t)=>o$(t) && IP(t.src) && IP(t.alt) && IP(t.duration) && Xne(t.href, IP) && Xne(t.caption, IP), DEp = (t)=>o$(t) && (t.kind === "brand" && IP(t.brand) || t.kind === "thumb" && IP(t.src) || t.kind === "icon" && IP(t.name)), NEp = (t)=>o$(t) && IP(t.title) && IP(t.site) && IP(t.href) && Xne(t.date, IP) && Xne(t.lead, DEp), LEp = (t)=>o$(t) && B0e(t.links, NEp) && Xne(t.numbered, D$r), OEp = {
    github: "G",
    figma: "F",
    notion: "N",
    slack: "S"
};

}
