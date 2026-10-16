import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_code_string } from "./code-string.js";
var __rest;
export { __rest };
var __wakaru_init_error_json_initialized = false;
export function init_error_json() {
if (__wakaru_init_error_json_initialized) return;
__wakaru_init_error_json_initialized = true;
init_esm2();
init_code();
init_connect_error();
init_code_string();
__rest = function(s3, e) {
    var t = {};
    for(var p2 in s3)if (Object.prototype.hasOwnProperty.call(s3, p2) && e.indexOf(p2) < 0) t[p2] = s3[p2];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p2 = Object.getOwnPropertySymbols(s3); i < p2.length; i++){
        if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p2[i])) t[p2[i]] = s3[p2[i]];
    }
    return t;
};

}
