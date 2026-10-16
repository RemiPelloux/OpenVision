import { S } from "./HVr.js";
import { kch } from "./commonProperties.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { Sse } from "./remoteHosts.js";
import { np } from "./telemetry.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var AKi, Cch, Tch, WGt, RKi, Ech;
export { AKi, Cch, Ech, RKi, Tch, WGt };
var __wakaru_j6_initialized = false;
export function j6() {
if (__wakaru_j6_initialized) return;
__wakaru_j6_initialized = true;
"use strict";
x(), bu(), gr(), rt(), Sse(), kch(), np(), AKi = class {
    constructor(e){
        this.value = e, this.isTrustedTelemetryValue = !0;
    }
}, Cch = class {
    constructor(){
        this.telemetryLevel = 0, this.sessionId = "someValue.sessionId", this.machineId = "someValue.machineId", this.macMachineId = "someValue.macMachineId", this.sqmId = "someValue.sqmId", this.devDeviceId = "someValue.devDeviceId", this.firstSessionDate = "someValue.firstSessionDate", this.sendErrorTelemetry = !1;
    }
    registerAuthId() {}
    publicLogError() {}
    publicLogError2() {}
    publicLogCapture() {}
    setExperimentProperty() {}
}, Tch = new Cch, WGt = "telemetry", RKi = {
    id: WGt,
    name: S(2254, null)
}, Ech = new Set([
    "ssh-remote",
    "dev-container",
    "attached-container",
    "wsl",
    "tunnel",
    "codespaces",
    "amlext"
]);

}
