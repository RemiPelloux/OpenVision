import { init_scanner } from "./scanner.js";
var ParseOptions;
export { ParseOptions };
var __wakaru_init_parser_initialized = false;
export function init_parser() {
if (__wakaru_init_parser_initialized) return;
__wakaru_init_parser_initialized = true;
"use strict";
init_scanner();
(function(ParseOptions2) {
    ParseOptions2.DEFAULT = {
        allowTrailingComma: false
    };
})(ParseOptions || (ParseOptions = {}));

}
