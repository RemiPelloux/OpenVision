import { N, ge, se } from "./event.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { powerMonitor as UYe } from "electron";
var Yw;
export { Yw };
var __wakaru_xYe_initialized = false;
export function xYe() {
if (__wakaru_xYe_initialized) return;
__wakaru_xYe_initialized = true;
"use strict";
h(), se(), j(), te(), Yw = class extends J {
    constructor(e){
        super(), this.logService = e, this._onDidNetworkResume = this._register(new N), this.onDidNetworkResume = this._onDidNetworkResume.event, this._onDidConnectivityChanged = this._register(new N), this.onDidConnectivityChanged = this._onDidConnectivityChanged.event, this.registerPowerMonitorEvent("resume", "power_monitor_resume"), this.registerPowerMonitorEvent("unlock-screen", "unlock_screen");
    }
    registerPowerMonitorEvent(e, t) {
        const n = UYe, r = ()=>this.fireNetworkResume(e, t);
        n.on(e, r), this._register(ge(()=>n.removeListener(e, r)));
    }
    notifyConnectivityChanged(e) {
        this._onDidConnectivityChanged.fire(e);
    }
    fireNetworkResume(e, t) {
        this.logService.trace(`[McpProcessNetworkResumeWatcher] ${e}`), this.notifyConnectivityChanged({
            online: !0,
            source: t
        }), this._onDidNetworkResume.fire();
    }
}, Yw = B([
    w(0, Z)
], Yw);

}
