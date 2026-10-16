import { fs_ } from "./diff-meter-format.js";
import { nwC } from "./diff-meter-scm-tab.react.js";
import { mv } from "./editor-panel-context.react.js";
import { xc } from "./glass-storage-service.js";
import { Mt } from "./index_197.js";
import { Cut } from "./resize-handle.react.js";
import { E } from "./tslib.es6.js";
import { ks_ } from "./use-git-diff-meter.react.js";
import { fee } from "./use-glass-application-property.react.js";
import { In } from "./use-service.react_2.js";
import { wu } from "./utilities_3.js";
var _gc, Ts_, Es_, dZ, QBi, Is_, bgc, xs_, As_;
export { As_, Es_, Is_, QBi, Ts_, _gc, bgc, dZ, xs_ };
var __wakaru_Rs__initialized = false;
export function Rs_() {
if (__wakaru_Rs__initialized) return;
__wakaru_Rs__initialized = true;
"use strict";
E(), Mt(), wu(), fee(), In(), xc(), Cut(), mv(), fs_(), nwC(), ks_(), _gc = 140, Ts_ = 120, Es_ = {
    ongoing: {
        variant: "warn",
        label: "running"
    },
    success: {
        variant: "success",
        label: "ok"
    },
    error: {
        variant: "danger",
        label: "error"
    }
}, dZ = {
    scrollRoot: {
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        kAzted: "glass-2lwn1j",
        $$css: !0
    },
    scrollViewport: {
        kLKAdn: "glass-exx8yu",
        kwRFfy: "glass-t1q3vd",
        kGO01o: "glass-usxwy5",
        kZCmMZ: "glass-8fiw5y",
        $$css: !0
    },
    chartPeak: {
        keTefX: "glass-vc5jky",
        $$css: !0
    },
    rowName: {
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        k7Eaqz: "glass-euugli",
        $$css: !0
    },
    rowError: {
        kmuXW: "glass-s83m0k",
        k7Eaqz: "glass-euugli",
        ks0D6T: "glass-1f0l55g",
        $$css: !0
    },
    metric: {
        kmuXW: "glass-2lah0s",
        kzqmXN: "glass-1useyqa",
        k9WMMc: "glass-1hr2gdg",
        $$css: !0
    },
    duration: {
        kmuXW: "glass-2lah0s",
        k7Eaqz: "glass-9hgts1",
        k9WMMc: "glass-1hr2gdg",
        $$css: !0
    }
}, QBi = [
    {
        key: "inFlight",
        label: "In-flight",
        color: "var(--cursor-text-cyan-primary)"
    },
    {
        key: "running",
        label: "Git procs",
        color: "var(--cursor-text-purple-primary)"
    }
], Is_ = 132, bgc = 10, xs_ = 6, As_ = {
    margin: 0,
    maxHeight: 320,
    overflow: "auto",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    fontFamily: "var(--monospace-font-family, monospace)",
    fontSize: 12,
    lineHeight: 1.5
};

}
