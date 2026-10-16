import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It, dn } from "./instantiation.js";
import { wA_ } from "./mE_.js";
import { CA_ } from "./main-bot-agent-storage.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var eBs, tBs;
export { eBs, tBs };
var __wakaru_GA__initialized = false;
export function GA_() {
if (__wakaru_GA__initialized) return;
__wakaru_GA__initialized = true;
"use strict";
E(), Rn(), It(), xc(), CA_(), eBs = Il("glassMainBotServiceOwner"), tBs = class {
    constructor(t, e){
        this.instantiationService = t, this.storageService = e;
    }
    serviceFrom(t) {
        return this.chatServiceFrom(t);
    }
    chatServiceFrom(t) {
        return t.mainBotServiceFor(this.instantiationService);
    }
    get rememberedAgentId() {
        return wA_(this.storageService);
    }
}, tBs = Re([
    F(0, dn),
    F(1, Nu)
], tBs), bn(eBs, tBs, 1, 1);

}
