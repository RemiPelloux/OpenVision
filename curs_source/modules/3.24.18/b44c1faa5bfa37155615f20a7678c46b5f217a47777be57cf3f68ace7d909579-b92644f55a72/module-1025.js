"use strict";
require.d(exports, {
    B9: ()=>a,
    H8: ()=>c,
    ZC: ()=>u
});
var n = require("./module-65588.js"), s = require("./module-92801.js"), o = require("./module-84959.js");
function i(e, t) {
    return void 0 === e || void 0 === t ? e === t : e.authId === t.authId && e.backendUrl === t.backendUrl;
}
function a(e, t) {
    return i(e, t);
}
function c() {
    return new s.T("Private inference account or backend changed", o.C.Canceled);
}
function l() {
    return c();
}
class u {
    constructor(e, t){
        this.host = e, this.client = t, this.identityController = new AbortController, this.listeners = new Set, this.disposed = !1, this.identity = this.readIdentity(), this.subscriptions = [
            e.onDidChangeCursorAuthToken(()=>this.updateIdentity()),
            e.onDidChangeCursorCreds(()=>this.updateIdentity())
        ];
    }
    async getIdentity() {
        return this.updateIdentity(), this.identity;
    }
    onDidChangeIdentity(e) {
        return this.disposed || this.listeners.add(e), {
            dispose: ()=>this.listeners.delete(e)
        };
    }
    async admitRun(e, t, r, { headers: n } = {}) {
        return r?.throwIfAborted(), await this.call(e, void 0, (e)=>this.client.admitRun(t, void 0 === n ? e : {
                ...e,
                headers: n
            }), {
            abortInFlight: !1,
            fenceAfterResponse: !1
        });
    }
    reportUsage(e, t, r) {
        return this.call(e, r, (e)=>this.client.reportUsage(t, e));
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = !0, this.identity = void 0, this.identityController.abort(l());
            for (const e of this.subscriptions)e.dispose();
            this.listeners.clear();
        }
    }
    readIdentity() {
        const e = function(e) {
            if (void 0 !== e) try {
                const { sub: t } = (0, n.decodeJwt)(e);
                return "string" == typeof t && "" !== t.trim() ? t : void 0;
            } catch  {
                return;
            }
        }(this.host.getCursorAuthToken()), t = function(e) {
            if (void 0 !== e) try {
                const t = new URL(e);
                if ("https:" !== t.protocol && "http:" !== t.protocol || "" !== t.username || "" !== t.password || "" !== t.search || "" !== t.hash) return;
                return `${t.origin}${t.pathname.replace(/\/+$/, "")}`;
            } catch  {
                return;
            }
        }(this.host.getCursorCreds()?.backendUrl);
        return void 0 === e || void 0 === t ? void 0 : Object.freeze({
            authId: e,
            backendUrl: t
        });
    }
    updateIdentity() {
        if (this.disposed) return;
        const e = this.readIdentity();
        if (i(this.identity, e)) return;
        this.identity = e;
        const t = this.identityController;
        this.identityController = new AbortController, t.abort(l());
        for (const e of this.listeners)e();
    }
    assertCurrent(e) {
        if (this.updateIdentity(), this.disposed || !i(this.identity, e)) throw l();
    }
    async call(e, t, r, { abortInFlight: n = !0, fenceAfterResponse: s = !0 } = {}) {
        const o = {
            ...e
        };
        this.assertCurrent(o);
        const i = void 0 === t ? this.identityController.signal : AbortSignal.any([
            t,
            this.identityController.signal
        ]);
        i.throwIfAborted();
        const a = await r(n ? {
            signal: i
        } : {});
        return s && (this.assertCurrent(o), i.throwIfAborted()), a;
    }
}
