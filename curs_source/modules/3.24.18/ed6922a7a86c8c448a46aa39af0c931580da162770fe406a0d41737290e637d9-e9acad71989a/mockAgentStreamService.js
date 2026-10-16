import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { gXv, o0h } from "./mockAgentStreamController.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var R3n, hQi, a0h, pQi;
export { R3n, a0h, hQi, pQi };
var __wakaru_mQi_initialized = false;
export function mQi() {
if (__wakaru_mQi_initialized) return;
__wakaru_mQi_initialized = true;
"use strict";
x(), Se(), Ze(), Qn(), Pn(), Vr(), gXv(), R3n = pd("mockAgentStreamService"), hQi = class extends we {
    constructor(e, t){
        super(), this._controller = new o0h(e, t);
    }
    get isAvailable() {
        return !0;
    }
    createMock(e) {
        return this._controller.createMock(e);
    }
    pushEvent(e, t) {
        this._controller.pushEvent(e, t);
    }
    completeMock(e) {
        this._controller.completeMock(e);
    }
    disposeMock(e) {
        this._controller.disposeMock(e);
    }
    abortMock(e) {
        this.disposeMock(e);
    }
    getMockStream(e, t, n, i) {
        return this._controller.getMockStream(e, t, n, i);
    }
    getRecordedRunRequests() {
        return this._controller.getRecordedRunRequests();
    }
}, hQi = ie([
    C(0, Wn),
    C(1, _t)
], hQi), a0h = class {
    get isAvailable() {
        return !1;
    }
    createMock(e) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    pushEvent(e, t) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    completeMock(e) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    disposeMock(e) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    abortMock(e) {
        this.disposeMock(e);
    }
    getMockStream(e, t, n, i) {}
    getRecordedRunRequests() {
        return [];
    }
}, pQi = class extends we {
    constructor(e, t, n){
        super(), e.enableSmokeTestDriver === !0 && e.smokeTestUseRealAgentHttp !== !0 ? this._delegate = new hQi(t, n) : this._delegate = new a0h;
    }
    get isAvailable() {
        return this._delegate.isAvailable;
    }
    createMock(e) {
        return this._delegate.createMock(e);
    }
    pushEvent(e, t) {
        this._delegate.pushEvent(e, t);
    }
    completeMock(e) {
        this._delegate.completeMock(e);
    }
    disposeMock(e) {
        this._delegate.disposeMock(e);
    }
    abortMock(e) {
        this.disposeMock(e);
    }
    getMockStream(e, t, n, i) {
        return this._delegate.getMockStream(e, t, n, i);
    }
    getRecordedRunRequests() {
        return this._delegate.getRecordedRunRequests();
    }
}, pQi = ie([
    C(0, Yi),
    C(1, Wn),
    C(2, _t)
], pQi), mn(R3n, pQi, 1, 1);

}
