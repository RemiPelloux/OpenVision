import { sMg } from "./FullInputBox.css";
import { cI, t1 } from "./LexicalComposerContext.js";
import { Am, cs, jp } from "./Sol.js";
import { Ca, Gr, Jvl, e_l, w3k } from "./Ycg.js";
import { nIt } from "./aiInput2.js";
import { Ak, Bst, Lst, Ost, Xg, _2, mR, nS, pGr } from "./ipa.js";
import { e_ } from "./jotaiSolidBridge.js";
import { vo } from "./solidContext.js";
import { Fx } from "./tiptapRichText.js";
import { E } from "./tslib.es6.js";
import { Cn, On, pi } from "./ze.js";
var yhs, Shs, khs, oMg, n_l;
export { Shs, khs, n_l, oMg, yhs };
var __wakaru_aMg_initialized = false;
export function aMg() {
if (__wakaru_aMg_initialized) return;
__wakaru_aMg_initialized = true;
"use strict";
E(), Am(), pi(), cI(), Ak(), Fx(), vo(), e_(), nIt(), sMg(), yhs = cs(-1), Shs = cs([]), khs = cs(""), oMg = (t)=>{
    const [e] = t1(), n = Gr(), i = jp();
    i.set(yhs, -1), i.set(Shs, []), i.set(khs, "");
    const r = Ca(i, yhs), s = (h)=>i.set(yhs, h), o = Ca(i, Shs), a = (h)=>i.set(Shs, h), l = Ca(i, khs), c = (h)=>i.set(khs, h);
    Cn(()=>{
        l().trim() === "" ? a([
            l(),
            ...n.aiService.getPreviousPrompts()
        ]) : a(n.aiService.getPreviousPrompts());
    });
    const u = e.registerCommand(Lst, (h)=>{
        if (!h.altKey) return !1;
        const p = e.getRootElement();
        return p !== null && Jvl(p) && (r() === o().length - 1 || (r() === -1 && c(p.innerText), s((g)=>g + 1))), !1;
    }, mR), d = e.registerCommand(Ost, (h)=>{
        if (!h.altKey) return !1;
        const p = e.getRootElement();
        return p !== null && e_l(p) && r() !== -1 && s(r() - 1), !1;
    }, mR);
    return Cn(()=>{
        const h = o().length - 1 - r();
        o().length > 0 && h >= 0 && h < o().length && (t.setText && t.setText(o()[h]), e.update(()=>{
            const p = Xg(), g = _2(), f = nS(o()[h]);
            g.append(f);
            for (const _ of p.getChildren())_.remove();
            p.append(g), p.selectEnd();
        }));
    }), On(()=>{
        u(), d();
    }), null;
}, n_l = (t)=>{
    const [e] = t1(), n = (i, r, s)=>{
        const o = t.setForce;
        let a = !1;
        e.update(()=>{
            const l = Xg();
            if (!l.getChildren().every((p)=>p instanceof Bst ? p.getTextContent() === "" : !1) && !r) return;
            if (r && o?.(!1), s && i.startsWith("{")) {
                if (i === JSON.stringify(e.getEditorState())) {
                    a = r === !0;
                    return;
                }
                try {
                    e.setEditorState(e.parseEditorState(i)), a = !0;
                    return;
                } catch (p) {
                    console.error(p);
                }
            }
            const d = _2(), h = nS(w3k(i));
            d.append(h);
            for (const p of l.getChildren())p.remove();
            l.append(d), l.selectEnd(), a = !0;
        }, {
            discrete: !0
        }), a && (e.dispatchCommand(pGr, void 0), t.onDidSetContent?.());
    };
    return Cn(()=>{
        const i = t.richText !== void 0 && t.richText.startsWith("{");
        t.force && n((i ? t.richText : t.text) ?? "", t.force, i);
    }), [];
};

}
