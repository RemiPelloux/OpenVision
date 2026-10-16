import { hT } from "./PromptInput.js";
import { Wut } from "./agent-prompt-input-name.react.js";
import { Mt } from "./index_197.js";
import { bk0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { memo as S00 } from "./react-runtime/react/esm-index-production.js";
import { jsx as k00 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as y00 } from "./react-runtime/react/esm-compiler-runtime-production.js";
var NTv;
export { NTv };
var __wakaru_w00_initialized = false;
export function w00() {
if (__wakaru_w00_initialized) return;
__wakaru_w00_initialized = true;
"use strict";
E(), Mt(), Wut(), NTv = S00(function(e) {
    const n = y00(9);
    let i, r, s, o;
    n[0] !== e ? ({ ariaLabelKind: o, collapsedVoiceRecordingRootStyle: i, isVoiceRecording: r, ...s } = e, n[0] = e, n[1] = i, n[2] = r, n[3] = s, n[4] = o) : (i = n[1], r = n[2], s = n[3], o = n[4]);
    const a = o === void 0 ? "agent" : o, { isExpanded: l, variant: c } = hT.useContext(), u = bk0(a), h = r && c !== "expanded" && !l ? i : void 0;
    let p;
    return n[5] !== u || n[6] !== s || n[7] !== h ? (p = k00(hT.Editor, {
        ...s,
        ariaLabel: u,
        rootStyle: h
    }), n[5] = u, n[6] = s, n[7] = h, n[8] = p) : p = n[8], p;
});

}
