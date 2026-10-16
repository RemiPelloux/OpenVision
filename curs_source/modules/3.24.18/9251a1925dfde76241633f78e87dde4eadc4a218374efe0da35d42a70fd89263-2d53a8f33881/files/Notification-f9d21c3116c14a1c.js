var __wakaru_require_Notification_cache;
export function require_Notification() {
if (__wakaru_require_Notification_cache) return __wakaru_require_Notification_cache;
var exports2 = {};
__wakaru_require_Notification_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.observeNotification = void 0;
function observeNotification(notification, observer) {
    const { kind, value, error: error3 } = notification;
    if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === "N" ? observer.next?.(value) : kind === "E" ? observer.error?.(error3) : observer.complete?.();
}
exports2.observeNotification = observeNotification;

return exports2;
}
