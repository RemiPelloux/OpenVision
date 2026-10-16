import { bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { hmc, wn_ } from "./glass-diff-selection-add-to-chat-service.contract.js";
import { E } from "./tslib.es6.js";
var Cn_;
export { Cn_ };
var __wakaru_Tn__initialized = false;
export function Tn_() {
if (__wakaru_Tn__initialized) return;
__wakaru_Tn__initialized = true;
"use strict";
E(), Rn(), wn_(), wn_(), Cn_ = class {
    constructor(){
        this._seq = 0, this._active = null;
    }
    setActiveHandler(t) {
        const e = ++this._seq;
        return this._active = {
            id: e,
            handler: t
        }, e;
    }
    clearHandler(t) {
        this._active?.id === t && (this._active = null);
    }
    tryExecute() {
        const t = this._active;
        return t ? (t.handler.run(), !0) : !1;
    }
    collectMentions() {
        return this._active?.handler.collectMentions() ?? [];
    }
    hasActiveHandler() {
        return this._active !== null;
    }
}, bn(hmc, Cn_, 1);

}
