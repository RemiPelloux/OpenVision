import { h } from "./tslib.es6.js";
var rhe;
export { rhe };
var __wakaru_tJe_initialized = false;
export function tJe() {
if (__wakaru_tJe_initialized) return;
__wakaru_tJe_initialized = true;
"use strict";
h(), rhe = class {
    constructor(e){
        this.channel = e;
    }
    log(e, t) {
        return this.channel.call("log", {
            eventName: e,
            data: t
        }).then(void 0, (n)=>`Failed to log telemetry: ${console.warn(n)}`), Promise.resolve(null);
    }
    flush() {
        return Promise.resolve();
    }
    registerAuthId(e) {
        this.channel.call("registerAuthId", {
            eventName: "registerAuthId",
            data: e
        });
    }
    capture(e, t) {
        return this.channel.call("capture", {
            eventName: e,
            data: t
        }).then(void 0, (n)=>`Failed to log telemetry: ${console.warn(n)}`), Promise.resolve(null);
    }
};

}
