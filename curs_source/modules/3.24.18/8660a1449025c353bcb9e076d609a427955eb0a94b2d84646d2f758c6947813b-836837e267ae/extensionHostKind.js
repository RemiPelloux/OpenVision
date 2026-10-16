import { Pw, lm } from "./extensions_3.js";
import { E } from "./tslib.es6.js";
var _bm, bbm;
export { _bm, bbm };
var __wakaru_Xz_initialized = false;
export function Xz() {
if (__wakaru_Xz_initialized) return;
__wakaru_Xz_initialized = true;
"use strict";
E(), Pw(), _bm = class {
    constructor(t, e){
        this.desc = t, this.kind = e;
    }
    get key() {
        return lm.toKey(this.desc.identifier);
    }
    get isUnderDevelopment() {
        return this.desc.isUnderDevelopment;
    }
}, bbm = class {
    constructor(t, e){
        this.local = t, this.remote = e;
    }
    get key() {
        return this.local ? this.local.key : this.remote.key;
    }
    get identifier() {
        return this.local ? this.local.desc.identifier : this.remote.desc.identifier;
    }
    get kind() {
        return this.local ? this.local.kind : this.remote.kind;
    }
};

}
