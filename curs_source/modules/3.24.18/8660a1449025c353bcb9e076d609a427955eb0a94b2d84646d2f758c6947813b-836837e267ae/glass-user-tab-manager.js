import { Mt } from "./index_197.js";
import { XUr } from "./tab-system-manager.js";
import { E } from "./tslib.es6.js";
var Eav;
export { Eav };
var __wakaru_kJw_initialized = false;
export function kJw() {
if (__wakaru_kJw_initialized) return;
__wakaru_kJw_initialized = true;
"use strict";
E(), Mt(), Eav = class extends XUr {
    constructor(){
        super(...arguments), this._automaticOpenDepth = 0, this._userOpenDepth = 0;
    }
    runAsAutomaticOpen(t) {
        this._automaticOpenDepth++;
        try {
            return t();
        } finally{
            this._automaticOpenDepth--;
        }
    }
    runAsUserOpen(t) {
        this._userOpenDepth++;
        try {
            return t();
        } finally{
            this._userOpenDepth--;
        }
    }
    push(t) {
        const e = this.getGroup(t.groupId), r = (t.tabId === void 0 || e?.hasTab(t.tabId) !== !0) && t.targetIndex === void 0 && this._automaticOpenDepth === 0 && (t.activate !== !1 || this._userOpenDepth > 0) ? e?.tabs.findIndex((o)=>o.id === e.activeTabId) ?? -1 : -1, s = r >= 0 ? r + 1 : t.targetIndex;
        return super.push({
            ...t,
            ...s !== void 0 ? {
                targetIndex: s
            } : {}
        });
    }
};

}
