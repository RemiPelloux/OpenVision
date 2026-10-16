var __wakaru_require_create_method_url_cache;
export function require_create_method_url() {
if (__wakaru_require_create_method_url_cache) return __wakaru_require_create_method_url_cache;
var exports2 = {};
__wakaru_require_create_method_url_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createMethodUrl = createMethodUrl2;
function createMethodUrl2(baseUrl, service, method) {
    const s3 = typeof service == "string" ? service : service.typeName;
    const m2 = typeof method == "string" ? method : method.name;
    return baseUrl.toString().replace(/\/?$/, `/${s3}/${m2}`);
}

return exports2;
}
