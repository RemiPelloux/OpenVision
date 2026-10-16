import { IMr, Jt, _it, sp } from "./html_2.js";
import { E } from "./tslib.es6.js";
var Fia, Bia, uui, Kmh, Ymh, Uia, jia, Xmh, Zmh, Qmh, Jmh, egh;
export { Bia, Fia, Jmh, Kmh, Qmh, Uia, Xmh, Ymh, Zmh, egh, jia, uui };
var __wakaru_Pzy_initialized = false;
export function Pzy() {
if (__wakaru_Pzy_initialized) return;
__wakaru_Pzy_initialized = true;
E(), _it(), Fia = new Set([
    Jt.DD,
    Jt.DT,
    Jt.LI,
    Jt.OPTGROUP,
    Jt.OPTION,
    Jt.P,
    Jt.RB,
    Jt.RP,
    Jt.RT,
    Jt.RTC
]), Bia = new Set([
    ...Fia,
    Jt.CAPTION,
    Jt.COLGROUP,
    Jt.TBODY,
    Jt.TD,
    Jt.TFOOT,
    Jt.TH,
    Jt.THEAD,
    Jt.TR
]), uui = new Set([
    Jt.APPLET,
    Jt.CAPTION,
    Jt.HTML,
    Jt.MARQUEE,
    Jt.OBJECT,
    Jt.TABLE,
    Jt.TD,
    Jt.TEMPLATE,
    Jt.TH
]), Kmh = new Set([
    ...uui,
    Jt.OL,
    Jt.UL
]), Ymh = new Set([
    ...uui,
    Jt.BUTTON
]), Uia = new Set([
    Jt.ANNOTATION_XML,
    Jt.MI,
    Jt.MN,
    Jt.MO,
    Jt.MS,
    Jt.MTEXT
]), jia = new Set([
    Jt.DESC,
    Jt.FOREIGN_OBJECT,
    Jt.TITLE
]), Xmh = new Set([
    Jt.TR,
    Jt.TEMPLATE,
    Jt.HTML
]), Zmh = new Set([
    Jt.TBODY,
    Jt.TFOOT,
    Jt.THEAD,
    Jt.TEMPLATE,
    Jt.HTML
]), Qmh = new Set([
    Jt.TABLE,
    Jt.TEMPLATE,
    Jt.HTML
]), Jmh = new Set([
    Jt.TD,
    Jt.TH
]), egh = class {
    get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    constructor(t, e, n){
        this.treeAdapter = e, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = Jt.UNKNOWN, this.current = t;
    }
    _indexOf(t) {
        return this.items.lastIndexOf(t, this.stackTop);
    }
    _isInTemplate() {
        return this.currentTagId === Jt.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === sp.HTML;
    }
    _updateCurrentElement() {
        this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
    }
    push(t, e) {
        this.stackTop++, this.items[this.stackTop] = t, this.current = t, this.tagIDs[this.stackTop] = e, this.currentTagId = e, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(t, e, !0);
    }
    pop() {
        const t = this.current;
        this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !0);
    }
    replace(t, e) {
        const n = this._indexOf(t);
        this.items[n] = e, n === this.stackTop && (this.current = e);
    }
    insertAfter(t, e, n) {
        const i = this._indexOf(t) + 1;
        this.items.splice(i, 0, e), this.tagIDs.splice(i, 0, n), this.stackTop++, i === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, i === this.stackTop);
    }
    popUntilTagNamePopped(t) {
        let e = this.stackTop + 1;
        do e = this.tagIDs.lastIndexOf(t, e - 1);
        while (e > 0 && this.treeAdapter.getNamespaceURI(this.items[e]) !== sp.HTML)
        this.shortenToLength(Math.max(e, 0));
    }
    shortenToLength(t) {
        for(; this.stackTop >= t;){
            const e = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, this.stackTop < t);
        }
    }
    popUntilElementPopped(t) {
        const e = this._indexOf(t);
        this.shortenToLength(Math.max(e, 0));
    }
    popUntilPopped(t, e) {
        const n = this._indexOfTagNames(t, e);
        this.shortenToLength(Math.max(n, 0));
    }
    popUntilNumberedHeaderPopped() {
        this.popUntilPopped(IMr, sp.HTML);
    }
    popUntilTableCellPopped() {
        this.popUntilPopped(Jmh, sp.HTML);
    }
    popAllUpToHtmlElement() {
        this.tmplCount = 0, this.shortenToLength(1);
    }
    _indexOfTagNames(t, e) {
        for(let n = this.stackTop; n >= 0; n--)if (t.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === e) return n;
        return -1;
    }
    clearBackTo(t, e) {
        const n = this._indexOfTagNames(t, e);
        this.shortenToLength(n + 1);
    }
    clearBackToTableContext() {
        this.clearBackTo(Qmh, sp.HTML);
    }
    clearBackToTableBodyContext() {
        this.clearBackTo(Zmh, sp.HTML);
    }
    clearBackToTableRowContext() {
        this.clearBackTo(Xmh, sp.HTML);
    }
    remove(t) {
        const e = this._indexOf(t);
        e >= 0 && (e === this.stackTop ? this.pop() : (this.items.splice(e, 1), this.tagIDs.splice(e, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !1)));
    }
    tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === Jt.BODY ? this.items[1] : null;
    }
    contains(t) {
        return this._indexOf(t) > -1;
    }
    getCommonAncestor(t) {
        const e = this._indexOf(t) - 1;
        return e >= 0 ? this.items[e] : null;
    }
    isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === Jt.HTML;
    }
    hasInDynamicScope(t, e) {
        for(let n = this.stackTop; n >= 0; n--){
            const i = this.tagIDs[n];
            switch(this.treeAdapter.getNamespaceURI(this.items[n])){
                case sp.HTML:
                    {
                        if (i === t) return !0;
                        if (e.has(i)) return !1;
                        break;
                    }
                case sp.SVG:
                    {
                        if (jia.has(i)) return !1;
                        break;
                    }
                case sp.MATHML:
                    {
                        if (Uia.has(i)) return !1;
                        break;
                    }
            }
        }
        return !0;
    }
    hasInScope(t) {
        return this.hasInDynamicScope(t, uui);
    }
    hasInListItemScope(t) {
        return this.hasInDynamicScope(t, Kmh);
    }
    hasInButtonScope(t) {
        return this.hasInDynamicScope(t, Ymh);
    }
    hasNumberedHeaderInScope() {
        for(let t = this.stackTop; t >= 0; t--){
            const e = this.tagIDs[t];
            switch(this.treeAdapter.getNamespaceURI(this.items[t])){
                case sp.HTML:
                    {
                        if (IMr.has(e)) return !0;
                        if (uui.has(e)) return !1;
                        break;
                    }
                case sp.SVG:
                    {
                        if (jia.has(e)) return !1;
                        break;
                    }
                case sp.MATHML:
                    {
                        if (Uia.has(e)) return !1;
                        break;
                    }
            }
        }
        return !0;
    }
    hasInTableScope(t) {
        for(let e = this.stackTop; e >= 0; e--)if (this.treeAdapter.getNamespaceURI(this.items[e]) === sp.HTML) switch(this.tagIDs[e]){
            case t:
                return !0;
            case Jt.TABLE:
            case Jt.HTML:
                return !1;
        }
        return !0;
    }
    hasTableBodyContextInTableScope() {
        for(let t = this.stackTop; t >= 0; t--)if (this.treeAdapter.getNamespaceURI(this.items[t]) === sp.HTML) switch(this.tagIDs[t]){
            case Jt.TBODY:
            case Jt.THEAD:
            case Jt.TFOOT:
                return !0;
            case Jt.TABLE:
            case Jt.HTML:
                return !1;
        }
        return !0;
    }
    hasInSelectScope(t) {
        for(let e = this.stackTop; e >= 0; e--)if (this.treeAdapter.getNamespaceURI(this.items[e]) === sp.HTML) switch(this.tagIDs[e]){
            case t:
                return !0;
            case Jt.OPTION:
            case Jt.OPTGROUP:
                break;
            default:
                return !1;
        }
        return !0;
    }
    generateImpliedEndTags() {
        for(; this.currentTagId !== void 0 && Fia.has(this.currentTagId);)this.pop();
    }
    generateImpliedEndTagsThoroughly() {
        for(; this.currentTagId !== void 0 && Bia.has(this.currentTagId);)this.pop();
    }
    generateImpliedEndTagsWithExclusion(t) {
        for(; this.currentTagId !== void 0 && this.currentTagId !== t && Bia.has(this.currentTagId);)this.pop();
    }
};

}
