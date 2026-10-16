import { Du, v6a } from "./dashboard_pb.js";
import { E } from "./tslib.es6.js";
var A1g, R1g, Xls, P1g;
export { A1g, P1g, R1g, Xls };
var __wakaru_M1g_initialized = false;
export function M1g() {
if (__wakaru_M1g_initialized) return;
__wakaru_M1g_initialized = true;
"use strict";
E(), Du(), A1g = 6e4, R1g = 15e3, Xls = class extends Error {
    constructor(t, e){
        super(e), this.reason = t, this.name = "XaiCommerceBearerRefusedError";
    }
    get reasonName() {
        return v6a[this.reason] ?? String(this.reason);
    }
}, P1g = class {
    constructor(t, e, n = ()=>Date.now()){
        this.rpc = t, this.purpose = e, this.now = n, this.generation = 0;
    }
    credential() {
        const t = this.current;
        if (t !== void 0 && t.expiresAtMs - this.now() > A1g) return Promise.resolve(t);
        if (this.inflight === void 0) {
            const e = this.mint().finally(()=>{
                this.inflight === e && (this.inflight = void 0);
            });
            this.inflight = e;
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
        const t = this.generation, e = await this.rpc(), n = this.now(), i = await e.getXaiCommerceBearerToken({
            purpose: this.purpose
        }, {
            signal: AbortSignal.timeout(R1g)
        });
        switch(i.result.case){
            case "credential":
                {
                    const r = {
                        token: i.result.value.token,
                        edgeBaseUrl: i.result.value.edgeBaseUrl,
                        expiresAtMs: n + i.result.value.expiresInSeconds * 1e3
                    };
                    return this.generation === t && (this.current = r), r;
                }
            case "refusal":
                throw new Xls(i.result.value.reason, i.result.value.message);
            default:
                throw new Error("GetXaiCommerceBearerToken answered with neither a credential nor a refusal");
        }
    }
};

}
