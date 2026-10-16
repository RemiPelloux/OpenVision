var __wakaru_require_universal_cache;
export function require_universal() {
if (__wakaru_require_universal_cache) return __wakaru_require_universal_cache;
var exports2 = {};
__wakaru_require_universal_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.uResponseVersionNotSupported = exports2.uResponseMethodNotAllowed = exports2.uResponseUnsupportedMediaType = exports2.uResponseNotFound = exports2.uResponseOk = void 0;
exports2.assertByteStreamRequest = assertByteStreamRequest2;
function assertByteStreamRequest2(req) {
    if (typeof req.body == "object" && req.body !== null && Symbol.asyncIterator in req.body) {
        return;
    }
    throw new Error("byte stream required, but received JSON");
}
exports2.uResponseOk = {
    status: 200
};
exports2.uResponseNotFound = {
    status: 404
};
exports2.uResponseUnsupportedMediaType = {
    status: 415
};
exports2.uResponseMethodNotAllowed = {
    status: 405
};
exports2.uResponseVersionNotSupported = {
    status: 505
};

return exports2;
}
