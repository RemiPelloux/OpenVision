import { Abw, Ebw, x1s, xbw } from "./BA.js";
import { E } from "./tslib.es6.js";
var v3f;
export { v3f };
var __wakaru_Rbw_initialized = false;
export function Rbw() {
if (__wakaru_Rbw_initialized) return;
__wakaru_Rbw_initialized = true;
"use strict";
E(), v3f = class {
    constructor(){
        this.range = null, this.isCommitting = !1, this.queuedCommit = null, this.suppressAdopt = !1, this.unarmed = !1, this.pendingSealed = !1, this.finalizedPrefix = "", this.base = null;
    }
    commit(t, e, n) {
        if (this.unarmed) return;
        const i = {
            promptInput: t,
            text: e,
            kind: n
        };
        if (this.isCommitting) {
            this.queuedCommit = i;
            return;
        }
        try {
            for(this.runCommit(i); this.queuedCommit !== null;){
                const r = this.queuedCommit;
                this.queuedCommit = null, this.runCommit(r);
            }
        } finally{
            this.queuedCommit = null;
        }
    }
    runCommit({ promptInput: t, text: e, kind: n }) {
        const i = t?.editor;
        if (!i) return;
        this.base === null && (this.base = i.getJSON());
        const r = {
            type: "text",
            text: e
        }, s = n === "final" ? i.chain().focus() : i.chain();
        this.isCommitting = !0;
        try {
            if (this.range === null && !this.suppressAdopt && (this.range = Ebw(i, e)), this.suppressAdopt = !1, this.range !== null) s.insertContentAt(this.range, r).run();
            else {
                const o = i.state.selection.from, a = Abw(i, o, e) ? " " : "";
                s.insertContentAt({
                    from: o,
                    to: o
                }, {
                    type: "text",
                    text: a + e
                }).run(), this.range = {
                    from: o + a.length,
                    to: 0
                };
            }
        } finally{
            this.isCommitting = !1;
        }
        if (this.range = {
            from: this.range.from,
            to: i.state.selection.from
        }, n === "final") {
            this.reset(t);
            return;
        }
        n === "segment" && (this.finalizedPrefix = e), this.pendingSealed || x1s(i, xbw(this.range, e, this.finalizedPrefix));
    }
    clearPending(t) {
        this.pendingSealed = !0;
        const e = t?.editor;
        e && x1s(e, null);
    }
    reset(t) {
        const e = t?.editor;
        e && x1s(e, null), this.range = null, this.queuedCommit = null, this.suppressAdopt = !0, this.unarmed = !1, this.pendingSealed = !1, this.finalizedPrefix = "", this.base = null;
    }
    discard(t) {
        const e = t?.editor;
        e && x1s(e, null), e && this.base !== null && e.chain().setContent(this.base).focus("end").setMeta("addToHistory", !1).run(), this.reset(t), this.unarmed = !0;
    }
};

}
