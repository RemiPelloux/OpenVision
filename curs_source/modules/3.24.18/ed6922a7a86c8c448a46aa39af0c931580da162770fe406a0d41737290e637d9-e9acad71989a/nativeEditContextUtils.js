import { Se, we } from "./HVr.js";
import { en } from "./dom_2.js";
import { WS, Xqe, Xt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var X6c;
export { X6c };
var __wakaru_tbg_initialized = false;
export function tbg() {
if (__wakaru_tbg_initialized) return;
__wakaru_tbg_initialized = true;
"use strict";
x(), en(), Se(), X6c = class extends we {
    constructor(e, t){
        super(), this._domNode = e, this._onFocusChange = t, this._isFocused = !1, this._isPaused = !1, this._register(Xt(this._domNode, "focus", ()=>{
            this._isPaused || this.refreshFocusState();
        })), this._register(Xt(this._domNode, "blur", ()=>{
            this._isPaused || this._handleFocusedChanged(!1);
        }));
    }
    pause() {
        this._isPaused = !0;
    }
    resume() {
        this._isPaused = !1, this.refreshFocusState();
    }
    _handleFocusedChanged(e) {
        this._isFocused !== e && (this._isFocused = e, this._onFocusChange(this._isFocused));
    }
    focus() {
        this._domNode.focus(), this.refreshFocusState();
    }
    refreshFocusState() {
        const e = Xqe(this._domNode), t = e ? e.activeElement : WS(), n = this._domNode === t;
        this._handleFocusedChanged(n);
    }
    get isFocused() {
        return this._isFocused;
    }
};

}
