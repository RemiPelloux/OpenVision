import { se } from "./event.js";
import { j } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
import { Eo } from "./update.js";
var The;
export { The };
var __wakaru_uJe_initialized = false;
export function uJe() {
if (__wakaru_uJe_initialized) return;
__wakaru_uJe_initialized = true;
"use strict";
h(), se(), j(), Eo(), The = class {
    constructor(e){
        this.service = e;
    }
    listen(e, t) {
        switch(t){
            case "onStateChange":
                return this.service.onStateChange;
        }
        throw new Error(`Event not found: ${t}`);
    }
    call(e, t, n) {
        switch(t){
            case "checkForUpdates":
                return this.service.checkForUpdates(n);
            case "downloadUpdate":
                return this.service.downloadUpdate();
            case "applyUpdate":
                return this.service.applyUpdate();
            case "quitAndInstall":
                return this.service.quitAndInstall();
            case "_getInitialState":
                return Promise.resolve(this.service.state);
            case "isLatestVersion":
                return this.service.isLatestVersion();
            case "_applySpecificUpdate":
                return this.service._applySpecificUpdate(n);
            case "_setUpdateBaseUrl":
                return this.service._setUpdateBaseUrl(n);
        }
        throw new Error(`Call not found: ${t}`);
    }
};

}
