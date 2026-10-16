import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_context_values } from "../context-values.js";
import { init_http_headers } from "../http-headers.js";
import { init_end_stream } from "./end-stream.js";
import { init_error_json } from "./error-json.js";
import { init_get_request } from "./get-request.js";
import { init_headers3 } from "./headers.js";
import { init_request_header } from "./request-header.js";
import { init_trailer_mux } from "./trailer-mux.js";
import { init_validate_response } from "./validate-response.js";
import { init_async_iterable } from "../protocol/async-iterable.js";
import { init_create_method_url } from "../protocol/create-method-url.js";
import { init_run_call } from "../protocol/run-call.js";
import { init_serialization2 } from "../protocol/serialization.js";
var __asyncValues4, __await4, __asyncGenerator4;
export { __asyncGenerator4, __asyncValues4, __await4 };
var __wakaru_init_transport2_initialized = false;
export function init_transport2() {
if (__wakaru_init_transport2_initialized) return;
__wakaru_init_transport2_initialized = true;
init_esm2();
init_request_header();
init_headers3();
init_validate_response();
init_trailer_mux();
init_error_json();
init_end_stream();
init_get_request();
init_code();
init_connect_error();
init_http_headers();
init_async_iterable();
init_create_method_url();
init_run_call();
init_serialization2();
init_context_values();
__asyncValues4 = function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m2 = o[Symbol.asyncIterator], i;
    return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v2) {
            return new Promise(function(resolve36, reject2) {
                v2 = o[n](v2), settle(resolve36, reject2, v2.done, v2.value);
            });
        };
    }
    function settle(resolve36, reject2, d, v2) {
        Promise.resolve(v2).then(function(v3) {
            resolve36({
                value: v3,
                done: d
            });
        }, reject2);
    }
};
__await4 = function(v2) {
    return this instanceof __await4 ? (this.v = v2, this) : new __await4(v2);
};
__asyncGenerator4 = function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f2) {
        return function(v2) {
            return Promise.resolve(v2).then(f2, reject2);
        };
    }
    function verb(n, f2) {
        if (g2[n]) {
            i[n] = function(v2) {
                return new Promise(function(a, b2) {
                    q2.push([
                        n,
                        v2,
                        a,
                        b2
                    ]) > 1 || resume(n, v2);
                });
            };
            if (f2) i[n] = f2(i[n]);
        }
    }
    function resume(n, v2) {
        try {
            step(g2[n](v2));
        } catch (e) {
            settle(q2[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await4 ? Promise.resolve(r.value.v).then(fulfill, reject2) : settle(q2[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject2(value) {
        resume("throw", value);
    }
    function settle(f2, v2) {
        if (f2(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
    }
};

}
