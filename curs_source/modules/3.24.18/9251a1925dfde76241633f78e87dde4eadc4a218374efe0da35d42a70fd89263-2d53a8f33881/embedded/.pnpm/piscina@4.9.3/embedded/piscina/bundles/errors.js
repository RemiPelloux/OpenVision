var __wakaru_require_errors4_cache;
export function require_errors4() {
if (__wakaru_require_errors4_cache) return __wakaru_require_errors4_cache;
var exports2 = {};
__wakaru_require_errors4_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.Errors = void 0;
exports2.Errors = {
    ThreadTermination: ()=>new Error("Terminating worker thread"),
    FilenameNotProvided: ()=>new Error("filename must be provided to run() or in options object"),
    TaskQueueAtLimit: ()=>new Error("Task queue is at limit"),
    NoTaskQueueAvailable: ()=>new Error("No task queue available and all Workers are busy"),
    CloseTimeout: ()=>new Error("Close operation timed out")
};

return exports2;
}
