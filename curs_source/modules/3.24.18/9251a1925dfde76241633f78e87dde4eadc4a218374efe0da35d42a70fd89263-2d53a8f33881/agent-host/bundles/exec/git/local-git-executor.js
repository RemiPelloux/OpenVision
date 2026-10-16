import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_dist } from "../../../../context/dist/index.js";
import { gitExecFile } from "../../../../dashboard_connect_exports.js";
import { init_dist11 } from "../../../../git-core/dist/index.js";
var __addDisposableResource8, __disposeResources8, LocalGitExecutor;
export { LocalGitExecutor, __addDisposableResource8, __disposeResources8 };
var __wakaru_init_local_git_executor_initialized = false;
export function init_local_git_executor() {
if (__wakaru_init_local_git_executor_initialized) return;
__wakaru_init_local_git_executor_initialized = true;
"use strict";
init_dist();
init_dist11();
__addDisposableResource8 = function(env, value, async) {
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
__disposeResources8 = (function(SuppressedError2) {
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
LocalGitExecutor = class {
    async exec(ctx, cwd, args, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource8(env_1, createSpan(ctx.withName("LocalGitExecutor.exec"), {
                attributes: {
                    "git.cwd": cwd,
                    "git.args": args,
                    "git.caller": options2?.caller
                }
            }), false);
            const { stdout, stderr } = await gitExecFile("git", args, {
                cwd,
                timeout: options2?.timeout
            });
            return {
                exitCode: 0,
                stdout: stdout.toString(),
                stderr: stderr.toString()
            };
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources8(env_1);
        }
    }
};

}
