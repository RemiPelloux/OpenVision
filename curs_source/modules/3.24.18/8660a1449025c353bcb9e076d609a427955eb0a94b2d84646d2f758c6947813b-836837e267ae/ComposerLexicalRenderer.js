import { XEl, ZEl } from "./ComposerFullInputBox.js";
import { wus } from "./LexicalComposer.js";
import { cI, t1 } from "./LexicalComposerContext.js";
import { zml } from "./LexicalContentEditable.js";
import { Xml } from "./LexicalErrorBoundary.js";
import { nEg } from "./LexicalPlainTextPlugin.js";
import { Xat } from "./MentionNode.js";
import { Gr, _Et } from "./Ycg.js";
import { Ak, Bst, UDp, Xg, _2, gJ, nS } from "./ipa.js";
import { vo } from "./solidContext.js";
import { Fx } from "./tiptapRichText.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Cn, pi } from "./ze.js";
var TIl, EIl, IIl, acf;
export { EIl, IIl, TIl, acf };
var __wakaru_lcf_initialized = false;
export function lcf() {
if (__wakaru_lcf_initialized) return;
__wakaru_lcf_initialized = true;
"use strict";
E(), at(), wus(), cI(), zml(), Xml(), nEg(), pi(), vo(), Ak(), Fx(), ZEl(), Xat(), TIl = (t, e)=>{
    try {
        const { editorState: n, ...i } = XEl(), s = UDp({
            ...i,
            namespace: "temp-text-extraction",
            onError: (a)=>e?.error(a)
        }).parseEditorState(t);
        let o = "";
        return s.read(()=>{
            o = Xg().getTextContent();
        }), o;
    } catch (n) {
        return e?.error("[composer-lexical-renderer] Failed to extract plain text from Lexical state:", n), gJ(t) ?? t;
    }
}, EIl = ()=>{
    const t = Xg(), e = t.getChildren();
    let n = 0;
    for(; n < e.length;){
        const s = e[n];
        if (s instanceof Bst && s.getTextContent() === "") s.remove(), n++;
        else break;
    }
    const i = t.getChildren();
    let r = i.length - 1;
    for(; r >= 0;){
        const s = i[r];
        if (s instanceof Bst && s.getTextContent() === "") s.remove(), r--;
        else break;
    }
}, IIl = (t)=>{
    for (const e of Xg().getAllTextNodes())_Et(e) && e.setPresentationFileIconVariant(t);
}, acf = (t)=>{
    const e = Gr(), [n] = t1(), i = ({ text: s, fileIconVariant: o })=>{
        n.update(()=>{
            const a = Xg();
            if (!a.getChildren().every((p)=>p instanceof Bst ? p.getTextContent() === "" : !1)) return;
            if (s.startsWith("{")) try {
                n.setEditorState(n.parseEditorState(s)), IIl(o), EIl();
                return;
            } catch (p) {
                e.composerLogService.error(p);
            }
            const u = gJ(s) ?? s, d = _2(), h = nS(u);
            d.append(h);
            for (const p of a.getChildren())p.remove();
            a.append(d), a.selectEnd();
        });
    }, r = ({ text: s, fileIconVariant: o })=>{
        if (!(s === void 0 || s === "")) {
            if (s.startsWith("{")) try {
                n.setEditorState(n.parseEditorState(s)), n.update(()=>{
                    IIl(o), EIl();
                });
                return;
            } catch (a) {
                e.composerLogService.error(a);
            }
            i({
                text: gJ(s) ?? s,
                fileIconVariant: o
            });
        }
    };
    return Cn(()=>{
        r({
            text: t.text,
            fileIconVariant: t.fileIconVariant
        });
    }), [];
};

}
