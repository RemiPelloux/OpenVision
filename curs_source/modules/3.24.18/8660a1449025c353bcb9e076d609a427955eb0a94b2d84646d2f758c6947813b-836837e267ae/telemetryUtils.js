import { D } from "./Iwo.js";
import { VVm } from "./commonProperties.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { epe } from "./remoteHosts.js";
import { Xv } from "./telemetry.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var Vts, YVm, XVm, FIn, Kts, ZVm;
export { FIn, Kts, Vts, XVm, YVm, ZVm };
var __wakaru_uV_initialized = false;
export function uV() {
if (__wakaru_uV_initialized) return;
__wakaru_uV_initialized = true;
"use strict";
E(), cp(), To(), Bt(), epe(), VVm(), Xv(), Vts = class {
    constructor(t){
        this.value = t, this.isTrustedTelemetryValue = !0;
    }
}, YVm = class {
    constructor(){
        this.telemetryLevel = 0, this.sessionId = "someValue.sessionId", this.machineId = "someValue.machineId", this.macMachineId = "someValue.macMachineId", this.sqmId = "someValue.sqmId", this.devDeviceId = "someValue.devDeviceId", this.firstSessionDate = "someValue.firstSessionDate", this.sendErrorTelemetry = !1;
    }
    registerAuthId() {}
    publicLogError() {}
    publicLogError2() {}
    publicLogCapture() {}
    setExperimentProperty() {}
}, XVm = new YVm, FIn = "telemetry", Kts = {
    id: FIn,
    name: D(2254, null)
}, ZVm = new Set([
    "ssh-remote",
    "dev-container",
    "attached-container",
    "wsl",
    "tunnel",
    "codespaces",
    "amlext"
]);

}
