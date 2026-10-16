import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { Ii } from "./ze.js";
var kGd;
export { kGd };
var __wakaru_gNy_initialized = false;
export function gNy() {
if (__wakaru_gNy_initialized) return;
__wakaru_gNy_initialized = true;
"use strict";
E(), Hn(), kGd = class {
    constructor(t){
        this.renderers = t, this.cache = new Map, this.transactionNodesPendingRemoval = new Set, this.inTransaction = !1;
    }
    alloc(t) {
        let e = this.getTemplateCache(t).pop(), n = !1;
        if (e) n = this.transactionNodesPendingRemoval.has(e.domNode), n && this.transactionNodesPendingRemoval.delete(e.domNode);
        else {
            const i = Ii(".monaco-list-row"), s = this.getRenderer(t).renderTemplate(i);
            e = {
                domNode: i,
                templateId: t,
                templateData: s
            };
        }
        return {
            row: e,
            isReusingConnectedDomNode: n
        };
    }
    release(t) {
        t && this.releaseRow(t);
    }
    transact(t) {
        if (this.inTransaction) throw new Error("Already in transaction");
        this.inTransaction = !0;
        try {
            t();
        } finally{
            for (const e of this.transactionNodesPendingRemoval)this.doRemoveNode(e);
            this.transactionNodesPendingRemoval.clear(), this.inTransaction = !1;
        }
    }
    releaseRow(t) {
        const { domNode: e, templateId: n } = t;
        e && (this.inTransaction ? this.transactionNodesPendingRemoval.add(e) : this.doRemoveNode(e)), this.getTemplateCache(n).push(t);
    }
    doRemoveNode(t) {
        t.classList.remove("scrolling"), t.remove();
    }
    getTemplateCache(t) {
        let e = this.cache.get(t);
        return e || (e = [], this.cache.set(t, e)), e;
    }
    dispose() {
        this.cache.forEach((t, e)=>{
            for (const n of t)this.getRenderer(e).disposeTemplate(n.templateData), n.templateData = null;
        }), this.cache.clear(), this.transactionNodesPendingRemoval.clear();
    }
    getRenderer(t) {
        const e = this.renderers.get(t);
        if (!e) throw new Error(`No renderer found for ${t}`);
        return e;
    }
};

}
