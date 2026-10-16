import { require_cjs2 } from "../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_any_client } from "./any-client.js";
import { require_code } from "./code.js";
import { require_connect_error } from "./connect-error.js";
import { require_async_iterable } from "./protocol/async-iterable.js";
var __wakaru_require_promise_client_cache;
export function require_promise_client() {
if (__wakaru_require_promise_client_cache) return __wakaru_require_promise_client_cache;
var exports2 = {};
__wakaru_require_promise_client_cache = exports2;
"use strict";
var __asyncValues6 = exports2 && exports2.__asyncValues || function(o) {
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
var __await6 = exports2 && exports2.__await || function(v2) {
    return this instanceof __await6 ? (this.v = v2, this) : new __await6(v2);
};
var __asyncDelegator4 = exports2 && exports2.__asyncDelegator || function(o) {
    var i, p2;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f2) {
        i[n] = o[n] ? function(v2) {
            return (p2 = !p2) ? {
                value: __await6(o[n](v2)),
                done: false
            } : f2 ? f2(v2) : v2;
        } : f2;
    }
};
var __asyncGenerator6 = exports2 && exports2.__asyncGenerator || function(thisArg, _arguments, generator) {
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
        r.value instanceof __await6 ? Promise.resolve(r.value.v).then(fulfill, reject2) : settle(q2[0][2], r);
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
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createClient = createClient3;
exports2.createPromiseClient = createPromiseClient2;
exports2.createUnaryFn = createUnaryFn2;
exports2.createServerStreamingFn = createServerStreamingFn2;
exports2.createClientStreamingFn = createClientStreamingFn2;
exports2.createBiDiStreamingFn = createBiDiStreamingFn2;
var protobuf_1 = require_cjs2();
var any_client_js_1 = require_any_client();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var async_iterable_js_1 = require_async_iterable();
function createClient3(service, transport) {
    return (0, any_client_js_1.makeAnyClient)(service, (method)=>{
        switch(method.kind){
            case protobuf_1.MethodKind.Unary:
                return createUnaryFn2(transport, service, method);
            case protobuf_1.MethodKind.ServerStreaming:
                return createServerStreamingFn2(transport, service, method);
            case protobuf_1.MethodKind.ClientStreaming:
                return createClientStreamingFn2(transport, service, method);
            case protobuf_1.MethodKind.BiDiStreaming:
                return createBiDiStreamingFn2(transport, service, method);
            default:
                return null;
        }
    });
}
function createPromiseClient2(service, transport) {
    return createClient3(service, transport);
}
function createUnaryFn2(transport, service, method) {
    return async function(input, options2) {
        var _a18, _b2;
        const response = await transport.unary(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, input, options2 === null || options2 === void 0 ? void 0 : options2.contextValues);
        (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.onHeader) === null || _a18 === void 0 ? void 0 : _a18.call(options2, response.header);
        (_b2 = options2 === null || options2 === void 0 ? void 0 : options2.onTrailer) === null || _b2 === void 0 ? void 0 : _b2.call(options2, response.trailer);
        return response.message;
    };
}
function createServerStreamingFn2(transport, service, method) {
    return function(input, options2) {
        return handleStreamResponse2(transport.stream(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, (0, async_iterable_js_1.createAsyncIterable)([
            input
        ]), options2 === null || options2 === void 0 ? void 0 : options2.contextValues), options2);
    };
}
function createClientStreamingFn2(transport, service, method) {
    return async function(request3, options2) {
        var _a18, e_1, _b2, _c;
        var _d, _e2;
        const response = await transport.stream(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, request3, options2 === null || options2 === void 0 ? void 0 : options2.contextValues);
        (_d = options2 === null || options2 === void 0 ? void 0 : options2.onHeader) === null || _d === void 0 ? void 0 : _d.call(options2, response.header);
        let singleMessage;
        let count2 = 0;
        try {
            for(var _f = true, _g = __asyncValues6(response.message), _h; _h = await _g.next(), _a18 = _h.done, !_a18; _f = true){
                _c = _h.value;
                _f = false;
                const message = _c;
                singleMessage = message;
                count2++;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_f && !_a18 && (_b2 = _g.return)) await _b2.call(_g);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        if (!singleMessage) {
            throw new connect_error_js_1.ConnectError("protocol error: missing response message", code_js_1.Code.Unimplemented);
        }
        if (count2 > 1) {
            throw new connect_error_js_1.ConnectError("protocol error: received extra messages for client streaming method", code_js_1.Code.Unimplemented);
        }
        (_e2 = options2 === null || options2 === void 0 ? void 0 : options2.onTrailer) === null || _e2 === void 0 ? void 0 : _e2.call(options2, response.trailer);
        return singleMessage;
    };
}
function createBiDiStreamingFn2(transport, service, method) {
    return function(request3, options2) {
        return handleStreamResponse2(transport.stream(service, method, options2 === null || options2 === void 0 ? void 0 : options2.signal, options2 === null || options2 === void 0 ? void 0 : options2.timeoutMs, options2 === null || options2 === void 0 ? void 0 : options2.headers, request3, options2 === null || options2 === void 0 ? void 0 : options2.contextValues), options2);
    };
}
function handleStreamResponse2(stream3, options2) {
    const it2 = (function() {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, _b2;
            const response = yield __await6(stream3);
            (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.onHeader) === null || _a18 === void 0 ? void 0 : _a18.call(options2, response.header);
            yield __await6(yield* __asyncDelegator4(__asyncValues6(response.message)));
            (_b2 = options2 === null || options2 === void 0 ? void 0 : options2.onTrailer) === null || _b2 === void 0 ? void 0 : _b2.call(options2, response.trailer);
        });
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>it2.next()
            })
    };
}

return exports2;
}
