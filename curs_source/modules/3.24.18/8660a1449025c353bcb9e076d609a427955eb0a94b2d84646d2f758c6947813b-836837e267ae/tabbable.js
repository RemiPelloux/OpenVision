import { tbn } from "./composite.js";
import { aT } from "./floating-ui.utils.dom.js";
import { hB } from "./owner.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
var boh;
export { boh };
var __wakaru_NQo_initialized = false;
export function NQo() {
if (__wakaru_NQo_initialized) return;
__wakaru_NQo_initialized = true;
E(), aT(), hB(), tbn(), $D(), boh = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';

}
