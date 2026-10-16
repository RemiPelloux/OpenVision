import { lf } from "./A3u.js";
import { Se, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { HU, wde } from "./observableValue.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var IJi, gAh;
export { IJi, gAh };
var __wakaru_QTo_initialized = false;
export function QTo() {
if (__wakaru_QTo_initialized) return;
__wakaru_QTo_initialized = true;
"use strict";
x(), Se(), wde(), Pn(), Ze(), IJi = pd("connectionTokenProviderService"), gAh = class extends we {
    constructor(){
        super(...arguments), this.handler = new HU;
    }
    registerHandler(e) {
        return this.handler.set(e);
    }
    async getOrCreateConnectionToken(e, t) {
        return (await lf(this.handler)).getOrCreateConnectionToken(e, t);
    }
    async getOrCreateCursorServerUrl(e, t, n = !0) {
        return (await lf(this.handler)).getOrCreateCursorServerUrl(e, t, n);
    }
    async peekCursorServerUrl(e, t) {
        return (await lf(this.handler)).peekCursorServerUrl(e, t);
    }
}, mn(IJi, gAh, 1, 1);

}
