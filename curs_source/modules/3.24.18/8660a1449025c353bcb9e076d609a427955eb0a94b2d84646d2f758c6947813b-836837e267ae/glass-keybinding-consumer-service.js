import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { DA, vf } from "./contextkeys_2.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { Rn } from "./extensions.js";
import { aw, vN } from "./glass-context-key-service.js";
import { hC, ow } from "./glass-environment-service.js";
import { GT, R2 } from "./glass-keybinding-router-service.js";
import { Mme, NTe } from "./glass-keybinding-service.js";
import { qt_ } from "./glass-terminal-instance.js";
import { iEe, rre } from "./glass-terminal-service-proxy.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Gv, RDi, ag, zDn } from "./glassContextKeys.js";
import { zfC } from "./gpc.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { RI } from "./workspace.js";
var Odt, kOs;
export { Odt, kOs };
var __wakaru_Hen_initialized = false;
export function Hen() {
if (__wakaru_Hen_initialized) return;
__wakaru_Hen_initialized = true;
"use strict";
E(), iEe(), hC(), Qe(), aw(), vf(), Rn(), It(), NTe(), xd(), Gv(), k_(), qt_(), R2(), Odt = jn("glassKeybindingConsumerService"), kOs = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._workspaceContextService = t, this._terminalService = e, this._keybindingService = n, this._contextKeyService = i, this._routerService = r, this._environmentService = s, this._isDisposed = !1, this._dispatchContextOverrides = new Map, this._dispatchContextServices = new WeakMap, this._workspaceId = this._workspaceContextService.getWorkspace().id, this._agentWorkspaceContextKeyService = this._contextKeyService.createOverlay([
            [
                DA.key,
                !0
            ],
            [
                RDi.key,
                !0
            ],
            [
                zDn.key,
                !1
            ]
        ]), this._environmentService.isGlass && (this._register(this._routerService.registerConsumer(this._workspaceId, this)), this._workspaceId !== RI.id && this._register(this._keybindingService.onDidDispatchKeybinding((o)=>{
            this._routerService.reportEventDispatch(o.commandId, "agent");
        })));
    }
    setContext(t, e) {
        const n = this._dispatchContextOverrides.get(t);
        Object.is(n, e) || (this._dispatchContextOverrides.set(t, e), this._dispatchContextServices = new WeakMap, this._routerService.reportContextKeyChange());
    }
    deleteContext(t) {
        this._dispatchContextOverrides.has(t) && (this._dispatchContextOverrides.delete(t), this._dispatchContextServices = new WeakMap, this._routerService.reportContextKeyChange());
    }
    dispatchEvent({ event: t, target: e, rootDispatchContextOverrides: n }) {
        if (this._isDisposed) return "unhandled";
        const i = this._getDispatchContextService(n), r = this._shouldYieldGlassKeybindingToTerminal(t, i);
        return this._keybindingService.mightDispatch(t) && this._keybindingService.dispatchEventWithContext(t, i.getContext(e)) ? "glass" : r ? "terminal" : "unhandled";
    }
    contextMatchesRules(t, e) {
        return this._isDisposed ? !1 : this._getDispatchContextService(e).contextMatchesRules(t);
    }
    getCommandTitle(t, e) {
        if (this._isDisposed) return t.title;
        const n = this._getDispatchContextService(e);
        for (const i of t.dynamicTitle)if (!i.when || n.contextMatchesRules(i.when)) return i.title;
        return t.title;
    }
    _shouldYieldGlassKeybindingToTerminal(t, e) {
        if (e.getContextKeyValue(ag.key) !== jt.Terminal) return !1;
        const n = this._terminalService.activeInstance;
        return !n?.hasFocus || !zfC(n) ? !1 : n.wouldConsumeKeyboardEvent(t.browserEvent);
    }
    _getDispatchContextService(t) {
        const e = this._dispatchContextServices.get(t);
        if (e !== void 0) return e;
        let n = this._agentWorkspaceContextKeyService;
        return t.size > 0 && (n = n.createOverlay(t)), this._dispatchContextOverrides.size > 0 && (n = n.createOverlay(this._dispatchContextOverrides)), this._dispatchContextServices.set(t, n), n;
    }
    dispose() {
        this._isDisposed = !0, super.dispose();
    }
}, kOs = Re([
    F(0, F_),
    F(1, rre),
    F(2, Mme),
    F(3, vN),
    F(4, GT),
    F(5, ow)
], kOs), bn(Odt, kOs, 0);

}
