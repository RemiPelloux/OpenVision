import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { S_k, wug } from "./mockAgentStreamController.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var GEi, Hss, Cug, Wss;
export { Cug, GEi, Hss, Wss };
var __wakaru_Gss_initialized = false;
export function Gss() {
if (__wakaru_Gss_initialized) return;
__wakaru_Gss_initialized = true;
"use strict";
E(), Qe(), It(), Ji(), Rn(), fo(), S_k(), GEi = Il("mockAgentStreamService"), Hss = class extends st {
    constructor(t, e){
        super(), this._controller = new wug(t, e);
    }
    get isAvailable() {
        return !0;
    }
    createMock(t) {
        return this._controller.createMock(t);
    }
    pushEvent(t, e) {
        this._controller.pushEvent(t, e);
    }
    completeMock(t) {
        this._controller.completeMock(t);
    }
    disposeMock(t) {
        this._controller.disposeMock(t);
    }
    abortMock(t) {
        this.disposeMock(t);
    }
    getMockStream(t, e, n, i) {
        return this._controller.getMockStream(t, e, n, i);
    }
    getRecordedRunRequests() {
        return this._controller.getRecordedRunRequests();
    }
}, Hss = Re([
    F(0, Li),
    F(1, dn)
], Hss), Cug = class {
    get isAvailable() {
        return !1;
    }
    createMock(t) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    pushEvent(t, e) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    completeMock(t) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    disposeMock(t) {
        throw new Error("MockAgentStreamService is not available (enableSmokeTestDriver must be true)");
    }
    abortMock(t) {
        this.disposeMock(t);
    }
    getMockStream(t, e, n, i) {}
    getRecordedRunRequests() {
        return [];
    }
}, Wss = class extends st {
    constructor(t, e, n){
        super(), t.enableSmokeTestDriver === !0 && t.smokeTestUseRealAgentHttp !== !0 ? this._delegate = new Hss(e, n) : this._delegate = new Cug;
    }
    get isAvailable() {
        return this._delegate.isAvailable;
    }
    createMock(t) {
        return this._delegate.createMock(t);
    }
    pushEvent(t, e) {
        this._delegate.pushEvent(t, e);
    }
    completeMock(t) {
        this._delegate.completeMock(t);
    }
    disposeMock(t) {
        this._delegate.disposeMock(t);
    }
    abortMock(t) {
        this.disposeMock(t);
    }
    getMockStream(t, e, n, i) {
        return this._delegate.getMockStream(t, e, n, i);
    }
    getRecordedRunRequests() {
        return this._delegate.getRecordedRunRequests();
    }
}, Wss = Re([
    F(0, ps),
    F(1, Li),
    F(2, dn)
], Wss), bn(GEi, Wss, 1, 1);

}
