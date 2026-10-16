import { M3f } from "./BA.js";
import { Mt } from "./index_197.js";
import { TSa, frt } from "./ipa.js";
import { _2e } from "./mention-chip-resolve.js";
import { E } from "./tslib.es6.js";
var fFl, vFl;
export { fFl, vFl };
var __wakaru_L1s_initialized = false;
export function L1s() {
if (__wakaru_L1s_initialized) return;
__wakaru_L1s_initialized = true;
"use strict";
E(), Mt(), fFl = ({ attrs: t, iconSrcByMentionId: e, mcpWellKnownDetectionService: n })=>{
    const i = M3f(t, _2e(t)), { icon: r } = i;
    if (r.kind !== "image" || TSa(t) !== "mcp") return i;
    const s = frt(t.payload), o = s?.case === "mcpSelection" ? s.serverId : void 0;
    if (o !== void 0 && e?.has(o)) {
        const c = e.get(o);
        return c === void 0 || c === "" ? i : {
            ...i,
            icon: {
                ...r,
                src: c
            }
        };
    }
    const a = t.label ?? t.rawText;
    if (!a) return i;
    const l = n.getServerIcon(a);
    return l ? {
        ...i,
        icon: {
            ...r,
            src: l
        }
    } : i;
}, vFl = (t, e)=>fFl({
        attrs: t,
        mcpWellKnownDetectionService: e
    });

}
