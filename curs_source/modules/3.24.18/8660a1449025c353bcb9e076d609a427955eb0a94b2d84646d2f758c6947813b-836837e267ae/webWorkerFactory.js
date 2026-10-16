import { Ei, Gt, Pn, Qe, st, tt, xr } from "./Iwo.js";
import { Gxg, P2k, qxg } from "./Ycg.js";
import { bo } from "./arrays.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { Ztt } from "./trustedTypes.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { Xtt } from "./ze.js";
var t2n, ufl, Vxg, dfl;
export { Vxg, dfl, t2n, ufl };
var __wakaru_C9e_initialized = false;
export function C9e() {
if (__wakaru_C9e_initialized) return;
__wakaru_C9e_initialized = true;
"use strict";
E(), Ztt(), Ei(), Ki(), fn(), Gxg(), Qe(), bo(), Bt(), Gt(), typeof self == "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope" && globalThis.workerttPolicy !== void 0 ? t2n = globalThis.workerttPolicy : t2n = Xtt("defaultWorkerFactory", {
    createScriptURL: (t)=>t
}), ufl = class wPb extends st {
    constructor(e){
        super(), this._onMessage = this._register(new tt), this.onMessage = this._onMessage.event, this._onError = this._register(new tt), this.onError = this._onError.event, this.id = ++wPb.LAST_WORKER_ID;
        const n = e instanceof Worker ? e : qxg(e, this.id);
        P2k(n) ? this.worker = n : this.worker = Promise.resolve(n), this.postMessage("-please-ignore-", []);
        const i = (r)=>{
            this._onError.fire(r);
        };
        this.worker.then((r)=>{
            r.onmessage = (s)=>{
                this._onMessage.fire(s.data);
            }, r.onmessageerror = (s)=>{
                this._onError.fire(s);
            }, typeof r.addEventListener == "function" && r.addEventListener("error", i);
        }), this._register(Pn(()=>{
            this.worker?.then((r)=>{
                r.onmessage = null, r.onmessageerror = null, r.removeEventListener("error", i), r.terminate();
            }), this.worker = null;
        }));
    }
    getId() {
        return this.id;
    }
    postMessage(e, n) {
        this.worker?.then((i)=>{
            try {
                i.postMessage(e, n);
            } catch (r) {
                xr(r), xr(new Error("FAILED to post message to worker", {
                    cause: r
                }));
            }
        });
    }
}, ufl.LAST_WORKER_ID = 0, Vxg = ufl, dfl = class {
    constructor(t, e){
        this.esmModuleLocation = t, this.label = e;
    }
};

}
