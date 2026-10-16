import { bn, jn } from "./SZu.js";
import { Rs, ss } from "./authenticationService.js";
import { cb, sC } from "./backendClient.js";
import { Ag } from "./connectErrors.js";
import { Rn } from "./extensions.js";
import { IpT } from "./glass-recommended-actions-persisted-cache.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It, dn } from "./instantiation.js";
import { EpT, TpT, eR_ } from "./mE_.js";
import { Ljg, zSl } from "./recommended_actions_connectweb.js";
import { WSl, Z2n } from "./recommended_actions_pb.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { ZGt } from "./yBp.js";
var xUi, sBs;
export { sBs, xUi };
var __wakaru_R0c_initialized = false;
export function R0c() {
if (__wakaru_R0c_initialized) return;
__wakaru_R0c_initialized = true;
"use strict";
E(), Ljg(), Z2n(), Rn(), It(), sC(), Ag(), Rs(), xc(), IpT(), xUi = jn("glassRecommendedActionsService"), sBs = class {
    constructor(t, e, n){
        this.instantiationService = t, this.authenticationService = e, this.storageService = n, this.recommendedActionsBackendClient = this.instantiationService.createInstance(cb, {
            service: zSl
        });
    }
    getCachedRecommendedActions(t) {
        return eR_({
            storageService: this.storageService,
            identity: t
        });
    }
    async listRecommendedActions(t, e) {
        const n = this.getCurrentCacheIdentity(), r = await (await this.recommendedActionsBackendClient.get()).listRecommendedActions(t, {
            signal: e?.signal
        }), s = this.writeCacheIfCurrent(n, r.actions);
        return s === r.actions ? r : new WSl({
            actions: [
                ...s
            ]
        });
    }
    async dismissRecommendedAction(t, e) {
        const n = this.getCurrentCacheIdentity(), i = await this.recommendedActionsBackendClient.get();
        try {
            const r = await i.dismissRecommendedAction(t, {
                signal: e?.signal
            });
            return this.removeCachedActionIfCurrent(n, t.actionId), r;
        } catch (r) {
            throw ZGt(r) && this.removeCachedActionIfCurrent(n, t.actionId), r;
        }
    }
    async completeRecommendedAction(t, e) {
        const n = this.getCurrentCacheIdentity(), r = await (await this.recommendedActionsBackendClient.get()).completeRecommendedAction(t, {
            signal: e?.signal
        });
        return this.removeCachedActionIfCurrent(n, t.actionId), r;
    }
    getCurrentCacheIdentity() {
        const t = this.authenticationService.getCurrentAuthId();
        if (t !== void 0) return {
            authId: t,
            teamId: this.authenticationService.getTeamId()
        };
    }
    isCurrentCacheIdentity(t) {
        const e = this.getCurrentCacheIdentity();
        return e !== void 0 && e.authId === t.authId && e.teamId === t.teamId;
    }
    writeCacheIfCurrent(t, e) {
        return t === void 0 || !this.isCurrentCacheIdentity(t) ? e : TpT({
            storageService: this.storageService,
            identity: t,
            actions: e
        });
    }
    removeCachedActionIfCurrent(t, e) {
        t === void 0 || !this.isCurrentCacheIdentity(t) || EpT({
            storageService: this.storageService,
            identity: t,
            actionId: e
        });
    }
}, sBs = Re([
    F(0, dn),
    F(1, ss),
    F(2, Nu)
], sBs), bn(xUi, sBs, 1);

}
