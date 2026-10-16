import { Ie, Mt } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { Xl, wT } from "./encryptionService.js";
import { Ye, qe } from "./environmentMainService.js";
import { O, se } from "./event.js";
import { Qa } from "./hash.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Xa, Z, te } from "./log.js";
import { Cn, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Wn, vt } from "./uuid.js";
import { ct, pt } from "./windows.js";
import { app as vWe } from "electron";
var zk, Yk;
export { Yk, zk };
var __wakaru_d7_initialized = false;
export function d7() {
if (__wakaru_d7_initialized) return;
__wakaru_d7_initialized = true;
"use strict";
h(), Mt(), se(), Qa(), j(), ye(), Wn(), at(), wT(), Ye(), ne(), te(), or(), pt(), zk = Q("proxyAuthService"), Yk = class extends J {
    constructor(e, t, n, r, s, i){
        super(), this.logService = e, this.windowsMainService = t, this.encryptionMainService = n, this.applicationStorageMainService = r, this.configurationService = s, this.environmentMainService = i, this.PROXY_CREDENTIALS_SERVICE_KEY = "proxy-credentials://", this.pendingProxyResolves = new Map, this.currentDialog = void 0, this.cancelledAuthInfoHashes = new Set, this.sessionCredentials = new Map, this.registerListeners();
    }
    registerListeners() {
        const e = O.fromNodeEventEmitter(vWe, "login", (t, n, r, s, i)=>({
                event: t,
                authInfo: {
                    ...s,
                    attempt: r.firstAuthAttempt ? 1 : 2
                },
                callback: i
            }));
        this._register(e(this.onLogin, this));
    }
    async lookupAuthorization(e) {
        return this.onLogin({
            authInfo: e
        });
    }
    async onLogin({ event: e, authInfo: t, callback: n }) {
        if (!t.isProxy) return;
        e?.preventDefault();
        const r = String(Xa({
            scheme: t.scheme,
            host: t.host,
            port: t.port
        }));
        let s, i = this.pendingProxyResolves.get(r);
        if (i) this.logService.trace("auth#onLogin (proxy) - pending proxy handling found"), s = await i;
        else {
            this.logService.trace("auth#onLogin (proxy) - no pending proxy handling found, starting new"), i = this.resolveProxyCredentials(t, r), this.pendingProxyResolves.set(r, i);
            try {
                s = await i;
            } finally{
                this.pendingProxyResolves.delete(r);
            }
        }
        return n?.(s?.username, s?.password), s;
    }
    async resolveProxyCredentials(e, t) {
        this.logService.trace("auth#resolveProxyCredentials (proxy) - enter");
        try {
            const n = await this.doResolveProxyCredentials(e, t);
            if (n) return this.logService.trace("auth#resolveProxyCredentials (proxy) - got credentials"), n;
            this.logService.trace("auth#resolveProxyCredentials (proxy) - did not get credentials");
        } finally{
            this.logService.trace("auth#resolveProxyCredentials (proxy) - exit");
        }
    }
    async doResolveProxyCredentials(e, t) {
        if (this.logService.trace("auth#doResolveProxyCredentials - enter", e), this.environmentMainService.extensionTestsLocationURI) {
            try {
                const l = Buffer.from(e.realm, "base64").toString("utf-8");
                if (l.startsWith("{")) return JSON.parse(l);
            } catch  {}
            return;
        }
        const n = (this.configurationService.getValue("http.proxy") || "").trim() || (process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY || "").trim() || void 0;
        if (n?.indexOf("@") !== -1) {
            const l = x.parse(n), d = l.authority.indexOf("@");
            if (d !== -1) {
                if (e.attempt > 1) {
                    this.logService.trace("auth#doResolveProxyCredentials (proxy) - exit - ignoring previously used config/envvar credentials");
                    return;
                }
                this.logService.trace("auth#doResolveProxyCredentials (proxy) - exit - found config/envvar credentials to use");
                const u = l.authority.substring(0, d), m = u.indexOf(":");
                return m !== -1 ? {
                    username: u.substring(0, m),
                    password: u.substring(m + 1)
                } : {
                    username: u,
                    password: ""
                };
            }
        }
        const r = e.attempt === 1 && this.sessionCredentials.get(t);
        if (r) {
            this.logService.trace("auth#doResolveProxyCredentials (proxy) - exit - found session credentials to use");
            const { username: l, password: d } = r;
            return {
                username: l,
                password: d
            };
        }
        let s, i;
        try {
            const l = this.applicationStorageMainService.get(this.PROXY_CREDENTIALS_SERVICE_KEY + t, -1);
            if (l) {
                const d = JSON.parse(await this.encryptionMainService.decrypt(l));
                s = d.username, i = d.password;
            }
        } catch (l) {
            this.logService.error(l);
        }
        if (e.attempt === 1 && typeof s == "string" && typeof i == "string") return this.logService.trace("auth#doResolveProxyCredentials (proxy) - exit - found stored credentials to use"), this.sessionCredentials.set(t, {
            username: s,
            password: i
        }), {
            username: s,
            password: i
        };
        const a = this.currentDialog, o = this.currentDialog = (async ()=>{
            await a;
            const l = await this.showProxyCredentialsDialog(e, t, s, i);
            return this.currentDialog === o && (this.currentDialog = void 0), l;
        })();
        return o;
    }
    async showProxyCredentialsDialog(e, t, n, r) {
        if (this.cancelledAuthInfoHashes.has(t)) {
            this.logService.trace("auth#doResolveProxyCredentials (proxy) - exit - login dialog was cancelled before, not showing again");
            return;
        }
        const s = this.windowsMainService.getFocusedWindow() || this.windowsMainService.getLastActiveWindow();
        if (!s) {
            this.logService.trace("auth#doResolveProxyCredentials (proxy) - exit - no opened window found to show dialog in");
            return;
        }
        this.logService.trace(`auth#doResolveProxyCredentials (proxy) - asking window ${s.id} to handle proxy login`);
        const i = this.sessionCredentials.get(t), a = {
            authInfo: e,
            username: i?.username ?? n,
            password: i?.password ?? r,
            replyChannel: `vscode:proxyAuthResponse:${vt()}`
        };
        s.sendWhenReady("vscode:openProxyAuthenticationDialog", Ie.None, a);
        const o = await new Promise((l)=>{
            const d = async (u, m, f)=>{
                if (m === a.replyChannel) if (this.logService.trace(`auth#doResolveProxyCredentials - exit - received credentials from window ${s.id}`), s.win?.webContents.off("ipc-message", d), f) {
                    const v = {
                        username: f.username,
                        password: f.password
                    };
                    try {
                        if (f.remember) {
                            const T = await this.encryptionMainService.encrypt(JSON.stringify(v));
                            this.applicationStorageMainService.store(this.PROXY_CREDENTIALS_SERVICE_KEY + t, T, -1, 1);
                        } else this.applicationStorageMainService.remove(this.PROXY_CREDENTIALS_SERVICE_KEY + t, -1);
                    } catch (T) {
                        this.logService.error(T);
                    }
                    l({
                        username: v.username,
                        password: v.password
                    });
                } else this.cancelledAuthInfoHashes.add(t), l(void 0);
            };
            s.win?.webContents.on("ipc-message", d);
        });
        return this.sessionCredentials.set(t, o), o;
    }
}, Yk = B([
    w(0, Z),
    w(1, ct),
    w(2, Xl),
    w(3, Cn),
    w(4, ot),
    w(5, qe)
], Yk);

}
