import { bt, ve } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Qge, N7c;
export { N7c, Qge };
var __wakaru_f5e_initialized = false;
export function f5e() {
if (__wakaru_f5e_initialized) return;
__wakaru_f5e_initialized = true;
"use strict";
x(), bt(), Pn(), Ze(), Qge = vn("actionBadgeService"), N7c = class {
    constructor(){
        this._onDidChangeBadge = new ve, this.onDidChangeBadge = this._onDidChangeBadge.event, this._badgesByActionId = new Map;
    }
    setBadge(e, t) {
        t ? this._badgesByActionId.set(e, t) : this._badgesByActionId.delete(e), this._onDidChangeBadge.fire({
            actionId: e,
            badge: t
        });
    }
    getBadge(e) {
        return this._badgesByActionId.get(e);
    }
    clearBadge(e) {
        this._badgesByActionId.delete(e), this._onDidChangeBadge.fire({
            actionId: e,
            badge: void 0
        });
    }
}, mn(Qge, N7c, 0);

}
