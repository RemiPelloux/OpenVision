import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Yz, cCe } from "./observableValue.js";
import { E } from "./tslib.es6.js";
import { D_ } from "./yBp.js";
var has, tvg;
export { has, tvg };
var __wakaru_gul_initialized = false;
export function gul() {
if (__wakaru_gul_initialized) return;
__wakaru_gul_initialized = true;
"use strict";
E(), Qe(), cCe(), Rn(), It(), has = Il("connectionTokenProviderService"), tvg = class extends st {
    constructor(){
        super(...arguments), this.handler = new Yz;
    }
    registerHandler(t) {
        return this.handler.set(t);
    }
    async getOrCreateConnectionToken(t, e) {
        return (await D_(this.handler)).getOrCreateConnectionToken(t, e);
    }
    async getOrCreateCursorServerUrl(t, e, n = !0) {
        return (await D_(this.handler)).getOrCreateCursorServerUrl(t, e, n);
    }
    async peekCursorServerUrl(t, e) {
        return (await D_(this.handler)).peekCursorServerUrl(t, e);
    }
}, bn(has, tvg, 1, 1);

}
