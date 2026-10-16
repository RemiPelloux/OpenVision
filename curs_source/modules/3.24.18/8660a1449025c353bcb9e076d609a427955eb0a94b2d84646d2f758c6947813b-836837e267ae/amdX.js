import { Di } from "./Iwo.js";
import { Ki, Ot, wmr } from "./network.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Ai, Xo } from "./uuid_2.js";
var cKt, mRg, fds, gRg, vds;
export { cKt, fds, gRg, mRg, vds };
var __wakaru_glt_initialized = false;
export function glt() {
if (__wakaru_glt_initialized) return;
__wakaru_glt_initialized = true;
"use strict";
E(), Ki(), Di(), fn(), Xo(), cKt = !1, mRg = class {
    constructor(t, e, n){
        this.id = t, this.dependencies = e, this.callback = n;
    }
}, fds = class {
    constructor(){
        this._isWebWorker = typeof self == "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope", this._isRenderer = typeof document == "object", this._defineCalls = [], this._state = 1;
    }
    _initialize() {
        if (this._state === 1) {
            if (globalThis.define) {
                this._state = 3;
                return;
            }
        } else return;
        this._state = 2, globalThis.define = (e, n, i)=>{
            typeof e != "string" && (i = n, n = e, e = null), (typeof n != "object" || !Array.isArray(n)) && (i = n, n = null), this._defineCalls.push(new mRg(e, n, i));
        }, globalThis.define.amd = !0, this._isRenderer ? this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? window.trustedTypes?.createPolicy("amdLoader", {
            createScriptURL (e) {
                if (e.startsWith(window.location.origin) || e.startsWith(`${Ot.vscodeFileResource}://${wmr}`)) return e;
                throw new Error(`[trusted_script_src] Invalid script url: ${e}`);
            }
        }) : this._isWebWorker && (this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? globalThis.trustedTypes?.createPolicy("amdLoader", {
            createScriptURL (e) {
                return e;
            }
        }));
    }
    async load(e) {
        if (this._initialize(), this._state === 3) return new Promise((o)=>{
            const a = Ai();
            globalThis.define(a, [
                e
            ], function(l) {
                o(l);
            });
        });
        const n = await (this._isWebWorker ? this._workerLoadScript(e) : this._isRenderer ? this._rendererLoadScript(e) : this._nodeJSLoadScript(e));
        if (!n) {
            console.warn(`Did not receive a define call from script ${e}`);
            return;
        }
        const i = {}, r = [], s = [];
        if (Array.isArray(n.dependencies)) for (const o of n.dependencies)o === "exports" ? r.push(i) : s.push(o);
        if (s.length > 0) throw new Error(`Cannot resolve dependencies for script ${e}. The dependencies are: ${s.join(", ")}`);
        return typeof n.callback == "function" ? n.callback(...r) ?? i : n.callback;
    }
    _rendererLoadScript(e) {
        return new Promise((n, i)=>{
            const r = document.createElement("script");
            r.setAttribute("async", "async"), r.setAttribute("type", "text/javascript");
            const s = ()=>{
                r.removeEventListener("load", o), r.removeEventListener("error", a);
            }, o = (l)=>{
                s(), n(this._defineCalls.pop());
            }, a = (l)=>{
                s(), i(l);
            };
            r.addEventListener("load", o), r.addEventListener("error", a), this._amdPolicy && (e = this._amdPolicy.createScriptURL(e)), r.setAttribute("src", e), window.document.getElementsByTagName("head")[0].appendChild(r);
        });
    }
    async _workerLoadScript(e) {
        return this._amdPolicy && (e = this._amdPolicy.createScriptURL(e)), await import(e), this._defineCalls.pop();
    }
    async _nodeJSLoadScript(e) {
        try {
            const n = (await import("fs")).default, i = (await import("vm")).default, r = (await import("module")).default, s = rt.parse(e).fsPath, o = n.readFileSync(s).toString(), a = r.wrap(o.replace(/^#!.*/, ""));
            return new i.Script(a).runInThisContext().apply(), this._defineCalls.pop();
        } catch (n) {
            throw n;
        }
    }
}, fds.INSTANCE = new fds, gRg = fds, vds = new Map;

}
