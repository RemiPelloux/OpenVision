import { ri } from "./LYd.js";
import { csf } from "./Ycg.js";
import { UMi, _Dn, tXt } from "./composerTranscriptRowHeights.js";
import { UQa } from "./gYa.js";
import { Mt } from "./index_197.js";
import { d_ } from "./index_205.js";
import { vxl } from "./index_25.ts";
import { Chf } from "./plane.tsx";
import { EG } from "./realtimeVoiceService.js";
import { usf } from "./realtimeVoiceTurnEstimate.js";
import { E } from "./tslib.es6.js";
import { Lg } from "./use-service.react.js";
import { jsx as l8l } from "./react-runtime/react/esm-jsx-runtime-production.js";
var kjf, wjf, Cjf, Tjf, Ejf;
export { Cjf, Ejf, Tjf, kjf, wjf };
var __wakaru_Ijf_initialized = false;
export function Ijf() {
if (__wakaru_Ijf_initialized) return;
__wakaru_Ijf_initialized = true;
"use strict";
E(), d_(), Mt(), vxl(), _Dn(), Lg(), usf(), EG(), kjf = 1e3, wjf = "composer-messages-container virtualized-composer-messages-scroll-container", Cjf = UQa({
    citations: !0,
    contentReferences: !0
}), Tjf = ({ rows: t, label: e, scroller: n })=>l8l(Chf, {
        className: ri(wjf, n.className),
        gapPx: tXt,
        label: e,
        overscanPx: kjf,
        overscanRows: UMi,
        rows: t,
        style: n.style
    }), Ejf = {
    assistantMarkdownPlugins: Cjf,
    estimateTurnPx: csf,
    renderPlane: Tjf
};

}
