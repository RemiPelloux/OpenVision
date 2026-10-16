import { Qe, st } from "./Iwo.js";
import { dp } from "./connect.js";
import { fqe, uot } from "./connectRequestService.js";
import { Ng } from "./index_3.ts";
import { G8a, OKr } from "./index_7.ts";
import { SS } from "./ipa.js";
import { Uh, ip } from "./metricsService.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { AFa } from "./yBp.js";
var V8a, K8a, aki, Rbm, Pbm, Y8a, cb;
export { K8a, Pbm, Rbm, V8a, Y8a, aki, cb };
var __wakaru_sC_initialized = false;
export function sC() {
if (__wakaru_sC_initialized) return;
__wakaru_sC_initialized = true;
"use strict";
E(), Ng(), G8a(), dp(), Qe(), el(), Cm(), uot(), ip(), V8a = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), K8a = (t)=>{
    throw TypeError(t);
}, aki = (t, e)=>(n, i)=>e(n, i, t), Rbm = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && K8a("Object expected");
        var i, r;
        n && (i = e[V8a("asyncDispose")]), i === void 0 && (i = e[V8a("dispose")], n && (r = i)), typeof i != "function" && K8a("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, Pbm = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, Y8a = new FinalizationRegistry((t)=>t.dispose()), cb = class extends st {
    constructor(t, e, n, i, r){
        super(), this.opts = t, this._reactiveStorageService = e, this._aiConnectRequestService = n, this._structuredLogService = i, this._metricsService = r, this._authWaitedOnce = !1, this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
        const s = new WeakRef(this), o = this._aiConnectRequestService.onDidChangeTransport(()=>{
            const a = s.deref();
            if (!a) {
                o.dispose();
                return;
            }
            a.server = void 0;
        });
        this._register(o), Y8a.register(this, o);
    }
    async get(t) {
        this.server === void 0 && this.createServer(t);
        const e = await this.server;
        if (e === void 0) throw new Error("Invariant violated! server did not get created.");
        return e;
    }
    createServer(t) {
        const e = this.createSingleServer(t);
        this.server = e, e.catch(()=>{
            this.server === e && (this.server = void 0);
        });
    }
    async createSingleServer(t) {
        const e = this.opts.service.typeName;
        if (this.opts.waitForAuth !== !1 && !this._authWaitedOnce) {
            let l;
            if (t === void 0) l = await this._aiConnectRequestService.waitForAuthReady();
            else {
                var i = [];
                try {
                    const c = Rbm(i, SS(t.withName("backendClient.waitForAuthReady")));
                    c.span.setAttribute("service", e), l = await this._aiConnectRequestService.waitForAuthReady(), c.span.setAttribute("isReady", l.isReady), c.span.setAttribute("hasToken", l.hasToken), c.span.setAttribute("waitedMs", l.waitedMs ?? 0), c.span.setAttribute("raceConditionPrevented", l.raceConditionPrevented ?? !1);
                } catch (c) {
                    var r = c, s = !0;
                } finally{
                    Pbm(i, r, s);
                }
            }
            this._authWaitedOnce = !0, this._metricsService.distribution({
                stat: "backendClient.authReadyWaitMs",
                value: l.waitedMs ?? 0,
                tags: {
                    service: e,
                    isReady: l.isReady ? "true" : "false",
                    hasToken: l.hasToken ? "true" : "false",
                    raceConditionPrevented: l.raceConditionPrevented ? "true" : "false"
                }
            }), l.raceConditionPrevented && this._structuredLogService.info("auth", "BackendClient waited for auth before creating server", {
                subkey: "backend_client_auth_wait",
                service: e,
                waitedMs: String(l.waitedMs ?? 0),
                hasToken: String(l.hasToken)
            }), l.isReady || this._structuredLogService.warn("auth", "BackendClient proceeding without auth ready (timeout or logged out)", {
                subkey: "backend_client_no_auth",
                service: e,
                waitedMs: String(l.waitedMs ?? 0)
            });
        }
        const o = await this._aiConnectRequestService.transport();
        let a = o;
        if (this.opts.headerInjector) {
            const l = this.opts.headerInjector;
            a = {
                unary: async (c, u, d, h, p, g, f)=>{
                    const _ = new Headers(p);
                    for (const [b, y] of Object.entries(await l(f?.get(OKr))))_.set(b, y);
                    return o.unary(c, u, d, h, _, g, f);
                },
                stream: async (c, u, d, h, p, g, f)=>{
                    const _ = new Headers(p);
                    for (const [b, y] of Object.entries(await l(f?.get(OKr))))_.set(b, y);
                    return o.stream(c, u, d, h, Object.fromEntries(_), g, f);
                }
            };
        }
        return AFa(this.opts.service, a);
    }
}, cb = Re([
    aki(1, sa),
    aki(2, fqe),
    aki(3, wh),
    aki(4, Uh)
], cb);

}
