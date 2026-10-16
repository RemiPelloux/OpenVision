import { init_extension_accessor } from "../extension-accessor.js";
import { init_is_message } from "../is-message.js";
import { init_assert } from "./assert.js";
import { init_extensions } from "./extensions.js";
import { init_field_wrapper } from "./field-wrapper.js";
import { init_reflect } from "./reflect.js";
import { init_scalars } from "./scalars.js";
import { init_proto_base64 } from "../proto-base64.js";
import { init_proto_int64 } from "../proto-int64.js";
import { init_scalar } from "../scalar.js";
var jsonReadDefaults, jsonWriteDefaults, tokenNull, tokenIgnoredUnknownEnum;
export { jsonReadDefaults, jsonWriteDefaults, tokenIgnoredUnknownEnum, tokenNull };
var __wakaru_init_json_format_initialized = false;
export function init_json_format() {
if (__wakaru_init_json_format_initialized) return;
__wakaru_init_json_format_initialized = true;
init_assert();
init_proto_int64();
init_proto_base64();
init_extensions();
init_extension_accessor();
init_reflect();
init_field_wrapper();
init_scalars();
init_scalars();
init_scalar();
init_is_message();
jsonReadDefaults = {
    ignoreUnknownFields: false
};
jsonWriteDefaults = {
    emitDefaultValues: false,
    enumAsInteger: false,
    useProtoFieldName: false,
    prettySpaces: 0
};
tokenNull = Symbol();
tokenIgnoredUnknownEnum = Symbol();

}
