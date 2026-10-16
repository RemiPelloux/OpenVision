import { jn } from "./HVr.js";
import { Cmi, gt, li } from "./network.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
var D0t, UBh, Xnr, $Bh, Znr;
export { $Bh, D0t, UBh, Xnr, Znr };
var __wakaru_r7e_initialized = false;
export function r7e() {
if (__wakaru_r7e_initialized) return;
__wakaru_r7e_initialized = true;
"use strict";
x(), li(), jn(), Qt(), Js(), D0t = !1, UBh = class {
    constructor(e, t, n){
        this.id = e, this.dependencies = t, this.callback = n;
    }
}, Xnr = class {
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
        this._state = 2, globalThis.define = (t, n, i)=>{
            typeof t != "string" && (i = n, n = t, t = null), (typeof n != "object" || !Array.isArray(n)) && (i = n, n = null), this._defineCalls.push(new UBh(t, n, i));
        }, globalThis.define.amd = !0, this._isRenderer ? this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? window.trustedTypes?.createPolicy("amdLoader", {
            createScriptURL (t) {
                if (t.startsWith(window.location.origin) || t.startsWith(`${gt.vscodeFileResource}://${Cmi}`)) return t;
                throw new Error(`[trusted_script_src] Invalid script url: ${t}`);
            }
        }) : this._isWebWorker && (this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? globalThis.trustedTypes?.createPolicy("amdLoader", {
            createScriptURL (t) {
                return t;
            }
        }));
    }
    async load(t) {
        if (this._initialize(), this._state === 3) return new Promise((o)=>{
            const a = zn();
            globalThis.define(a, [
                t
            ], function(c) {
                o(c);
            });
        });
        const n = await (this._isWebWorker ? this._workerLoadScript(t) : this._isRenderer ? this._rendererLoadScript(t) : this._nodeJSLoadScript(t));
        if (!n) {
            console.warn(`Did not receive a define call from script ${t}`);
            return;
        }
        const i = {}, r = [], s = [];
        if (Array.isArray(n.dependencies)) for (const o of n.dependencies)o === "exports" ? r.push(i) : s.push(o);
        if (s.length > 0) throw new Error(`Cannot resolve dependencies for script ${t}. The dependencies are: ${s.join(", ")}`);
        return typeof n.callback == "function" ? n.callback(...r) ?? i : n.callback;
    }
    _rendererLoadScript(t) {
        return new Promise((n, i)=>{
            const r = document.createElement("script");
            r.setAttribute("async", "async"), r.setAttribute("type", "text/javascript");
            const s = ()=>{
                r.removeEventListener("load", o), r.removeEventListener("error", a);
            }, o = (c)=>{
                s(), n(this._defineCalls.pop());
            }, a = (c)=>{
                s(), i(c);
            };
            r.addEventListener("load", o), r.addEventListener("error", a), this._amdPolicy && (t = this._amdPolicy.createScriptURL(t)), r.setAttribute("src", t), window.document.getElementsByTagName("head")[0].appendChild(r);
        });
    }
    async _workerLoadScript(t) {
        return this._amdPolicy && (t = this._amdPolicy.createScriptURL(t)), await import(t), this._defineCalls.pop();
    }
    async _nodeJSLoadScript(t) {
        try {
            const n = (await import("fs")).default, i = (await import("vm")).default, r = (await import("module")).default, s = Ee.parse(t).fsPath, o = n.readFileSync(s).toString(), a = r.wrap(o.replace(/^#!.*/, ""));
            return new i.Script(a).runInThisContext().apply(), this._defineCalls.pop();
        } catch (n) {
            throw n;
        }
    }
}, Xnr.INSTANCE = new Xnr, $Bh = Xnr, Znr = new Map;

}
