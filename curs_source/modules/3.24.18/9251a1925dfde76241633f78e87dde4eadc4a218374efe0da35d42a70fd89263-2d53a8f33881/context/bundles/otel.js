import { init_core } from "./core.js";
import { createKey } from "../../entry_exports.js";
import { init_esm } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/index.js";
var SPAN_KEY2, ROOT_SPAN_KEY, ROOT_SPAN_START_MS_KEY, SUPPRESS_CHILD_SPANS_KEY, INHERITABLE_SPAN_ATTRIBUTES_KEY, ACTIVE_OTEL_SPAN_ALS, DisposableSpan;
export { ACTIVE_OTEL_SPAN_ALS, DisposableSpan, INHERITABLE_SPAN_ATTRIBUTES_KEY, ROOT_SPAN_KEY, ROOT_SPAN_START_MS_KEY, SPAN_KEY2, SUPPRESS_CHILD_SPANS_KEY };
var __wakaru_init_otel_initialized = false;
export function init_otel() {
if (__wakaru_init_otel_initialized) return;
__wakaru_init_otel_initialized = true;
"use strict";
init_esm();
init_core();
SPAN_KEY2 = createKey(Symbol("otel.span"), void 0);
ROOT_SPAN_KEY = createKey(Symbol("otel.root_span"), void 0);
ROOT_SPAN_START_MS_KEY = createKey(Symbol("otel.root_start_ms"), void 0);
SUPPRESS_CHILD_SPANS_KEY = createKey(Symbol("otel.suppress_child_spans"), false);
INHERITABLE_SPAN_ATTRIBUTES_KEY = createKey(Symbol("otel.inheritable_span_attributes"), {});
ACTIVE_OTEL_SPAN_ALS = Symbol.for("anysphere.context.activeOtelSpanAls");
DisposableSpan = class {
    constructor(ctx, span, shouldEnd = true){
        this.ctx = ctx;
        this.span = span;
        this.shouldEnd = shouldEnd;
    }
    [Symbol.dispose]() {
        if (this.shouldEnd) {
            this.span.end();
        }
    }
};

}
