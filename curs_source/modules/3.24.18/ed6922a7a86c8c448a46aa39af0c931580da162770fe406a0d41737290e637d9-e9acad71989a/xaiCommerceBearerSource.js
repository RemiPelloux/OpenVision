import { Jh, cZs } from "./dashboard_pb.js";
import { x } from "./tslib.es6.js";
var NLh, OLh, _Io, FLh;
export { FLh, NLh, OLh, _Io };
var __wakaru_Po__initialized = false;
export function Po_() {
if (__wakaru_Po__initialized) return;
__wakaru_Po__initialized = true;
"use strict";
x(), Jh(), NLh = 6e4, OLh = 15e3, _Io = class extends Error {
    constructor(e, t){
        super(t), this.reason = e, this.name = "XaiCommerceBearerRefusedError";
    }
    get reasonName() {
        return cZs[this.reason] ?? String(this.reason);
    }
}, FLh = class {
    constructor(e, t, n = ()=>Date.now()){
        this.rpc = e, this.purpose = t, this.now = n, this.generation = 0;
    }
    credential() {
        const e = this.current;
        if (e !== void 0 && e.expiresAtMs - this.now() > NLh) return Promise.resolve(e);
        if (this.inflight === void 0) {
            const t = this.mint().finally(()=>{
                this.inflight === t && (this.inflight = void 0);
            });
            this.inflight = t;
        }
        return this.inflight;
    }
    async token() {
        return (await this.credential()).token;
    }
    reset() {
        this.generation += 1, this.current = void 0, this.inflight = void 0;
    }
    async mint() {
        const e = this.generation, t = await this.rpc(), n = this.now(), i = await t.getXaiCommerceBearerToken({
            purpose: this.purpose
        }, {
            signal: AbortSignal.timeout(OLh)
        });
        switch(i.result.case){
            case "credential":
                {
                    const r = {
                        token: i.result.value.token,
                        edgeBaseUrl: i.result.value.edgeBaseUrl,
                        expiresAtMs: n + i.result.value.expiresInSeconds * 1e3
                    };
                    return this.generation === e && (this.current = r), r;
                }
            case "refusal":
                throw new _Io(i.result.value.reason, i.result.value.message);
            default:
                throw new Error("GetXaiCommerceBearerToken answered with neither a credential nor a refusal");
        }
    }
};

}
