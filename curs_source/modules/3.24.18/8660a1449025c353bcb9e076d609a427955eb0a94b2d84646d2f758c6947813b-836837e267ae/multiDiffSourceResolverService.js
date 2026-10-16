import { Ei, Pn, Qe, xh } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var F2n, SKt, pDg;
export { F2n, SKt, pDg };
var __wakaru_kKt_initialized = false;
export function kKt() {
if (__wakaru_kKt_initialized) return;
__wakaru_kKt_initialized = true;
"use strict";
E(), Ei(), Qe(), It(), F2n = jn("multiDiffSourceResolverService"), SKt = class {
    constructor(t, e, n, i, r, s, o){
        if (this.originalUri = t, this.modifiedUri = e, this.goToFileUri = n, this.contextKeys = i, this.status = r, this.originalContents = s, this.modifiedContents = o, !t && !e) throw new xh("Invalid arguments");
    }
    getKey() {
        return JSON.stringify([
            this.modifiedUri?.toString(),
            this.originalUri?.toString()
        ]);
    }
}, pDg = class {
    constructor(){
        this._resolvers = new Set;
    }
    registerResolver(t) {
        if (this._resolvers.has(t)) throw new xh("Duplicate resolver");
        return this._resolvers.add(t), Pn(()=>this._resolvers.delete(t));
    }
    resolve(t) {
        for (const e of this._resolvers)if (e.canHandleUri(t)) return e.resolveDiffSource(t);
        return Promise.resolve(void 0);
    }
};

}
