import { HBt } from "./composite.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { C5 } from "./owner.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
var Lil;
export { Lil };
var __wakaru_Lds_initialized = false;
export function Lds() {
if (__wakaru_Lds_initialized) return;
__wakaru_Lds_initialized = true;
x(), D0(), C5(), HBt(), cN(), Lil = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';

}
