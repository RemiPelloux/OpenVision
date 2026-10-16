import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_interceptor } from "../interceptor.js";
import { init_normalize2 } from "./normalize.js";
var __await3, __asyncGenerator3, __asyncValues3, __asyncDelegator3;
export { __asyncDelegator3, __asyncGenerator3, __asyncValues3, __await3 };
var __wakaru_init_invoke_implementation_initialized = false;
export function init_invoke_implementation() {
if (__wakaru_init_invoke_implementation_initialized) return;
__wakaru_init_invoke_implementation_initialized = true;
init_esm2();
init_connect_error();
init_code();
init_normalize2();
init_interceptor();
__await3 = function(v2) {
    return this instanceof __await3 ? (this.v = v2, this) : new __await3(v2);
};
__asyncGenerator3 = function(thisArg, _arguments, generator) {
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
        r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject2) : settle(q2[0][2], r);
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
__asyncValues3 = function(o) {
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
__asyncDelegator3 = function(o) {
    var i, p2;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f2) {
        i[n] = o[n] ? function(v2) {
            return (p2 = !p2) ? {
                value: __await3(o[n](v2)),
                done: false
            } : f2 ? f2(v2) : v2;
        } : f2;
    }
};

}
