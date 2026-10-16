import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var O8h;
export { O8h };
var __wakaru_ag__initialized = false;
export function ag_() {
if (__wakaru_ag__initialized) return;
__wakaru_ag__initialized = true;
"use strict";
x(), bt(), O8h = class {
    constructor(e, t, n){
        this.send = t, this.host = n, this.disposed = !1, this.swapping = Promise.resolve(), this.replaced = new ve, this.onDidReplace = this.replaced.event, this.callEnded = new AbortController, this.current = e;
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
    ensureConversationBodies(e) {
        return this.current.ensureConversationBodies(e);
    }
    async submitMessage(e, t) {
        if (await this.creating, this.current.header.source !== "draft") return this.current.submitMessage(e, t);
        let n = ()=>{};
        const i = new Promise((s)=>{
            n = s;
        });
        this.creating = i;
        const r = this.onDidReplace(()=>n());
        try {
            if (await this.send(e, {
                forceBubbleId: t.forceBubbleId,
                callEnded: this.callEnded.signal
            }).finally(()=>this.swapping) === void 0) throw new Error("the draft did not start an agent");
        } finally{
            r.dispose(), n(), this.creating === i && (this.creating = void 0);
        }
    }
    follow({ fromAgentId: e, toAgentId: t }) {
        return this.swapping = this.swapping.then(()=>this.current.header.id === e ? this.swapTo(t) : void 0).catch(()=>{}), this.swapping;
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.callEnded.abort(), this.current.dispose(), this.replaced.dispose());
    }
    async swapTo(e) {
        const t = await this.host.acquire(e);
        if (t === void 0) return;
        if (this.disposed) {
            t.dispose();
            return;
        }
        const n = this.current;
        this.current = t, n.dispose(), this.replaced.fire();
    }
};

}
