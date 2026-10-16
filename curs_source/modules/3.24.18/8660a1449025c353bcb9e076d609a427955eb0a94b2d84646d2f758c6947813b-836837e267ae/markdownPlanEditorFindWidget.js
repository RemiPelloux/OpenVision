import { aL, pf } from "./contextView.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { av, gS } from "./hover.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { YXt, eAt } from "./simpleFindWidget.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { li } from "./ze.js";
var BFf, _ks;
export { BFf, _ks };
var __wakaru_bEw_initialized = false;
export function bEw() {
if (__wakaru_bEw_initialized) return;
__wakaru_bEw_initialized = true;
"use strict";
E(), Hn(), Ma(), Hi(), pf(), gS(), ru(), YXt(), Hi(), BFf = new cn("markdownPlanEditorFindWidgetFocused", !1), _ks = class extends eAt {
    constructor(t, e, n, i, r){
        super({
            showCommonFindToggles: !0,
            checkImeCompletionState: t.checkImeCompletionState,
            enableSash: !0,
            showResultCount: !0,
            initialWidth: 419
        }, e, n, i, r), this._delegate = t, this._findWidgetFocused = BFf.bindTo(n), this._register(t.hasFindResult((s)=>{
            this.updateButtons(s), this.focusFindBox();
        })), this._register(t.onDidStopFind(()=>{
            this.updateButtons(!1);
        })), this._register(li(this.getFindInputDomNode(), "keydown", (s)=>{
            (s.keyCode === Ze.Enter || s.key === "Enter") && (s.preventDefault(), s.stopPropagation(), this.find(s.shiftKey));
        }));
    }
    async _getResultCount() {
        return await this._delegate.getResultCount();
    }
    find(t) {
        const e = this.inputValue;
        e && (this._delegate.find(e, t), this.updateResultCount());
    }
    hide(t = !0) {
        super.hide(t), this._delegate.stopFind(!0), this._delegate.focus();
    }
    _onInputChanged() {
        const t = this.inputValue;
        return t ? this._delegate.updateFind(t, {
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
        const t = this.inputValue;
        t && this._delegate.find(t, !1);
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
}, _ks = Re([
    F(1, aL),
    F(2, Rr),
    F(3, av),
    F(4, Al)
], _ks);

}
