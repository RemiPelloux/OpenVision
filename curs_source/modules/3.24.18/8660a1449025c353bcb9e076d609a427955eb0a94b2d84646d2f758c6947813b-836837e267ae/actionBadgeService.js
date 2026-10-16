import { Gt, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var RBt, uzd;
export { RBt, uzd };
var __wakaru_lvn_initialized = false;
export function lvn() {
if (__wakaru_lvn_initialized) return;
__wakaru_lvn_initialized = true;
"use strict";
E(), Gt(), Rn(), It(), RBt = jn("actionBadgeService"), uzd = class {
    constructor(){
        this._onDidChangeBadge = new tt, this.onDidChangeBadge = this._onDidChangeBadge.event, this._badgesByActionId = new Map;
    }
    setBadge(t, e) {
        e ? this._badgesByActionId.set(t, e) : this._badgesByActionId.delete(t), this._onDidChangeBadge.fire({
            actionId: t,
            badge: e
        });
    }
    getBadge(t) {
        return this._badgesByActionId.get(t);
    }
    clearBadge(t) {
        this._badgesByActionId.delete(t), this._onDidChangeBadge.fire({
            actionId: t,
            badge: void 0
        });
    }
}, bn(RBt, uzd, 0);

}
