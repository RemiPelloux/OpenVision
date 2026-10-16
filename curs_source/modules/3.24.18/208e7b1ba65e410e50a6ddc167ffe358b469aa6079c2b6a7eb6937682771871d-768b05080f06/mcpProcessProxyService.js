import { at, ot } from "./configuration.js";
import { B } from "./ipc.js";
import { Gi, _s } from "./nativeHostMainService.js";
import { fs, li } from "./request_2.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
function TG(e) {
    return Array.isArray(e) ? e : typeof e == "string" ? e.split(",").map((t)=>t.trim()).filter((t)=>t.length > 0) : [];
}
function FYe(e) {
    if (e === void 0) return;
    const t = Number(e);
    return Number.isFinite(t) ? t : void 0;
}
function WYe(e) {
    return e === "off" || e === "on" || e === "fallback" || e === "override" ? e : "override";
}
function sl(e, t, n) {
    const r = e.inspect(t);
    return r.userLocalValue ?? r.defaultValue ?? n;
}
var Jw;
export { FYe, Jw, TG, WYe, sl };
var __wakaru_BYe_initialized = false;
export function BYe() {
if (__wakaru_BYe_initialized) return;
__wakaru_BYe_initialized = true;
"use strict";
h(), at(), Gi(), fs(), Jw = class {
    constructor(e, t, n){
        this.nativeHostMainService = e, this.requestService = t, this.configurationService = n;
    }
    resolveProxy(e) {
        return this.nativeHostMainService.resolveProxy(FYe(e.windowId), e.url);
    }
    lookupAuthorization(e) {
        return this.nativeHostMainService.lookupAuthorization(void 0, e);
    }
    lookupKerberosAuthorization(e) {
        return this.requestService.lookupKerberosAuthorization(e);
    }
    loadCertificates() {
        return this.requestService.loadCertificates();
    }
    async getProxyConfig() {
        return {
            proxyUrl: sl(this.configurationService, "http.proxy", void 0),
            proxySupport: WYe(sl(this.configurationService, "http.proxySupport", "override")),
            noProxy: TG(sl(this.configurationService, "http.noProxy", [])),
            useHostProxy: sl(this.configurationService, "http.useLocalProxyConfiguration", !0),
            fetchAdditionalSupport: sl(this.configurationService, "http.fetchAdditionalSupport", !0),
            systemCertificates: sl(this.configurationService, "http.systemCertificates", !0),
            experimentalSystemCertificatesV2: sl(this.configurationService, "http.experimental.systemCertificatesV2", !1)
        };
    }
}, Jw = B([
    w(0, _s),
    w(1, li),
    w(2, ot)
], Jw);

}
