import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_envelope } from "./envelope.js";
import { require_limit_io } from "./limit-io.js";
var __wakaru_require_async_iterable_cache;
export function require_async_iterable() {
if (__wakaru_require_async_iterable_cache) return __wakaru_require_async_iterable_cache;
var exports2 = {};
__wakaru_require_async_iterable_cache = exports2;
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
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.pipeTo = pipeTo2;
exports2.sinkAll = sinkAll2;
exports2.sinkAllBytes = sinkAllBytes2;
exports2.pipe = pipe3;
exports2.transformCatch = transformCatch2;
exports2.transformCatchFinally = transformCatchFinally2;
exports2.transformAppend = transformAppend2;
exports2.transformPrepend = transformPrepend2;
exports2.transformReadAllBytes = transformReadAllBytes2;
exports2.transformSerializeEnvelope = transformSerializeEnvelope2;
exports2.transformParseEnvelope = transformParseEnvelope2;
exports2.transformCompressEnvelope = transformCompressEnvelope2;
exports2.transformDecompressEnvelope = transformDecompressEnvelope2;
exports2.transformJoinEnvelopes = transformJoinEnvelopes2;
exports2.transformSplitEnvelope = transformSplitEnvelope2;
exports2.readAllBytes = readAllBytes2;
exports2.untilFirst = untilFirst2;
exports2.makeIterableAbortable = makeIterableAbortable2;
exports2.createWritableIterable = createWritableIterable3;
exports2.createAsyncIterable = createAsyncIterable2;
var code_js_1 = require_code();
var connect_error_js_1 = require_connect_error();
var envelope_js_1 = require_envelope();
var limit_io_js_1 = require_limit_io();
function pipeTo2(source, ...rest) {
    const [transforms, sink, opt] = pickTransformsAndSink2(rest);
    let iterable = source;
    let abortable;
    if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
        iterable = abortable = makeIterableAbortable2(iterable);
    }
    iterable = pipe3(iterable, ...transforms, {
        propagateDownStreamError: false
    });
    return sink(iterable).catch((reason)=>{
        if (abortable) {
            return abortable.abort(reason).then(()=>Promise.reject(reason));
        }
        return Promise.reject(reason);
    });
}
function pickTransformsAndSink2(rest) {
    let opt;
    if (typeof rest[rest.length - 1] != "function") {
        opt = rest.pop();
    }
    const sink = rest.pop();
    return [
        rest,
        sink,
        opt
    ];
}
function sinkAll2() {
    return async function(iterable) {
        var _a18, e_1, _b2, _c;
        const all = [];
        try {
            for(var _d = true, iterable_1 = __asyncValues6(iterable), iterable_1_1; iterable_1_1 = await iterable_1.next(), _a18 = iterable_1_1.done, !_a18; _d = true){
                _c = iterable_1_1.value;
                _d = false;
                const chunk = _c;
                all.push(chunk);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a18 && (_b2 = iterable_1.return)) await _b2.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return all;
    };
}
function sinkAllBytes2(readMaxBytes, lengthHint) {
    return async function(iterable) {
        return await readAllBytes2(iterable, readMaxBytes, lengthHint);
    };
}
function pipe3(source, ...rest) {
    return __asyncGenerator6(this, arguments, function* pipe_1() {
        var _a18;
        const [transforms, opt] = pickTransforms2(rest);
        let abortable;
        const sourceIt = source[Symbol.asyncIterator]();
        const cachedSource = {
            [Symbol.asyncIterator] () {
                return sourceIt;
            }
        };
        let iterable = cachedSource;
        if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
            iterable = abortable = makeIterableAbortable2(iterable);
        }
        for (const t of transforms){
            iterable = t(iterable);
        }
        const it2 = iterable[Symbol.asyncIterator]();
        try {
            for(;;){
                const r = yield __await6(it2.next());
                if (r.done === true) {
                    break;
                }
                if (!abortable) {
                    yield yield __await6(r.value);
                    continue;
                }
                try {
                    yield yield __await6(r.value);
                } catch (e) {
                    yield __await6(abortable.abort(e));
                    throw e;
                }
            }
        } finally{
            if ((opt === null || opt === void 0 ? void 0 : opt.propagateDownStreamError) === true) {
                (_a18 = sourceIt.return) === null || _a18 === void 0 ? void 0 : _a18.call(sourceIt).catch(()=>{});
            }
        }
    });
}
function pickTransforms2(rest) {
    let opt;
    if (typeof rest[rest.length - 1] != "function") {
        opt = rest.pop();
    }
    return [
        rest,
        opt
    ];
}
function transformCatch2(catchError2) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            const it2 = iterable[Symbol.asyncIterator]();
            for(;;){
                let r;
                try {
                    r = yield __await6(it2.next());
                } catch (e) {
                    const caught = yield __await6(catchError2(e));
                    if (caught !== void 0) {
                        yield yield __await6(caught);
                    }
                    break;
                }
                if (r.done === true) {
                    break;
                }
                yield yield __await6(r.value);
            }
        });
    };
}
function transformCatchFinally2(catchFinally) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            let err;
            const it2 = iterable[Symbol.asyncIterator]();
            for(;;){
                let r;
                try {
                    r = yield __await6(it2.next());
                } catch (e) {
                    err = e;
                    break;
                }
                if (r.done === true) {
                    break;
                }
                yield yield __await6(r.value);
            }
            const caught = yield __await6(catchFinally(err));
            if (caught !== void 0) {
                yield yield __await6(caught);
            }
        });
    };
}
function transformAppend2(provide) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_2, _b2, _c;
            try {
                for(var _d = true, iterable_2 = __asyncValues6(iterable), iterable_2_1; iterable_2_1 = yield __await6(iterable_2.next()), _a18 = iterable_2_1.done, !_a18; _d = true){
                    _c = iterable_2_1.value;
                    _d = false;
                    const chunk = _c;
                    yield yield __await6(chunk);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_2.return)) yield __await6(_b2.call(iterable_2));
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
            const append = yield __await6(provide());
            if (append !== void 0) {
                yield yield __await6(append);
            }
        });
    };
}
function transformPrepend2(provide) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_3, _b2, _c;
            const prepend = yield __await6(provide());
            if (prepend !== void 0) {
                yield yield __await6(prepend);
            }
            try {
                for(var _d = true, iterable_3 = __asyncValues6(iterable), iterable_3_1; iterable_3_1 = yield __await6(iterable_3.next()), _a18 = iterable_3_1.done, !_a18; _d = true){
                    _c = iterable_3_1.value;
                    _d = false;
                    const chunk = _c;
                    yield yield __await6(chunk);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_3.return)) yield __await6(_b2.call(iterable_3));
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
        });
    };
}
function transformReadAllBytes2(readMaxBytes, lengthHint) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            yield yield __await6(yield __await6(readAllBytes2(iterable, readMaxBytes, lengthHint)));
        });
    };
}
function transformSerializeEnvelope2(serialization, endStreamFlag2, endSerialization) {
    if (endStreamFlag2 === void 0 || endSerialization === void 0) {
        return function(iterable) {
            return __asyncGenerator6(this, arguments, function*() {
                var _a18, e_4, _b2, _c;
                try {
                    for(var _d = true, iterable_4 = __asyncValues6(iterable), iterable_4_1; iterable_4_1 = yield __await6(iterable_4.next()), _a18 = iterable_4_1.done, !_a18; _d = true){
                        _c = iterable_4_1.value;
                        _d = false;
                        const chunk = _c;
                        const data = serialization.serialize(chunk);
                        yield yield __await6({
                            flags: 0,
                            data
                        });
                    }
                } catch (e_4_1) {
                    e_4 = {
                        error: e_4_1
                    };
                } finally{
                    try {
                        if (!_d && !_a18 && (_b2 = iterable_4.return)) yield __await6(_b2.call(iterable_4));
                    } finally{
                        if (e_4) throw e_4.error;
                    }
                }
            });
        };
    }
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_5, _b2, _c;
            try {
                for(var _d = true, iterable_5 = __asyncValues6(iterable), iterable_5_1; iterable_5_1 = yield __await6(iterable_5.next()), _a18 = iterable_5_1.done, !_a18; _d = true){
                    _c = iterable_5_1.value;
                    _d = false;
                    const chunk = _c;
                    let data;
                    let flags = 0;
                    if (chunk.end) {
                        flags = flags | endStreamFlag2;
                        data = endSerialization.serialize(chunk.value);
                    } else {
                        data = serialization.serialize(chunk.value);
                    }
                    yield yield __await6({
                        flags,
                        data
                    });
                }
            } catch (e_5_1) {
                e_5 = {
                    error: e_5_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_5.return)) yield __await6(_b2.call(iterable_5));
                } finally{
                    if (e_5) throw e_5.error;
                }
            }
        });
    };
}
function transformParseEnvelope2(serialization, endStreamFlag2, endSerialization) {
    if (endSerialization && endStreamFlag2 !== void 0) {
        return function(iterable) {
            return __asyncGenerator6(this, arguments, function*() {
                var _a18, e_6, _b2, _c;
                try {
                    for(var _d = true, iterable_6 = __asyncValues6(iterable), iterable_6_1; iterable_6_1 = yield __await6(iterable_6.next()), _a18 = iterable_6_1.done, !_a18; _d = true){
                        _c = iterable_6_1.value;
                        _d = false;
                        const { flags, data } = _c;
                        if ((flags & endStreamFlag2) === endStreamFlag2) {
                            yield yield __await6({
                                value: endSerialization.parse(data),
                                end: true
                            });
                        } else {
                            yield yield __await6({
                                value: serialization.parse(data),
                                end: false
                            });
                        }
                    }
                } catch (e_6_1) {
                    e_6 = {
                        error: e_6_1
                    };
                } finally{
                    try {
                        if (!_d && !_a18 && (_b2 = iterable_6.return)) yield __await6(_b2.call(iterable_6));
                    } finally{
                        if (e_6) throw e_6.error;
                    }
                }
            });
        };
    }
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_7, _b2, _c;
            try {
                for(var _d = true, iterable_7 = __asyncValues6(iterable), iterable_7_1; iterable_7_1 = yield __await6(iterable_7.next()), _a18 = iterable_7_1.done, !_a18; _d = true){
                    _c = iterable_7_1.value;
                    _d = false;
                    const { flags, data } = _c;
                    if (endStreamFlag2 !== void 0 && (flags & endStreamFlag2) === endStreamFlag2) {
                        if (endSerialization === null) {
                            throw new connect_error_js_1.ConnectError("unexpected end flag", code_js_1.Code.InvalidArgument);
                        }
                        continue;
                    }
                    yield yield __await6(serialization.parse(data));
                }
            } catch (e_7_1) {
                e_7 = {
                    error: e_7_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_7.return)) yield __await6(_b2.call(iterable_7));
                } finally{
                    if (e_7) throw e_7.error;
                }
            }
        });
    };
}
function transformCompressEnvelope2(compression, compressMinBytes) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_8, _b2, _c;
            try {
                for(var _d = true, iterable_8 = __asyncValues6(iterable), iterable_8_1; iterable_8_1 = yield __await6(iterable_8.next()), _a18 = iterable_8_1.done, !_a18; _d = true){
                    _c = iterable_8_1.value;
                    _d = false;
                    const env = _c;
                    yield yield __await6(yield __await6((0, envelope_js_1.envelopeCompress)(env, compression, compressMinBytes)));
                }
            } catch (e_8_1) {
                e_8 = {
                    error: e_8_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_8.return)) yield __await6(_b2.call(iterable_8));
                } finally{
                    if (e_8) throw e_8.error;
                }
            }
        });
    };
}
function transformDecompressEnvelope2(compression, readMaxBytes) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_9, _b2, _c;
            try {
                for(var _d = true, iterable_9 = __asyncValues6(iterable), iterable_9_1; iterable_9_1 = yield __await6(iterable_9.next()), _a18 = iterable_9_1.done, !_a18; _d = true){
                    _c = iterable_9_1.value;
                    _d = false;
                    const env = _c;
                    yield yield __await6(yield __await6((0, envelope_js_1.envelopeDecompress)(env, compression, readMaxBytes)));
                }
            } catch (e_9_1) {
                e_9 = {
                    error: e_9_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_9.return)) yield __await6(_b2.call(iterable_9));
                } finally{
                    if (e_9) throw e_9.error;
                }
            }
        });
    };
}
function transformJoinEnvelopes2() {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_10, _b2, _c;
            try {
                for(var _d = true, iterable_10 = __asyncValues6(iterable), iterable_10_1; iterable_10_1 = yield __await6(iterable_10.next()), _a18 = iterable_10_1.done, !_a18; _d = true){
                    _c = iterable_10_1.value;
                    _d = false;
                    const { flags, data } = _c;
                    yield yield __await6((0, envelope_js_1.encodeEnvelope)(flags, data));
                }
            } catch (e_10_1) {
                e_10 = {
                    error: e_10_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_10.return)) yield __await6(_b2.call(iterable_10));
                } finally{
                    if (e_10) throw e_10.error;
                }
            }
        });
    };
}
function transformSplitEnvelope2(readMaxBytes) {
    return function(iterable) {
        return __asyncGenerator6(this, arguments, function*() {
            var _a18, e_11, _b2, _c;
            const buffer = (0, envelope_js_1.createEnvelopeDecoder)(readMaxBytes);
            try {
                for(var _d = true, iterable_11 = __asyncValues6(iterable), iterable_11_1; iterable_11_1 = yield __await6(iterable_11.next()), _a18 = iterable_11_1.done, !_a18; _d = true){
                    _c = iterable_11_1.value;
                    _d = false;
                    const chunk = _c;
                    for (const env of buffer.decode(chunk)){
                        yield yield __await6(env);
                    }
                }
            } catch (e_11_1) {
                e_11 = {
                    error: e_11_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_11.return)) yield __await6(_b2.call(iterable_11));
                } finally{
                    if (e_11) throw e_11.error;
                }
            }
            if (buffer.byteLength > 0) {
                throw new connect_error_js_1.ConnectError("protocol error: incomplete envelope", code_js_1.Code.InvalidArgument);
            }
        });
    };
}
async function readAllBytes2(iterable, readMaxBytes, lengthHint) {
    var _a18, e_12, _b2, _c, _d, e_13, _e2, _f;
    const [ok, hint] = parseLengthHint2(lengthHint);
    if (ok) {
        if (hint > readMaxBytes) {
            (0, limit_io_js_1.assertReadMaxBytes)(readMaxBytes, hint, true);
        }
        const buffer = new Uint8Array(hint);
        let offset2 = 0;
        try {
            for(var _g = true, iterable_12 = __asyncValues6(iterable), iterable_12_1; iterable_12_1 = await iterable_12.next(), _a18 = iterable_12_1.done, !_a18; _g = true){
                _c = iterable_12_1.value;
                _g = false;
                const chunk = _c;
                if (offset2 + chunk.byteLength > hint) {
                    throw new connect_error_js_1.ConnectError(`protocol error: promised ${hint} bytes, received ${offset2 + chunk.byteLength}`, code_js_1.Code.InvalidArgument);
                }
                buffer.set(chunk, offset2);
                offset2 += chunk.byteLength;
            }
        } catch (e_12_1) {
            e_12 = {
                error: e_12_1
            };
        } finally{
            try {
                if (!_g && !_a18 && (_b2 = iterable_12.return)) await _b2.call(iterable_12);
            } finally{
                if (e_12) throw e_12.error;
            }
        }
        if (offset2 < hint) {
            throw new connect_error_js_1.ConnectError(`protocol error: promised ${hint} bytes, received ${offset2}`, code_js_1.Code.InvalidArgument);
        }
        return buffer;
    }
    const chunks = [];
    let count2 = 0;
    try {
        for(var _h = true, iterable_13 = __asyncValues6(iterable), iterable_13_1; iterable_13_1 = await iterable_13.next(), _d = iterable_13_1.done, !_d; _h = true){
            _f = iterable_13_1.value;
            _h = false;
            const chunk = _f;
            count2 += chunk.byteLength;
            (0, limit_io_js_1.assertReadMaxBytes)(readMaxBytes, count2);
            chunks.push(chunk);
        }
    } catch (e_13_1) {
        e_13 = {
            error: e_13_1
        };
    } finally{
        try {
            if (!_h && !_d && (_e2 = iterable_13.return)) await _e2.call(iterable_13);
        } finally{
            if (e_13) throw e_13.error;
        }
    }
    const all = new Uint8Array(count2);
    let offset = 0;
    for(let chunk = chunks.shift(); chunk; chunk = chunks.shift()){
        all.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return all;
}
function parseLengthHint2(lengthHint) {
    if (lengthHint === void 0 || lengthHint === null) {
        return [
            false,
            0
        ];
    }
    const n = typeof lengthHint == "string" ? parseInt(lengthHint, 10) : lengthHint;
    if (!Number.isSafeInteger(n) || n < 0) {
        return [
            false,
            n
        ];
    }
    return [
        true,
        n
    ];
}
async function untilFirst2(iterable) {
    const it2 = iterable[Symbol.asyncIterator]();
    let first = await it2.next();
    return {
        [Symbol.asyncIterator] () {
            const w2 = {
                async next () {
                    if (first !== null) {
                        const n = first;
                        first = null;
                        return n;
                    }
                    return await it2.next();
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
}
function makeIterableAbortable2(iterable) {
    const innerCandidate = iterable[Symbol.asyncIterator]();
    if (innerCandidate.throw === void 0) {
        throw new Error("AsyncIterable does not implement throw");
    }
    const inner = innerCandidate;
    let aborted2;
    let resultPromise;
    let it2 = {
        next () {
            resultPromise = inner.next().finally(()=>{
                resultPromise = void 0;
            });
            return resultPromise;
        },
        throw (e) {
            return inner.throw(e);
        }
    };
    if (innerCandidate.return !== void 0) {
        it2 = Object.assign(Object.assign({}, it2), {
            return (value) {
                return inner.return(value);
            }
        });
    }
    let used = false;
    return {
        abort (reason) {
            if (aborted2) {
                return aborted2.state;
            }
            const f2 = ()=>{
                return inner.throw(reason).then((r)=>r.done === true ? "completed" : "caught", ()=>"rethrown");
            };
            if (resultPromise) {
                aborted2 = {
                    reason,
                    state: resultPromise.then(f2, f2)
                };
                return aborted2.state;
            }
            aborted2 = {
                reason,
                state: f2()
            };
            return aborted2.state;
        },
        [Symbol.asyncIterator] () {
            if (used) {
                throw new Error("AsyncIterable cannot be re-used");
            }
            used = true;
            return it2;
        }
    };
}
function createWritableIterable3() {
    const readQueue = [];
    const writeQueue = [];
    let err = void 0;
    let nextResolve;
    let nextReject;
    let nextPromise = new Promise((resolve36, reject2)=>{
        nextResolve = resolve36;
        nextReject = reject2;
    });
    let closed2 = false;
    function drain() {
        for (const next of readQueue.splice(0, readQueue.length)){
            next({
                done: true,
                value: void 0
            });
        }
    }
    return {
        close () {
            closed2 = true;
            drain();
        },
        async write (payload) {
            if (closed2) {
                throw err !== null && err !== void 0 ? err : new Error("cannot write, WritableIterable already closed");
            }
            const read = readQueue.shift();
            if (read === void 0) {
                writeQueue.push(payload);
            } else {
                read({
                    done: false,
                    value: payload
                });
                if (readQueue.length > 0) {
                    return;
                }
            }
            const limit = writeQueue.length + 1;
            for(let i = 0; i < limit; i++){
                await nextPromise;
            }
        },
        [Symbol.asyncIterator] () {
            return {
                next () {
                    nextResolve();
                    nextPromise = new Promise((resolve36, reject2)=>{
                        nextResolve = resolve36;
                        nextReject = reject2;
                    });
                    const write2 = writeQueue.shift();
                    if (write2 !== void 0) {
                        return Promise.resolve({
                            done: false,
                            value: write2
                        });
                    }
                    if (closed2) {
                        return Promise.resolve({
                            done: true,
                            value: void 0
                        });
                    }
                    let readResolve;
                    const readPromise = new Promise((resolve36)=>readResolve = resolve36);
                    readQueue.push(readResolve);
                    return readPromise;
                },
                throw (throwErr) {
                    err = throwErr;
                    closed2 = true;
                    writeQueue.splice(0, writeQueue.length);
                    nextPromise.catch(()=>{});
                    nextReject(err);
                    drain();
                    return Promise.resolve({
                        done: true,
                        value: void 0
                    });
                },
                return () {
                    closed2 = true;
                    writeQueue.splice(0, writeQueue.length);
                    nextResolve();
                    nextPromise = Promise.reject(new Error("cannot write, consumer called return"));
                    nextPromise.catch(()=>{});
                    drain();
                    return Promise.resolve({
                        done: true,
                        value: void 0
                    });
                }
            };
        }
    };
}
function createAsyncIterable2(items) {
    return __asyncGenerator6(this, arguments, function* createAsyncIterable_1() {
        yield __await6(yield* __asyncDelegator4(__asyncValues6(items)));
    });
}

return exports2;
}
