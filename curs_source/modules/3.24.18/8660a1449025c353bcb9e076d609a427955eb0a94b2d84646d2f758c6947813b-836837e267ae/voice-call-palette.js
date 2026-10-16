import { Tae, k1p } from "./new-colors.js";
import { E } from "./tslib.es6.js";
var w1p, C1p;
export { C1p, w1p };
var __wakaru_WAa_initialized = false;
export function WAa() {
if (__wakaru_WAa_initialized) return;
__wakaru_WAa_initialized = true;
"use strict";
E(), k1p(), w1p = {
    light: {
        agentInk: Tae.cyan[400],
        hangUp: Tae.red[400],
        onColor: "#fcfcfc",
        ink: "#141414",
        hairline: "#1414141a",
        controlBorder: "#14141426"
    },
    dark: {
        agentInk: Tae.cyan[400],
        hangUp: Tae.red[400],
        onColor: "#fcfcfc",
        ink: "#fcfcfc",
        hairline: "#fcfcfc1a",
        controlBorder: "#fcfcfc26"
    }
}, C1p = {
    vars: (t)=>[
            {
                "--voice-call-agent-ink": t.agentInk != null ? "ui-13n03z3" : t.agentInk,
                "--voice-call-hang-up": t.hangUp != null ? "ui-1feqyxe" : t.hangUp,
                "--voice-call-on-color": t.onColor != null ? "ui-y65m0f" : t.onColor,
                "--voice-call-ink": t.ink != null ? "ui-1pqeqqh" : t.ink,
                "--voice-call-hairline": t.hairline != null ? "ui-14g0cyf" : t.hairline,
                "--voice-call-control-border": t.controlBorder != null ? "ui-1qlv9h9" : t.controlBorder,
                $$css: !0
            },
            {
                "--x---voice-call-agent-ink": t.agentInk != null ? t.agentInk : void 0,
                "--x---voice-call-hang-up": t.hangUp != null ? t.hangUp : void 0,
                "--x---voice-call-on-color": t.onColor != null ? t.onColor : void 0,
                "--x---voice-call-ink": t.ink != null ? t.ink : void 0,
                "--x---voice-call-hairline": t.hairline != null ? t.hairline : void 0,
                "--x---voice-call-control-border": t.controlBorder != null ? t.controlBorder : void 0
            }
        ]
};

}
