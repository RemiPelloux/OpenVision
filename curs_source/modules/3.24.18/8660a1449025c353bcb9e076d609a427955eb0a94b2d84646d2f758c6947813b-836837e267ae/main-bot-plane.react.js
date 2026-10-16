import { Kle, LPi, OPi, wme } from "./Ycg.js";
import { _Dn, b2l, tXt } from "./composerTranscriptRowHeights.js";
import { MS_ } from "./followup-circle-icon-button.react.js";
import { zPt } from "./followup-header-layout.js";
import { Owc } from "./grok-bot-transcript-entries.react.js";
import { Mt } from "./index_197.js";
import { RMn } from "./index_24.ts";
import { vxl } from "./index_25.ts";
import { t7e } from "./main-bot-name.js";
import { A9s } from "./main-bot-plane-navigation.js";
import { Ewc } from "./main-bot-sender-avatar.react.js";
import { Zwc } from "./main-bot-transcript-row-view.react.js";
import { i0c } from "./main-bot-transcript-rows.js";
import { $b } from "./stylex.mjs";
import { I$t } from "./tokens_2.js";
import { E } from "./tslib.es6.js";
var nA_, iA_, rA_, o0c, sA_, gnn, oA_, aA_, a0c, lA_, cA_, H9s, uA_, dA_, hA_, l0c, pA_, mA_, gA_;
export { H9s, a0c, aA_, cA_, dA_, gA_, gnn, hA_, iA_, l0c, lA_, mA_, nA_, o0c, oA_, pA_, rA_, sA_, uA_ };
var __wakaru_fA__initialized = false;
export function fA_() {
if (__wakaru_fA__initialized) return;
__wakaru_fA__initialized = true;
"use strict";
E(), Mt(), RMn(), vxl(), $b(), _Dn(), MS_(), zPt(), t7e(), Owc(), A9s(), Ewc(), Zwc(), i0c(), A9s(), nA_ = {
    kUOVxO: "glass-vueqy4",
    kzqmXN: "glass-h8yej3",
    $$css: !0
}, iA_ = 250, rA_ = 2, o0c = 1200, sA_ = "tail", gnn = "main-bot:tail", oA_ = LPi("body"), aA_ = LPi("tail"), a0c = I$t[6], lA_ = a0c - tXt, cA_ = {
    nearBottomThresholdPx: b2l,
    userInputWindowMs: iA_,
    driftTolerancePx: rA_,
    gapPx: Kle(tXt)
}, H9s = {
    shell: (t)=>[
            nA_,
            {
                ks0D6T: t != null ? "glass-f68679" : t,
                $$css: !0
            },
            {
                "--x-maxWidth": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ],
    scrollToBottomButton: {
        kfzvcC: "glass-67bb7w",
        $$css: !0
    },
    scrollToBottomButtonHidden: {
        kfzvcC: "glass-47corl",
        $$css: !0
    }
}, uA_ = "composer-messages-container virtualized-composer-messages-scroll-container", dA_ = "virtualized-composer-messages-content-shell", hA_ = "virtualized-composer-messages-virtual-plane", l0c = "virtualized-composer-messages-row", pA_ = "virtualized-composer-messages-row-body", mA_ = {
    rowId: wme(gnn),
    kind: sA_,
    revision: OPi(0),
    parts: [
        {
            kind: "chrome",
            partId: aA_,
            heightPx: Kle(lA_)
        }
    ],
    presentation: "content",
    identity: {
        stableIdentity: gnn,
        rowKey: gnn,
        collapseStableKey: gnn,
        bubbleIds: []
    }
}, gA_ = new Map;

}
