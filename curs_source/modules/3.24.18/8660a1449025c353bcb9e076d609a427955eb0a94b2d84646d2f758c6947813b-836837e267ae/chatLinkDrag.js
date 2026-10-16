import { mN } from "./agentLinks.js";
import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var Q_s;
export { Q_s };
var __wakaru_qRl_initialized = false;
export function qRl() {
if (__wakaru_qRl_initialized) return;
__wakaru_qRl_initialized = true;
"use strict";
E(), Ki(), fn(), mN(), Q_s = class {
    constructor(t){
        this.placeable = t, this.kind = "chat-link";
    }
    get agentId() {
        return this.placeable.id;
    }
};

}
