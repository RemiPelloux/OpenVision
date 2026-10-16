import { Se, we } from "./HVr.js";
import { bn, wE } from "./async.js";
import { x } from "./tslib.es6.js";
var J5c;
export { J5c };
var __wakaru_Rvg_initialized = false;
export function Rvg() {
if (__wakaru_Rvg_initialized) return;
__wakaru_Rvg_initialized = true;
"use strict";
x(), bn(), Se(), J5c = class extends we {
    constructor(e, t, n){
        super(), this._visibility = e, this._visibleClassName = t, this._invisibleClassName = n, this._domNode = null, this._isVisible = !1, this._isNeeded = !1, this._rawShouldBeVisible = !1, this._shouldBeVisible = !1, this._revealTimer = this._register(new wE);
    }
    setVisibility(e) {
        this._visibility !== e && (this._visibility = e, this._updateShouldBeVisible());
    }
    setShouldBeVisible(e) {
        this._rawShouldBeVisible = e, this._updateShouldBeVisible();
    }
    _applyVisibilitySetting() {
        return this._visibility === 2 ? !1 : this._visibility === 3 ? !0 : this._rawShouldBeVisible;
    }
    _updateShouldBeVisible() {
        const e = this._applyVisibilitySetting();
        this._shouldBeVisible !== e && (this._shouldBeVisible = e, this.ensureVisibility());
    }
    setIsNeeded(e) {
        this._isNeeded !== e && (this._isNeeded = e, this.ensureVisibility());
    }
    setDomNode(e) {
        this._domNode = e, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(!1);
    }
    ensureVisibility() {
        if (!this._isNeeded) {
            this._hide(!1);
            return;
        }
        this._shouldBeVisible ? this._reveal() : this._hide(!0);
    }
    _reveal() {
        this._isVisible || (this._isVisible = !0, this._revealTimer.setIfNotSet(()=>{
            this._domNode?.setClassName(this._visibleClassName);
        }, 0));
    }
    _hide(e) {
        this._revealTimer.cancel(), this._isVisible && (this._isVisible = !1, this._domNode?.setClassName(this._invisibleClassName + (e ? " fade" : "")));
    }
};

}
