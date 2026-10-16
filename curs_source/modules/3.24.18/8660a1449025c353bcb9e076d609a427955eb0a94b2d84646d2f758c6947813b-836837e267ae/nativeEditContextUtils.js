import { Qe, st } from "./Iwo.js";
import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
import { RC, li, xbt } from "./ze.js";
var uHd;
export { uHd };
var __wakaru_KDy_initialized = false;
export function KDy() {
if (__wakaru_KDy_initialized) return;
__wakaru_KDy_initialized = true;
"use strict";
E(), Hn(), Qe(), uHd = class extends st {
    constructor(t, e){
        super(), this._domNode = t, this._onFocusChange = e, this._isFocused = !1, this._isPaused = !1, this._register(li(this._domNode, "focus", ()=>{
            this._isPaused || this.refreshFocusState();
        })), this._register(li(this._domNode, "blur", ()=>{
            this._isPaused || this._handleFocusedChanged(!1);
        }));
    }
    pause() {
        this._isPaused = !0;
    }
    resume() {
        this._isPaused = !1, this.refreshFocusState();
    }
    _handleFocusedChanged(t) {
        this._isFocused !== t && (this._isFocused = t, this._onFocusChange(this._isFocused));
    }
    focus() {
        this._domNode.focus(), this.refreshFocusState();
    }
    refreshFocusState() {
        const t = xbt(this._domNode), e = t ? t.activeElement : RC(), n = this._domNode === e;
        this._handleFocusedChanged(n);
    }
    get isFocused() {
        return this._isFocused;
    }
};

}
