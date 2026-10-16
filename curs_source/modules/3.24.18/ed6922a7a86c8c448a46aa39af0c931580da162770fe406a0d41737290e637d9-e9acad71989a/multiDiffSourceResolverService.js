import { Se, Zu, rn, si } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var q5n, U0t, $9h;
export { $9h, U0t, q5n };
var __wakaru__zt_initialized = false;
export function _zt() {
if (__wakaru__zt_initialized) return;
__wakaru__zt_initialized = true;
"use strict";
x(), si(), Se(), Ze(), q5n = vn("multiDiffSourceResolverService"), U0t = class {
    constructor(e, t, n, i, r, s, o){
        if (this.originalUri = e, this.modifiedUri = t, this.goToFileUri = n, this.contextKeys = i, this.status = r, this.originalContents = s, this.modifiedContents = o, !e && !t) throw new Zu("Invalid arguments");
    }
    getKey() {
        return JSON.stringify([
            this.modifiedUri?.toString(),
            this.originalUri?.toString()
        ]);
    }
}, $9h = class {
    constructor(){
        this._resolvers = new Set;
    }
    registerResolver(e) {
        if (this._resolvers.has(e)) throw new Zu("Duplicate resolver");
        return this._resolvers.add(e), rn(()=>this._resolvers.delete(e));
    }
    resolve(e) {
        for (const t of this._resolvers)if (t.canHandleUri(e)) return t.resolveDiffSource(e);
        return Promise.resolve(void 0);
    }
};

}
