import { Se, bt, fqr, imi, ns, qu, rn, si, ve, we } from "./HVr.js";
import { dr } from "./arrays.js";
import { Gpn, li } from "./network.js";
import { rt } from "./nls.js";
import { Iwe } from "./qIc.js";
import { p3h } from "./timerService.js";
import { Awe } from "./trustedTypes.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { h3h } from "./webWorker.js";
function Hl_(e, t) {
    const n = e.label || "anonymous" + t, i = globalThis.MonacoEnvironment;
    if (i) {
        if (typeof i.getWorker == "function") return i.getWorker("workerMain.js", n);
        if (typeof i.getWorkerUrl == "function") {
            const s = i.getWorkerUrl("workerMain.js", n);
            return new Worker(jqt ? jqt.createScriptURL(s) : s, {
                name: n,
                type: "module"
            });
        }
    }
    const r = e.esmModuleLocation;
    if (r) {
        const s = Wl_(n, r.toString(!0));
        try {
            const o = p3h(s, {
                name: n,
                type: "module"
            });
            return Gl_(o).finally(()=>URL.revokeObjectURL(s));
        } catch (o) {
            throw URL.revokeObjectURL(s), o;
        }
    }
    throw new Error("You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker");
}
function Wl_(e, t) {
    if (!(/^((http:)|(https:)|(file:))/.test(t) && t.substring(0, globalThis.origin.length) !== globalThis.origin)) {
        const i = t.lastIndexOf("?"), r = t.lastIndexOf("#", i), s = i > 0 ? new URLSearchParams(t.substring(i + 1, ~r ? r : void 0)) : new URLSearchParams;
        Gpn.addSearchParam(s, !0, !0), s.toString() ? t = `${t}?${s.toString()}#${e}` : t = `${t}#${e}`;
    }
    const n = new Blob([
        qu([
            `/*${e}*/`,
            `globalThis._VSCODE_NLS_MESSAGES = ${JSON.stringify(fqr())};`,
            `globalThis._VSCODE_NLS_LANGUAGE = ${JSON.stringify(imi())};`,
            `globalThis._VSCODE_FILE_ROOT = ${JSON.stringify(globalThis._VSCODE_FILE_ROOT)};`,
            "const ttPolicy = globalThis.trustedTypes?.createPolicy('defaultWorkerFactory', { createScriptURL: value => value });",
            "globalThis.workerttPolicy = ttPolicy;",
            `await import(ttPolicy?.createScriptURL(${JSON.stringify(t)}) ?? ${JSON.stringify(t)});`,
            "globalThis.postMessage({ type: 'vscode-worker-ready' });",
            `/*${e}*/`
        ]).join("")
    ], {
        type: "application/javascript"
    });
    return URL.createObjectURL(n);
}
function Gl_(e) {
    return new Promise((t, n)=>{
        e.onmessage = function(i) {
            i.data.type === "vscode-worker-ready" && (e.onmessage = null, e.onerror = null, t(e));
        }, e.onerror = (i)=>{
            e.onmessage = null, e.terminate(), n(i);
        };
    });
}
function Vl_(e) {
    return typeof e.then == "function";
}
var jqt, CRo, m3h, TRo;
export { CRo, Gl_, Hl_, TRo, Vl_, Wl_, jqt, m3h };
var __wakaru_z8e_initialized = false;
export function z8e() {
if (__wakaru_z8e_initialized) return;
__wakaru_z8e_initialized = true;
"use strict";
x(), Awe(), si(), li(), Qt(), h3h(), Se(), dr(), rt(), bt(), typeof self == "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope" && globalThis.workerttPolicy !== void 0 ? jqt = globalThis.workerttPolicy : jqt = Iwe("defaultWorkerFactory", {
    createScriptURL: (e)=>e
}), CRo = class NCm extends we {
    constructor(t){
        super(), this._onMessage = this._register(new ve), this.onMessage = this._onMessage.event, this._onError = this._register(new ve), this.onError = this._onError.event, this.id = ++NCm.LAST_WORKER_ID;
        const n = t instanceof Worker ? t : Hl_(t, this.id);
        Vl_(n) ? this.worker = n : this.worker = Promise.resolve(n), this.postMessage("-please-ignore-", []);
        const i = (r)=>{
            this._onError.fire(r);
        };
        this.worker.then((r)=>{
            r.onmessage = (s)=>{
                this._onMessage.fire(s.data);
            }, r.onmessageerror = (s)=>{
                this._onError.fire(s);
            }, typeof r.addEventListener == "function" && r.addEventListener("error", i);
        }), this._register(rn(()=>{
            this.worker?.then((r)=>{
                r.onmessage = null, r.onmessageerror = null, r.removeEventListener("error", i), r.terminate();
            }), this.worker = null;
        }));
    }
    getId() {
        return this.id;
    }
    postMessage(t, n) {
        this.worker?.then((i)=>{
            try {
                i.postMessage(t, n);
            } catch (r) {
                ns(r), ns(new Error("FAILED to post message to worker", {
                    cause: r
                }));
            }
        });
    }
}, CRo.LAST_WORKER_ID = 0, m3h = CRo, TRo = class {
    constructor(e, t){
        this.esmModuleLocation = e, this.label = t;
    }
};

}
