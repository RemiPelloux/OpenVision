import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_async_iterable } from "./async-iterable.js";
import { require_signals } from "./signals.js";
var __wakaru_require_universal_handler_client_cache;
export function require_universal_handler_client() {
if (__wakaru_require_universal_handler_client_cache) return __wakaru_require_universal_handler_client_cache;
var exports2 = {};
__wakaru_require_universal_handler_client_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createUniversalHandlerClient = createUniversalHandlerClient2;
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var async_iterable_js_1 = require_async_iterable();
var signals_js_1 = require_signals();
function createUniversalHandlerClient2(uHandlers) {
    const handlerMap = new Map();
    for (const handler of uHandlers){
        handlerMap.set(handler.requestPath, handler);
    }
    return async (uClientReq)=>{
        var _a18, _b2, _c;
        const pathname = new URL(uClientReq.url).pathname;
        const handler = handlerMap.get(pathname);
        if (!handler) {
            throw new connect_error_js_1.ConnectError(`RouterHttpClient: no handler registered for ${pathname}`, code_js_1.Code.Unimplemented);
        }
        const reqSignal = (_a18 = uClientReq.signal) !== null && _a18 !== void 0 ? _a18 : new AbortController().signal;
        const uServerRes = await raceSignal2(reqSignal, handler({
            body: (_b2 = uClientReq.body) !== null && _b2 !== void 0 ? _b2 : (0, async_iterable_js_1.createAsyncIterable)([]),
            httpVersion: "2.0",
            method: uClientReq.method,
            url: uClientReq.url,
            header: uClientReq.header,
            signal: reqSignal
        }));
        const body = (_c = uServerRes.body) !== null && _c !== void 0 ? _c : (0, async_iterable_js_1.createAsyncIterable)([]);
        return {
            body: (0, async_iterable_js_1.pipe)(body, (iterable)=>{
                return {
                    [Symbol.asyncIterator] () {
                        const it2 = iterable[Symbol.asyncIterator]();
                        const w2 = {
                            next () {
                                return raceSignal2(reqSignal, it2.next());
                            }
                        };
                        if (it2.throw !== void 0) {
                            w2.throw = (e)=>it2.throw(e);
                        }
                        if (it2.return !== void 0) {
                            w2.return = (value)=>it2.return(value);
                        }
                        return w2;
                    }
                };
            }),
            header: new Headers(uServerRes.header),
            status: uServerRes.status,
            trailer: new Headers(uServerRes.trailer)
        };
    };
}
function raceSignal2(signal, promise) {
    let cleanup;
    const signalPromise = new Promise((_2, reject2)=>{
        const onAbort = ()=>reject2((0, signals_js_1.getAbortSignalReason)(signal));
        if (signal.aborted) {
            return onAbort();
        }
        signal.addEventListener("abort", onAbort);
        cleanup = ()=>signal.removeEventListener("abort", onAbort);
    });
    return Promise.race([
        signalPromise,
        promise
    ]).finally(cleanup);
}

return exports2;
}
