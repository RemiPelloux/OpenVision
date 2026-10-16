import { jO } from "./IconButton.js";
import { Q1n } from "./Progress_2.js";
import { Fkn } from "./Select.js";
import { fC } from "./Text.js";
import { C4t } from "./Tray.js";
import { kXf } from "./VoiceCallMicSlashIcon.js";
import { Kau } from "./VoiceWaveform.js";
import { CZf, iFi, yZf } from "./f0s.js";
import { HO } from "./tooltip.js";
import { x } from "./tslib.es6.js";
import { bau } from "./voice-call-palette.js";
import { createContext as pZf } from "./react-runtime/react/esm-index-production.js";
var EUt, aOs, dFi, Jau, ecu, tcu, cOs, hFi, lOs, uOs;
export { EUt, Jau, aOs, cOs, dFi, ecu, hFi, lOs, tcu, uOs };
var __wakaru_dOs_initialized = false;
export function dOs() {
if (__wakaru_dOs_initialized) return;
__wakaru_dOs_initialized = true;
"use strict";
x(), C4t(), iFi(), kXf(), bau(), HO(), jO(), fC(), Kau(), Q1n(), Fkn(), EUt = {
    rounded: !0,
    size: "xl"
}, aOs = {
    variant: "secondary",
    tone: "accent"
}, dFi = {
    variant: "secondary"
}, Jau = 20, ecu = 3, tcu = 0, cOs = {
    barColor: "var(--voice-call-agent-ink)",
    barGap: 4,
    barRadius: 9999,
    barWidth: 3,
    fadeEdges: !1,
    fallback: "static",
    height: Jau,
    mode: "spectrum",
    sensitivity: .9
}, hFi = {
    hangUp: {
        kWkggS: "ui-1n83j5j ui-r6g2hh",
        kMwMTN: "ui-78ffna ui-6o40cr",
        $$css: !0
    },
    select: {
        kaIpWk: "ui-1m7fhj7",
        kVAM5u: "ui-1ij97r5",
        $$css: !0
    },
    menuInk: {
        "--cursor-text-primary": "ui-y2baxf",
        $$css: !0
    }
}, lOs = pZf(null), uOs = Object.assign(yZf, {
    Settings: CZf
});

}
