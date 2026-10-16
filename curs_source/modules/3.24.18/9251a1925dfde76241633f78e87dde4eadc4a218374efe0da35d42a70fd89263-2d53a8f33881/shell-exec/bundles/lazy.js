import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist } from "../../context/dist/index.js";
var __addDisposableResource10, __disposeResources10, LazyTerminalExecutor;
export { LazyTerminalExecutor, __addDisposableResource10, __disposeResources10 };
var __wakaru_init_lazy_initialized = false;
export function init_lazy() {
if (__wakaru_init_lazy_initialized) return;
__wakaru_init_lazy_initialized = true;
"use strict";
init_dist();
__addDisposableResource10 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources10 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
LazyTerminalExecutor = class _LazyTerminalExecutor {
    initializer;
    promise;
    constructor(initializer3){
        this.initializer = initializer3;
    }
    getExecutor() {
        if (this.promise === void 0) {
            this.promise = this.initializer();
        }
        return this.promise;
    }
    async getCwd() {
        const executor = await this.getExecutor();
        return executor.getCwd();
    }
    clone(workingDirectory) {
        return new _LazyTerminalExecutor(async ()=>{
            const executor = await this.getExecutor();
            return executor.clone(workingDirectory);
        });
    }
    async *execute(ctx, command, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource10(env_1, createSpan(ctx.withName("LazyTerminalExecutor.execute")), false);
            const executor = await this.getExecutor();
            for await (const event of executor.execute(ctx, command, options2)){
                yield event;
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources10(env_1);
        }
    }
};

}
