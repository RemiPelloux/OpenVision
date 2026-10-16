import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_anthropic2 } from "./adapters/anthropic.js";
import { init_observation } from "./observation.js";
import { init_shared } from "./shared.js";
import { init_types14 } from "./types.js";
import { init_common9 } from "../../common.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { init_dist25 } from "../../../../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
import { init_esm20 } from "../../../../../node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/index.js";
import { init_computer_use_tool_pb } from "../../../../../proto/dist/generated/agent/v1/computer_use_tool_pb.js";
var __addDisposableResource53, __disposeResources53, logger56;
export { __addDisposableResource53, __disposeResources53, logger56 };
var __wakaru_init_anthropic_tool_initialized = false;
export function init_anthropic_tool() {
if (__wakaru_init_anthropic_tool_initialized) return;
__wakaru_init_anthropic_tool_initialized = true;
"use strict";
init_dist8();
init_dist();
init_computer_use_tool_pb();
init_dist25();
init_esm20();
init_common9();
init_anthropic2();
init_observation();
init_shared();
init_types14();
__addDisposableResource53 = function(env, value, async) {
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
__disposeResources53 = (function(SuppressedError2) {
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
logger56 = createLogger("agent/tools/computer-use/anthropic");

}
