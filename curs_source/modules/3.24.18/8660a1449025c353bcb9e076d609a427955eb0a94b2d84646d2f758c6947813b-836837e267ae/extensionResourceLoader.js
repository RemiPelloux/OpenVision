import { Di, Fa, Qe, r6t, st, th } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Clt, YMg } from "./Ycg.js";
import { sIt } from "./extensionGalleryManifest.js";
import { qqt, zts } from "./gYa.js";
import { It } from "./instantiation.js";
import { Ki, MOe } from "./network.js";
import { XMg } from "./serviceMachineId.js";
import { uV } from "./telemetryUtils.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
var ZMg, CVe, QMg;
export { CVe, QMg, ZMg };
var __wakaru_oIt_initialized = false;
export function oIt() {
if (__wakaru_oIt_initialized) return;
__wakaru_oIt_initialized = true;
"use strict";
E(), Di(), Fa(), fn(), It(), XMg(), uV(), Ki(), sIt(), Qe(), ZMg = "/web-extension-resource/", CVe = jn("extensionResourceLoaderService"), QMg = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this._fileService = t, this._storageService = e, this._productService = n, this._environmentService = i, this._configurationService = r, this._extensionGalleryManifestService = s, this._logService = o, this._initPromise = this._init();
    }
    async _init() {
        try {
            const t = await this._extensionGalleryManifestService.getExtensionGalleryManifest();
            this.resolve(t), this._register(this._extensionGalleryManifestService.onDidChangeExtensionGalleryManifest(()=>this.resolve(t)));
        } catch (t) {
            this._logService.error(t);
        }
    }
    resolve(t) {
        this._extensionGalleryResourceUrlTemplate = t ? Clt(t, "ExtensionResourceUriTemplate") : void 0, this._extensionGalleryAuthority = this._extensionGalleryResourceUrlTemplate ? this._getExtensionGalleryAuthority(rt.parse(this._extensionGalleryResourceUrlTemplate)) : void 0;
    }
    async supportsExtensionGalleryResources() {
        return await this._initPromise, this._extensionGalleryResourceUrlTemplate !== void 0;
    }
    async getExtensionGalleryResourceURL({ publisher: t, name: e, version: n, targetPlatform: i }, r) {
        if (await this._initPromise, this._extensionGalleryResourceUrlTemplate) {
            const s = rt.parse(r6t(this._extensionGalleryResourceUrlTemplate, {
                publisher: t,
                name: e,
                version: i !== void 0 && i !== "undefined" && i !== "unknown" && i !== "universal" ? `${n}+${i}` : n,
                path: "extension"
            }));
            return this._isWebExtensionResourceEndPoint(s) ? s.with({
                scheme: MOe.getPreferredWebSchema()
            }) : s;
        }
    }
    async isExtensionGalleryResource(t) {
        return await this._initPromise, !!this._extensionGalleryAuthority && this._extensionGalleryAuthority === this._getExtensionGalleryAuthority(t);
    }
    async getExtensionGalleryRequestHeaders() {
        const t = {
            "X-Client-Name": `${this._productService.applicationName}${th ? "-web" : ""}`,
            "X-Client-Version": this._productService.version
        };
        return qqt(this._productService, this._environmentService) && zts(this._configurationService) === 3 && (t["X-Machine-Id"] = await this._getServiceMachineId()), this._productService.commit && (t["X-Client-Commit"] = this._productService.commit), t;
    }
    _getServiceMachineId() {
        return this._serviceMachineIdPromise || (this._serviceMachineIdPromise = YMg(this._environmentService, this._fileService, this._storageService)), this._serviceMachineIdPromise;
    }
    _getExtensionGalleryAuthority(t) {
        if (this._isWebExtensionResourceEndPoint(t)) return t.authority;
        const e = t.authority.indexOf(".");
        return e !== -1 ? t.authority.substring(e + 1) : void 0;
    }
    _isWebExtensionResourceEndPoint(t) {
        const e = t.path, n = MOe.getServerRootPath();
        return e.startsWith(n) && e.startsWith(ZMg, n.length);
    }
};

}
