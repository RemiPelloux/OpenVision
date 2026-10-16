import { H4, sCt } from "./composerContextKeys.js";
import { XVt, YVt } from "./composerTranscriptFindTypes.js";
import { aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { av, gS } from "./hover.js";
import { Al, ru } from "./keybinding.js";
import { YXt, eAt } from "./simpleFindWidget.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Aws;
export { Aws };
var __wakaru_UPw_initialized = false;
export function UPw() {
if (__wakaru_UPw_initialized) return;
__wakaru_UPw_initialized = true;
"use strict";
E(), Hi(), pf(), gS(), ru(), YXt(), H4(), XVt(), Aws = class extends eAt {
    constructor(t, e, n, i, r){
        super({
            showCommonFindToggles: !0,
            checkImeCompletionState: t.checkImeCompletionState,
            enableSash: !0,
            showResultCount: !0,
            matchesLimit: YVt,
            initialWidth: 419
        }, e, n, i, r), this._delegate = t, this._findWidgetFocused = sCt.bindTo(n), this._register(t.hasFindResult((s)=>{
            this.updateButtons(s), this.focusFindBox();
        })), this._register(t.onDidStopFind(()=>{
            this.updateButtons(!1);
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
}, Aws = Re([
    F(1, aL),
    F(2, Rr),
    F(3, av),
    F(4, Al)
], Aws);

}
