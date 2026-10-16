import { nZf, pxn } from "./new-colors.js";
import { x } from "./tslib.es6.js";
var vau, _au;
export { _au, vau };
var __wakaru_bau_initialized = false;
export function bau() {
if (__wakaru_bau_initialized) return;
__wakaru_bau_initialized = true;
"use strict";
x(), nZf(), vau = {
    light: {
        agentInk: pxn.cyan[400],
        hangUp: pxn.red[400],
        onColor: "#fcfcfc",
        ink: "#141414",
        hairline: "#1414141a",
        controlBorder: "#14141426"
    },
    dark: {
        agentInk: pxn.cyan[400],
        hangUp: pxn.red[400],
        onColor: "#fcfcfc",
        ink: "#fcfcfc",
        hairline: "#fcfcfc1a",
        controlBorder: "#fcfcfc26"
    }
}, _au = {
    vars: (e)=>[
            {
                "--voice-call-agent-ink": e.agentInk != null ? "ui-13n03z3" : e.agentInk,
                "--voice-call-hang-up": e.hangUp != null ? "ui-1feqyxe" : e.hangUp,
                "--voice-call-on-color": e.onColor != null ? "ui-y65m0f" : e.onColor,
                "--voice-call-ink": e.ink != null ? "ui-1pqeqqh" : e.ink,
                "--voice-call-hairline": e.hairline != null ? "ui-14g0cyf" : e.hairline,
                "--voice-call-control-border": e.controlBorder != null ? "ui-1qlv9h9" : e.controlBorder,
                $$css: !0
            },
            {
                "--x---voice-call-agent-ink": e.agentInk != null ? e.agentInk : void 0,
                "--x---voice-call-hang-up": e.hangUp != null ? e.hangUp : void 0,
                "--x---voice-call-on-color": e.onColor != null ? e.onColor : void 0,
                "--x---voice-call-ink": e.ink != null ? e.ink : void 0,
                "--x---voice-call-hairline": e.hairline != null ? e.hairline : void 0,
                "--x---voice-call-control-border": e.controlBorder != null ? e.controlBorder : void 0
            }
        ]
};

}
