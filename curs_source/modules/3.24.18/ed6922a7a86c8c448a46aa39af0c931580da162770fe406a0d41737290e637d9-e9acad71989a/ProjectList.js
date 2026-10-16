import { zTi } from "./ProjectTone.js";
import { fC } from "./Text.js";
import { ahf, chf, lhf, ohf, shf } from "./f0s.js";
import { ED } from "./scroll-area.js";
import { x } from "./tslib.es6.js";
var h6t, l1n;
export { h6t, l1n };
var __wakaru_uhf_initialized = false;
export function uhf() {
if (__wakaru_uhf_initialized) return;
__wakaru_uhf_initialized = true;
"use strict";
x(), zTi(), ED(), fC(), h6t = {
    gutter: {
        k71WvV: "ui-8ky9kg",
        keTefX: "ui-2imrbv",
        $$css: !0
    },
    sectionStack: {
        kOIVth: "ui-1qhopif",
        $$css: !0
    },
    content: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kLKAdn: "ui-uve7l6",
        kwRFfy: "ui-1w8q5y7",
        kGO01o: "ui-1rgtt3y",
        kZCmMZ: "ui-9s6atj",
        $$css: !0
    },
    contentFlush: {
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-13botnq",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1sudrl5",
        $$css: !0
    },
    empty: {
        kzqmXN: "ui-h8yej3",
        k9WMMc: "ui-2b8uid",
        kLKAdn: "ui-1t8xvyj",
        kwRFfy: "ui-19bzwdx",
        kGO01o: "ui-usxwy5",
        kZCmMZ: "ui-v853mj",
        $$css: !0
    }
}, l1n = Object.assign(shf, {
    ContentInset: chf,
    Empty: lhf,
    Row: ahf,
    Section: ohf
});

}
