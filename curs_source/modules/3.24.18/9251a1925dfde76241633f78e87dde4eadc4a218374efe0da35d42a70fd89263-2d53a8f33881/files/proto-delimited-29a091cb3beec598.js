import { require_binary_encoding } from "./binary-encoding.js";
var __wakaru_require_proto_delimited_cache;
export function require_proto_delimited() {
if (__wakaru_require_proto_delimited_cache) return __wakaru_require_proto_delimited_cache;
var exports2 = {};
__wakaru_require_proto_delimited_cache = exports2;
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
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.protoDelimited = void 0;
var binary_encoding_js_1 = require_binary_encoding();
exports2.protoDelimited = {
    enc (message, options2) {
        const opt = message.getType().runtime.bin.makeWriteOptions(options2);
        return opt.writerFactory().bytes(message.toBinary(opt)).finish();
    },
    dec (type2, bytes, options2) {
        const opt = type2.runtime.bin.makeReadOptions(options2);
        return type2.fromBinary(opt.readerFactory(bytes).bytes(), opt);
    },
    decStream (type2, iterable) {
        return __asyncGenerator6(this, arguments, function* decStream_1() {
            var _a18, e_1, _b2, _c;
            function append(buffer2, chunk) {
                const n = new Uint8Array(buffer2.byteLength + chunk.byteLength);
                n.set(buffer2);
                n.set(chunk, buffer2.length);
                return n;
            }
            let buffer = new Uint8Array(0);
            try {
                for(var _d = true, iterable_1 = __asyncValues6(iterable), iterable_1_1; iterable_1_1 = yield __await6(iterable_1.next()), _a18 = iterable_1_1.done, !_a18; _d = true){
                    _c = iterable_1_1.value;
                    _d = false;
                    const chunk = _c;
                    buffer = append(buffer, chunk);
                    for(;;){
                        const size = exports2.protoDelimited.peekSize(buffer);
                        if (size.eof) {
                            break;
                        }
                        if (size.offset + size.size > buffer.byteLength) {
                            break;
                        }
                        yield yield __await6(exports2.protoDelimited.dec(type2, buffer));
                        buffer = buffer.subarray(size.offset + size.size);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (!_d && !_a18 && (_b2 = iterable_1.return)) yield __await6(_b2.call(iterable_1));
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (buffer.byteLength > 0) {
                throw new Error("incomplete data");
            }
        });
    },
    peekSize (data) {
        const sizeEof = {
            eof: true,
            size: null,
            offset: null
        };
        for(let i = 0; i < 10; i++){
            if (i > data.byteLength) {
                return sizeEof;
            }
            if ((data[i] & 128) == 0) {
                const reader = new binary_encoding_js_1.BinaryReader(data);
                let size;
                try {
                    size = reader.uint32();
                } catch (e) {
                    if (e instanceof RangeError) {
                        return sizeEof;
                    }
                    throw e;
                }
                return {
                    eof: false,
                    size,
                    offset: reader.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};

return exports2;
}
