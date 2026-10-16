import { E } from "./tslib.es6.js";
var oTl;
export { oTl };
var __wakaru_dnf_initialized = false;
export function dnf() {
if (__wakaru_dnf_initialized) return;
__wakaru_dnf_initialized = true;
"use strict";
E(), oTl = class YZi {
    static ANNOTATION = /[([{\uFF08\uFF3B\uFF5B\u3010\u3014][^)\]}\uFF09\uFF3D\uFF5D\u3011\u3015]*[)\]}\uFF09\uFF3D\uFF5D\u3011\u3015]?/gu;
    static TRAILING_ROLE = /,[\s\S]*$/u;
    static ofAgent(e) {
        const n = YZi.withoutNote(e);
        return n.length > 0 ? n : e.trim();
    }
    static ofCaller(e) {
        const n = YZi.withoutNote(e ?? "").split(/\s+/u)[0] ?? "";
        return n.length > 0 ? n : null;
    }
    static withoutNote(e) {
        return e.replace(YZi.ANNOTATION, " ").replace(YZi.TRAILING_ROLE, " ").replace(/\s+/gu, " ").trim();
    }
};

}
