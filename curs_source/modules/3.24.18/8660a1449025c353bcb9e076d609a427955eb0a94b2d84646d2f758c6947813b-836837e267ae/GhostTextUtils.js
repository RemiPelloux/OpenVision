import { U9e, gKt, vhs } from "./GhostTextNode.js";
import { Ak, Au, V7, Wc, Xg } from "./ipa.js";
import { E } from "./tslib.es6.js";
var OPn, F0l, ogs, B0l;
export { B0l, F0l, OPn, ogs };
var __wakaru_U0l_initialized = false;
export function U0l() {
if (__wakaru_U0l_initialized) return;
__wakaru_U0l_initialized = true;
"use strict";
E(), Ak(), vhs(), OPn = "composer-autocomplete-ghost", F0l = (t)=>t.getEditorState().read(()=>{
        const e = Xg();
        for (const n of e.getChildren())for (const i of n.getChildren())if (U9e(i)) return i;
    }), ogs = (t)=>{
    const e = t.getRootElement();
    e === null || e.ownerDocument.defaultView === null || t.update(()=>{
        const n = Xg();
        for (const i of n.getChildren())for (const r of i.getChildren())U9e(r) && r.remove();
    }, {
        tag: OPn,
        discrete: !0
    });
}, B0l = (t)=>{
    try {
        return gKt.forceEmptyText = !0, t.getEditorState().read(()=>{
            const e = Xg(), n = (s)=>{
                if (U9e(s)) return "";
                if (Au(s)) return s.getTextContent();
                if (V7(s)) return `
`;
                if (Wc(s)) {
                    let o = "";
                    const a = s.getChildren();
                    for (const l of a)o += n(l);
                    return o;
                }
                return "";
            }, i = e.getChildren(), r = [];
            for (const s of i)r.push(n(s));
            return r.join(`
`);
        });
    } finally{
        gKt.forceEmptyText = !1;
    }
};

}
