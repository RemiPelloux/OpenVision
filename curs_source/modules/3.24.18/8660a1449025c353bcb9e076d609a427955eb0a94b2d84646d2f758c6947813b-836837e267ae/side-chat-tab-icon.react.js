import { CJw, nre } from "./Asv.js";
import { zt } from "./LYd.js";
import { XAt } from "./agent-conversation-tabs.js";
import { FA } from "./glass-side-chat-utils.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { wF } from "./use-agent-repository-service.react.js";
import { kS } from "./yBp.js";
import { c as Bl0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Ul0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as jl0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Kmv, Ymv;
export { Kmv, Ymv };
var __wakaru_$l0_initialized = false;
export function $l0() {
if (__wakaru_$l0_initialized) return;
__wakaru_$l0_initialized = true;
"use strict";
E(), Mt(), wF(), XAt(), FA(), Kmv = {
    icon: {
        kmuXW: "glass-2lah0s",
        $$css: !0
    }
}, Ymv = Ul0(function(e) {
    const n = Bl0(5), { tab: i } = e, r = nre();
    let s;
    if (n[0] !== r || n[1] !== i.props.agentId) {
        const l = typeof i.props.agentId == "string" ? i.props.agentId.trim() : "", c = l ? r.getAgentHeader(l) : void 0;
        s = l ? CJw({
            agentId: l,
            isSideChat: c !== void 0 && kS(c),
            header: c
        }) : "chat-bubble", n[0] = r, n[1] = i.props.agentId, n[2] = s;
    } else s = n[2];
    const o = s;
    let a;
    return n[3] !== o ? (a = jl0(zt, {
        name: o,
        rootStyle: Kmv.icon,
        size: "base"
    }), n[3] = o, n[4] = a) : a = n[4], a;
});

}
