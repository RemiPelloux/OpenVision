import { defineOwn, fieldsFromDescriptor, nameFromDescriptor } from "../../../external_exports.js";
import { init_esm2 } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { Message } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/message.js";
var CompactMessage;
export { CompactMessage };
var __wakaru_init_compact_initialized = false;
export function init_compact() {
if (__wakaru_init_compact_initialized) return;
__wakaru_init_compact_initialized = true;
"use strict";
init_esm2();
CompactMessage = class extends Message {
    static get typeName() {
        const cls = this;
        return defineOwn(cls, "typeName", cls.$p() + nameFromDescriptor(cls.$()));
    }
    static get fields() {
        const cls = this;
        const descriptor = cls.$();
        const runtime = cls.runtime;
        const thunk = ()=>fieldsFromDescriptor(runtime, descriptor);
        return defineOwn(cls, "fields", runtime.util.newFieldList(thunk));
    }
};

}
