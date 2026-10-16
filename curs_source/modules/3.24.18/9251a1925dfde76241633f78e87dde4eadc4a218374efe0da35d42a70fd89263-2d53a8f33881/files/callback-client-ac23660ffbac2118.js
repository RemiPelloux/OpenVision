import { require_cjs2 } from "../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_any_client } from "./any-client.js";
import { require_code } from "./code.js";
import { require_connect_error } from "./connect-error.js";
import { require_async_iterable } from "./protocol/async-iterable.js";
var __wakaru_require_callback_client_cache;
export function require_callback_client() {
if (__wakaru_require_callback_client_cache) return __wakaru_require_callback_client_cache;
var exports2 = {};
__wakaru_require_callback_client_cache = exports2;
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
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createCallbackClient = createCallbackClient;
var protobuf_1 = require_cjs2();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
var any_client_js_1 = require_any_client();
var async_iterable_js_1 = require_async_iterable();
function createCallbackClient(service, transport) {
    return (0, any_client_js_1.makeAnyClient)(service, (method)=>{
        switch(method.kind){
            case protobuf_1.MethodKind.Unary:
                return createUnaryFn2(transport, service, method);
            case protobuf_1.MethodKind.ServerStreaming:
                return createServerStreamingFn2(transport, service, method);
            default:
                return null;
        }
    });
}
function createUnaryFn2(transport, service, method) {
    return function(requestMessage, callback, options2) {
        const abort = new AbortController();
        options2 = wrapSignal(abort, options2);
        transport.unary(service, method, abort.signal, options2.timeoutMs, options2.headers, requestMessage, options2.contextValues).then((response)=>{
            var _a18, _b2;
            (_a18 = options2.onHeader) === null || _a18 === void 0 ? void 0 : _a18.call(options2, response.header);
            (_b2 = options2.onTrailer) === null || _b2 === void 0 ? void 0 : _b2.call(options2, response.trailer);
            callback(void 0, response.message);
        }, (reason)=>{
            const err = connect_error_js_1.ConnectError.from(reason, code_js_1.Code.Internal);
            if (err.code === code_js_1.Code.Canceled && abort.signal.aborted) {
                return;
            }
            callback(err, new method.O());
        });
        return ()=>abort.abort();
    };
}
function createServerStreamingFn2(transport, service, method) {
    return function(input, onResponse, onClose, options2) {
        const abort = new AbortController();
        async function run() {
            var _a18, e_1, _b2, _c;
            var _d, _e2;
            options2 = wrapSignal(abort, options2);
            const response = await transport.stream(service, method, options2.signal, options2.timeoutMs, options2.headers, (0, async_iterable_js_1.createAsyncIterable)([
                input
            ]), options2.contextValues);
            (_d = options2.onHeader) === null || _d === void 0 ? void 0 : _d.call(options2, response.header);
            try {
                for(var _f = true, _g = __asyncValues6(response.message), _h; _h = await _g.next(), _a18 = _h.done, !_a18; _f = true){
                    _c = _h.value;
                    _f = false;
                    const message = _c;
                    onResponse(message);
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
            (_e2 = options2.onTrailer) === null || _e2 === void 0 ? void 0 : _e2.call(options2, response.trailer);
            onClose(void 0);
        }
        run().catch((reason)=>{
            const err = connect_error_js_1.ConnectError.from(reason, code_js_1.Code.Internal);
            if (err.code === code_js_1.Code.Canceled && abort.signal.aborted) {
                onClose(void 0);
            } else {
                onClose(err);
            }
        });
        return ()=>abort.abort();
    };
}
function wrapSignal(abort, options2) {
    if (options2 === null || options2 === void 0 ? void 0 : options2.signal) {
        options2.signal.addEventListener("abort", ()=>abort.abort());
        if (options2.signal.aborted) {
            abort.abort();
        }
    }
    return Object.assign(Object.assign({}, options2), {
        signal: abort.signal
    });
}

return exports2;
}
