import { require_connect_error } from "../connect-error.js";
import { require_interceptor } from "../interceptor.js";
import { require_normalize } from "./normalize.js";
import { require_signals } from "./signals.js";
var __wakaru_require_run_call_cache;
export function require_run_call() {
if (__wakaru_require_run_call_cache) return __wakaru_require_run_call_cache;
var exports2 = {};
__wakaru_require_run_call_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.runUnaryCall = runUnaryCall2;
exports2.runStreamingCall = runStreamingCall2;
var interceptor_js_1 = require_interceptor();
var connect_error_js_1 = require_connect_error();
var signals_js_1 = require_signals();
var normalize_js_1 = require_normalize();
function runUnaryCall2(opt) {
    const next = (0, interceptor_js_1.applyInterceptors)(opt.next, opt.interceptors);
    const [signal, abort, done] = setupSignal2(opt);
    const req = Object.assign(Object.assign({}, opt.req), {
        message: (0, normalize_js_1.normalize)(opt.req.method.I, opt.req.message),
        signal
    });
    return next(req).then((res)=>{
        done();
        return res;
    }, abort);
}
function runStreamingCall2(opt) {
    const next = (0, interceptor_js_1.applyInterceptors)(opt.next, opt.interceptors);
    const [signal, abort, done] = setupSignal2(opt);
    const req = Object.assign(Object.assign({}, opt.req), {
        message: (0, normalize_js_1.normalizeIterable)(opt.req.method.I, opt.req.message),
        signal
    });
    let doneCalled = false;
    signal.addEventListener("abort", function() {
        var _a18, _b2;
        const it2 = opt.req.message[Symbol.asyncIterator]();
        if (!doneCalled) {
            (_a18 = it2.throw) === null || _a18 === void 0 ? void 0 : _a18.call(it2, this.reason).catch(()=>{});
        }
        (_b2 = it2.return) === null || _b2 === void 0 ? void 0 : _b2.call(it2).catch(()=>{});
    });
    return next(req).then((res)=>{
        return Object.assign(Object.assign({}, res), {
            message: {
                [Symbol.asyncIterator] () {
                    const it2 = res.message[Symbol.asyncIterator]();
                    return {
                        next () {
                            return it2.next().then((r)=>{
                                if (r.done == true) {
                                    doneCalled = true;
                                    done();
                                }
                                return r;
                            }, abort);
                        }
                    };
                }
            }
        });
    }, abort);
}
function setupSignal2(opt) {
    const { signal, cleanup } = (0, signals_js_1.createDeadlineSignal)(opt.timeoutMs);
    const controller = (0, signals_js_1.createLinkedAbortController)(opt.signal, signal);
    return [
        controller.signal,
        function abort(reason) {
            const e = connect_error_js_1.ConnectError.from(signal.aborted ? (0, signals_js_1.getAbortSignalReason)(signal) : reason);
            controller.abort(e);
            cleanup();
            return Promise.reject(e);
        },
        function done() {
            cleanup();
            controller.abort();
        }
    ];
}

return exports2;
}
