import { C, ie } from "./actions_2.js";
import { Lv, ka } from "./contextView.js";
import { At, dn, xn } from "./contextkey.js";
import { du, va } from "./hover.js";
import { no, qr } from "./keybinding.js";
import { Unt, X0t } from "./simpleFindWidget.js";
import { x } from "./tslib.es6.js";
var vGh, csr;
export { csr, vGh };
var __wakaru__Gh_initialized = false;
export function _Gh() {
if (__wakaru__Gh_initialized) return;
__wakaru__Gh_initialized = true;
"use strict";
x(), dn(), ka(), du(), no(), X0t(), vGh = new At("htmlFindWidgetFocused", !1), csr = class extends Unt {
    constructor(e, t, n, i, r){
        super({
            showCommonFindToggles: !0,
            checkImeCompletionState: e.checkImeCompletionState,
            enableSash: !0,
            showResultCount: !0,
            initialWidth: 419
        }, t, n, i, r), this._delegate = e, this._findWidgetFocused = vGh.bindTo(n), this._register(e.hasFindResult((s)=>{
            this.updateButtons(s), this.focusFindBox();
        })), this._register(e.onDidStopFind(()=>{
            this.updateButtons(!1);
        }));
    }
    async _getResultCount() {
        return this._delegate.getResultCount();
    }
    find(e) {
        const t = this.inputValue;
        t && (this._delegate.find(t, e), this.updateResultCount());
    }
    hide(e = !0) {
        super.hide(e), this._delegate.stopFind(!0), this._delegate.focus();
    }
    _onInputChanged() {
        const e = this.inputValue;
        return e ? this._delegate.updateFind(e, {
            isRegex: this._getRegexValue(),
            isCaseSensitive: this._getCaseSensitiveValue(),
            isWholeWord: this._getWholeWordValue()
        }) : this._delegate.stopFind(!1), !1;
    }
    _onFocusTrackerFocus() {
        this._findWidgetFocused.set(!0);
    }
    _onFocusTrackerBlur() {
        this._findWidgetFocused.reset();
    }
    _onFindInputFocusTrackerFocus() {}
    _onFindInputFocusTrackerBlur() {}
    findFirst() {
        const e = this.inputValue;
        e && this._delegate.find(e, !1);
    }
    getSearchString() {
        return this.inputValue;
    }
    getSearchOptions() {
        return {
            isRegex: this._getRegexValue(),
            isCaseSensitive: this._getCaseSensitiveValue(),
            isWholeWord: this._getWholeWordValue()
        };
    }
}, csr = ie([
    C(1, Lv),
    C(2, xn),
    C(3, va),
    C(4, qr)
], csr);

}
