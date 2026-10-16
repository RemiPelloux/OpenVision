import { f8t } from "./Pair.js";
import { _8t } from "./YAMLMap.js";
import { y8t } from "./YAMLSeq.js";
import { lR } from "./identity.js";
import { Vai } from "./resolve-end.js";
import { Zxr } from "./resolve-props.js";
import { E } from "./tslib.es6.js";
import { GYo } from "./util-contains-newline.js";
import { leh } from "./util-map-includes.js";
var Qxr, Jxr;
export { Jxr, Qxr };
var __wakaru_k4y_initialized = false;
export function k4y() {
if (__wakaru_k4y_initialized) return;
__wakaru_k4y_initialized = true;
E(), lR(), f8t(), _8t(), y8t(), Vai(), Zxr(), GYo(), leh(), Qxr = "Block collections are not allowed within flow collections", Jxr = (t)=>t && (t.type === "block-map" || t.type === "block-seq");

}
