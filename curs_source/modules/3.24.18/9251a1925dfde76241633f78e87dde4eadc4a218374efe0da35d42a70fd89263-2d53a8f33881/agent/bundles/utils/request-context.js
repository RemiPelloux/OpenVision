import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { init_request_path } from "./request-path.js";
import { init_scoped_rule_filtering } from "./scoped-rule-filtering.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_request_context_exec_pb } from "../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var __addDisposableResource56, __disposeResources56;
export { __addDisposableResource56, __disposeResources56 };
var __wakaru_init_request_context4_initialized = false;
export function init_request_context4() {
if (__wakaru_init_request_context4_initialized) return;
__wakaru_init_request_context4_initialized = true;
"use strict";
init_dist8();
init_dist();
init_request_context_exec_pb();
init_agent_v1();
init_dist27();
init_request_path();
init_scoped_rule_filtering();
__addDisposableResource56 = function(env, value, async) {
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
__disposeResources56 = (function(SuppressedError2) {
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

}
