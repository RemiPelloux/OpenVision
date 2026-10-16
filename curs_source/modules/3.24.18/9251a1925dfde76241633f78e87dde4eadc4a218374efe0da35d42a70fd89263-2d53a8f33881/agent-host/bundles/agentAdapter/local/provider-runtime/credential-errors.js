import { init_dist9 } from "../../../../../agent-client/dist/index.js";
import { init_api_key_helper } from "./api-key-helper.js";
import { init_helper_authorized_fetch } from "./helper-authorized-fetch.js";
import { init_dist25 } from "../../../../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
var RESPONSE_BODY_EXCERPT_CHARS, SIGN_IN_HINT;
export { RESPONSE_BODY_EXCERPT_CHARS, SIGN_IN_HINT };
var __wakaru_init_credential_errors_initialized = false;
export function init_credential_errors() {
if (__wakaru_init_credential_errors_initialized) return;
__wakaru_init_credential_errors_initialized = true;
"use strict";
init_dist9();
init_dist25();
init_api_key_helper();
init_helper_authorized_fetch();
RESPONSE_BODY_EXCERPT_CHARS = 300;
SIGN_IN_HINT = "Re-run your credential helper's sign-in step (for example your SSO login), then send the message again.";

}
