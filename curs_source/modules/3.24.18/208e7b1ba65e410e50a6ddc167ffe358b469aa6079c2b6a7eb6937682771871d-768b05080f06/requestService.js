import { Qn, le } from "./async.js";
import { ae, it } from "./buffer.js";
import { at, ot } from "./configuration.js";
import { Fr, ii } from "./environment.js";
import { Ve, kt } from "./errors.js";
import { I5 } from "./fileService.js";
import { Uv } from "./files.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { wlt } from "./proxy.js";
import { SG, We, fs } from "./request_2.js";
import { ch, oh } from "./shellEnv.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import * as Elt from "tls";
import { parse as S9e } from "url";
import { createGunzip as blt } from "zlib";
import { parse as y9e } from "url";
function x4(e) {
    return e === !0 || e === !1;
}
function txe(e) {
    return I5(e, {
        data: (t)=>typeof t == "string" ? ae.fromString(t) : ae.wrap(t)
    }, (t)=>ae.concat(t));
}
function Slt(e, t) {
    return e.protocol === "http:" ? t.HTTP_PROXY || t.http_proxy || null : e.protocol === "https:" && (t.HTTPS_PROXY || t.https_proxy || t.HTTP_PROXY || t.http_proxy) || null;
}
async function ylt(e, t, n = {}) {
    const r = S9e(e), s = n.proxyUrl || Slt(r, t);
    if (!s) return null;
    const i = S9e(s);
    if (!/^https?:$/.test(i.protocol || "")) return null;
    const a = {
        host: i.hostname || "",
        port: (i.port ? +i.port : 0) || (i.protocol === "https" ? 443 : 80),
        auth: i.auth,
        rejectUnauthorized: x4(n.strictSSL) ? n.strictSSL : !0
    };
    if (r.protocol === "http:") {
        const { default: o } = await import("http-proxy-agent");
        return new o.HttpProxyAgent(s, a);
    } else {
        const { default: o } = await import("https-proxy-agent");
        return new o.HttpsProxyAgent(s, a);
    }
}
async function Rlt(e, t, n, r) {
    const s = await import("kerberos"), i = s.default || s, a = new URL(e), o = t || (process.platform === "win32" ? `HTTP/${a.hostname}` : `HTTP@${a.hostname}`);
    return n.debug(`${r} Kerberos authentication lookup`, `proxyURL:${a}`, `spn:${o}`), (await i.initializeClient(o)).step("");
}
async function Clt(e) {
    return (y9e(e.url).protocol === "https:" ? await import("https") : await import("http")).request;
}
async function nx(e, t) {
    return Qn.withAsyncBody(async (n, r)=>{
        const s = y9e(e.url), i = e.getRawRequest ? e.getRawRequest(e) : await Clt(e), a = {
            hostname: s.hostname,
            port: s.port ? parseInt(s.port) : s.protocol === "https:" ? 443 : 80,
            protocol: s.protocol,
            path: s.path,
            method: e.type || "GET",
            headers: e.headers,
            agent: e.agent,
            rejectUnauthorized: x4(e.strictSSL) ? e.strictSSL : !0
        };
        e.user && e.password && (a.auth = e.user + ":" + e.password), e.disableCache && (a.cache = "no-store"), e.isChromiumNetwork && e.followRedirects === 0 && (a.redirect = "error");
        const o = i(a, (l)=>{
            const d = Uv(e.followRedirects) ? e.followRedirects : 3;
            if (l.statusCode && l.statusCode >= 300 && l.statusCode < 400 && d > 0 && l.headers.location) l.statusCode === 303 ? nx({
                ...e,
                url: l.headers.location,
                type: "GET",
                followRedirects: d - 1
            }, t).then(n, r) : nx({
                ...e,
                url: l.headers.location,
                followRedirects: d - 1
            }, t).then(n, r);
            else {
                let u = l;
                if (!e.isChromiumNetwork && l.headers["content-encoding"] === "gzip") {
                    const m = blt();
                    l.on("error", (f)=>m.destroy(f)), u = l.pipe(m);
                }
                n({
                    res: l,
                    stream: txe(u)
                });
            }
        });
        if (o.on("error", r), e.timeout) if (e.isChromiumNetwork) {
            const l = setTimeout(()=>{
                o.abort(), r(new Error(`Request timeout after ${e.timeout}ms`));
            }, e.timeout);
            o.on("response", ()=>clearTimeout(l)), o.on("error", ()=>clearTimeout(l)), o.on("abort", ()=>clearTimeout(l));
        } else o.setTimeout(e.timeout);
        e.isChromiumNetwork && o.removeHeader("Content-Length"), e.data && typeof e.data == "string" && o.write(e.data), o.end(), t.onCancellationRequested(()=>{
            o.abort(), r(new kt);
        });
    });
}
var vb;
export { Clt, Rlt, Slt, nx, txe, vb, x4, ylt };
var __wakaru_Ilt_initialized = false;
export function Ilt() {
if (__wakaru_Ilt_initialized) return;
__wakaru_Ilt_initialized = true;
"use strict";
h(), le(), it(), Ve(), Ze(), at(), Fr(), ch(), te(), fs(), wlt(), vb = class extends SG {
    constructor(e, t, n, r){
        super(r), this.machine = e, this.configurationService = t, this.environmentService = n, this.configure(), this._register(t.onDidChangeConfiguration((s)=>{
            s.affectsConfiguration("http") && this.configure();
        }));
    }
    configure() {
        this.proxyUrl = this.getConfigValue("http.proxy"), this.strictSSL = !!this.getConfigValue("http.proxyStrictSSL"), this.authorization = this.getConfigValue("http.proxyAuthorization");
    }
    async request(e, t) {
        const { proxyUrl: n, strictSSL: r } = this;
        let s;
        try {
            s = await oh(this.configurationService, this.logService, this.environmentService.args, process.env);
        } catch (o) {
            this.shellEnvErrorLogged || (this.shellEnvErrorLogged = !0, this.logService.error("resolving shell environment failed", We(o)));
        }
        const i = {
            ...process.env,
            ...s
        }, a = e.agent ? e.agent : await ylt(e.url || "", i, {
            proxyUrl: n,
            strictSSL: r
        });
        return e.agent = a, e.strictSSL = r, this.authorization && (e.headers = {
            ...e.headers || {},
            "Proxy-Authorization": this.authorization
        }), this.logAndRequest(e, ()=>nx(e, t));
    }
    async resolveProxy(e) {}
    async lookupAuthorization(e) {}
    async lookupKerberosAuthorization(e) {
        try {
            const t = this.getConfigValue("http.proxyKerberosServicePrincipal");
            return "Negotiate " + await Rlt(e, t, this.logService, "RequestService#lookupKerberosAuthorization");
        } catch (t) {
            this.logService.debug("RequestService#lookupKerberosAuthorization Kerberos authentication failed", t);
            return;
        }
    }
    loadCertificates() {
        return this.certificatesPromise ??= this.doLoadCertificates(), this.certificatesPromise;
    }
    async doLoadCertificates() {
        const e = await import("@vscode/proxy-agent"), t = await e.loadSystemCertificates({
            log: this.logService,
            loadSystemCertificatesFromNode: ()=>!1
        });
        if (typeof Elt.getCACertificates != "function") return t;
        try {
            const n = await e.loadSystemCertificates({
                log: this.logService,
                loadSystemCertificatesFromNode: ()=>!0
            });
            return Array.from(new Set([
                ...t,
                ...n
            ]));
        } catch (n) {
            return this.logService.warn(`RequestService#loadCertificates failed to read Node system certificates: ${We(n)}`), t;
        }
    }
    getConfigValue(e) {
        if (this.machine === "remote") return this.configurationService.getValue(e);
        const t = this.configurationService.inspect(e);
        return t.userLocalValue || t.defaultValue;
    }
}, vb = B([
    w(1, ot),
    w(2, ii),
    w(3, Z)
], vb);

}
