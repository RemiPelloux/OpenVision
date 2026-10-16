import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
import { require_fromSubscribable } from "../observable/fromSubscribable.js";
var __wakaru_require_connect_cache;
export function require_connect() {
if (__wakaru_require_connect_cache) return __wakaru_require_connect_cache;
var exports2 = {};
__wakaru_require_connect_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.connect = void 0;
var Observable_js_1 = require_Observable();
var Subject_js_1 = require_Subject();
var fromSubscribable_js_1 = require_fromSubscribable();
var DEFAULT_CONFIG = {
    connector: ()=>new Subject_js_1.Subject()
};
function connect3(selector, config2 = DEFAULT_CONFIG) {
    const { connector } = config2;
    return (source)=>new Observable_js_1.Observable((subscriber)=>{
            const subject = connector();
            (0, Observable_js_1.from)(selector((0, fromSubscribable_js_1.fromSubscribable)(subject))).subscribe(subscriber);
            subscriber.add(source.subscribe(subject));
        });
}
exports2.connect = connect3;

return exports2;
}
