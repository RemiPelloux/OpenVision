import { nre } from "./Asv.js";
import { $Te, K5l } from "./BA.js";
import { zt } from "./LYd.js";
import { Hf, bBe, et } from "./Ycg.js";
import { Bme } from "./agentAppearance.js";
import { Xle } from "./environment-utils.js";
import { sw } from "./gYa.js";
import { Mt } from "./index_197.js";
import { Cb } from "./project-agents.js";
import { E } from "./tslib.es6.js";
import { wF } from "./use-agent-repository-service.react.js";
import { $h } from "./use-reactive.react_2.js";
import { In } from "./use-service.react_2.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { Zg } from "./yBp.js";
import { jsx as Ge0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as He0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as We0 } from "./react-runtime/react/esm-index-production.js";
var Qlv, Jlv;
export { Jlv, Qlv };
var __wakaru_qe0_initialized = false;
export function qe0() {
if (__wakaru_qe0_initialized) return;
__wakaru_qe0_initialized = true;
"use strict";
E(), Mt(), Lh(), wF(), $h(), In(), Cb(), Xle(), Bme(), Qlv = {
    icon: {
        kmuXW: "glass-2lah0s",
        $$css: !0
    }
}, Jlv = We0(function(e) {
    const n = He0(9), { tab: i } = e, r = et(Qg), s = nre(), o = typeof i.props.agentId == "string" ? i.props.agentId : void 0, a = o ? s.getAgentHeader(o) : void 0, l = Hf(a?.projectAppearance), c = Hf(a?.projectIcon);
    let u, d;
    if (a && Zg(a)) {
        let g;
        if (n[0] !== l || n[1] !== c) {
            const f = $Te({
                appearance: l,
                generatedIcon: c
            });
            u = f.icon, g = K5l(f.colorId), n[0] = l, n[1] = c, n[2] = g, n[3] = u;
        } else g = n[2], u = n[3];
        d = g;
    } else u = (a ? bBe({
        header: a,
        isRemote: !!sw(r, a.environment.value),
        workspaceMetadataService: r
    }) : void 0)?.icon ?? "laptop";
    let h;
    n[4] !== d ? (h = d === void 0 ? void 0 : {
        color: d
    }, n[4] = d, n[5] = h) : h = n[5];
    let p;
    return n[6] !== u || n[7] !== h ? (p = Ge0(zt, {
        name: u,
        rootStyle: Qlv.icon,
        size: "base",
        style: h
    }), n[6] = u, n[7] = h, n[8] = p) : p = n[8], p;
});

}
