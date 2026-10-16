import { D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var uyg;
export { uyg };
var __wakaru_j0k_initialized = false;
export function j0k() {
if (__wakaru_j0k_initialized) return;
__wakaru_j0k_initialized = true;
"use strict";
E(), Bt(), uyg = {
    "terminal.integrated.autoReplies": {
        markdownDescription: D(10673, null, '`"Terminate batch job (Y/N)": "Y\\r"`', '`"\\r"`'),
        type: "object",
        additionalProperties: {
            oneOf: [
                {
                    type: "string",
                    description: D(10674, null)
                },
                {
                    type: "null"
                }
            ]
        },
        restricted: !0,
        default: {}
    }
};

}
