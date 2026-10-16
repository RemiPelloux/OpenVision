import { Il, bn } from "./SZu.js";
import { cb, sC } from "./backendClient.js";
import { vl, wm } from "./buildFlags.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { PB } from "./privateInferenceFeatures.js";
import { TRi, W2n } from "./scm_connectweb.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { aN } from "./yBp.js";
var cbc, xFs;
export { cbc, xFs };
var __wakaru_Qp__initialized = false;
export function Qp_() {
if (__wakaru_Qp__initialized) return;
__wakaru_Qp__initialized = true;
"use strict";
E(), TRi(), wm(), Rn(), It(), sC(), EE(), PB(), cbc = Il("glassPrUpdatesService"), xFs = class {
    constructor(t, e){
        this.instantiationService = t, this.privateInferenceEnablementService = e, this.scmBackendClient = this.instantiationService.createInstance(cb, {
            service: W2n
        });
    }
    async *streamPullRequestUpdates(t, e) {
        if (vl.localMode || !aN(this.privateInferenceEnablementService, "scm-integration")) return;
        const n = t.map((r)=>r.trim()).filter((r)=>r.length > 0);
        if (n.length === 0) return;
        yield* (await this.scmBackendClient.get()).streamPullRequestUpdates({
            prUrls: n
        }, {
            signal: e?.signal
        });
    }
}, xFs = Re([
    F(0, dn),
    F(1, mT)
], xFs), bn(cbc, xFs, 1, 1);

}
