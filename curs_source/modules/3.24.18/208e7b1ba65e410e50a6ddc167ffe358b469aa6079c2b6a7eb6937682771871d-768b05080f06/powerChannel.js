import { h } from "./tslib.es6.js";
var Lme;
export { Lme };
var __wakaru_aze_initialized = false;
export function aze() {
if (__wakaru_aze_initialized) return;
__wakaru_aze_initialized = true;
"use strict";
h(), Lme = class {
    constructor(e){
        this.powerMainService = e;
    }
    listen(e, t) {
        switch(t){
            case "onDidChangeOnBatteryPower":
                return this.powerMainService.onDidChangeOnBatteryPower;
            case "onDidSuspend":
                return this.powerMainService.onDidSuspend;
            case "onDidResume":
                return this.powerMainService.onDidResume;
            default:
                throw new Error(`Event not found: ${t}`);
        }
    }
    async call(e, t, n) {
        switch(t){
            case "isOnBatteryPower":
                return this.powerMainService.isOnBatteryPower();
            case "getLastSuspendAtMs":
                return this.powerMainService.getLastSuspendAtMs();
            case "startWakelock":
                {
                    const [r] = n ?? [];
                    return this.powerMainService.startWakelockForOwner(e, r);
                }
            case "stopWakelock":
                {
                    const [r] = n ?? [];
                    await this.powerMainService.stopWakelock(r);
                    return;
                }
            case "isWakelockActive":
                {
                    const [r] = n ?? [];
                    return this.powerMainService.isWakelockActive(r);
                }
            case "startBackgroundThrottlingDisable":
                {
                    const [r] = n ?? [];
                    return this.powerMainService.startBackgroundThrottlingDisableForOwner(e, r);
                }
            case "stopBackgroundThrottlingDisable":
                {
                    const [r] = n ?? [];
                    await this.powerMainService.stopBackgroundThrottlingDisable(r);
                    return;
                }
            default:
                throw new Error(`Call not found: ${t}`);
        }
    }
};

}
