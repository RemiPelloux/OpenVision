import { OPn, U0l } from "./GhostTextUtils.js";
import { cI, t1 } from "./LexicalComposerContext.js";
import { Gr, Q0l, jJg } from "./Ycg.js";
import { J0l } from "./classicVoiceOwnerId.js";
import { Ak, M6e, Xg, q2e } from "./ipa.js";
import { KEl, cjk, olf } from "./lexicalVoiceInserter.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Cn, On, ks, pi, vt } from "./ze.js";
var alf;
export { alf };
var __wakaru_ujk_initialized = false;
export function ujk() {
if (__wakaru_ujk_initialized) return;
__wakaru_ujk_initialized = true;
"use strict";
E(), pi(), cI(), Ak(), vo(), J0l(), cjk(), U0l(), alf = (t)=>{
    const [e] = t1(), n = Gr(), i = vt(()=>Q0l(t.composerId, t.bubbleId)), r = new olf(e);
    let s;
    On(()=>{
        s !== void 0 && l() && n.voiceInputService.cancel(), r.reset();
    });
    const o = (...b)=>ks(()=>{
            const y = n.voiceInputService.getState();
            return b.includes(y.status) && y.ownerId === i();
        }), a = ()=>o("requesting_permission", "recording"), l = ()=>o("requesting_permission", "recording", "processing"), c = vt(()=>jJg(n.composerDataService, t.composerId, t.bubbleId)), u = vt(()=>{
        const b = n.composerDataService.allComposersData.selectedComposerIds;
        return !c() || !b.includes(t.composerId);
    }), d = (b)=>{
        const y = b === "mic-open" ? a() : l();
        s === void 0 || !y || (r.reset(), n.voiceInputService.cancel());
    }, h = n.voiceInputService.onTranscriptCommit((b)=>{
        s === void 0 || b.ownerId !== ks(i) || r.commit(b.text, b.kind);
    });
    On(()=>h.dispose());
    const p = n.voiceInputService.onSubmitRequested((b)=>{
        if (s === void 0 || b.ownerId !== ks(i)) return;
        const y = e.getEditorState().read(()=>Xg().getTextContent()), S = JSON.stringify(e.getEditorState());
        n.composerChatService.submitChatMaybeAbortCurrent(ks(()=>t.composerId), y, {
            richText: S
        });
    });
    On(()=>p.dispose());
    const g = n.voiceInputService.onStateChanged((b)=>{
        if (b.ownerId === ks(i) && (b.status === "requesting_permission" || b.status === "recording")) {
            s ??= e.getEditorState(), ks(u) && d("mic-open");
            return;
        }
        if (b.status !== "idle" && b.status !== "error" || s === void 0) return;
        const y = s;
        s = void 0, b.status === "error" && e.setEditorState(y), r.reset(), b.status === "idle" && ks(c) && e.focus();
    });
    On(()=>g.dispose()), Cn(()=>{
        u() && d("mic-open");
    });
    const f = e.registerUpdateListener(({ tags: b, dirtyElements: y, dirtyLeaves: S })=>{
        b.has(KEl) || b.has(OPn) || (y.size > 0 || S.size > 0) && d("any");
    });
    On(()=>f());
    const _ = e.registerCommand(M6e, ()=>l() ? (n.voiceInputService.cancel(), !0) : !1, q2e);
    return On(()=>_()), [];
};

}
