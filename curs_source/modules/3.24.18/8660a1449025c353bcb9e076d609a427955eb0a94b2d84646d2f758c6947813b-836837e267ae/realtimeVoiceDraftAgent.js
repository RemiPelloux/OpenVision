import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var Zrf;
export { Zrf };
var __wakaru_k8k_initialized = false;
export function k8k() {
if (__wakaru_k8k_initialized) return;
__wakaru_k8k_initialized = true;
"use strict";
E(), Gt(), Zrf = class {
    constructor(t, e, n){
        this.send = e, this.host = n, this.disposed = !1, this.swapping = Promise.resolve(), this.replaced = new tt, this.onDidReplace = this.replaced.event, this.callEnded = new AbortController, this.current = t;
    }
    get header() {
        return this.current.header;
    }
    get composerDataHandle() {
        return this.current.composerDataHandle;
    }
    get backgroundComposerData() {
        return this.current.backgroundComposerData;
    }
    get workspaceFactory() {
        return this.current.workspaceFactory;
    }
    get isDisposed() {
        return this.disposed || this.current.isDisposed;
    }
    ensureConversationBodies(t) {
        return this.current.ensureConversationBodies(t);
    }
    async submitMessage(t, e) {
        if (await this.creating, this.current.header.source !== "draft") return this.current.submitMessage(t, e);
        let n = ()=>{};
        const i = new Promise((s)=>{
            n = s;
        });
        this.creating = i;
        const r = this.onDidReplace(()=>n());
        try {
            if (await this.send(t, {
                forceBubbleId: e.forceBubbleId,
                callEnded: this.callEnded.signal
            }).finally(()=>this.swapping) === void 0) throw new Error("the draft did not start an agent");
        } finally{
            r.dispose(), n(), this.creating === i && (this.creating = void 0);
        }
    }
    follow({ fromAgentId: t, toAgentId: e }) {
        return this.swapping = this.swapping.then(()=>this.current.header.id === t ? this.swapTo(e) : void 0).catch(()=>{}), this.swapping;
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.callEnded.abort(), this.current.dispose(), this.replaced.dispose());
    }
    async swapTo(t) {
        const e = await this.host.acquire(t);
        if (e === void 0) return;
        if (this.disposed) {
            e.dispose();
            return;
        }
        const n = this.current;
        this.current = e, n.dispose(), this.replaced.fire();
    }
};

}
