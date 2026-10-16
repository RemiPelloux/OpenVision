import { it } from "./buffer.js";
import { h } from "./tslib.es6.js";
import { ye } from "./uri.js";
var _$;
export { _$ };
var __wakaru_JVe_initialized = false;
export function JVe() {
if (__wakaru_JVe_initialized) return;
__wakaru_JVe_initialized = true;
"use strict";
h(), it(), ye(), _$ = new class {
    transformIncoming(e) {
        return e;
    }
    transformOutgoing(e) {
        return e;
    }
    transformOutgoingURI(e) {
        return e;
    }
    transformOutgoingScheme(e) {
        return e;
    }
};

}
