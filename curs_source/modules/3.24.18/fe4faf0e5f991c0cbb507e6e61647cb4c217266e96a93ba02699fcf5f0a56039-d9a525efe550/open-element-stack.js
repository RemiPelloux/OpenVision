import { hi, wfe, yP, ye } from "./html_2.js";
import { i } from "./plugin-brand-icon.js";
var BNt, qNt, kfe, Car, Sar, UNt, GNt, Ear, Aar, Tar, $ar, WNt, Iar;
export { $ar, Aar, BNt, Car, Ear, GNt, Iar, Sar, Tar, UNt, WNt, kfe, qNt };
var __wakaru__vi_initialized = false;
export function _vi() {
if (__wakaru__vi_initialized) return;
__wakaru__vi_initialized = true;
yP(), BNt = new Set([
    ye.DD,
    ye.DT,
    ye.LI,
    ye.OPTGROUP,
    ye.OPTION,
    ye.P,
    ye.RB,
    ye.RP,
    ye.RT,
    ye.RTC
]), qNt = new Set([
    ...BNt,
    ye.CAPTION,
    ye.COLGROUP,
    ye.TBODY,
    ye.TD,
    ye.TFOOT,
    ye.TH,
    ye.THEAD,
    ye.TR
]), kfe = new Set([
    ye.APPLET,
    ye.CAPTION,
    ye.HTML,
    ye.MARQUEE,
    ye.OBJECT,
    ye.TABLE,
    ye.TD,
    ye.TEMPLATE,
    ye.TH
]), Car = new Set([
    ...kfe,
    ye.OL,
    ye.UL
]), Sar = new Set([
    ...kfe,
    ye.BUTTON
]), UNt = new Set([
    ye.ANNOTATION_XML,
    ye.MI,
    ye.MN,
    ye.MO,
    ye.MS,
    ye.MTEXT
]), GNt = new Set([
    ye.DESC,
    ye.FOREIGN_OBJECT,
    ye.TITLE
]), Ear = new Set([
    ye.TR,
    ye.TEMPLATE,
    ye.HTML
]), Aar = new Set([
    ye.TBODY,
    ye.TFOOT,
    ye.THEAD,
    ye.TEMPLATE,
    ye.HTML
]), Tar = new Set([
    ye.TABLE,
    ye.TEMPLATE,
    ye.HTML
]), $ar = new Set([
    ye.TD,
    ye.TH
]), WNt = class {
    get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    constructor(e, a, s){
        this.treeAdapter = a, this.handler = s, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = ye.UNKNOWN, this.current = e;
    }
    _indexOf(e) {
        return this.items.lastIndexOf(e, this.stackTop);
    }
    _isInTemplate() {
        return this.currentTagId === ye.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === hi.HTML;
    }
    _updateCurrentElement() {
        this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
    }
    push(e, a) {
        this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = a, this.currentTagId = a, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, a, !0);
    }
    pop() {
        const e = this.current;
        this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
    }
    replace(e, a) {
        const s = this._indexOf(e);
        this.items[s] = a, s === this.stackTop && (this.current = a);
    }
    insertAfter(e, a, s) {
        const l = this._indexOf(e) + 1;
        this.items.splice(l, 0, a), this.tagIDs.splice(l, 0, s), this.stackTop++, l === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, l === this.stackTop);
    }
    popUntilTagNamePopped(e) {
        let a = this.stackTop + 1;
        do a = this.tagIDs.lastIndexOf(e, a - 1);
        while (a > 0 && this.treeAdapter.getNamespaceURI(this.items[a]) !== hi.HTML)
        this.shortenToLength(Math.max(a, 0));
    }
    shortenToLength(e) {
        for(; this.stackTop >= e;){
            const a = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(a, this.stackTop < e);
        }
    }
    popUntilElementPopped(e) {
        const a = this._indexOf(e);
        this.shortenToLength(Math.max(a, 0));
    }
    popUntilPopped(e, a) {
        const s = this._indexOfTagNames(e, a);
        this.shortenToLength(Math.max(s, 0));
    }
    popUntilNumberedHeaderPopped() {
        this.popUntilPopped(wfe, hi.HTML);
    }
    popUntilTableCellPopped() {
        this.popUntilPopped($ar, hi.HTML);
    }
    popAllUpToHtmlElement() {
        this.tmplCount = 0, this.shortenToLength(1);
    }
    _indexOfTagNames(e, a) {
        for(let s = this.stackTop; s >= 0; s--)if (e.has(this.tagIDs[s]) && this.treeAdapter.getNamespaceURI(this.items[s]) === a) return s;
        return -1;
    }
    clearBackTo(e, a) {
        const s = this._indexOfTagNames(e, a);
        this.shortenToLength(s + 1);
    }
    clearBackToTableContext() {
        this.clearBackTo(Tar, hi.HTML);
    }
    clearBackToTableBodyContext() {
        this.clearBackTo(Aar, hi.HTML);
    }
    clearBackToTableRowContext() {
        this.clearBackTo(Ear, hi.HTML);
    }
    remove(e) {
        const a = this._indexOf(e);
        a >= 0 && (a === this.stackTop ? this.pop() : (this.items.splice(a, 1), this.tagIDs.splice(a, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
    }
    tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === ye.BODY ? this.items[1] : null;
    }
    contains(e) {
        return this._indexOf(e) > -1;
    }
    getCommonAncestor(e) {
        const a = this._indexOf(e) - 1;
        return a >= 0 ? this.items[a] : null;
    }
    isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === ye.HTML;
    }
    hasInDynamicScope(e, a) {
        for(let s = this.stackTop; s >= 0; s--){
            const l = this.tagIDs[s];
            switch(this.treeAdapter.getNamespaceURI(this.items[s])){
                case hi.HTML:
                    {
                        if (l === e) return !0;
                        if (a.has(l)) return !1;
                        break;
                    }
                case hi.SVG:
                    {
                        if (GNt.has(l)) return !1;
                        break;
                    }
                case hi.MATHML:
                    {
                        if (UNt.has(l)) return !1;
                        break;
                    }
            }
        }
        return !0;
    }
    hasInScope(e) {
        return this.hasInDynamicScope(e, kfe);
    }
    hasInListItemScope(e) {
        return this.hasInDynamicScope(e, Car);
    }
    hasInButtonScope(e) {
        return this.hasInDynamicScope(e, Sar);
    }
    hasNumberedHeaderInScope() {
        for(let e = this.stackTop; e >= 0; e--){
            const a = this.tagIDs[e];
            switch(this.treeAdapter.getNamespaceURI(this.items[e])){
                case hi.HTML:
                    {
                        if (wfe.has(a)) return !0;
                        if (kfe.has(a)) return !1;
                        break;
                    }
                case hi.SVG:
                    {
                        if (GNt.has(a)) return !1;
                        break;
                    }
                case hi.MATHML:
                    {
                        if (UNt.has(a)) return !1;
                        break;
                    }
            }
        }
        return !0;
    }
    hasInTableScope(e) {
        for(let a = this.stackTop; a >= 0; a--)if (this.treeAdapter.getNamespaceURI(this.items[a]) === hi.HTML) switch(this.tagIDs[a]){
            case e:
                return !0;
            case ye.TABLE:
            case ye.HTML:
                return !1;
        }
        return !0;
    }
    hasTableBodyContextInTableScope() {
        for(let e = this.stackTop; e >= 0; e--)if (this.treeAdapter.getNamespaceURI(this.items[e]) === hi.HTML) switch(this.tagIDs[e]){
            case ye.TBODY:
            case ye.THEAD:
            case ye.TFOOT:
                return !0;
            case ye.TABLE:
            case ye.HTML:
                return !1;
        }
        return !0;
    }
    hasInSelectScope(e) {
        for(let a = this.stackTop; a >= 0; a--)if (this.treeAdapter.getNamespaceURI(this.items[a]) === hi.HTML) switch(this.tagIDs[a]){
            case e:
                return !0;
            case ye.OPTION:
            case ye.OPTGROUP:
                break;
            default:
                return !1;
        }
        return !0;
    }
    generateImpliedEndTags() {
        for(; this.currentTagId !== void 0 && BNt.has(this.currentTagId);)this.pop();
    }
    generateImpliedEndTagsThoroughly() {
        for(; this.currentTagId !== void 0 && qNt.has(this.currentTagId);)this.pop();
    }
    generateImpliedEndTagsWithExclusion(e) {
        for(; this.currentTagId !== void 0 && this.currentTagId !== e && qNt.has(this.currentTagId);)this.pop();
    }
}, i(WNt, "OpenElementStack"), Iar = WNt;

}
