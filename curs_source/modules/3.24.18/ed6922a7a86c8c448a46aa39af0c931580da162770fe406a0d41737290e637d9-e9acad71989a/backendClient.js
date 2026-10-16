import { hbv } from "./A3u.js";
import { S_ } from "./De_3.js";
import { Se, we } from "./HVr.js";
import { ie } from "./actions_2.js";
import { hg } from "./connect.js";
import { iPe, oUe } from "./connectRequestService.js";
import { Gp } from "./index_3.ts";
import { NRd, pWi } from "./index_7.ts";
import { Cp, vp } from "./metricsService.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
var Bro, Uro, MLn, YRd, XRd, $ro, db;
export { $ro, Bro, MLn, Uro, XRd, YRd, db };
var __wakaru_nE_initialized = false;
export function nE() {
if (__wakaru_nE_initialized) return;
__wakaru_nE_initialized = true;
"use strict";
x(), Gp(), NRd(), hg(), Se(), Ha(), im(), oUe(), Cp(), Bro = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Uro = (e)=>{
    throw TypeError(e);
}, MLn = (e, t)=>(n, i)=>t(n, i, e), YRd = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && Uro("Object expected");
        var i, r;
        n && (i = t[Bro("asyncDispose")]), i === void 0 && (i = t[Bro("dispose")], n && (r = i)), typeof i != "function" && Uro("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, XRd = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, $ro = new FinalizationRegistry((e)=>e.dispose()), db = class extends we {
    constructor(e, t, n, i, r){
        super(), this.opts = e, this._reactiveStorageService = t, this._aiConnectRequestService = n, this._structuredLogService = i, this._metricsService = r, this._authWaitedOnce = !1, this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
        const s = new WeakRef(this), o = this._aiConnectRequestService.onDidChangeTransport(()=>{
            const a = s.deref();
            if (!a) {
                o.dispose();
                return;
            }
            a.server = void 0;
        });
        this._register(o), $ro.register(this, o);
    }
    async get(e) {
        this.server === void 0 && this.createServer(e);
        const t = await this.server;
        if (t === void 0) throw new Error("Invariant violated! server did not get created.");
        return t;
    }
    createServer(e) {
        const t = this.createSingleServer(e);
        this.server = t, t.catch(()=>{
            this.server === t && (this.server = void 0);
        });
    }
    async createSingleServer(e) {
        const t = this.opts.service.typeName;
        if (this.opts.waitForAuth !== !1 && !this._authWaitedOnce) {
            let c;
            if (e === void 0) c = await this._aiConnectRequestService.waitForAuthReady();
            else {
                var i = [];
                try {
                    const l = YRd(i, S_(e.withName("backendClient.waitForAuthReady")));
                    l.span.setAttribute("service", t), c = await this._aiConnectRequestService.waitForAuthReady(), l.span.setAttribute("isReady", c.isReady), l.span.setAttribute("hasToken", c.hasToken), l.span.setAttribute("waitedMs", c.waitedMs ?? 0), l.span.setAttribute("raceConditionPrevented", c.raceConditionPrevented ?? !1);
                } catch (l) {
                    var r = l, s = !0;
                } finally{
                    XRd(i, r, s);
                }
            }
            this._authWaitedOnce = !0, this._metricsService.distribution({
                stat: "backendClient.authReadyWaitMs",
                value: c.waitedMs ?? 0,
                tags: {
                    service: t,
                    isReady: c.isReady ? "true" : "false",
                    hasToken: c.hasToken ? "true" : "false",
                    raceConditionPrevented: c.raceConditionPrevented ? "true" : "false"
                }
            }), c.raceConditionPrevented && this._structuredLogService.info("auth", "BackendClient waited for auth before creating server", {
                subkey: "backend_client_auth_wait",
                service: t,
                waitedMs: String(c.waitedMs ?? 0),
                hasToken: String(c.hasToken)
            }), c.isReady || this._structuredLogService.warn("auth", "BackendClient proceeding without auth ready (timeout or logged out)", {
                subkey: "backend_client_no_auth",
                service: t,
                waitedMs: String(c.waitedMs ?? 0)
            });
        }
        const o = await this._aiConnectRequestService.transport();
        let a = o;
        if (this.opts.headerInjector) {
            const c = this.opts.headerInjector;
            a = {
                unary: async (l, u, h, p, g, f, v)=>{
                    const b = new Headers(g);
                    for (const [y, T] of Object.entries(await c(v?.get(pWi))))b.set(y, T);
                    return o.unary(l, u, h, p, b, f, v);
                },
                stream: async (l, u, h, p, g, f, v)=>{
                    const b = new Headers(g);
                    for (const [y, T] of Object.entries(await c(v?.get(pWi))))b.set(y, T);
                    return o.stream(l, u, h, p, Object.fromEntries(b), f, v);
                }
            };
        }
        return hbv(this.opts.service, a);
    }
}, db = ie([
    MLn(1, Do),
    MLn(2, iPe),
    MLn(3, Xh),
    MLn(4, vp)
], db);

}
