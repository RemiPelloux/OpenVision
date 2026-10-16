import { yt } from "./A3u.js";
import { qb_ } from "./CursorDiffPane.js";
import { Se } from "./HVr.js";
import { a5n } from "./ModelNameDisplay.js";
import { b9n } from "./ReviewChangesResource.js";
import { GHh } from "./ReviewChangesResourceManager.js";
import { gCt } from "./agentAnalyticsOperationsService.js";
import { nE } from "./backendClient.js";
import { _i } from "./codicons.js";
import { H9h } from "./conversations_connectweb.js";
import { mro } from "./conversations_pb.js";
import { Qb_ } from "./cursorBlamePane.css";
import { PNo } from "./cursorBlameUtils.js";
import { Cer } from "./githubPRService.js";
import { Tb } from "./hoverWidget.js";
import { _g } from "./htmlContent.js";
import { gL } from "./iconButton_2.js";
import { qtt } from "./index_18.ts";
import { Cb } from "./model_2.js";
import { V7, qn } from "./qIc.js";
import { qi } from "./range.js";
import { Vs } from "./solidContext.js";
import { Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { rB } from "./useVSHoverTooltip.js";
import { $e } from "./web.js";
var sVh, oVh, aVh, cVh, lVh, uVh, $nt, dVh, hVh;
export { $nt, aVh, cVh, dVh, hVh, lVh, oVh, sVh, uVh };
var __wakaru_cy__initialized = false;
export function cy_() {
if (__wakaru_cy__initialized) return;
__wakaru_cy__initialized = true;
"use strict";
x(), $e(), $e(), $e(), $e(), $e(), $e(), qn(), qtt(), H9h(), mro(), V7(), Tb(), _i(), _g(), Se(), Sr(), Qt(), qi(), Cb(), gCt(), nE(), Cer(), a5n(), Vs(), qb_(), b9n(), GHh(), gL(), rB(), PNo(), Qb_(), sVh = yt('<div class="smart-review-panel__meta-section smart-review-panel__agent-contribution-section"><span class=smart-review-panel__changes-label>Contributions</span><div class="smart-review-panel__meta-section-content smart-review-panel__agent-content"><div class=smart-review-panel__agent-bar>'), oVh = yt("<div>"), aVh = yt("<div class=cursor-blame-large-commit-banner><span></span><span>Large commit (<!> files). Diffs load when expanded."), cVh = yt("<div class=review-pr-branch-name-container><span class=review-pr-commit-ref><span></span><span>"), lVh = yt("<button class=cursor-blame-open-github-button><span>Open in GitHub</span><span>"), uVh = 3, $nt = new Map, dVh = (e)=>{
    const t = $nt.get(e);
    if (t) return $nt.delete(e), $nt.set(e, t), t;
}, hVh = (e, t)=>{
    if ($nt.set(e, t), $nt.size > uVh) {
        const n = $nt.keys().next();
        n.done || $nt.delete(n.value);
    }
};

}
