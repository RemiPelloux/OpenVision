import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { PIv, RIv } from "./desired-selection-generation.js";
import { Rn } from "./extensions.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var jOn, Y2s;
export { Y2s, jOn };
var __wakaru_X2s_initialized = false;
export function X2s() {
if (__wakaru_X2s_initialized) return;
__wakaru_X2s_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), Hv(), PIv(), jOn = Il("glassDesiredSelectionService"), Y2s = class extends st {
    constructor(t){
        super(), this.state = new RIv(t.getActiveAgentId()), this.lastMirroredActiveId = this.state.desiredId, this._register(t.onDidChangeActiveAgentId((e)=>{
            this.state.desiredId === this.lastMirroredActiveId && this.claim(e), this.lastMirroredActiveId = e;
        }));
    }
    get desiredId() {
        return this.state.desiredId;
    }
    get desiredSubComposerId() {
        return this._desiredSubComposerId;
    }
    get value() {
        return this.state.value;
    }
    claim(t) {
        return t !== this.state.desiredId && (this._desiredSubComposerId = void 0), this.state.claim(t);
    }
    setDesiredSubComposerId(t) {
        this._desiredSubComposerId = t;
    }
    invalidate() {
        return this._desiredSubComposerId = void 0, this.state.invalidate();
    }
    isCurrent(t) {
        return this.state.isCurrent(t);
    }
}, Y2s = Re([
    F(0, vm)
], Y2s), bn(jOn, Y2s, 1, 1);

}
