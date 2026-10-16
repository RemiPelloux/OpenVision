import { x } from "./tslib.es6.js";
var jMo;
export { jMo };
var __wakaru_Z6h_initialized = false;
export function Z6h() {
if (__wakaru_Z6h_initialized) return;
__wakaru_Z6h_initialized = true;
"use strict";
x(), jMo = class _Qn {
    static ANNOTATION = /[([{\uFF08\uFF3B\uFF5B\u3010\u3014][^)\]}\uFF09\uFF3D\uFF5D\u3011\u3015]*[)\]}\uFF09\uFF3D\uFF5D\u3011\u3015]?/gu;
    static TRAILING_ROLE = /,[\s\S]*$/u;
    static ofAgent(t) {
        const n = _Qn.withoutNote(t);
        return n.length > 0 ? n : t.trim();
    }
    static ofCaller(t) {
        const n = _Qn.withoutNote(t ?? "").split(/\s+/u)[0] ?? "";
        return n.length > 0 ? n : null;
    }
    static withoutNote(t) {
        return t.replace(_Qn.ANNOTATION, " ").replace(_Qn.TRAILING_ROLE, " ").replace(/\s+/gu, " ").trim();
    }
};

}
