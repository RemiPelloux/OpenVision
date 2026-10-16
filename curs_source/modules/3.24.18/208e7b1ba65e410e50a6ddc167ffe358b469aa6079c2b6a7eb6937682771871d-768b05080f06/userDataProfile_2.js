import { Fr, ii } from "./environment.js";
import { Wt, cn } from "./files.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { Ln } from "./platform_2.js";
import { br, fr, q0 } from "./state.js";
import { DI, s7 } from "./stateService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Us, cd } from "./userDataProfile.js";
var bd, va, OI;
export { OI, bd, va };
var __wakaru_dWe_initialized = false;
export function dWe() {
if (__wakaru_dWe_initialized) return;
__wakaru_dWe_initialized = true;
"use strict";
h(), ye(), Fr(), Wt(), te(), br(), Oi(), Us(), Ze(), s7(), bd = class extends cd {
    constructor(e, t, n, r, s){
        super(n, r, t, s), this.stateReadonlyService = e, this.nativeEnvironmentService = n;
    }
    getStoredProfiles() {
        return this.stateReadonlyService.getItem(bd.PROFILES_KEY, []).map((t)=>({
                ...t,
                location: Ln(t.location) ? this.uriIdentityService.extUri.joinPath(this.profilesHome, t.location) : x.revive(t.location)
            }));
    }
    getStoredProfileAssociations() {
        return this.stateReadonlyService.getItem(bd.PROFILE_ASSOCIATIONS_KEY, {});
    }
    getDefaultProfileExtensionsLocation() {
        return this.uriIdentityService.extUri.joinPath(x.file(this.nativeEnvironmentService.extensionsPath).with({
            scheme: this.profilesHome.scheme
        }), "extensions.json");
    }
}, bd = B([
    w(0, q0),
    w(1, Br),
    w(2, ii),
    w(3, cn),
    w(4, Z)
], bd), va = class extends bd {
    constructor(e, t, n, r, s){
        super(e, t, n, r, s), this.stateService = e;
    }
    saveStoredProfiles(e) {
        e.length ? this.stateService.setItem(va.PROFILES_KEY, e.map((t)=>({
                ...t,
                location: this.uriIdentityService.extUri.basename(t.location)
            }))) : this.stateService.removeItem(va.PROFILES_KEY);
    }
    saveStoredProfileAssociations(e) {
        e.emptyWindows || e.workspaces ? this.stateService.setItem(va.PROFILE_ASSOCIATIONS_KEY, e) : this.stateService.removeItem(va.PROFILE_ASSOCIATIONS_KEY);
    }
}, va = B([
    w(0, fr),
    w(1, Br),
    w(2, ii),
    w(3, cn),
    w(4, Z)
], va), OI = class extends va {
    constructor(e, t, n, r){
        super(new DI(0, t, r, n), e, t, n, r);
    }
    async init() {
        return await this.stateService.init(), super.init();
    }
}, OI = B([
    w(0, Br),
    w(1, ii),
    w(2, cn),
    w(3, Z)
], OI);

}
