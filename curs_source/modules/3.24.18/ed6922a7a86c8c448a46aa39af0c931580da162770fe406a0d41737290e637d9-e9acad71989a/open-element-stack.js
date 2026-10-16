import { $t, _d, l9e, mEi } from "./html_2.js";
import { x } from "./tslib.es6.js";
var wfs, Cfs, Xkn, Ehl, xhl, Tfs, Efs, Ihl, Ahl, Rhl, Dhl, Mhl;
export { Ahl, Cfs, Dhl, Efs, Ehl, Ihl, Mhl, Rhl, Tfs, Xkn, wfs, xhl };
var __wakaru_X3g_initialized = false;
export function X3g() {
if (__wakaru_X3g_initialized) return;
__wakaru_X3g_initialized = true;
x(), l9e(), wfs = new Set([
    $t.DD,
    $t.DT,
    $t.LI,
    $t.OPTGROUP,
    $t.OPTION,
    $t.P,
    $t.RB,
    $t.RP,
    $t.RT,
    $t.RTC
]), Cfs = new Set([
    ...wfs,
    $t.CAPTION,
    $t.COLGROUP,
    $t.TBODY,
    $t.TD,
    $t.TFOOT,
    $t.TH,
    $t.THEAD,
    $t.TR
]), Xkn = new Set([
    $t.APPLET,
    $t.CAPTION,
    $t.HTML,
    $t.MARQUEE,
    $t.OBJECT,
    $t.TABLE,
    $t.TD,
    $t.TEMPLATE,
    $t.TH
]), Ehl = new Set([
    ...Xkn,
    $t.OL,
    $t.UL
]), xhl = new Set([
    ...Xkn,
    $t.BUTTON
]), Tfs = new Set([
    $t.ANNOTATION_XML,
    $t.MI,
    $t.MN,
    $t.MO,
    $t.MS,
    $t.MTEXT
]), Efs = new Set([
    $t.DESC,
    $t.FOREIGN_OBJECT,
    $t.TITLE
]), Ihl = new Set([
    $t.TR,
    $t.TEMPLATE,
    $t.HTML
]), Ahl = new Set([
    $t.TBODY,
    $t.TFOOT,
    $t.THEAD,
    $t.TEMPLATE,
    $t.HTML
]), Rhl = new Set([
    $t.TABLE,
    $t.TEMPLATE,
    $t.HTML
]), Dhl = new Set([
    $t.TD,
    $t.TH
]), Mhl = class {
    get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    constructor(e, t, n){
        this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = $t.UNKNOWN, this.current = e;
    }
    _indexOf(e) {
        return this.items.lastIndexOf(e, this.stackTop);
    }
    _isInTemplate() {
        return this.currentTagId === $t.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === _d.HTML;
    }
    _updateCurrentElement() {
        this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
    }
    push(e, t) {
        this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0);
    }
    pop() {
        const e = this.current;
        this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
    }
    replace(e, t) {
        const n = this._indexOf(e);
        this.items[n] = t, n === this.stackTop && (this.current = t);
    }
    insertAfter(e, t, n) {
        const i = this._indexOf(e) + 1;
        this.items.splice(i, 0, t), this.tagIDs.splice(i, 0, n), this.stackTop++, i === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, i === this.stackTop);
    }
    popUntilTagNamePopped(e) {
        let t = this.stackTop + 1;
        do t = this.tagIDs.lastIndexOf(e, t - 1);
        while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== _d.HTML)
        this.shortenToLength(Math.max(t, 0));
    }
    shortenToLength(e) {
        for(; this.stackTop >= e;){
            const t = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
        }
    }
    popUntilElementPopped(e) {
        const t = this._indexOf(e);
        this.shortenToLength(Math.max(t, 0));
    }
    popUntilPopped(e, t) {
        const n = this._indexOfTagNames(e, t);
        this.shortenToLength(Math.max(n, 0));
    }
    popUntilNumberedHeaderPopped() {
        this.popUntilPopped(mEi, _d.HTML);
    }
    popUntilTableCellPopped() {
        this.popUntilPopped(Dhl, _d.HTML);
    }
    popAllUpToHtmlElement() {
        this.tmplCount = 0, this.shortenToLength(1);
    }
    _indexOfTagNames(e, t) {
        for(let n = this.stackTop; n >= 0; n--)if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
        return -1;
    }
    clearBackTo(e, t) {
        const n = this._indexOfTagNames(e, t);
        this.shortenToLength(n + 1);
    }
    clearBackToTableContext() {
        this.clearBackTo(Rhl, _d.HTML);
    }
    clearBackToTableBodyContext() {
        this.clearBackTo(Ahl, _d.HTML);
    }
    clearBackToTableRowContext() {
        this.clearBackTo(Ihl, _d.HTML);
    }
    remove(e) {
        const t = this._indexOf(e);
        t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
    }
    tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === $t.BODY ? this.items[1] : null;
    }
    contains(e) {
        return this._indexOf(e) > -1;
    }
    getCommonAncestor(e) {
        const t = this._indexOf(e) - 1;
        return t >= 0 ? this.items[t] : null;
    }
    isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === $t.HTML;
    }
    hasInDynamicScope(e, t) {
        for(let n = this.stackTop; n >= 0; n--){
            const i = this.tagIDs[n];
            switch(this.treeAdapter.getNamespaceURI(this.items[n])){
                case _d.HTML:
                    {
                        if (i === e) return !0;
                        if (t.has(i)) return !1;
                        break;
                    }
                case _d.SVG:
                    {
                        if (Efs.has(i)) return !1;
                        break;
                    }
                case _d.MATHML:
                    {
                        if (Tfs.has(i)) return !1;
                        break;
                    }
            }
        }
        return !0;
    }
    hasInScope(e) {
        return this.hasInDynamicScope(e, Xkn);
    }
    hasInListItemScope(e) {
        return this.hasInDynamicScope(e, Ehl);
    }
    hasInButtonScope(e) {
        return this.hasInDynamicScope(e, xhl);
    }
    hasNumberedHeaderInScope() {
        for(let e = this.stackTop; e >= 0; e--){
            const t = this.tagIDs[e];
            switch(this.treeAdapter.getNamespaceURI(this.items[e])){
                case _d.HTML:
                    {
                        if (mEi.has(t)) return !0;
                        if (Xkn.has(t)) return !1;
                        break;
                    }
                case _d.SVG:
                    {
                        if (Efs.has(t)) return !1;
                        break;
                    }
                case _d.MATHML:
                    {
                        if (Tfs.has(t)) return !1;
                        break;
                    }
            }
        }
        return !0;
    }
    hasInTableScope(e) {
        for(let t = this.stackTop; t >= 0; t--)if (this.treeAdapter.getNamespaceURI(this.items[t]) === _d.HTML) switch(this.tagIDs[t]){
            case e:
                return !0;
            case $t.TABLE:
            case $t.HTML:
                return !1;
        }
        return !0;
    }
    hasTableBodyContextInTableScope() {
        for(let e = this.stackTop; e >= 0; e--)if (this.treeAdapter.getNamespaceURI(this.items[e]) === _d.HTML) switch(this.tagIDs[e]){
            case $t.TBODY:
            case $t.THEAD:
            case $t.TFOOT:
                return !0;
            case $t.TABLE:
            case $t.HTML:
                return !1;
        }
        return !0;
    }
    hasInSelectScope(e) {
        for(let t = this.stackTop; t >= 0; t--)if (this.treeAdapter.getNamespaceURI(this.items[t]) === _d.HTML) switch(this.tagIDs[t]){
            case e:
                return !0;
            case $t.OPTION:
            case $t.OPTGROUP:
                break;
            default:
                return !1;
        }
        return !0;
    }
    generateImpliedEndTags() {
        for(; this.currentTagId !== void 0 && wfs.has(this.currentTagId);)this.pop();
    }
    generateImpliedEndTagsThoroughly() {
        for(; this.currentTagId !== void 0 && Cfs.has(this.currentTagId);)this.pop();
    }
    generateImpliedEndTagsWithExclusion(e) {
        for(; this.currentTagId !== void 0 && this.currentTagId !== e && Cfs.has(this.currentTagId);)this.pop();
    }
};

}
