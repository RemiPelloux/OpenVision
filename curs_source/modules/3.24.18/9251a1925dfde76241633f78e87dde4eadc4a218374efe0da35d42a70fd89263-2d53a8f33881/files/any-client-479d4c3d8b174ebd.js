var __wakaru_require_any_client_cache;
export function require_any_client() {
if (__wakaru_require_any_client_cache) return __wakaru_require_any_client_cache;
var exports2 = {};
__wakaru_require_any_client_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.makeAnyClient = makeAnyClient2;
function makeAnyClient2(service, createMethod) {
    const client = {};
    for (const [localName, methodInfo] of Object.entries(service.methods)){
        const method = createMethod(Object.assign(Object.assign({}, methodInfo), {
            localName,
            service
        }));
        if (method != null) {
            client[localName] = method;
        }
    }
    return client;
}

return exports2;
}
