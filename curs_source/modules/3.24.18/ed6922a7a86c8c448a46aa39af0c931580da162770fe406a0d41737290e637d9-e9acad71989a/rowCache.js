import { en } from "./dom_2.js";
import { Ve } from "./qIc.js";
import { x } from "./tslib.es6.js";
var JUc;
export { JUc };
var __wakaru_kyg_initialized = false;
export function kyg() {
if (__wakaru_kyg_initialized) return;
__wakaru_kyg_initialized = true;
"use strict";
x(), en(), JUc = class {
    constructor(e){
        this.renderers = e, this.cache = new Map, this.transactionNodesPendingRemoval = new Set, this.inTransaction = !1;
    }
    alloc(e) {
        let t = this.getTemplateCache(e).pop(), n = !1;
        if (t) n = this.transactionNodesPendingRemoval.has(t.domNode), n && this.transactionNodesPendingRemoval.delete(t.domNode);
        else {
            const i = Ve(".monaco-list-row"), s = this.getRenderer(e).renderTemplate(i);
            t = {
                domNode: i,
                templateId: e,
                templateData: s
            };
        }
        return {
            row: t,
            isReusingConnectedDomNode: n
        };
    }
    release(e) {
        e && this.releaseRow(e);
    }
    transact(e) {
        if (this.inTransaction) throw new Error("Already in transaction");
        this.inTransaction = !0;
        try {
            e();
        } finally{
            for (const t of this.transactionNodesPendingRemoval)this.doRemoveNode(t);
            this.transactionNodesPendingRemoval.clear(), this.inTransaction = !1;
        }
    }
    releaseRow(e) {
        const { domNode: t, templateId: n } = e;
        t && (this.inTransaction ? this.transactionNodesPendingRemoval.add(t) : this.doRemoveNode(t)), this.getTemplateCache(n).push(e);
    }
    doRemoveNode(e) {
        e.classList.remove("scrolling"), e.remove();
    }
    getTemplateCache(e) {
        let t = this.cache.get(e);
        return t || (t = [], this.cache.set(e, t)), t;
    }
    dispose() {
        this.cache.forEach((e, t)=>{
            for (const n of e)this.getRenderer(t).disposeTemplate(n.templateData), n.templateData = null;
        }), this.cache.clear(), this.transactionNodesPendingRemoval.clear();
    }
    getRenderer(e) {
        const t = this.renderers.get(e);
        if (!t) throw new Error(`No renderer found for ${e}`);
        return t;
    }
};

}
