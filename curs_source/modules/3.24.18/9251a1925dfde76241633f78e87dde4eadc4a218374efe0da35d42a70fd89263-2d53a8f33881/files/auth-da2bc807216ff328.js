import { init_errors6 } from "../server/auth/errors.js";
import { init_auth_utils } from "../shared/auth-utils.js";
import { init_auth2 } from "../shared/auth.js";
import { init_types8 } from "../types.js";
import { init_index_node } from "../../../../../../../pkce-challenge@5.0.0/node_modules/pkce-challenge/dist/index.node.js";
var UnauthorizedError, __CURSOR_OFFLINE_ACCESS_SCOPE, AUTHORIZATION_CODE_RESPONSE_TYPE, AUTHORIZATION_CODE_CHALLENGE_METHOD;
export { AUTHORIZATION_CODE_CHALLENGE_METHOD, AUTHORIZATION_CODE_RESPONSE_TYPE, UnauthorizedError, __CURSOR_OFFLINE_ACCESS_SCOPE };
var __wakaru_init_auth3_initialized = false;
export function init_auth3() {
if (__wakaru_init_auth3_initialized) return;
__wakaru_init_auth3_initialized = true;
init_index_node();
init_types8();
init_auth2();
init_auth2();
init_auth_utils();
init_errors6();
UnauthorizedError = class extends Error {
    constructor(message){
        super(message ?? "Unauthorized");
    }
};
__CURSOR_OFFLINE_ACCESS_SCOPE = "offline_access";
AUTHORIZATION_CODE_RESPONSE_TYPE = "code";
AUTHORIZATION_CODE_CHALLENGE_METHOD = "S256";

}
