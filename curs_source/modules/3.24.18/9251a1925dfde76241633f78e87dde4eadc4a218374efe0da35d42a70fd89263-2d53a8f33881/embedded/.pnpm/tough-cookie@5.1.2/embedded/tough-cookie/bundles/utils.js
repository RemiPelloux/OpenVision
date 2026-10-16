var __wakaru_require_utils2_cache;
export function require_utils2() {
if (__wakaru_require_utils2_cache) return __wakaru_require_utils2_cache;
var exports2 = {};
__wakaru_require_utils2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.safeToString = exports2.objectToString = void 0;
exports2.createPromiseCallback = createPromiseCallback;
exports2.inOperator = inOperator;
var objectToString = (obj)=>Object.prototype.toString.call(obj);
exports2.objectToString = objectToString;
var safeArrayToString = (arr, seenArrays)=>{
    if (typeof arr.join !== "function") return (0, exports2.objectToString)(arr);
    seenArrays.add(arr);
    const mapped = arr.map((val)=>val === null || val === void 0 || seenArrays.has(val) ? "" : safeToStringImpl(val, seenArrays));
    return mapped.join();
};
var safeToStringImpl = (val, seenArrays = new WeakSet())=>{
    if (typeof val !== "object" || val === null) {
        return String(val);
    } else if (typeof val.toString === "function") {
        return Array.isArray(val) ? (safeArrayToString(val, seenArrays)) : (String(val));
    } else {
        return (0, exports2.objectToString)(val);
    }
};
var safeToString = (val)=>safeToStringImpl(val);
exports2.safeToString = safeToString;
function createPromiseCallback(cb) {
    let callback;
    let resolve36;
    let reject2;
    const promise = new Promise((_resolve, _reject)=>{
        resolve36 = _resolve;
        reject2 = _reject;
    });
    if (typeof cb === "function") {
        callback = (err, result)=>{
            try {
                if (err) cb(err);
                else cb(null, result);
            } catch (e) {
                reject2(e instanceof Error ? e : new Error());
            }
        };
    } else {
        callback = (err, result)=>{
            try {
                if (err) reject2(err);
                else resolve36(result);
            } catch (e) {
                reject2(e instanceof Error ? e : new Error());
            }
        };
    }
    return {
        promise,
        callback,
        resolve: (value)=>{
            callback(null, value);
            return promise;
        },
        reject: (error3)=>{
            callback(error3);
            return promise;
        }
    };
}
function inOperator(k2, o) {
    return k2 in o;
}

return exports2;
}
