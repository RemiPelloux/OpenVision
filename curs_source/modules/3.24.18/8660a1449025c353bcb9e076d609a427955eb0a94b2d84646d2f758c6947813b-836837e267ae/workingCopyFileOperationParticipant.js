import { Pn, Qe, st } from "./Iwo.js";
import { or, yi } from "./configuration.js";
import { a7, tL } from "./linkedList.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var zhs;
export { zhs };
var __wakaru_hNk_initialized = false;
export function hNk() {
if (__wakaru_hNk_initialized) return;
__wakaru_hNk_initialized = true;
"use strict";
E(), Ji(), Qe(), or(), a7(), zhs = class extends st {
    constructor(t, e){
        super(), this.logService = t, this.configurationService = e, this.participants = new tL;
    }
    addFileOperationParticipant(t) {
        const e = this.participants.push(t);
        return Pn(()=>e());
    }
    async participate(t, e, n, i) {
        const r = this.configurationService.getValue("files.participants.timeout");
        if (!(typeof r != "number" || r <= 0)) for (const s of this.participants)try {
            await s.participate(t, e, n, r, i);
        } catch (o) {
            this.logService.warn(o);
        }
    }
    dispose() {
        this.participants.clear(), super.dispose();
    }
}, zhs = Re([
    F(0, Li),
    F(1, yi)
], zhs);

}
