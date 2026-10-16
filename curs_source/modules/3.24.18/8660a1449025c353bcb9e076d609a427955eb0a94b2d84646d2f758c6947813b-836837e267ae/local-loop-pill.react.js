import { D } from "./Iwo.js";
import { ao } from "./LYd.js";
import { fle } from "./agentHostProviderService.js";
import { wm } from "./buildFlags.js";
import { Mt } from "./index_197.js";
import { Z0l } from "./localLoopChrome.js";
import { Bt } from "./nls.js";
import { POn } from "./ofv.js";
import { xs } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { MOn } from "./use-private-inference-enabled.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { jsx as Kdt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as cyc } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as g7C } from "./react-runtime/react/esm-index-production.js";
var dyc;
export { dyc };
var __wakaru_hyc_initialized = false;
export function hyc() {
if (__wakaru_hyc_initialized) return;
__wakaru_hyc_initialized = true;
"use strict";
E(), Mt(), Bt(), wm(), Z0l(), fle(), Ru(), MOn(), w_(), In(), Af(), dyc = g7C(function(e) {
    const n = cyc(11), { chrome: i, backendRouteReason: r } = e;
    if (POn() || i === "none") return null;
    if (i === "backend-routed") {
        let l;
        n[0] !== r ? (l = D("glass.agentPanel.localLoopBackendRoutedPillTooltip", "This chat's latest turn ran on the backend loop ({0}), not the local agent loop.", r ?? "unknown reason"), n[0] = r, n[1] = l) : l = n[1];
        let c;
        n[2] !== l ? (c = Kdt(ao, {
            title: l
        }), n[2] = l, n[3] = c) : c = n[3];
        let u;
        n[4] === Symbol.for("react.memo_cache_sentinel") ? (u = Kdt("span", {
            "data-turn-runtime": "backend-routed",
            className: "glass-3nfvp2 glass-6s0dn4 glass-l56j7k glass-9f619 glass-1th6cxs glass-o7x2bt glass-16b7oty glass-c8ce4q glass-j5toj7 glass-16ti9za glass-11hym3f glass-jbqb8w glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-11wthnw glass-spwq11 glass-uxw1ft glass-87ps6o glass-lya59e glass-cti19x glass-pvcztv glass-sxj2vf glass-3hr5w9 glass-z1fsty glass-da3f4l glass-13rk1g9 glass-19aaqeu",
            children: D("glass.agentPanel.localLoopBackendRoutedPill", "Backend")
        }), n[4] = u) : u = n[4];
        let d;
        return n[5] !== c ? (d = Kdt(xs, {
            content: c,
            children: u
        }), n[5] = c, n[6] = d) : d = n[6], d;
    }
    if (i === "local-reload-required") {
        let l;
        n[7] === Symbol.for("react.memo_cache_sentinel") ? (l = Kdt(ao, {
            title: D("glass.agentPanel.localLoopReloadPillTooltip", "The local agent loop was enabled after this window started. Turns run on the backend loop until the window reloads.")
        }), n[7] = l) : l = n[7];
        let c;
        return n[8] === Symbol.for("react.memo_cache_sentinel") ? (c = Kdt(xs, {
            content: l,
            children: Kdt("span", {
                "data-turn-runtime": "local-reload-required",
                className: "glass-3nfvp2 glass-6s0dn4 glass-l56j7k glass-9f619 glass-1th6cxs glass-o7x2bt glass-16b7oty glass-c8ce4q glass-j5toj7 glass-16ti9za glass-11hym3f glass-jbqb8w glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-11wthnw glass-spwq11 glass-uxw1ft glass-87ps6o glass-lya59e glass-cti19x glass-pvcztv glass-sxj2vf glass-3hr5w9 glass-z1fsty glass-da3f4l glass-13rk1g9 glass-19aaqeu",
                children: D("glass.agentPanel.localLoopReloadPill", "Reload for Local")
            })
        }), n[8] = c) : c = n[8], c;
    }
    let o;
    n[9] === Symbol.for("react.memo_cache_sentinel") ? (o = Kdt(ao, {
        title: D("glass.agentPanel.localLoopPillTooltip", "Turns run on the local agent loop")
    }), n[9] = o) : o = n[9];
    let a;
    return n[10] === Symbol.for("react.memo_cache_sentinel") ? (a = Kdt(xs, {
        content: o,
        children: Kdt("span", {
            "data-turn-runtime": "local",
            className: "glass-3nfvp2 glass-6s0dn4 glass-l56j7k glass-9f619 glass-1th6cxs glass-o7x2bt glass-16b7oty glass-c8ce4q glass-j5toj7 glass-16ti9za glass-11hym3f glass-jbqb8w glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-13fuv20 glass-32b0ac glass-1q0q8m5 glass-19ypqd9 glass-11wthnw glass-spwq11 glass-uxw1ft glass-87ps6o glass-1uaialz glass-128tvsh glass-1lhkms3 glass-1hx69yn glass-11pqmr",
            children: D("glass.agentPanel.localLoopPill", "Local")
        })
    }), n[10] = a) : a = n[10], a;
});

}
