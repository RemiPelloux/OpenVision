"use strict";
const n = {
    REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
    X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
    TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID")
}, s = [
    "true",
    "1"
].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
s || (globalThis.awslambda = globalThis.awslambda || {});
class i {
    static PROTECTED_KEYS = n;
    isProtectedKey(e) {
        return Object.values(n).includes(e);
    }
    getRequestId() {
        return this.get(n.REQUEST_ID) ?? "-";
    }
    getXRayTraceId() {
        return this.get(n.X_RAY_TRACE_ID);
    }
    getTenantId() {
        return this.get(n.TENANT_ID);
    }
}
class o extends i {
    currentContext;
    getContext() {
        return this.currentContext;
    }
    hasContext() {
        return void 0 !== this.currentContext;
    }
    get(e) {
        return this.currentContext?.[e];
    }
    set(e, t) {
        if (this.isProtectedKey(e)) throw new Error(`Cannot modify protected Lambda context field: ${String(e)}`);
        this.currentContext = this.currentContext || {}, this.currentContext[e] = t;
    }
    run(e, t) {
        return this.currentContext = e, t();
    }
}
class a extends i {
    als;
    static async create() {
        const e = new a, t = await Promise.resolve().then(require.t.bind(require, 16698, 23));
        return e.als = new t.AsyncLocalStorage, e;
    }
    getContext() {
        return this.als.getStore();
    }
    hasContext() {
        return void 0 !== this.als.getStore();
    }
    get(e) {
        return this.als.getStore()?.[e];
    }
    set(e, t) {
        if (this.isProtectedKey(e)) throw new Error(`Cannot modify protected Lambda context field: ${String(e)}`);
        const r = this.als.getStore();
        if (!r) throw new Error("No context available");
        r[e] = t;
    }
    run(e, t) {
        return this.als.run(e, t);
    }
}
exports.A = void 0, function(e) {
    let t = null;
    e.getInstanceAsync = async function(e) {
        return t || (t = (async ()=>{
            const t = !0 === e || "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await a.create() : new o;
            return !s && globalThis.awslambda?.InvokeStore ? globalThis.awslambda.InvokeStore : !s && globalThis.awslambda ? (globalThis.awslambda.InvokeStore = t, t) : t;
        })()), t;
    }, e._testing = "1" === process.env.AWS_LAMBDA_BENCHMARK_MODE ? {
        reset: ()=>{
            t = null, globalThis.awslambda?.InvokeStore && delete globalThis.awslambda.InvokeStore, globalThis.awslambda = {
                InvokeStore: void 0
            };
        }
    } : void 0;
}(exports.A || (exports.A = {}));
