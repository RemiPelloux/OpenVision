import { Ve } from "./errors.js";
import { Nw, ks } from "./extensionManagement.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { Z, rn, te } from "./log.js";
import { Tt, et } from "./productService.js";
import { We } from "./request_2.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
var fve, xu;
export { fve, xu };
var __wakaru_ont_initialized = false;
export function ont() {
if (__wakaru_ont_initialized) return;
__wakaru_ont_initialized = true;
"use strict";
h(), Ve(), ne(), te(), Tt(), Nw(), fve = Q("IExtensionSignatureVerificationService"), xu = class {
    constructor(e, t){
        this.logService = e, this.productService = t, this.configureRegistryUrl();
    }
    configureRegistryUrl() {
        if (process.env.OVSX_REGISTRY_URL) return;
        const e = this.productService.extensionsGallery?.serviceUrl;
        if (e) try {
            const t = new URL(e), n = t.host, r = xu.SIGNING_REGISTRY_MAP[n];
            if (r) process.env.OVSX_REGISTRY_URL = r;
            else {
                const s = `${t.protocol}//${t.host}`;
                process.env.OVSX_REGISTRY_URL = s;
            }
        } catch (t) {
            this.logService.warn(`Failed to parse gallery URL ${e}: ${We(t)}`);
        }
    }
    getSignModule() {
        return this.moduleLoadingPromise || (this.moduleLoadingPromise = this.resolveSignModule()), this.moduleLoadingPromise;
    }
    async resolveSignModule() {
        return import("node-ovsx-sign");
    }
    mapErrorCode(e) {
        if (!e) return ks.UnknownError;
        switch(e){
            case "PackageIsInvalidZip":
                return ks.PackageIsInvalidZip;
            case "SignatureArchiveIsInvalidZip":
                return ks.SignatureArchiveIsInvalidZip;
            case "SignatureIsMissing":
                return ks.SignatureIsMissing;
            case "SignatureManifestIsMissing":
                return ks.SignatureManifestIsMissing;
            case "SignatureManifestIsInvalid":
                return ks.SignatureManifestIsInvalid;
            case "ExtensionManifestIsInvalid":
                return ks.PackageIsUnreadable;
            case "SignatureIsInvalid":
            case "SignatureIsNotValid":
                return ks.SignatureIsInvalid;
            default:
                return Object.values(ks).includes(e) ? e : (this.logService.warn(`Unknown signature verification error code: ${e}`), ks.UnknownError);
        }
    }
    async verify(e, t, n, r, s) {
        let i;
        try {
            i = await this.getSignModule();
        } catch (d) {
            this.logService.error("Could not load node-ovsx-sign module", We(d));
            return;
        }
        const a = new Date().getTime();
        let o;
        try {
            await i.verify(n, r, this.logService.getLevel() === rn.Trace), o = {
                code: ks.Success,
                didExecute: !0
            };
        } catch (d) {
            const u = d;
            o = {
                code: this.mapErrorCode(u.code),
                didExecute: u.didExecute ?? !1,
                output: u.output ?? u.message ?? We(d)
            };
        }
        const l = new Date().getTime() - a;
        return this.logService.info(`Extension signature verification result for ${e}: ${o.code}. Executed: ${o.didExecute}. Duration: ${l}ms.`), this.logService.trace(`Extension signature verification output for ${e}:
${o.output}`), {
            code: o.code
        };
    }
}, xu.SIGNING_REGISTRY_MAP = {
    "marketplace.cursorapi.com": "https://open-vsx.org",
    "open-vsx.org": "https://open-vsx.org"
}, xu = B([
    w(0, Z),
    w(1, et)
], xu);

}
