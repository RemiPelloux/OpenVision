import { G_, xu } from "./extensions_3.js";
import { x } from "./tslib.es6.js";
var BRd, URd;
export { BRd, URd };
var __wakaru_WU_initialized = false;
export function WU() {
if (__wakaru_WU_initialized) return;
__wakaru_WU_initialized = true;
"use strict";
x(), G_(), BRd = class {
    constructor(e, t){
        this.desc = e, this.kind = t;
    }
    get key() {
        return xu.toKey(this.desc.identifier);
    }
    get isUnderDevelopment() {
        return this.desc.isUnderDevelopment;
    }
}, URd = class {
    constructor(e, t){
        this.local = e, this.remote = t;
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
