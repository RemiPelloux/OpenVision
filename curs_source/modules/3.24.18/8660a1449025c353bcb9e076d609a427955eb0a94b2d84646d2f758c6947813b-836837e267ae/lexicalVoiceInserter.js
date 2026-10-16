import { ljk } from "./Ycg.js";
import { AP, Ak, Au, kR1, nS } from "./ipa.js";
import { E } from "./tslib.es6.js";
var KEl, olf;
export { KEl, olf };
var __wakaru_cjk_initialized = false;
export function cjk() {
if (__wakaru_cjk_initialized) return;
__wakaru_cjk_initialized = true;
"use strict";
E(), Ak(), KEl = "cursor-voice-dictation", olf = class {
    constructor(t){
        this.editor = t, this.needsSeparator = !1;
    }
    commit(t, e) {
        this.editor.update(()=>{
            const n = this.$resolveVoiceNode();
            n !== void 0 && kR1("history-merge");
            const i = n ?? this.$appendVoiceNode(), r = this.needsSeparator && !/^\s/.test(t) ? " " : "";
            if (i.setTextContent(r + t), e === "final") {
                i.isUnmergeable() && i.toggleUnmergeable();
                const s = i.getTextContentSize();
                i.select(s, s);
            }
        }, {
            tag: KEl,
            discrete: !0
        }), e === "final" && this.reset();
    }
    reset() {
        this.voiceNodeKey = void 0, this.needsSeparator = !1;
    }
    $resolveVoiceNode() {
        if (this.voiceNodeKey === void 0) return;
        const t = AP(this.voiceNodeKey);
        return Au(t) && t.isAttached() ? t : void 0;
    }
    $appendVoiceNode() {
        const t = ljk();
        this.needsSeparator = /\S$/.test(t.getTextContent());
        const e = nS("");
        return e.toggleUnmergeable(), t.append(e), this.voiceNodeKey = e.getKey(), e;
    }
};

}
