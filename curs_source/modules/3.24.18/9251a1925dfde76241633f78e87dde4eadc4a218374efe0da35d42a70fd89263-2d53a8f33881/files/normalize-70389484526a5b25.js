var __wakaru_require_normalize_cache;
export function require_normalize() {
if (__wakaru_require_normalize_cache) return __wakaru_require_normalize_cache;
var exports2 = {};
__wakaru_require_normalize_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.normalize = normalize6;
exports2.normalizeIterable = normalizeIterable2;
function normalize6(type2, message) {
    return message instanceof type2 ? message : new type2(message);
}
function normalizeIterable2(messageType, input) {
    function transform2(result) {
        if (result.done === true) {
            return result;
        }
        return {
            done: result.done,
            value: normalize6(messageType, result.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const it2 = input[Symbol.asyncIterator]();
            const res = {
                next: ()=>it2.next().then(transform2)
            };
            if (it2.throw !== void 0) {
                res.throw = (e)=>it2.throw(e).then(transform2);
            }
            if (it2.return !== void 0) {
                res.return = (v2)=>it2.return(v2).then(transform2);
            }
            return res;
        }
    };
}

return exports2;
}
