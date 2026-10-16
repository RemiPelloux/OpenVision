import { require_Observable } from "../Observable.js";
import { require_mapOneOrManyArgs } from "../util/mapOneOrManyArgs.js";
var __wakaru_require_fromEvent_cache;
export function require_fromEvent() {
if (__wakaru_require_fromEvent_cache) return __wakaru_require_fromEvent_cache;
var exports2 = {};
__wakaru_require_fromEvent_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.fromEvent = void 0;
var Observable_js_1 = require_Observable();
var mapOneOrManyArgs_js_1 = require_mapOneOrManyArgs();
var nodeEventEmitterMethods = [
    "addListener",
    "removeListener"
];
var eventTargetMethods = [
    "addEventListener",
    "removeEventListener"
];
var jqueryMethods = [
    "on",
    "off"
];
function fromEvent(target, eventName, options2, resultSelector) {
    if ((0, Observable_js_1.isFunction)(options2)) {
        resultSelector = options2;
        options2 = void 0;
    }
    if (resultSelector) {
        return (0, mapOneOrManyArgs_js_1.mapOneOrManyArgs)(resultSelector)(fromEvent(target, eventName, options2));
    }
    const isValidTarget = isNodeStyleEventEmitter(target) || isJQueryStyleEventEmitter(target) || isEventTarget(target);
    if (!isValidTarget && !(0, Observable_js_1.isArrayLike)(target)) {
        throw new TypeError("Invalid event target");
    }
    return new Observable_js_1.Observable((subscriber)=>{
        const handler = (...args)=>subscriber.next(1 < args.length ? args : args[0]);
        if (isValidTarget) {
            doSubscribe(handler, subscriber, target, eventName, options2);
        } else {
            for(let i = 0; i < target.length && !subscriber.closed; i++){
                const subTarget = target[i];
                doSubscribe(handler, subscriber, subTarget, eventName, options2);
            }
        }
    });
}
exports2.fromEvent = fromEvent;
function doSubscribe(handler, subscriber, subTarget, eventName, options2) {
    const [addMethod, removeMethod] = getRegistryMethodNames(subTarget);
    if (!addMethod || !removeMethod) {
        throw new TypeError("Invalid event target");
    }
    subTarget[addMethod](eventName, handler, options2);
    subscriber.add(()=>subTarget[removeMethod](eventName, handler, options2));
}
function getRegistryMethodNames(target) {
    return isEventTarget(target) ? eventTargetMethods : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods : isJQueryStyleEventEmitter(target) ? jqueryMethods : [];
}
function isNodeStyleEventEmitter(target) {
    return (0, Observable_js_1.isFunction)(target.addListener) && (0, Observable_js_1.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return (0, Observable_js_1.isFunction)(target.on) && (0, Observable_js_1.isFunction)(target.off);
}
function isEventTarget(target) {
    return (0, Observable_js_1.isFunction)(target.addEventListener) && (0, Observable_js_1.isFunction)(target.removeEventListener);
}

return exports2;
}
