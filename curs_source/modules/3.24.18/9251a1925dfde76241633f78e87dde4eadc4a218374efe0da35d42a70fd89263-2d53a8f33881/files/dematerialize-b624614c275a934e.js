import { require_Notification } from "../Notification.js";
import { require_Observable } from "../Observable.js";
var __wakaru_require_dematerialize_cache;
export function require_dematerialize() {
if (__wakaru_require_dematerialize_cache) return __wakaru_require_dematerialize_cache;
var exports2 = {};
__wakaru_require_dematerialize_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.dematerialize = void 0;
var Notification_js_1 = require_Notification();
var Observable_js_1 = require_Observable();
function dematerialize() {
    return (source)=>new Observable_js_1.Observable((destination)=>{
            source.subscribe((0, Observable_js_1.operate)({
                destination,
                next: (notification)=>(0, Notification_js_1.observeNotification)(notification, destination)
            }));
        });
}
exports2.dematerialize = dematerialize;

return exports2;
}
