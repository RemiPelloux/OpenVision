import { Qe, st } from "./Iwo.js";
import { Ud } from "./editorExtensions.js";
import { Ma, ut } from "./keyCodes.js";
import { E } from "./tslib.es6.js";
import { sv } from "./ze.js";
var tlt;
export { tlt };
var __wakaru_zxi_initialized = false;
export function zxi() {
if (__wakaru_zxi_initialized) return;
__wakaru_zxi_initialized = true;
"use strict";
E(), Ma(), Qe(), Ud(), tlt = class extends st {
    constructor(t){
        super(), this._editor = t, this._altListeningMouse = !1, this._altMouseTriggered = !1, this._register(this._editor.onMouseDown((e)=>{
            this._altListeningMouse && (this._altMouseTriggered = !0);
        })), this._register(this._editor.onKeyDown((e)=>{
            e.equals(ut.Alt) && (this._altListeningMouse || (this._altMouseTriggered = !1), this._altListeningMouse = !0);
        })), this._register(this._editor.onKeyUp((e)=>{
            e.equals(ut.Alt) && (this._altMouseTriggered && e.preventDefault(), this._altListeningMouse = !1, this._altMouseTriggered = !1);
        }));
    }
}, tlt.ID = "editor.contrib.menuPreventer", sv(tlt.ID, tlt, 2);

}
