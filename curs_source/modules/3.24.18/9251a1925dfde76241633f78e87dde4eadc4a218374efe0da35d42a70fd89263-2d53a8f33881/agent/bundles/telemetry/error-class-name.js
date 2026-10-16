import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var IDENTIFIER, BUILT_IN_ERROR_CLASSES;
export { BUILT_IN_ERROR_CLASSES, IDENTIFIER };
var __wakaru_init_error_class_name_initialized = false;
export function init_error_class_name() {
if (__wakaru_init_error_class_name_initialized) return;
__wakaru_init_error_class_name_initialized = true;
"use strict";
init_esm3();
IDENTIFIER = /^[A-Za-z_$][\w$]{0,63}$/;
BUILT_IN_ERROR_CLASSES = [
    ...typeof DOMException === "function" ? [
        [
            DOMException,
            "DOMException"
        ]
    ] : [],
    [
        AggregateError,
        "AggregateError"
    ],
    [
        EvalError,
        "EvalError"
    ],
    [
        RangeError,
        "RangeError"
    ],
    [
        ReferenceError,
        "ReferenceError"
    ],
    [
        SyntaxError,
        "SyntaxError"
    ],
    [
        TypeError,
        "TypeError"
    ],
    [
        URIError,
        "URIError"
    ]
];

}
