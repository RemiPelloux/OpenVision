import { O, se } from "./event.js";
import { h } from "./tslib.es6.js";
var P2e;
export { P2e };
var __wakaru_Act_initialized = false;
export function Act() {
if (__wakaru_Act_initialized) return;
__wakaru_Act_initialized = true;
"use strict";
h(), se(), P2e = class {
    constructor(e){
        this.service = e;
    }
    listen(e, t) {
        return O.None;
    }
    async call(e, t, n) {
        switch(t){
            case "applyConfig":
                return this.service.applyConfig(n);
            case "getMeasurements":
                return this.service.getMeasurements();
        }
        throw new Error(`Command not found: ${t}`);
    }
};

}
