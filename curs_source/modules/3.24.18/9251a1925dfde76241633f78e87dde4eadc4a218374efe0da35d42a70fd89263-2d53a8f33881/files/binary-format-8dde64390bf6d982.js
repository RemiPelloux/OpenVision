import { BinaryReader, BinaryWriter, init_binary_encoding } from "../binary-encoding.js";
import { init_is_message } from "../is-message.js";
import { init_assert } from "./assert.js";
import { init_field_wrapper } from "./field-wrapper.js";
import { init_reflect } from "./reflect.js";
import { init_scalars } from "./scalars.js";
import { init_scalar } from "../scalar.js";
var unknownFieldsSymbol, readDefaults, writeDefaults;
export { readDefaults, unknownFieldsSymbol, writeDefaults };
var __wakaru_init_binary_format_initialized = false;
export function init_binary_format() {
if (__wakaru_init_binary_format_initialized) return;
__wakaru_init_binary_format_initialized = true;
init_binary_encoding();
init_field_wrapper();
init_scalars();
init_assert();
init_reflect();
init_scalar();
init_is_message();
unknownFieldsSymbol = Symbol("@bufbuild/protobuf/unknown-fields");
readDefaults = {
    readUnknownFields: true,
    readerFactory: (bytes)=>new BinaryReader(bytes)
};
writeDefaults = {
    writeUnknownFields: true,
    writerFactory: ()=>new BinaryWriter()
};

}
