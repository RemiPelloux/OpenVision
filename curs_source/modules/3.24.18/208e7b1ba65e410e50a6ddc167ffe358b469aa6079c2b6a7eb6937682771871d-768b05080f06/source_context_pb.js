import { $r, fe } from "./message.js";
import { $s, c } from "./proto3.js";
import { h } from "./tslib.es6.js";
var _g, Ey;
export { Ey, _g };
var __wakaru_qM_initialized = false;
export function qM() {
if (__wakaru_qM_initialized) return;
__wakaru_qM_initialized = true;
"use strict";
h(), $r(), $s(), _g = class cv extends fe {
    constructor(t){
        super(), this.fileName = "", c.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new cv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new cv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new cv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(cv, t, n);
    }
}, _g.runtime = c, _g.typeName = "google.protobuf.SourceContext", _g.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }
    ]), Ey = _g;

}
