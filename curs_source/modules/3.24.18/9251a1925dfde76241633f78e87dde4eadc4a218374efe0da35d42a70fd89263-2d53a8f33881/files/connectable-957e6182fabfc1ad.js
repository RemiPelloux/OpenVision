import { require_Observable } from "../Observable.js";
import { require_Subject } from "../Subject.js";
import { require_defer } from "./defer.js";
var __wakaru_require_connectable_cache;
export function require_connectable() {
if (__wakaru_require_connectable_cache) return __wakaru_require_connectable_cache;
var exports2 = {};
__wakaru_require_connectable_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.connectable = void 0;
var Subject_js_1 = require_Subject();
var Observable_js_1 = require_Observable();
var defer_js_1 = require_defer();
var DEFAULT_CONFIG = {
    connector: ()=>new Subject_js_1.Subject(),
    resetOnDisconnect: true
};
function connectable(source, config2 = DEFAULT_CONFIG) {
    let connection = null;
    const { connector, resetOnDisconnect = true } = config2;
    let subject = connector();
    const result = new Observable_js_1.Observable((subscriber)=>{
        return subject.subscribe(subscriber);
    });
    result.connect = ()=>{
        if (!connection || connection.closed) {
            connection = (0, defer_js_1.defer)(()=>source).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(()=>subject = connector());
            }
        }
        return connection;
    };
    return result;
}
exports2.connectable = connectable;

return exports2;
}
