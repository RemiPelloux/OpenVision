import { Qe, st } from "./Iwo.js";
import { ZE, qn } from "./async.js";
import { E } from "./tslib.es6.js";
var pjd;
export { pjd };
var __wakaru_wMy_initialized = false;
export function wMy() {
if (__wakaru_wMy_initialized) return;
__wakaru_wMy_initialized = true;
"use strict";
E(), qn(), Qe(), pjd = class extends st {
    constructor(t, e, n){
        super(), this._visibility = t, this._visibleClassName = e, this._invisibleClassName = n, this._domNode = null, this._isVisible = !1, this._isNeeded = !1, this._rawShouldBeVisible = !1, this._shouldBeVisible = !1, this._revealTimer = this._register(new ZE);
    }
    setVisibility(t) {
        this._visibility !== t && (this._visibility = t, this._updateShouldBeVisible());
    }
    setShouldBeVisible(t) {
        this._rawShouldBeVisible = t, this._updateShouldBeVisible();
    }
    _applyVisibilitySetting() {
        return this._visibility === 2 ? !1 : this._visibility === 3 ? !0 : this._rawShouldBeVisible;
    }
    _updateShouldBeVisible() {
        const t = this._applyVisibilitySetting();
        this._shouldBeVisible !== t && (this._shouldBeVisible = t, this.ensureVisibility());
    }
    setIsNeeded(t) {
        this._isNeeded !== t && (this._isNeeded = t, this.ensureVisibility());
    }
    setDomNode(t) {
        this._domNode = t, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(!1);
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
    _hide(t) {
        this._revealTimer.cancel(), this._isVisible && (this._isVisible = !1, this._domNode?.setClassName(this._invisibleClassName + (t ? " fade" : "")));
    }
};

}
