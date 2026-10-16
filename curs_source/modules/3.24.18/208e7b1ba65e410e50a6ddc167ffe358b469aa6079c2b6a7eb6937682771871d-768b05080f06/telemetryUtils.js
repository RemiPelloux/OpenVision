import { nhe } from "./commonProperties.js";
import { E } from "./configurationRegistry.js";
import { Ne } from "./nls.js";
import { ns } from "./objects.js";
import { zp } from "./remoteHosts.js";
import { ts } from "./telemetry.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
var ahe, ohe, bO, che, aJe;
export { aJe, ahe, bO, che, ohe };
var __wakaru_nf_initialized = false;
export function nf() {
if (__wakaru_nf_initialized) return;
__wakaru_nf_initialized = true;
"use strict";
h(), ns(), Ze(), Ne(), zp(), nhe(), ts(), ahe = class {
    constructor(e){
        this.value = e, this.isTrustedTelemetryValue = !0;
    }
}, ohe = class {
    constructor(){
        this.telemetryLevel = 0, this.sessionId = "someValue.sessionId", this.machineId = "someValue.machineId", this.macMachineId = "someValue.macMachineId", this.sqmId = "someValue.sqmId", this.devDeviceId = "someValue.devDeviceId", this.firstSessionDate = "someValue.firstSessionDate", this.sendErrorTelemetry = !1;
    }
    registerAuthId() {}
    publicLogError() {}
    publicLogError2() {}
    publicLogCapture() {}
    setExperimentProperty() {}
}, bO = new ohe, che = "telemetry", aJe = {
    id: che,
    name: E(2254, null)
};

}
