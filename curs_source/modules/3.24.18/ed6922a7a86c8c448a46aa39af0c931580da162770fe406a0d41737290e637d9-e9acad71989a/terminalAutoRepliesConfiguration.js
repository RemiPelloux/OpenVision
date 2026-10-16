import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var yMh;
export { yMh };
var __wakaru_Dr__initialized = false;
export function Dr_() {
if (__wakaru_Dr__initialized) return;
__wakaru_Dr__initialized = true;
"use strict";
x(), rt(), yMh = {
    "terminal.integrated.autoReplies": {
        markdownDescription: S(10673, null, '`"Terminate batch job (Y/N)": "Y\\r"`', '`"\\r"`'),
        type: "object",
        additionalProperties: {
            oneOf: [
                {
                    type: "string",
                    description: S(10674, null)
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
