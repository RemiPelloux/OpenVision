import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { JD, UT } from "./output.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var s2t, _Ms;
export { _Ms, s2t };
var __wakaru_$6i_initialized = false;
export function $6i() {
if (__wakaru_$6i_initialized) return;
__wakaru_$6i_initialized = true;
"use strict";
E(), Rn(), It(), JD(), JD(), s2t = jn("glassOutputService"), _Ms = class {
    constructor(t){
        this._outputService = t;
    }
    getChannel(t) {
        return this._outputService.getChannel(t);
    }
    getChannelDescriptors() {
        return this._outputService.getChannelDescriptors();
    }
    getActiveChannel() {
        return this._outputService.getActiveChannel();
    }
    showChannel(t, e) {
        return this._outputService.showChannel(t, e);
    }
}, _Ms = Re([
    F(0, UT)
], _Ms), bn(s2t, _Ms, 1);

}
