import { N, se } from "./event.js";
import { j } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
var GI;
export { GI };
var __wakaru_IWe_initialized = false;
export function IWe() {
if (__wakaru_IWe_initialized) return;
__wakaru_IWe_initialized = true;
"use strict";
h(), se(), j(), GI = class {
    constructor(){
        this._onCloseEmitter = new N, this._onReloadEmitter = new N, this._onTerminateEmitter = new N, this._onAttachEmitter = new N;
    }
    call(e, t, n) {
        switch(t){
            case "close":
                return Promise.resolve(this._onCloseEmitter.fire({
                    sessionId: n[0]
                }));
            case "reload":
                return Promise.resolve(this._onReloadEmitter.fire({
                    sessionId: n[0]
                }));
            case "terminate":
                return Promise.resolve(this._onTerminateEmitter.fire({
                    sessionId: n[0]
                }));
            case "attach":
                return Promise.resolve(this._onAttachEmitter.fire({
                    sessionId: n[0],
                    port: n[1],
                    subId: n[2]
                }));
        }
        throw new Error("Method not implemented.");
    }
    listen(e, t, n) {
        switch(t){
            case "close":
                return this._onCloseEmitter.event;
            case "reload":
                return this._onReloadEmitter.event;
            case "terminate":
                return this._onTerminateEmitter.event;
            case "attach":
                return this._onAttachEmitter.event;
        }
        throw new Error("Method not implemented.");
    }
}, GI.ChannelName = "extensionhostdebugservice";

}
