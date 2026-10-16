import { Nt, Qe } from "./Iwo.js";
import { DpC, uJv } from "./QQv.js";
import { Vlw } from "./Ycg.js";
import { boe, w4 } from "./codeEditorWidget.js";
import { mv } from "./editor-panel-context.react.js";
import { aw } from "./glass-context-key-service.js";
import { Jye } from "./glass-language-service.js";
import { Mt } from "./index_197.js";
import { It } from "./instantiation.js";
import { xp } from "./model.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { In } from "./use-service.react_2.js";
import { jsx as Oen } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as PpC } from "./react-runtime/react/esm-index-production.js";
import { c as aJv } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as bhc } from "./react-runtime/react/esm-index-production.js";
import { useEffectEvent as lJv } from "./react-runtime/react/esm-index-production.js";
import { useRef as zLs } from "./react-runtime/react/esm-index-production.js";
var hJv, pJv, yhc, mJv;
export { hJv, mJv, pJv, yhc };
var __wakaru_NpC_initialized = false;
export function NpC() {
if (__wakaru_NpC_initialized) return;
__wakaru_NpC_initialized = true;
"use strict";
E(), Jye(), Mt(), Qe(), fn(), boe(), xp(), aw(), It(), In(), mv(), hJv = "shellscript", pJv = 10, yhc = 6, mJv = PpC(function(e) {
    const n = aJv(29), { editorWidgetRef: i, inputId: r, instantiationService: s, isReadOnly: o, isSaving: a, label: l, languageService: c, modelChangeGuardRef: u, modelRef: d, modelService: h, onChange: p, placeholder: g, value: f } = e, _ = zLs(null);
    let b;
    n[0] !== p ? (b = (P)=>{
        p(P);
    }, n[0] = p, n[1] = b) : b = n[1];
    const y = lJv(b);
    let S;
    n[2] !== o || n[3] !== a || n[4] !== l || n[5] !== g || n[6] !== f ? (S = ()=>({
            isReadOnly: o,
            isSaving: a,
            label: l,
            placeholder: g,
            value: f
        }), n[2] = o, n[3] = a, n[4] = l, n[5] = g, n[6] = f, n[7] = S) : S = n[7];
    const k = lJv(S);
    let C;
    n[8] !== i || n[9] !== y || n[10] !== k || n[11] !== r || n[12] !== s || n[13] !== c || n[14] !== u || n[15] !== d || n[16] !== h ? (C = ()=>{
        const P = _.current;
        if (!P) return;
        const M = k(), O = new Nt, N = s.createInstance(w4, P, uJv({
            ariaLabel: M.label,
            isReadOnly: M.isReadOnly,
            isSaving: M.isSaving,
            placeholder: M.placeholder
        }), {
            isSimpleWidget: !0
        });
        N.shouldShowHover = !1, Vlw(N).createKey("glassEnvironmentSetupScriptEditor", !0);
        const U = h.createModel(M.value, c.createById(hJv), rt.from({
            scheme: "glass-environment-setup-script",
            path: `/${r}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
        }), !0, !0, !1);
        N.setModel(U), i.current = N, d.current = U, O.add(DpC(U, (H)=>y(H), u));
        const j = ()=>{
            const { width: H, height: G } = P.getBoundingClientRect();
            H > 0 && G > 0 && N.layout({
                width: H,
                height: G
            });
        }, $ = new ResizeObserver(j);
        return $.observe(P), j(), ()=>{
            $.disconnect(), O.dispose(), N.setModel(null), N.dispose(), U.dispose(), i.current === N && (i.current = null), d.current === U && (d.current = null);
        };
    }, n[8] = i, n[9] = y, n[10] = k, n[11] = r, n[12] = s, n[13] = c, n[14] = u, n[15] = d, n[16] = h, n[17] = C) : C = n[17];
    let T;
    n[18] !== i || n[19] !== r || n[20] !== s || n[21] !== c || n[22] !== u || n[23] !== d || n[24] !== h ? (T = [
        i,
        r,
        s,
        c,
        u,
        d,
        h
    ], n[18] = i, n[19] = r, n[20] = s, n[21] = c, n[22] = u, n[23] = d, n[24] = h, n[25] = T) : T = n[25], bhc(C, T);
    const I = `${r}-label`;
    let A;
    return n[26] !== r || n[27] !== I ? (A = Oen("div", {
        "aria-labelledby": I,
        "data-environment-setup-script-editor": r,
        id: r,
        ref: _,
        className: "glass-h8yej3 glass-5yr21d"
    }), n[26] = r, n[27] = I, n[28] = A) : A = n[28], A;
});

}
