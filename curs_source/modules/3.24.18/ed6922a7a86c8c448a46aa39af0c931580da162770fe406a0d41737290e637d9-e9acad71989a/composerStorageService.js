import { Th } from "./De_3.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { av, sy } from "./solidEventsWrapper.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
var e0t, str;
export { e0t, str };
var __wakaru_uqt_initialized = false;
export function uqt() {
if (__wakaru_uqt_initialized) return;
__wakaru_uqt_initialized = true;
"use strict";
x(), Se(), Pn(), Ze(), sy(), Ku(), Vn(), e0t = vn("composerStorageService"), str = class extends we {
    constructor(e){
        super(), this.storageService = e, this.state = this._register(new av({})), this.dataHandleTracker = this._register(new av({
            handleHistory: [],
            activeHandles: {}
        })), this.enableDataHandleDebugging = this._register(Th(this.storageService, "enableDataHandleDebugging")), this.visualizeLoadedHandles = this._register(Th(this.storageService, "visualizeLoadedHandles")), this.shouldUseZeroAgentExecStreamStartTimeout = this._register(Th(this.storageService, "shouldUseZeroAgentExecStreamStartTimeout")), this.shouldShowComposerVirtualizationMap = this._register(Th(this.storageService, "shouldShowComposerVirtualizationMap"));
    }
    update(e) {
        this.state.change({
            ...this.state.value,
            ...e
        });
    }
    updateDataHandleTracker(e) {
        this.dataHandleTracker.change(e);
    }
}, str = ie([
    C(0, yn)
], str), mn(e0t, str, 0);

}
