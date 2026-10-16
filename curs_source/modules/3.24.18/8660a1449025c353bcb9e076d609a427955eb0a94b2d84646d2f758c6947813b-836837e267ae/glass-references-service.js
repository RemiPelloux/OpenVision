import { Gt, Qe, XE, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { qn } from "./async.js";
import { Rn } from "./extensions.js";
import { AXt, Mxt } from "./glass-text-model-service.js";
import { Kwt } from "./goToSymbol.js";
import { It } from "./instantiation.js";
import { $0n, Kbi } from "./ipa.js";
import { Dg, Nd } from "./languageFeatures.js";
import { er, jc } from "./position.js";
import { h_e, iSt } from "./referencesModel.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
var hNl, pNl, mNl, BEf, UEf, JDn, Vys;
export { BEf, JDn, UEf, Vys, hNl, mNl, pNl };
var __wakaru_jDi_initialized = false;
export function jDi() {
if (__wakaru_jDi_initialized) return;
__wakaru_jDi_initialized = true;
"use strict";
E(), AXt(), qn(), Gt(), Qe(), fn(), jc(), Dg(), Kwt(), iSt(), Rn(), It(), hNl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), pNl = (t)=>{
    throw TypeError(t);
}, mNl = (t, e)=>(n, i)=>e(n, i, t), BEf = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && pNl("Object expected");
        var i, r;
        n && (i = e[hNl("asyncDispose")]), i === void 0 && (i = e[hNl("dispose")], n && (r = i)), typeof i != "function" && pNl("Object not disposable"), r && (i = function() {
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
}, UEf = (t, e, n)=>{
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
}, JDn = jn("glassReferencesService"), Vys = class extends st {
    constructor(t, e){
        super(), this._languageFeaturesService = t, this._textModelService = e, this._requestId = 0, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event;
    }
    get session() {
        return this._session;
    }
    findReferences(t) {
        this._run({
            kind: "references",
            ...t
        });
    }
    findImplementations(t) {
        this._run({
            kind: "implementations",
            ...t
        });
    }
    refresh() {
        const t = this._session?.query;
        t && this._run({
            kind: t.kind,
            uriString: t.uriString,
            position: t.position,
            word: t.word
        });
    }
    clear() {
        ++this._requestId, this._cancelInflight(), this._disposeCurrentModel(), this._session !== void 0 && (this._session = void 0, this._onDidChange.fire());
    }
    _cancelInflight() {
        this._inflight?.cancel(), this._inflight = void 0;
    }
    _disposeCurrentModel() {
        this._session?.state === "loaded" && this._session.model.dispose();
    }
    async _run(t) {
        this._cancelInflight(), this._disposeCurrentModel();
        const e = ++this._requestId, n = {
            kind: t.kind,
            uriString: t.uriString,
            position: {
                lineNumber: t.position.lineNumber,
                column: t.position.column
            },
            word: t.word
        };
        this._session = {
            state: "loading",
            query: n
        }, this._onDidChange.fire();
        let i;
        try {
            i = await this._textModelService.createModelReference(rt.parse(t.uriString));
        } catch  {
            i = void 0;
        }
        if (this._requestId !== e) {
            i?.dispose();
            return;
        }
        if (!i) {
            this._session = {
                state: "error",
                query: n,
                error: "Could not open the file for the selected symbol."
            }, this._onDidChange.fire();
            return;
        }
        let r, s;
        {
            var o = [];
            try {
                const u = BEf(o, i).object.textEditorModel, d = er.lift(t.position), h = XE(async (p)=>{
                    const g = t.kind === "implementations" ? await Kbi(this._languageFeaturesService.implementationProvider, u, d, !1, p) : await $0n(this._languageFeaturesService.referenceProvider, u, d, !0, !1, p);
                    if (!p.isCancellationRequested) return new h_e(g, t.kind === "implementations" ? "Implementations" : "References");
                });
                this._inflight = h;
                try {
                    r = await h;
                } catch (p) {
                    this._requestId === e && (s = p instanceof Error ? p.message : "Failed to find references.");
                }
            } catch (c) {
                var a = c, l = !0;
            } finally{
                UEf(o, a, l);
            }
        }
        if (this._requestId !== e) {
            r?.dispose();
            return;
        }
        if (this._inflight = void 0, s !== void 0) {
            this._session = {
                state: "error",
                query: n,
                error: s
            }, this._onDidChange.fire();
            return;
        }
        if (!r) {
            this._session = void 0, this._onDidChange.fire();
            return;
        }
        this._session = {
            state: "loaded",
            query: n,
            model: r
        }, this._onDidChange.fire();
    }
    dispose() {
        ++this._requestId, this._cancelInflight(), this._disposeCurrentModel(), this._session = void 0, super.dispose();
    }
}, Vys = Re([
    mNl(0, Nd),
    mNl(1, Mxt)
], Vys), bn(JDn, Vys, 1);

}
