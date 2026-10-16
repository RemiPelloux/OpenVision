import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
var AVt, Uls;
export { AVt, Uls };
var __wakaru_cRn_initialized = false;
export function cRn() {
if (__wakaru_cRn_initialized) return;
__wakaru_cRn_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), sk(), wu(), Zi(), AVt = jn("composerStorageService"), Uls = class extends st {
    constructor(t){
        super(), this.storageService = t, this.state = this._register(new vb({})), this.dataHandleTracker = this._register(new vb({
            handleHistory: [],
            activeHandles: {}
        })), this.enableDataHandleDebugging = this._register(Xh(this.storageService, "enableDataHandleDebugging")), this.visualizeLoadedHandles = this._register(Xh(this.storageService, "visualizeLoadedHandles")), this.shouldUseZeroAgentExecStreamStartTimeout = this._register(Xh(this.storageService, "shouldUseZeroAgentExecStreamStartTimeout")), this.shouldShowComposerVirtualizationMap = this._register(Xh(this.storageService, "shouldShowComposerVirtualizationMap"));
    }
    update(t) {
        this.state.change({
            ...this.state.value,
            ...t
        });
    }
    updateDataHandleTracker(t) {
        this.dataHandleTracker.change(t);
    }
}, Uls = Re([
    F(0, ki)
], Uls), bn(AVt, Uls, 0);

}
