import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
import { require_headers4 } from "./headers.js";
import { require_query_params } from "./query-params.js";
var __wakaru_require_version_cache;
export function require_version() {
if (__wakaru_require_version_cache) return __wakaru_require_version_cache;
var exports2 = {};
__wakaru_require_version_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.protocolVersion = void 0;
exports2.requireProtocolVersionHeader = requireProtocolVersionHeader2;
exports2.requireProtocolVersionParam = requireProtocolVersionParam2;
var headers_js_1 = require_headers4();
var query_params_js_1 = require_query_params();
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
exports2.protocolVersion = "1";
function requireProtocolVersionHeader2(requestHeader2) {
    const v2 = requestHeader2.get(headers_js_1.headerProtocolVersion);
    if (v2 === null) {
        throw new connect_error_js_1.ConnectError(`missing required header: set ${headers_js_1.headerProtocolVersion} to "${exports2.protocolVersion}"`, code_js_1.Code.InvalidArgument);
    } else if (v2 !== exports2.protocolVersion) {
        throw new connect_error_js_1.ConnectError(`${headers_js_1.headerProtocolVersion} must be "${exports2.protocolVersion}": got "${v2}"`, code_js_1.Code.InvalidArgument);
    }
}
function requireProtocolVersionParam2(queryParams) {
    const v2 = queryParams.get(query_params_js_1.paramConnectVersion);
    if (v2 === null) {
        throw new connect_error_js_1.ConnectError(`missing required parameter: set ${query_params_js_1.paramConnectVersion} to "v${exports2.protocolVersion}"`, code_js_1.Code.InvalidArgument);
    } else if (v2 !== `v${exports2.protocolVersion}`) {
        throw new connect_error_js_1.ConnectError(`${query_params_js_1.paramConnectVersion} must be "v${exports2.protocolVersion}": got "${v2}"`, code_js_1.Code.InvalidArgument);
    }
}

return exports2;
}
