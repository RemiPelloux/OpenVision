import { p8i } from "./De_3.js";
import { Yrr, g9n, m9n } from "./composerTranscriptRowHeights.js";
import { $Po, HPo } from "./composerVirtualRowHeights.js";
import { mi } from "./index_188.js";
import { AC } from "./index_201.js";
import { Z$h } from "./index_24.ts";
import { X$h } from "./plane.tsx";
import { ni } from "./qIc.js";
import { Moe } from "./realtimeVoiceService.js";
import { q8h } from "./realtimeVoiceTurnEstimate.js";
import { x } from "./tslib.es6.js";
import { Ap } from "./use-service.react.js";
import { Evo } from "./xmo.js";
import { jsx as ONo } from "./react-runtime/react/esm-jsx-runtime-production.js";
function j8h(e) {
    return e.speaker === "user" ? $Po : Math.max(HPo, p8i(e.text));
}
var mVh, gVh, fVh, vVh, _Vh;
export { _Vh, fVh, gVh, j8h, mVh, vVh };
var __wakaru_dy__initialized = false;
export function dy_() {
if (__wakaru_dy__initialized) return;
__wakaru_dy__initialized = true;
"use strict";
x(), AC(), mi(), Z$h(), g9n(), Ap(), q8h(), Moe(), mVh = 1e3, gVh = "composer-messages-container virtualized-composer-messages-scroll-container", fVh = Evo({
    citations: !0,
    contentReferences: !0
}), vVh = ({ rows: e, label: t, scroller: n })=>ONo(X$h, {
        className: ni(gVh, n.className),
        gapPx: m9n,
        label: t,
        overscanPx: mVh,
        overscanRows: Yrr,
        rows: e,
        style: n.style
    }), _Vh = {
    assistantMarkdownPlugins: fVh,
    estimateTurnPx: j8h,
    renderPlane: vVh
};

}
