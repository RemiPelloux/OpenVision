import { CC, Di, Qe, dP, st, th } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { bo } from "./arrays.js";
import { or, yi } from "./configuration.js";
import { iF } from "./extensionManagementUtil.js";
import { Rn } from "./extensions.js";
import { cF, uI } from "./extensionsRegistry.js";
import { NMp, O4, Pw } from "./extensions_3.js";
import { dV } from "./gYa.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { fc, hu } from "./productService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { Yqt, jx } from "./workspaceTrust.js";
import { C_l, hRi } from "./workspaceTrust_2.js";
var pye, qhs;
export { pye, qhs };
var __wakaru__Te_initialized = false;
export function _Te() {
if (__wakaru__Te_initialized) return;
__wakaru__Te_initialized = true;
"use strict";
E(), or(), Pw(), cF(), iF(), bo(), hu(), It(), Rn(), Qe(), hRi(), To(), jx(), Ji(), Di(), pye = jn("extensionManifestPropertiesService"), qhs = class extends st {
    constructor(t, e, n, i){
        super(), this.productService = t, this.configurationService = e, this.workspaceTrustEnablementService = n, this.logService = i, this._extensionPointExtensionKindsMap = null, this._productExtensionKindsMap = null, this._configuredExtensionKindsMap = null, this._productVirtualWorkspaceSupportMap = null, this._configuredVirtualWorkspaceSupportMap = null, this._configuredExtensionWorkspaceTrustRequestMap = new O4;
        const r = e.inspect(C_l).userValue || {};
        for (const s of Object.keys(r))this._configuredExtensionWorkspaceTrustRequestMap.set(s, r[s]);
        if (this._productExtensionWorkspaceTrustRequestMap = new Map, t.extensionUntrustedWorkspaceSupport) for (const s of Object.keys(t.extensionUntrustedWorkspaceSupport))this._productExtensionWorkspaceTrustRequestMap.set(s, t.extensionUntrustedWorkspaceSupport[s]);
    }
    prefersExecuteOnUI(t) {
        const e = this.getExtensionKind(t);
        return e.length > 0 && e[0] === "ui";
    }
    prefersExecuteOnWorkspace(t) {
        const e = this.getExtensionKind(t);
        return e.length > 0 && e[0] === "workspace";
    }
    prefersExecuteOnWeb(t) {
        const e = this.getExtensionKind(t);
        return e.length > 0 && e[0] === "web";
    }
    canExecuteOnUI(t) {
        return this.getExtensionKind(t).some((n)=>n === "ui");
    }
    canExecuteOnWorkspace(t) {
        return this.getExtensionKind(t).some((n)=>n === "workspace");
    }
    canExecuteOnWeb(t) {
        return this.getExtensionKind(t).some((n)=>n === "web");
    }
    getExtensionKind(t) {
        const e = this.deduceExtensionKind(t), n = this.getConfiguredExtensionKind(t);
        if (n && n.length > 0) {
            const i = [];
            for (const r of n)r !== "-web" && i.push(r);
            return n.includes("-web") && !i.length && (i.push("ui"), i.push("workspace")), th && !n.includes("-web") && !n.includes("web") && e.includes("web") && i.push("web"), i;
        }
        return e;
    }
    getUserConfiguredExtensionKind(t) {
        if (this._configuredExtensionKindsMap === null) {
            const n = new O4, i = this.configurationService.getValue("remote.extensionKind") || {};
            for (const r of Object.keys(i))n.set(r, i[r]);
            this._configuredExtensionKindsMap = n;
        }
        const e = this._configuredExtensionKindsMap.get(t.id);
        return e ? this.toArray(e) : void 0;
    }
    getExtensionUntrustedWorkspaceSupportType(t) {
        if (!this.workspaceTrustEnablementService.isWorkspaceTrustEnabled() || !t.main) return !0;
        const e = this.getConfiguredExtensionWorkspaceTrustRequest(t), n = this.getProductExtensionWorkspaceTrustRequest(t);
        return e !== void 0 ? e : n?.override !== void 0 ? n.override : t.capabilities?.untrustedWorkspaces?.supported !== void 0 ? t.capabilities.untrustedWorkspaces.supported : n?.default !== void 0 ? n.default : !1;
    }
    getExtensionVirtualWorkspaceSupportType(t) {
        const e = this.getConfiguredVirtualWorkspaceSupport(t);
        if (e !== void 0) return e;
        const n = this.getProductVirtualWorkspaceSupport(t);
        if (n?.override !== void 0) return n.override;
        const i = t.capabilities?.virtualWorkspaces;
        if (dP(i)) return i;
        if (i) {
            const r = i.supported;
            if (dP(r) || r === "limited") return r;
        }
        return n?.default !== void 0 ? n.default : !0;
    }
    deduceExtensionKind(t) {
        if (t.main) return t.browser ? th ? [
            "workspace",
            "web"
        ] : [
            "workspace"
        ] : [
            "workspace"
        ];
        if (t.browser) return [
            "web"
        ];
        let e = [
            ...NMp
        ];
        if ((CC(t.extensionPack) || CC(t.extensionDependencies)) && (e = th ? [
            "workspace",
            "web"
        ] : [
            "workspace"
        ]), t.contributes) for (const n of Object.keys(t.contributes)){
            const i = this.getSupportedExtensionKindsForExtensionPoint(n);
            i.length && (e = e.filter((r)=>i.includes(r)));
        }
        return e.length || this.logService.warn("Cannot deduce extensionKind for extension", dV(t.publisher, t.name)), e;
    }
    getSupportedExtensionKindsForExtensionPoint(t) {
        if (this._extensionPointExtensionKindsMap === null) {
            const n = new Map;
            uI.getExtensionPoints().forEach((i)=>n.set(i.name, i.defaultExtensionKind || [])), this._extensionPointExtensionKindsMap = n;
        }
        let e = this._extensionPointExtensionKindsMap.get(t);
        return e || (e = this.productService.extensionPointExtensionKind ? this.productService.extensionPointExtensionKind[t] : void 0, e) ? e : th ? [
            "workspace",
            "web"
        ] : [
            "workspace"
        ];
    }
    getConfiguredExtensionKind(t) {
        const e = {
            id: dV(t.publisher, t.name)
        };
        let n = this.getUserConfiguredExtensionKind(e);
        return typeof n < "u" ? this.toArray(n) : (n = this.getProductExtensionKind(t), typeof n < "u" ? n : (n = t.extensionKind, typeof n < "u" ? (n = this.toArray(n), n.filter((i)=>[
                "ui",
                "workspace"
            ].includes(i))) : null));
    }
    getProductExtensionKind(t) {
        if (this._productExtensionKindsMap === null) {
            const n = new O4;
            if (this.productService.extensionKind) for (const i of Object.keys(this.productService.extensionKind))n.set(i, this.productService.extensionKind[i]);
            this._productExtensionKindsMap = n;
        }
        const e = dV(t.publisher, t.name);
        return this._productExtensionKindsMap.get(e);
    }
    getProductVirtualWorkspaceSupport(t) {
        if (this._productVirtualWorkspaceSupportMap === null) {
            const n = new O4;
            if (this.productService.extensionVirtualWorkspacesSupport) for (const i of Object.keys(this.productService.extensionVirtualWorkspacesSupport))n.set(i, this.productService.extensionVirtualWorkspacesSupport[i]);
            this._productVirtualWorkspaceSupportMap = n;
        }
        const e = dV(t.publisher, t.name);
        return this._productVirtualWorkspaceSupportMap.get(e);
    }
    getConfiguredVirtualWorkspaceSupport(t) {
        if (this._configuredVirtualWorkspaceSupportMap === null) {
            const n = new O4, i = this.configurationService.getValue("extensions.supportVirtualWorkspaces") || {};
            for (const r of Object.keys(i))i[r] !== void 0 && n.set(r, i[r]);
            this._configuredVirtualWorkspaceSupportMap = n;
        }
        const e = dV(t.publisher, t.name);
        return this._configuredVirtualWorkspaceSupportMap.get(e);
    }
    getConfiguredExtensionWorkspaceTrustRequest(t) {
        const e = dV(t.publisher, t.name), n = this._configuredExtensionWorkspaceTrustRequestMap.get(e);
        if (n && (n.version === void 0 || n.version === t.version)) return n.supported;
    }
    getProductExtensionWorkspaceTrustRequest(t) {
        const e = dV(t.publisher, t.name);
        return this._productExtensionWorkspaceTrustRequestMap.get(e);
    }
    toArray(t) {
        return Array.isArray(t) ? t : t === "ui" ? [
            "ui",
            "workspace"
        ] : [
            t
        ];
    }
}, qhs = Re([
    F(0, fc),
    F(1, yi),
    F(2, Yqt),
    F(3, Li)
], qhs), bn(pye, qhs, 1);

}
