import { JT, VNt } from "./default_2.js";
import { Mar, Rar, vvi } from "./doctype.js";
import { INe, kr } from "./error-codes.js";
import { Oar, PNe, QNt, Uar, Xar, eMt, zar } from "./foreign-content.js";
import { Nar, RS, kvi } from "./formatting-element-list.js";
import { LNt, Un, bP, c3, cJ, hi, wfe, yP, ye } from "./html_2.js";
import { kar, wh, xar } from "./index_26.js";
import { Iar, _vi } from "./open-element-stack.js";
import { i } from "./plugin-brand-icon.js";
import { MNt, NNe, ru } from "./token.js";
import { $t, INt, hm } from "./unicode.js";
function Yar(r, e) {
    let a = r.activeFormattingElements.getElementEntryInScopeWithTagName(e.tagName);
    return a ? r.openElements.contains(a.element) ? r.openElements.hasInScope(e.tagID) || (a = null) : (r.activeFormattingElements.removeEntry(a), a = null) : cMt(r, e), a;
}
function Jar(r, e) {
    let a = null, s = r.openElements.stackTop;
    for(; s >= 0; s--){
        const l = r.openElements.items[s];
        if (l === e.element) break;
        r._isSpecialElement(l, r.openElements.tagIDs[s]) && (a = l);
    }
    return a || (r.openElements.shortenToLength(Math.max(s, 0)), r.activeFormattingElements.removeEntry(e)), a;
}
function Qar(r, e, a) {
    let s = e, l = r.openElements.getCommonAncestor(e);
    for(let u = 0, p = l; p !== a; u++, p = l){
        l = r.openElements.getCommonAncestor(p);
        const m = r.activeFormattingElements.getElementEntry(p), b = m && u >= Msr;
        !m || b ? (b && r.activeFormattingElements.removeEntry(m), r.openElements.remove(p)) : (p = eor(r, m), s === e && (r.activeFormattingElements.bookmark = m), r.treeAdapter.detachNode(s), r.treeAdapter.appendChild(p, s), s = p);
    }
    return s;
}
function eor(r, e) {
    const a = r.treeAdapter.getNamespaceURI(e.element), s = r.treeAdapter.createElement(e.token.tagName, a, e.token.attrs);
    return r.openElements.replace(e.element, s), e.element = s, s;
}
function tor(r, e, a) {
    const s = r.treeAdapter.getTagName(e), l = cJ(s);
    if (r._isElementCausesFosterParenting(l)) r._fosterParentElement(a);
    else {
        const u = r.treeAdapter.getNamespaceURI(e);
        l === ye.TEMPLATE && u === hi.HTML && (e = r.treeAdapter.getTemplateContent(e)), r.treeAdapter.appendChild(e, a);
    }
}
function nor(r, e, a) {
    const s = r.treeAdapter.getNamespaceURI(a.element), { token: l } = a, u = r.treeAdapter.createElement(l.tagName, s, l.attrs);
    r._adoptNodes(e, u), r.treeAdapter.appendChild(e, u), r.activeFormattingElements.insertElementAfterBookmark(u, l), r.activeFormattingElements.removeEntry(a), r.openElements.remove(a.element), r.openElements.insertAfter(e, u, l.tagID);
}
function jNe(r, e) {
    for(let a = 0; a < Nsr; a++){
        const s = Yar(r, e);
        if (!s) break;
        const l = Jar(r, s);
        if (!l) break;
        r.activeFormattingElements.bookmark = s;
        const u = Qar(r, l, s.element), p = r.openElements.getCommonAncestor(s.element);
        r.treeAdapter.detachNode(u), p && tor(r, p, u), nor(r, l, s);
    }
}
function LNe(r, e) {
    r._appendCommentNode(e, r.openElements.currentTmplContentOrNode);
}
function ror(r, e) {
    r._appendCommentNode(e, r.openElements.items[0]);
}
function ior(r, e) {
    r._appendCommentNode(e, r.document);
}
function DNe(r, e) {
    if (r.stopped = !0, e.location) {
        const a = r.fragmentContext ? 0 : 2;
        for(let s = r.openElements.stackTop; s >= a; s--)r._setEndLocation(r.openElements.items[s], e);
        if (!r.fragmentContext && r.openElements.stackTop >= 0) {
            const s = r.openElements.items[0], l = r.treeAdapter.getNodeSourceCodeLocation(s);
            if (l && !l.endTag && (r._setEndLocation(s, e), r.openElements.stackTop >= 1)) {
                const u = r.openElements.items[1], p = r.treeAdapter.getNodeSourceCodeLocation(u);
                p && !p.endTag && r._setEndLocation(u, e);
            }
        }
    }
}
function aor(r, e) {
    r._setDocumentType(e);
    const a = e.forceQuirks ? c3.QUIRKS : Rar(e);
    Mar(e) || r._err(e, kr.nonConformingDoctype), r.treeAdapter.setDocumentMode(r.document, a), r.insertionMode = sn.BEFORE_HTML;
}
function uJ(r, e) {
    r._err(e, kr.missingDoctype, !0), r.treeAdapter.setDocumentMode(r.document, c3.QUIRKS), r.insertionMode = sn.BEFORE_HTML, r._processToken(e);
}
function oor(r, e) {
    e.tagID === ye.HTML ? (r._insertElement(e, hi.HTML), r.insertionMode = sn.BEFORE_HEAD) : dJ(r, e);
}
function sor(r, e) {
    const a = e.tagID;
    (a === ye.HTML || a === ye.HEAD || a === ye.BODY || a === ye.BR) && dJ(r, e);
}
function dJ(r, e) {
    r._insertFakeRootElement(), r.insertionMode = sn.BEFORE_HEAD, r._processToken(e);
}
function cor(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.HEAD:
            {
                r._insertElement(e, hi.HTML), r.headElement = r.openElements.current, r.insertionMode = sn.IN_HEAD;
                break;
            }
        default:
            pJ(r, e);
    }
}
function lor(r, e) {
    const a = e.tagID;
    a === ye.HEAD || a === ye.BODY || a === ye.HTML || a === ye.BR ? pJ(r, e) : r._err(e, kr.endTagWithoutMatchingOpenElement);
}
function pJ(r, e) {
    r._insertFakeElement(Un.HEAD, ye.HEAD), r.headElement = r.openElements.current, r.insertionMode = sn.IN_HEAD, r._processToken(e);
}
function P4(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.BASE:
        case ye.BASEFONT:
        case ye.BGSOUND:
        case ye.LINK:
        case ye.META:
            {
                r._appendElement(e, hi.HTML), e.ackSelfClosing = !0;
                break;
            }
        case ye.TITLE:
            {
                r._switchToTextParsing(e, wh.RCDATA);
                break;
            }
        case ye.NOSCRIPT:
            {
                r.options.scriptingEnabled ? r._switchToTextParsing(e, wh.RAWTEXT) : (r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_HEAD_NO_SCRIPT);
                break;
            }
        case ye.NOFRAMES:
        case ye.STYLE:
            {
                r._switchToTextParsing(e, wh.RAWTEXT);
                break;
            }
        case ye.SCRIPT:
            {
                r._switchToTextParsing(e, wh.SCRIPT_DATA);
                break;
            }
        case ye.TEMPLATE:
            {
                r._insertTemplate(e), r.activeFormattingElements.insertMarker(), r.framesetOk = !1, r.insertionMode = sn.IN_TEMPLATE, r.tmplInsertionModeStack.unshift(sn.IN_TEMPLATE);
                break;
            }
        case ye.HEAD:
            {
                r._err(e, kr.misplacedStartTagForHeadElement);
                break;
            }
        default:
            mJ(r, e);
    }
}
function uor(r, e) {
    switch(e.tagID){
        case ye.HEAD:
            {
                r.openElements.pop(), r.insertionMode = sn.AFTER_HEAD;
                break;
            }
        case ye.BODY:
        case ye.BR:
        case ye.HTML:
            {
                mJ(r, e);
                break;
            }
        case ye.TEMPLATE:
            {
                wP(r, e);
                break;
            }
        default:
            r._err(e, kr.endTagWithoutMatchingOpenElement);
    }
}
function wP(r, e) {
    r.openElements.tmplCount > 0 ? (r.openElements.generateImpliedEndTagsThoroughly(), r.openElements.currentTagId !== ye.TEMPLATE && r._err(e, kr.closingOfElementWithOpenChildElements), r.openElements.popUntilTagNamePopped(ye.TEMPLATE), r.activeFormattingElements.clearToLastMarker(), r.tmplInsertionModeStack.shift(), r._resetInsertionMode()) : r._err(e, kr.endTagWithoutMatchingOpenElement);
}
function mJ(r, e) {
    r.openElements.pop(), r.insertionMode = sn.AFTER_HEAD, r._processToken(e);
}
function dor(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.BASEFONT:
        case ye.BGSOUND:
        case ye.HEAD:
        case ye.LINK:
        case ye.META:
        case ye.NOFRAMES:
        case ye.STYLE:
            {
                P4(r, e);
                break;
            }
        case ye.NOSCRIPT:
            {
                r._err(e, kr.nestedNoscriptInHead);
                break;
            }
        default:
            fJ(r, e);
    }
}
function por(r, e) {
    switch(e.tagID){
        case ye.NOSCRIPT:
            {
                r.openElements.pop(), r.insertionMode = sn.IN_HEAD;
                break;
            }
        case ye.BR:
            {
                fJ(r, e);
                break;
            }
        default:
            r._err(e, kr.endTagWithoutMatchingOpenElement);
    }
}
function fJ(r, e) {
    const a = e.type === ru.EOF ? kr.openElementsLeftAfterEof : kr.disallowedContentInNoscriptInHead;
    r._err(e, a), r.openElements.pop(), r.insertionMode = sn.IN_HEAD, r._processToken(e);
}
function mor(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.BODY:
            {
                r._insertElement(e, hi.HTML), r.framesetOk = !1, r.insertionMode = sn.IN_BODY;
                break;
            }
        case ye.FRAMESET:
            {
                r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_FRAMESET;
                break;
            }
        case ye.BASE:
        case ye.BASEFONT:
        case ye.BGSOUND:
        case ye.LINK:
        case ye.META:
        case ye.NOFRAMES:
        case ye.SCRIPT:
        case ye.STYLE:
        case ye.TEMPLATE:
        case ye.TITLE:
            {
                r._err(e, kr.abandonedHeadElementChild), r.openElements.push(r.headElement, ye.HEAD), P4(r, e), r.openElements.remove(r.headElement);
                break;
            }
        case ye.HEAD:
            {
                r._err(e, kr.misplacedStartTagForHeadElement);
                break;
            }
        default:
            hJ(r, e);
    }
}
function hor(r, e) {
    switch(e.tagID){
        case ye.BODY:
        case ye.HTML:
        case ye.BR:
            {
                hJ(r, e);
                break;
            }
        case ye.TEMPLATE:
            {
                wP(r, e);
                break;
            }
        default:
            r._err(e, kr.endTagWithoutMatchingOpenElement);
    }
}
function hJ(r, e) {
    r._insertFakeElement(Un.BODY, ye.BODY), r.insertionMode = sn.IN_BODY, vfe(r, e);
}
function vfe(r, e) {
    switch(e.type){
        case ru.CHARACTER:
            {
                rMt(r, e);
                break;
            }
        case ru.WHITESPACE_CHARACTER:
            {
                nMt(r, e);
                break;
            }
        case ru.COMMENT:
            {
                LNe(r, e);
                break;
            }
        case ru.START_TAG:
            {
                $0(r, e);
                break;
            }
        case ru.END_TAG:
            {
                xfe(r, e);
                break;
            }
        case ru.EOF:
            {
                lMt(r, e);
                break;
            }
        default:
    }
}
function nMt(r, e) {
    r._reconstructActiveFormattingElements(), r._insertCharacters(e);
}
function rMt(r, e) {
    r._reconstructActiveFormattingElements(), r._insertCharacters(e), r.framesetOk = !1;
}
function gor(r, e) {
    r.openElements.tmplCount === 0 && r.treeAdapter.adoptAttributes(r.openElements.items[0], e.attrs);
}
function bor(r, e) {
    const a = r.openElements.tryPeekProperlyNestedBodyElement();
    a && r.openElements.tmplCount === 0 && (r.framesetOk = !1, r.treeAdapter.adoptAttributes(a, e.attrs));
}
function yor(r, e) {
    const a = r.openElements.tryPeekProperlyNestedBodyElement();
    r.framesetOk && a && (r.treeAdapter.detachNode(a), r.openElements.popAllUpToHtmlElement(), r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_FRAMESET);
}
function wor(r, e) {
    r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._insertElement(e, hi.HTML);
}
function _or(r, e) {
    r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r.openElements.currentTagId !== void 0 && wfe.has(r.openElements.currentTagId) && r.openElements.pop(), r._insertElement(e, hi.HTML);
}
function kor(r, e) {
    r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._insertElement(e, hi.HTML), r.skipNextNewLine = !0, r.framesetOk = !1;
}
function vor(r, e) {
    const a = r.openElements.tmplCount > 0;
    (!r.formElement || a) && (r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._insertElement(e, hi.HTML), a || (r.formElement = r.openElements.current));
}
function xor(r, e) {
    r.framesetOk = !1;
    const a = e.tagID;
    for(let s = r.openElements.stackTop; s >= 0; s--){
        const l = r.openElements.tagIDs[s];
        if (a === ye.LI && l === ye.LI || (a === ye.DD || a === ye.DT) && (l === ye.DD || l === ye.DT)) {
            r.openElements.generateImpliedEndTagsWithExclusion(l), r.openElements.popUntilTagNamePopped(l);
            break;
        }
        if (l !== ye.ADDRESS && l !== ye.DIV && l !== ye.P && r._isSpecialElement(r.openElements.items[s], l)) break;
    }
    r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._insertElement(e, hi.HTML);
}
function Cor(r, e) {
    r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._insertElement(e, hi.HTML), r.tokenizer.state = wh.PLAINTEXT;
}
function Sor(r, e) {
    r.openElements.hasInScope(ye.BUTTON) && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilTagNamePopped(ye.BUTTON)), r._reconstructActiveFormattingElements(), r._insertElement(e, hi.HTML), r.framesetOk = !1;
}
function Eor(r, e) {
    const a = r.activeFormattingElements.getElementEntryInScopeWithTagName(Un.A);
    a && (jNe(r, e), r.openElements.remove(a.element), r.activeFormattingElements.removeEntry(a)), r._reconstructActiveFormattingElements(), r._insertElement(e, hi.HTML), r.activeFormattingElements.pushElement(r.openElements.current, e);
}
function Aor(r, e) {
    r._reconstructActiveFormattingElements(), r._insertElement(e, hi.HTML), r.activeFormattingElements.pushElement(r.openElements.current, e);
}
function Tor(r, e) {
    r._reconstructActiveFormattingElements(), r.openElements.hasInScope(ye.NOBR) && (jNe(r, e), r._reconstructActiveFormattingElements()), r._insertElement(e, hi.HTML), r.activeFormattingElements.pushElement(r.openElements.current, e);
}
function $or(r, e) {
    r._reconstructActiveFormattingElements(), r._insertElement(e, hi.HTML), r.activeFormattingElements.insertMarker(), r.framesetOk = !1;
}
function Ior(r, e) {
    r.treeAdapter.getDocumentMode(r.document) !== c3.QUIRKS && r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._insertElement(e, hi.HTML), r.framesetOk = !1, r.insertionMode = sn.IN_TABLE;
}
function iMt(r, e) {
    r._reconstructActiveFormattingElements(), r._appendElement(e, hi.HTML), r.framesetOk = !1, e.ackSelfClosing = !0;
}
function aMt(r) {
    const e = NNe(r, bP.TYPE);
    return e != null && e.toLowerCase() === Isr;
}
function Nor(r, e) {
    r._reconstructActiveFormattingElements(), r._appendElement(e, hi.HTML), aMt(e) || (r.framesetOk = !1), e.ackSelfClosing = !0;
}
function Mor(r, e) {
    r._appendElement(e, hi.HTML), e.ackSelfClosing = !0;
}
function Ror(r, e) {
    r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._appendElement(e, hi.HTML), r.framesetOk = !1, e.ackSelfClosing = !0;
}
function Por(r, e) {
    e.tagName = Un.IMG, e.tagID = ye.IMG, iMt(r, e);
}
function jor(r, e) {
    r._insertElement(e, hi.HTML), r.skipNextNewLine = !0, r.tokenizer.state = wh.RCDATA, r.originalInsertionMode = r.insertionMode, r.framesetOk = !1, r.insertionMode = sn.TEXT;
}
function Lor(r, e) {
    r.openElements.hasInButtonScope(ye.P) && r._closePElement(), r._reconstructActiveFormattingElements(), r.framesetOk = !1, r._switchToTextParsing(e, wh.RAWTEXT);
}
function Dor(r, e) {
    r.framesetOk = !1, r._switchToTextParsing(e, wh.RAWTEXT);
}
function oMt(r, e) {
    r._switchToTextParsing(e, wh.RAWTEXT);
}
function For(r, e) {
    r._reconstructActiveFormattingElements(), r._insertElement(e, hi.HTML), r.framesetOk = !1, r.insertionMode = r.insertionMode === sn.IN_TABLE || r.insertionMode === sn.IN_CAPTION || r.insertionMode === sn.IN_TABLE_BODY || r.insertionMode === sn.IN_ROW || r.insertionMode === sn.IN_CELL ? sn.IN_SELECT_IN_TABLE : sn.IN_SELECT;
}
function Oor(r, e) {
    r.openElements.currentTagId === ye.OPTION && r.openElements.pop(), r._reconstructActiveFormattingElements(), r._insertElement(e, hi.HTML);
}
function zor(r, e) {
    r.openElements.hasInScope(ye.RUBY) && r.openElements.generateImpliedEndTags(), r._insertElement(e, hi.HTML);
}
function Bor(r, e) {
    r.openElements.hasInScope(ye.RUBY) && r.openElements.generateImpliedEndTagsWithExclusion(ye.RTC), r._insertElement(e, hi.HTML);
}
function qor(r, e) {
    r._reconstructActiveFormattingElements(), QNt(e), PNe(e), e.selfClosing ? r._appendElement(e, hi.MATHML) : r._insertElement(e, hi.MATHML), e.ackSelfClosing = !0;
}
function Uor(r, e) {
    r._reconstructActiveFormattingElements(), eMt(e), PNe(e), e.selfClosing ? r._appendElement(e, hi.SVG) : r._insertElement(e, hi.SVG), e.ackSelfClosing = !0;
}
function sMt(r, e) {
    r._reconstructActiveFormattingElements(), r._insertElement(e, hi.HTML);
}
function $0(r, e) {
    switch(e.tagID){
        case ye.I:
        case ye.S:
        case ye.B:
        case ye.U:
        case ye.EM:
        case ye.TT:
        case ye.BIG:
        case ye.CODE:
        case ye.FONT:
        case ye.SMALL:
        case ye.STRIKE:
        case ye.STRONG:
            {
                Aor(r, e);
                break;
            }
        case ye.A:
            {
                Eor(r, e);
                break;
            }
        case ye.H1:
        case ye.H2:
        case ye.H3:
        case ye.H4:
        case ye.H5:
        case ye.H6:
            {
                _or(r, e);
                break;
            }
        case ye.P:
        case ye.DL:
        case ye.OL:
        case ye.UL:
        case ye.DIV:
        case ye.DIR:
        case ye.NAV:
        case ye.MAIN:
        case ye.MENU:
        case ye.ASIDE:
        case ye.CENTER:
        case ye.FIGURE:
        case ye.FOOTER:
        case ye.HEADER:
        case ye.HGROUP:
        case ye.DIALOG:
        case ye.DETAILS:
        case ye.ADDRESS:
        case ye.ARTICLE:
        case ye.SEARCH:
        case ye.SECTION:
        case ye.SUMMARY:
        case ye.FIELDSET:
        case ye.BLOCKQUOTE:
        case ye.FIGCAPTION:
            {
                wor(r, e);
                break;
            }
        case ye.LI:
        case ye.DD:
        case ye.DT:
            {
                xor(r, e);
                break;
            }
        case ye.BR:
        case ye.IMG:
        case ye.WBR:
        case ye.AREA:
        case ye.EMBED:
        case ye.KEYGEN:
            {
                iMt(r, e);
                break;
            }
        case ye.HR:
            {
                Ror(r, e);
                break;
            }
        case ye.RB:
        case ye.RTC:
            {
                zor(r, e);
                break;
            }
        case ye.RT:
        case ye.RP:
            {
                Bor(r, e);
                break;
            }
        case ye.PRE:
        case ye.LISTING:
            {
                kor(r, e);
                break;
            }
        case ye.XMP:
            {
                Lor(r, e);
                break;
            }
        case ye.SVG:
            {
                Uor(r, e);
                break;
            }
        case ye.HTML:
            {
                gor(r, e);
                break;
            }
        case ye.BASE:
        case ye.LINK:
        case ye.META:
        case ye.STYLE:
        case ye.TITLE:
        case ye.SCRIPT:
        case ye.BGSOUND:
        case ye.BASEFONT:
        case ye.TEMPLATE:
            {
                P4(r, e);
                break;
            }
        case ye.BODY:
            {
                bor(r, e);
                break;
            }
        case ye.FORM:
            {
                vor(r, e);
                break;
            }
        case ye.NOBR:
            {
                Tor(r, e);
                break;
            }
        case ye.MATH:
            {
                qor(r, e);
                break;
            }
        case ye.TABLE:
            {
                Ior(r, e);
                break;
            }
        case ye.INPUT:
            {
                Nor(r, e);
                break;
            }
        case ye.PARAM:
        case ye.TRACK:
        case ye.SOURCE:
            {
                Mor(r, e);
                break;
            }
        case ye.IMAGE:
            {
                Por(r, e);
                break;
            }
        case ye.BUTTON:
            {
                Sor(r, e);
                break;
            }
        case ye.APPLET:
        case ye.OBJECT:
        case ye.MARQUEE:
            {
                $or(r, e);
                break;
            }
        case ye.IFRAME:
            {
                Dor(r, e);
                break;
            }
        case ye.SELECT:
            {
                For(r, e);
                break;
            }
        case ye.OPTION:
        case ye.OPTGROUP:
            {
                Oor(r, e);
                break;
            }
        case ye.NOEMBED:
        case ye.NOFRAMES:
            {
                oMt(r, e);
                break;
            }
        case ye.FRAMESET:
            {
                yor(r, e);
                break;
            }
        case ye.TEXTAREA:
            {
                jor(r, e);
                break;
            }
        case ye.NOSCRIPT:
            {
                r.options.scriptingEnabled ? oMt(r, e) : sMt(r, e);
                break;
            }
        case ye.PLAINTEXT:
            {
                Cor(r, e);
                break;
            }
        case ye.COL:
        case ye.TH:
        case ye.TD:
        case ye.TR:
        case ye.HEAD:
        case ye.FRAME:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
        case ye.CAPTION:
        case ye.COLGROUP:
            break;
        default:
            sMt(r, e);
    }
}
function Gor(r, e) {
    if (r.openElements.hasInScope(ye.BODY) && (r.insertionMode = sn.AFTER_BODY, r.options.sourceCodeLocationInfo)) {
        const a = r.openElements.tryPeekProperlyNestedBodyElement();
        a && r._setEndLocation(a, e);
    }
}
function Wor(r, e) {
    r.openElements.hasInScope(ye.BODY) && (r.insertionMode = sn.AFTER_BODY, gMt(r, e));
}
function Hor(r, e) {
    const a = e.tagID;
    r.openElements.hasInScope(a) && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilTagNamePopped(a));
}
function Zor(r) {
    const e = r.openElements.tmplCount > 0, { formElement: a } = r;
    e || (r.formElement = null), (a || e) && r.openElements.hasInScope(ye.FORM) && (r.openElements.generateImpliedEndTags(), e ? r.openElements.popUntilTagNamePopped(ye.FORM) : a && r.openElements.remove(a));
}
function Vor(r) {
    r.openElements.hasInButtonScope(ye.P) || r._insertFakeElement(Un.P, ye.P), r._closePElement();
}
function Kor(r) {
    r.openElements.hasInListItemScope(ye.LI) && (r.openElements.generateImpliedEndTagsWithExclusion(ye.LI), r.openElements.popUntilTagNamePopped(ye.LI));
}
function Xor(r, e) {
    const a = e.tagID;
    r.openElements.hasInScope(a) && (r.openElements.generateImpliedEndTagsWithExclusion(a), r.openElements.popUntilTagNamePopped(a));
}
function Yor(r) {
    r.openElements.hasNumberedHeaderInScope() && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilNumberedHeaderPopped());
}
function Jor(r, e) {
    const a = e.tagID;
    r.openElements.hasInScope(a) && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilTagNamePopped(a), r.activeFormattingElements.clearToLastMarker());
}
function Qor(r) {
    r._reconstructActiveFormattingElements(), r._insertFakeElement(Un.BR, ye.BR), r.openElements.pop(), r.framesetOk = !1;
}
function cMt(r, e) {
    const a = e.tagName, s = e.tagID;
    for(let l = r.openElements.stackTop; l > 0; l--){
        const u = r.openElements.items[l], p = r.openElements.tagIDs[l];
        if (s === p && (s !== ye.UNKNOWN || r.treeAdapter.getTagName(u) === a)) {
            r.openElements.generateImpliedEndTagsWithExclusion(s), r.openElements.stackTop >= l && r.openElements.shortenToLength(l);
            break;
        }
        if (r._isSpecialElement(u, p)) break;
    }
}
function xfe(r, e) {
    switch(e.tagID){
        case ye.A:
        case ye.B:
        case ye.I:
        case ye.S:
        case ye.U:
        case ye.EM:
        case ye.TT:
        case ye.BIG:
        case ye.CODE:
        case ye.FONT:
        case ye.NOBR:
        case ye.SMALL:
        case ye.STRIKE:
        case ye.STRONG:
            {
                jNe(r, e);
                break;
            }
        case ye.P:
            {
                Vor(r);
                break;
            }
        case ye.DL:
        case ye.UL:
        case ye.OL:
        case ye.DIR:
        case ye.DIV:
        case ye.NAV:
        case ye.PRE:
        case ye.MAIN:
        case ye.MENU:
        case ye.ASIDE:
        case ye.BUTTON:
        case ye.CENTER:
        case ye.FIGURE:
        case ye.FOOTER:
        case ye.HEADER:
        case ye.HGROUP:
        case ye.DIALOG:
        case ye.ADDRESS:
        case ye.ARTICLE:
        case ye.DETAILS:
        case ye.SEARCH:
        case ye.SECTION:
        case ye.SUMMARY:
        case ye.LISTING:
        case ye.FIELDSET:
        case ye.BLOCKQUOTE:
        case ye.FIGCAPTION:
            {
                Hor(r, e);
                break;
            }
        case ye.LI:
            {
                Kor(r);
                break;
            }
        case ye.DD:
        case ye.DT:
            {
                Xor(r, e);
                break;
            }
        case ye.H1:
        case ye.H2:
        case ye.H3:
        case ye.H4:
        case ye.H5:
        case ye.H6:
            {
                Yor(r);
                break;
            }
        case ye.BR:
            {
                Qor(r);
                break;
            }
        case ye.BODY:
            {
                Gor(r, e);
                break;
            }
        case ye.HTML:
            {
                Wor(r, e);
                break;
            }
        case ye.FORM:
            {
                Zor(r);
                break;
            }
        case ye.APPLET:
        case ye.OBJECT:
        case ye.MARQUEE:
            {
                Jor(r, e);
                break;
            }
        case ye.TEMPLATE:
            {
                wP(r, e);
                break;
            }
        default:
            cMt(r, e);
    }
}
function lMt(r, e) {
    r.tmplInsertionModeStack.length > 0 ? hMt(r, e) : DNe(r, e);
}
function esr(r, e) {
    var a;
    e.tagID === ye.SCRIPT && ((a = r.scriptHandler) === null || a === void 0 || a.call(r, r.openElements.current)), r.openElements.pop(), r.insertionMode = r.originalInsertionMode;
}
function tsr(r, e) {
    r._err(e, kr.eofInElementThatCanContainOnlyText), r.openElements.pop(), r.insertionMode = r.originalInsertionMode, r.onEof(e);
}
function FNe(r, e) {
    if (r.openElements.currentTagId !== void 0 && yMt.has(r.openElements.currentTagId)) switch(r.pendingCharacterTokens.length = 0, r.hasNonWhitespacePendingCharacterToken = !1, r.originalInsertionMode = r.insertionMode, r.insertionMode = sn.IN_TABLE_TEXT, e.type){
        case ru.CHARACTER:
            {
                dMt(r, e);
                break;
            }
        case ru.WHITESPACE_CHARACTER:
            {
                uMt(r, e);
                break;
            }
    }
    else bJ(r, e);
}
function nsr(r, e) {
    r.openElements.clearBackToTableContext(), r.activeFormattingElements.insertMarker(), r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_CAPTION;
}
function rsr(r, e) {
    r.openElements.clearBackToTableContext(), r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_COLUMN_GROUP;
}
function isr(r, e) {
    r.openElements.clearBackToTableContext(), r._insertFakeElement(Un.COLGROUP, ye.COLGROUP), r.insertionMode = sn.IN_COLUMN_GROUP, ONe(r, e);
}
function asr(r, e) {
    r.openElements.clearBackToTableContext(), r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_TABLE_BODY;
}
function osr(r, e) {
    r.openElements.clearBackToTableContext(), r._insertFakeElement(Un.TBODY, ye.TBODY), r.insertionMode = sn.IN_TABLE_BODY, Sfe(r, e);
}
function ssr(r, e) {
    r.openElements.hasInTableScope(ye.TABLE) && (r.openElements.popUntilTagNamePopped(ye.TABLE), r._resetInsertionMode(), r._processStartTag(e));
}
function csr(r, e) {
    aMt(e) ? r._appendElement(e, hi.HTML) : bJ(r, e), e.ackSelfClosing = !0;
}
function lsr(r, e) {
    !r.formElement && r.openElements.tmplCount === 0 && (r._insertElement(e, hi.HTML), r.formElement = r.openElements.current, r.openElements.pop());
}
function $B(r, e) {
    switch(e.tagID){
        case ye.TD:
        case ye.TH:
        case ye.TR:
            {
                osr(r, e);
                break;
            }
        case ye.STYLE:
        case ye.SCRIPT:
        case ye.TEMPLATE:
            {
                P4(r, e);
                break;
            }
        case ye.COL:
            {
                isr(r, e);
                break;
            }
        case ye.FORM:
            {
                lsr(r, e);
                break;
            }
        case ye.TABLE:
            {
                ssr(r, e);
                break;
            }
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
            {
                asr(r, e);
                break;
            }
        case ye.INPUT:
            {
                csr(r, e);
                break;
            }
        case ye.CAPTION:
            {
                nsr(r, e);
                break;
            }
        case ye.COLGROUP:
            {
                rsr(r, e);
                break;
            }
        default:
            bJ(r, e);
    }
}
function gJ(r, e) {
    switch(e.tagID){
        case ye.TABLE:
            {
                r.openElements.hasInTableScope(ye.TABLE) && (r.openElements.popUntilTagNamePopped(ye.TABLE), r._resetInsertionMode());
                break;
            }
        case ye.TEMPLATE:
            {
                wP(r, e);
                break;
            }
        case ye.BODY:
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
        case ye.TBODY:
        case ye.TD:
        case ye.TFOOT:
        case ye.TH:
        case ye.THEAD:
        case ye.TR:
            break;
        default:
            bJ(r, e);
    }
}
function bJ(r, e) {
    const a = r.fosterParentingEnabled;
    r.fosterParentingEnabled = !0, vfe(r, e), r.fosterParentingEnabled = a;
}
function uMt(r, e) {
    r.pendingCharacterTokens.push(e);
}
function dMt(r, e) {
    r.pendingCharacterTokens.push(e), r.hasNonWhitespacePendingCharacterToken = !0;
}
function yJ(r, e) {
    let a = 0;
    if (r.hasNonWhitespacePendingCharacterToken) for(; a < r.pendingCharacterTokens.length; a++)bJ(r, r.pendingCharacterTokens[a]);
    else for(; a < r.pendingCharacterTokens.length; a++)r._insertCharacters(r.pendingCharacterTokens[a]);
    r.insertionMode = r.originalInsertionMode, r._processToken(e);
}
function usr(r, e) {
    const a = e.tagID;
    vMt.has(a) ? r.openElements.hasInTableScope(ye.CAPTION) && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilTagNamePopped(ye.CAPTION), r.activeFormattingElements.clearToLastMarker(), r.insertionMode = sn.IN_TABLE, $B(r, e)) : $0(r, e);
}
function dsr(r, e) {
    const a = e.tagID;
    switch(a){
        case ye.CAPTION:
        case ye.TABLE:
            {
                r.openElements.hasInTableScope(ye.CAPTION) && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilTagNamePopped(ye.CAPTION), r.activeFormattingElements.clearToLastMarker(), r.insertionMode = sn.IN_TABLE, a === ye.TABLE && gJ(r, e));
                break;
            }
        case ye.BODY:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
        case ye.TBODY:
        case ye.TD:
        case ye.TFOOT:
        case ye.TH:
        case ye.THEAD:
        case ye.TR:
            break;
        default:
            xfe(r, e);
    }
}
function ONe(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.COL:
            {
                r._appendElement(e, hi.HTML), e.ackSelfClosing = !0;
                break;
            }
        case ye.TEMPLATE:
            {
                P4(r, e);
                break;
            }
        default:
            Cfe(r, e);
    }
}
function psr(r, e) {
    switch(e.tagID){
        case ye.COLGROUP:
            {
                r.openElements.currentTagId === ye.COLGROUP && (r.openElements.pop(), r.insertionMode = sn.IN_TABLE);
                break;
            }
        case ye.TEMPLATE:
            {
                wP(r, e);
                break;
            }
        case ye.COL:
            break;
        default:
            Cfe(r, e);
    }
}
function Cfe(r, e) {
    r.openElements.currentTagId === ye.COLGROUP && (r.openElements.pop(), r.insertionMode = sn.IN_TABLE, r._processToken(e));
}
function Sfe(r, e) {
    switch(e.tagID){
        case ye.TR:
            {
                r.openElements.clearBackToTableBodyContext(), r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_ROW;
                break;
            }
        case ye.TH:
        case ye.TD:
            {
                r.openElements.clearBackToTableBodyContext(), r._insertFakeElement(Un.TR, ye.TR), r.insertionMode = sn.IN_ROW, Efe(r, e);
                break;
            }
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
            {
                r.openElements.hasTableBodyContextInTableScope() && (r.openElements.clearBackToTableBodyContext(), r.openElements.pop(), r.insertionMode = sn.IN_TABLE, $B(r, e));
                break;
            }
        default:
            $B(r, e);
    }
}
function zNe(r, e) {
    const a = e.tagID;
    switch(e.tagID){
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
            {
                r.openElements.hasInTableScope(a) && (r.openElements.clearBackToTableBodyContext(), r.openElements.pop(), r.insertionMode = sn.IN_TABLE);
                break;
            }
        case ye.TABLE:
            {
                r.openElements.hasTableBodyContextInTableScope() && (r.openElements.clearBackToTableBodyContext(), r.openElements.pop(), r.insertionMode = sn.IN_TABLE, gJ(r, e));
                break;
            }
        case ye.BODY:
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
        case ye.TD:
        case ye.TH:
        case ye.TR:
            break;
        default:
            gJ(r, e);
    }
}
function Efe(r, e) {
    switch(e.tagID){
        case ye.TH:
        case ye.TD:
            {
                r.openElements.clearBackToTableRowContext(), r._insertElement(e, hi.HTML), r.insertionMode = sn.IN_CELL, r.activeFormattingElements.insertMarker();
                break;
            }
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
        case ye.TR:
            {
                r.openElements.hasInTableScope(ye.TR) && (r.openElements.clearBackToTableRowContext(), r.openElements.pop(), r.insertionMode = sn.IN_TABLE_BODY, Sfe(r, e));
                break;
            }
        default:
            $B(r, e);
    }
}
function pMt(r, e) {
    switch(e.tagID){
        case ye.TR:
            {
                r.openElements.hasInTableScope(ye.TR) && (r.openElements.clearBackToTableRowContext(), r.openElements.pop(), r.insertionMode = sn.IN_TABLE_BODY);
                break;
            }
        case ye.TABLE:
            {
                r.openElements.hasInTableScope(ye.TR) && (r.openElements.clearBackToTableRowContext(), r.openElements.pop(), r.insertionMode = sn.IN_TABLE_BODY, zNe(r, e));
                break;
            }
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
            {
                (r.openElements.hasInTableScope(e.tagID) || r.openElements.hasInTableScope(ye.TR)) && (r.openElements.clearBackToTableRowContext(), r.openElements.pop(), r.insertionMode = sn.IN_TABLE_BODY, zNe(r, e));
                break;
            }
        case ye.BODY:
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
        case ye.TD:
        case ye.TH:
            break;
        default:
            gJ(r, e);
    }
}
function msr(r, e) {
    const a = e.tagID;
    vMt.has(a) ? (r.openElements.hasInTableScope(ye.TD) || r.openElements.hasInTableScope(ye.TH)) && (r._closeTableCell(), Efe(r, e)) : $0(r, e);
}
function fsr(r, e) {
    const a = e.tagID;
    switch(a){
        case ye.TD:
        case ye.TH:
            {
                r.openElements.hasInTableScope(a) && (r.openElements.generateImpliedEndTags(), r.openElements.popUntilTagNamePopped(a), r.activeFormattingElements.clearToLastMarker(), r.insertionMode = sn.IN_ROW);
                break;
            }
        case ye.TABLE:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
        case ye.TR:
            {
                r.openElements.hasInTableScope(a) && (r._closeTableCell(), pMt(r, e));
                break;
            }
        case ye.BODY:
        case ye.CAPTION:
        case ye.COL:
        case ye.COLGROUP:
        case ye.HTML:
            break;
        default:
            xfe(r, e);
    }
}
function mMt(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.OPTION:
            {
                r.openElements.currentTagId === ye.OPTION && r.openElements.pop(), r._insertElement(e, hi.HTML);
                break;
            }
        case ye.OPTGROUP:
            {
                r.openElements.currentTagId === ye.OPTION && r.openElements.pop(), r.openElements.currentTagId === ye.OPTGROUP && r.openElements.pop(), r._insertElement(e, hi.HTML);
                break;
            }
        case ye.HR:
            {
                r.openElements.currentTagId === ye.OPTION && r.openElements.pop(), r.openElements.currentTagId === ye.OPTGROUP && r.openElements.pop(), r._appendElement(e, hi.HTML), e.ackSelfClosing = !0;
                break;
            }
        case ye.INPUT:
        case ye.KEYGEN:
        case ye.TEXTAREA:
        case ye.SELECT:
            {
                r.openElements.hasInSelectScope(ye.SELECT) && (r.openElements.popUntilTagNamePopped(ye.SELECT), r._resetInsertionMode(), e.tagID !== ye.SELECT && r._processStartTag(e));
                break;
            }
        case ye.SCRIPT:
        case ye.TEMPLATE:
            {
                P4(r, e);
                break;
            }
        default:
    }
}
function fMt(r, e) {
    switch(e.tagID){
        case ye.OPTGROUP:
            {
                r.openElements.stackTop > 0 && r.openElements.currentTagId === ye.OPTION && r.openElements.tagIDs[r.openElements.stackTop - 1] === ye.OPTGROUP && r.openElements.pop(), r.openElements.currentTagId === ye.OPTGROUP && r.openElements.pop();
                break;
            }
        case ye.OPTION:
            {
                r.openElements.currentTagId === ye.OPTION && r.openElements.pop();
                break;
            }
        case ye.SELECT:
            {
                r.openElements.hasInSelectScope(ye.SELECT) && (r.openElements.popUntilTagNamePopped(ye.SELECT), r._resetInsertionMode());
                break;
            }
        case ye.TEMPLATE:
            {
                wP(r, e);
                break;
            }
        default:
    }
}
function hsr(r, e) {
    const a = e.tagID;
    a === ye.CAPTION || a === ye.TABLE || a === ye.TBODY || a === ye.TFOOT || a === ye.THEAD || a === ye.TR || a === ye.TD || a === ye.TH ? (r.openElements.popUntilTagNamePopped(ye.SELECT), r._resetInsertionMode(), r._processStartTag(e)) : mMt(r, e);
}
function gsr(r, e) {
    const a = e.tagID;
    a === ye.CAPTION || a === ye.TABLE || a === ye.TBODY || a === ye.TFOOT || a === ye.THEAD || a === ye.TR || a === ye.TD || a === ye.TH ? r.openElements.hasInTableScope(a) && (r.openElements.popUntilTagNamePopped(ye.SELECT), r._resetInsertionMode(), r.onEndTag(e)) : fMt(r, e);
}
function bsr(r, e) {
    switch(e.tagID){
        case ye.BASE:
        case ye.BASEFONT:
        case ye.BGSOUND:
        case ye.LINK:
        case ye.META:
        case ye.NOFRAMES:
        case ye.SCRIPT:
        case ye.STYLE:
        case ye.TEMPLATE:
        case ye.TITLE:
            {
                P4(r, e);
                break;
            }
        case ye.CAPTION:
        case ye.COLGROUP:
        case ye.TBODY:
        case ye.TFOOT:
        case ye.THEAD:
            {
                r.tmplInsertionModeStack[0] = sn.IN_TABLE, r.insertionMode = sn.IN_TABLE, $B(r, e);
                break;
            }
        case ye.COL:
            {
                r.tmplInsertionModeStack[0] = sn.IN_COLUMN_GROUP, r.insertionMode = sn.IN_COLUMN_GROUP, ONe(r, e);
                break;
            }
        case ye.TR:
            {
                r.tmplInsertionModeStack[0] = sn.IN_TABLE_BODY, r.insertionMode = sn.IN_TABLE_BODY, Sfe(r, e);
                break;
            }
        case ye.TD:
        case ye.TH:
            {
                r.tmplInsertionModeStack[0] = sn.IN_ROW, r.insertionMode = sn.IN_ROW, Efe(r, e);
                break;
            }
        default:
            r.tmplInsertionModeStack[0] = sn.IN_BODY, r.insertionMode = sn.IN_BODY, $0(r, e);
    }
}
function ysr(r, e) {
    e.tagID === ye.TEMPLATE && wP(r, e);
}
function hMt(r, e) {
    r.openElements.tmplCount > 0 ? (r.openElements.popUntilTagNamePopped(ye.TEMPLATE), r.activeFormattingElements.clearToLastMarker(), r.tmplInsertionModeStack.shift(), r._resetInsertionMode(), r.onEof(e)) : DNe(r, e);
}
function wsr(r, e) {
    e.tagID === ye.HTML ? $0(r, e) : Afe(r, e);
}
function gMt(r, e) {
    var a;
    if (e.tagID === ye.HTML) {
        if (r.fragmentContext || (r.insertionMode = sn.AFTER_AFTER_BODY), r.options.sourceCodeLocationInfo && r.openElements.tagIDs[0] === ye.HTML) {
            r._setEndLocation(r.openElements.items[0], e);
            const s = r.openElements.items[1];
            s && !(!((a = r.treeAdapter.getNodeSourceCodeLocation(s)) === null || a === void 0) && a.endTag) && r._setEndLocation(s, e);
        }
    } else Afe(r, e);
}
function Afe(r, e) {
    r.insertionMode = sn.IN_BODY, vfe(r, e);
}
function _sr(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.FRAMESET:
            {
                r._insertElement(e, hi.HTML);
                break;
            }
        case ye.FRAME:
            {
                r._appendElement(e, hi.HTML), e.ackSelfClosing = !0;
                break;
            }
        case ye.NOFRAMES:
            {
                P4(r, e);
                break;
            }
        default:
    }
}
function ksr(r, e) {
    e.tagID === ye.FRAMESET && !r.openElements.isRootHtmlElementCurrent() && (r.openElements.pop(), !r.fragmentContext && r.openElements.currentTagId !== ye.FRAMESET && (r.insertionMode = sn.AFTER_FRAMESET));
}
function vsr(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.NOFRAMES:
            {
                P4(r, e);
                break;
            }
        default:
    }
}
function xsr(r, e) {
    e.tagID === ye.HTML && (r.insertionMode = sn.AFTER_AFTER_FRAMESET);
}
function Csr(r, e) {
    e.tagID === ye.HTML ? $0(r, e) : Tfe(r, e);
}
function Tfe(r, e) {
    r.insertionMode = sn.IN_BODY, vfe(r, e);
}
function Ssr(r, e) {
    switch(e.tagID){
        case ye.HTML:
            {
                $0(r, e);
                break;
            }
        case ye.NOFRAMES:
            {
                P4(r, e);
                break;
            }
        default:
    }
}
function Esr(r, e) {
    e.chars = hm, r._insertCharacters(e);
}
function Asr(r, e) {
    r._insertCharacters(e), r.framesetOk = !1;
}
function bMt(r) {
    for(; r.treeAdapter.getNamespaceURI(r.openElements.current) !== hi.HTML && r.openElements.currentTagId !== void 0 && !r._isIntegrationPoint(r.openElements.currentTagId, r.openElements.current);)r.openElements.pop();
}
function Tsr(r, e) {
    if (Oar(e)) bMt(r), r._startTagOutsideForeignContent(e);
    else {
        const a = r._getAdjustedCurrentElement(), s = r.treeAdapter.getNamespaceURI(a);
        s === hi.MATHML ? QNt(e) : s === hi.SVG && (zar(e), eMt(e)), PNe(e), e.selfClosing ? r._appendElement(e, s) : r._insertElement(e, s), e.ackSelfClosing = !0;
    }
}
function $sr(r, e) {
    if (e.tagID === ye.P || e.tagID === ye.BR) {
        bMt(r), r._endTagOutsideForeignContent(e);
        return;
    }
    for(let a = r.openElements.stackTop; a > 0; a--){
        const s = r.openElements.items[a];
        if (r.treeAdapter.getNamespaceURI(s) === hi.HTML) {
            r._endTagOutsideForeignContent(e);
            break;
        }
        const l = r.treeAdapter.getTagName(s);
        if (l.toLowerCase() === e.tagName) {
            e.tagName = l, r.openElements.shortenToLength(a);
            break;
        }
    }
}
var Isr, Nsr, Msr, sn, Rsr, yMt, wMt, _Mt, kMt, vMt;
export { $0, $B, $or, $sr, Afe, Aor, Asr, Bor, Cfe, Cor, Csr, DNe, Dor, Efe, Eor, Esr, FNe, For, Gor, Hor, Ior, Isr, Jar, Jor, Kor, LNe, Lor, Mor, Msr, Nor, Nsr, ONe, Oor, P4, Por, Qar, Qor, Ror, Rsr, Sfe, Sor, Ssr, Tfe, Tor, Tsr, Uor, Vor, Wor, Xor, Yar, Yor, Zor, _Mt, _or, _sr, aMt, aor, asr, bJ, bMt, bor, bsr, cMt, cor, csr, dJ, dMt, dor, dsr, eor, esr, fJ, fMt, fsr, gJ, gMt, gor, gsr, hJ, hMt, hor, hsr, iMt, ior, isr, jNe, jor, kMt, kor, ksr, lMt, lor, lsr, mJ, mMt, mor, msr, nMt, nor, nsr, oMt, oor, osr, pJ, pMt, por, psr, qor, rMt, ror, rsr, sMt, sn, sor, ssr, tor, tsr, uJ, uMt, uor, usr, vMt, vfe, vor, vsr, wMt, wP, wor, wsr, xfe, xor, xsr, yJ, yMt, yor, ysr, zNe, zor };
var __wakaru_Psr_initialized = false;
export function Psr() {
if (__wakaru_Psr_initialized) return;
__wakaru_Psr_initialized = true;
xar(), _vi(), kvi(), VNt(), vvi(), Xar(), INe(), INt(), yP(), MNt(), Isr = "hidden", Nsr = 8, Msr = 3, (function(r) {
    r[r.INITIAL = 0] = "INITIAL", r[r.BEFORE_HTML = 1] = "BEFORE_HTML", r[r.BEFORE_HEAD = 2] = "BEFORE_HEAD", r[r.IN_HEAD = 3] = "IN_HEAD", r[r.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", r[r.AFTER_HEAD = 5] = "AFTER_HEAD", r[r.IN_BODY = 6] = "IN_BODY", r[r.TEXT = 7] = "TEXT", r[r.IN_TABLE = 8] = "IN_TABLE", r[r.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", r[r.IN_CAPTION = 10] = "IN_CAPTION", r[r.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", r[r.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", r[r.IN_ROW = 13] = "IN_ROW", r[r.IN_CELL = 14] = "IN_CELL", r[r.IN_SELECT = 15] = "IN_SELECT", r[r.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", r[r.IN_TEMPLATE = 17] = "IN_TEMPLATE", r[r.AFTER_BODY = 18] = "AFTER_BODY", r[r.IN_FRAMESET = 19] = "IN_FRAMESET", r[r.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", r[r.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", r[r.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(sn || (sn = {})), Rsr = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1
}, yMt = new Set([
    ye.TABLE,
    ye.TBODY,
    ye.TFOOT,
    ye.THEAD,
    ye.TR
]), wMt = {
    scriptingEnabled: !0,
    sourceCodeLocationInfo: !1,
    treeAdapter: JT,
    onParseError: null
}, _Mt = class {
    constructor(e, a, s = null, l = null){
        this.fragmentContext = s, this.scriptHandler = l, this.currentToken = null, this.stopped = !1, this.insertionMode = sn.INITIAL, this.originalInsertionMode = sn.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
            ...wMt,
            ...e
        }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = a ?? this.treeAdapter.createDocument(), this.tokenizer = new kar(this.options, this), this.activeFormattingElements = new Nar(this.treeAdapter), this.fragmentContextID = s ? cJ(this.treeAdapter.getTagName(s)) : ye.UNKNOWN, this._setContextModes(s ?? this.document, this.fragmentContextID), this.openElements = new Iar(this.document, this.treeAdapter, this);
    }
    static parse(e, a) {
        const s = new this(a);
        return s.tokenizer.write(e, !0), s.document;
    }
    static getFragmentParser(e, a) {
        const s = {
            ...wMt,
            ...a
        };
        e ?? (e = s.treeAdapter.createElement(Un.TEMPLATE, hi.HTML, []));
        const l = s.treeAdapter.createElement("documentmock", hi.HTML, []), u = new this(s, l, e);
        return u.fragmentContextID === ye.TEMPLATE && u.tmplInsertionModeStack.unshift(sn.IN_TEMPLATE), u._initTokenizerForFragmentParsing(), u._insertFakeRootElement(), u._resetInsertionMode(), u._findFormInFragmentContext(), u;
    }
    getFragment() {
        const e = this.treeAdapter.getFirstChild(this.document), a = this.treeAdapter.createDocumentFragment();
        return this._adoptNodes(e, a), a;
    }
    _err(e, a, s) {
        var l;
        if (!this.onParseError) return;
        const u = (l = e.location) !== null && l !== void 0 ? l : Rsr, p = {
            code: a,
            startLine: u.startLine,
            startCol: u.startCol,
            startOffset: u.startOffset,
            endLine: s ? u.startLine : u.endLine,
            endCol: s ? u.startCol : u.endCol,
            endOffset: s ? u.startOffset : u.endOffset
        };
        this.onParseError(p);
    }
    onItemPush(e, a, s) {
        var l, u;
        (u = (l = this.treeAdapter).onItemPush) === null || u === void 0 || u.call(l, e), s && this.openElements.stackTop > 0 && this._setContextModes(e, a);
    }
    onItemPop(e, a) {
        var s, l;
        if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (l = (s = this.treeAdapter).onItemPop) === null || l === void 0 || l.call(s, e, this.openElements.current), a) {
            let u, p;
            this.openElements.stackTop === 0 && this.fragmentContext ? (u = this.fragmentContext, p = this.fragmentContextID) : { current: u, currentTagId: p } = this.openElements, this._setContextModes(u, p);
        }
    }
    _setContextModes(e, a) {
        const s = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === hi.HTML;
        this.currentNotInHTML = !s, this.tokenizer.inForeignNode = !s && e !== void 0 && a !== void 0 && !this._isIntegrationPoint(a, e);
    }
    _switchToTextParsing(e, a) {
        this._insertElement(e, hi.HTML), this.tokenizer.state = a, this.originalInsertionMode = this.insertionMode, this.insertionMode = sn.TEXT;
    }
    switchToPlaintextParsing() {
        this.insertionMode = sn.TEXT, this.originalInsertionMode = sn.IN_BODY, this.tokenizer.state = wh.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
    _findFormInFragmentContext() {
        let e = this.fragmentContext;
        for(; e;){
            if (this.treeAdapter.getTagName(e) === Un.FORM) {
                this.formElement = e;
                break;
            }
            e = this.treeAdapter.getParentNode(e);
        }
    }
    _initTokenizerForFragmentParsing() {
        if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== hi.HTML)) switch(this.fragmentContextID){
            case ye.TITLE:
            case ye.TEXTAREA:
                {
                    this.tokenizer.state = wh.RCDATA;
                    break;
                }
            case ye.STYLE:
            case ye.XMP:
            case ye.IFRAME:
            case ye.NOEMBED:
            case ye.NOFRAMES:
            case ye.NOSCRIPT:
                {
                    this.tokenizer.state = wh.RAWTEXT;
                    break;
                }
            case ye.SCRIPT:
                {
                    this.tokenizer.state = wh.SCRIPT_DATA;
                    break;
                }
            case ye.PLAINTEXT:
                {
                    this.tokenizer.state = wh.PLAINTEXT;
                    break;
                }
            default:
        }
    }
    _setDocumentType(e) {
        const a = e.name || "", s = e.publicId || "", l = e.systemId || "";
        if (this.treeAdapter.setDocumentType(this.document, a, s, l), e.location) {
            const p = this.treeAdapter.getChildNodes(this.document).find((m)=>this.treeAdapter.isDocumentTypeNode(m));
            p && this.treeAdapter.setNodeSourceCodeLocation(p, e.location);
        }
    }
    _attachElementToTree(e, a) {
        if (this.options.sourceCodeLocationInfo) {
            const s = a && {
                ...a,
                startTag: a
            };
            this.treeAdapter.setNodeSourceCodeLocation(e, s);
        }
        if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
        else {
            const s = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(s ?? this.document, e);
        }
    }
    _appendElement(e, a) {
        const s = this.treeAdapter.createElement(e.tagName, a, e.attrs);
        this._attachElementToTree(s, e.location);
    }
    _insertElement(e, a) {
        const s = this.treeAdapter.createElement(e.tagName, a, e.attrs);
        this._attachElementToTree(s, e.location), this.openElements.push(s, e.tagID);
    }
    _insertFakeElement(e, a) {
        const s = this.treeAdapter.createElement(e, hi.HTML, []);
        this._attachElementToTree(s, null), this.openElements.push(s, a);
    }
    _insertTemplate(e) {
        const a = this.treeAdapter.createElement(e.tagName, hi.HTML, e.attrs), s = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(a, s), this._attachElementToTree(a, e.location), this.openElements.push(a, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, null);
    }
    _insertFakeRootElement() {
        const e = this.treeAdapter.createElement(Un.HTML, hi.HTML, []);
        this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, ye.HTML);
    }
    _appendCommentNode(e, a) {
        const s = this.treeAdapter.createCommentNode(e.data);
        this.treeAdapter.appendChild(a, s), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, e.location);
    }
    _insertCharacters(e) {
        let a, s;
        if (this._shouldFosterParentOnInsertion() ? ({ parent: a, beforeElement: s } = this._findFosterParentingLocation(), s ? this.treeAdapter.insertTextBefore(a, e.chars, s) : this.treeAdapter.insertText(a, e.chars)) : (a = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(a, e.chars)), !e.location) return;
        const l = this.treeAdapter.getChildNodes(a), u = s ? l.lastIndexOf(s) : l.length, p = l[u - 1];
        if (this.treeAdapter.getNodeSourceCodeLocation(p)) {
            const { endLine: b, endCol: g, endOffset: _ } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(p, {
                endLine: b,
                endCol: g,
                endOffset: _
            });
        } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(p, e.location);
    }
    _adoptNodes(e, a) {
        for(let s = this.treeAdapter.getFirstChild(e); s; s = this.treeAdapter.getFirstChild(e))this.treeAdapter.detachNode(s), this.treeAdapter.appendChild(a, s);
    }
    _setEndLocation(e, a) {
        if (this.treeAdapter.getNodeSourceCodeLocation(e) && a.location) {
            const s = a.location, l = this.treeAdapter.getTagName(e), u = a.type === ru.END_TAG && l === a.tagName ? {
                endTag: {
                    ...s
                },
                endLine: s.endLine,
                endCol: s.endCol,
                endOffset: s.endOffset
            } : {
                endLine: s.startLine,
                endCol: s.startCol,
                endOffset: s.startOffset
            };
            this.treeAdapter.updateNodeSourceCodeLocation(e, u);
        }
    }
    shouldProcessStartTagTokenInForeignContent(e) {
        if (!this.currentNotInHTML) return !1;
        let a, s;
        return this.openElements.stackTop === 0 && this.fragmentContext ? (a = this.fragmentContext, s = this.fragmentContextID) : { current: a, currentTagId: s } = this.openElements, e.tagID === ye.SVG && this.treeAdapter.getTagName(a) === Un.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(a) === hi.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === ye.MGLYPH || e.tagID === ye.MALIGNMARK) && s !== void 0 && !this._isIntegrationPoint(s, a, hi.HTML);
    }
    _processToken(e) {
        switch(e.type){
            case ru.CHARACTER:
                {
                    this.onCharacter(e);
                    break;
                }
            case ru.NULL_CHARACTER:
                {
                    this.onNullCharacter(e);
                    break;
                }
            case ru.COMMENT:
                {
                    this.onComment(e);
                    break;
                }
            case ru.DOCTYPE:
                {
                    this.onDoctype(e);
                    break;
                }
            case ru.START_TAG:
                {
                    this._processStartTag(e);
                    break;
                }
            case ru.END_TAG:
                {
                    this.onEndTag(e);
                    break;
                }
            case ru.EOF:
                {
                    this.onEof(e);
                    break;
                }
            case ru.WHITESPACE_CHARACTER:
                {
                    this.onWhitespaceCharacter(e);
                    break;
                }
        }
    }
    _isIntegrationPoint(e, a, s) {
        const l = this.treeAdapter.getNamespaceURI(a), u = this.treeAdapter.getAttrList(a);
        return Uar(e, l, u, s);
    }
    _reconstructActiveFormattingElements() {
        const e = this.activeFormattingElements.entries.length;
        if (e) {
            const a = this.activeFormattingElements.entries.findIndex((l)=>l.type === RS.Marker || this.openElements.contains(l.element)), s = a === -1 ? e - 1 : a - 1;
            for(let l = s; l >= 0; l--){
                const u = this.activeFormattingElements.entries[l];
                this._insertElement(u.token, this.treeAdapter.getNamespaceURI(u.element)), u.element = this.openElements.current;
            }
        }
    }
    _closeTableCell() {
        this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = sn.IN_ROW;
    }
    _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(ye.P), this.openElements.popUntilTagNamePopped(ye.P);
    }
    _resetInsertionMode() {
        for(let e = this.openElements.stackTop; e >= 0; e--)switch(e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]){
            case ye.TR:
                {
                    this.insertionMode = sn.IN_ROW;
                    return;
                }
            case ye.TBODY:
            case ye.THEAD:
            case ye.TFOOT:
                {
                    this.insertionMode = sn.IN_TABLE_BODY;
                    return;
                }
            case ye.CAPTION:
                {
                    this.insertionMode = sn.IN_CAPTION;
                    return;
                }
            case ye.COLGROUP:
                {
                    this.insertionMode = sn.IN_COLUMN_GROUP;
                    return;
                }
            case ye.TABLE:
                {
                    this.insertionMode = sn.IN_TABLE;
                    return;
                }
            case ye.BODY:
                {
                    this.insertionMode = sn.IN_BODY;
                    return;
                }
            case ye.FRAMESET:
                {
                    this.insertionMode = sn.IN_FRAMESET;
                    return;
                }
            case ye.SELECT:
                {
                    this._resetInsertionModeForSelect(e);
                    return;
                }
            case ye.TEMPLATE:
                {
                    this.insertionMode = this.tmplInsertionModeStack[0];
                    return;
                }
            case ye.HTML:
                {
                    this.insertionMode = this.headElement ? sn.AFTER_HEAD : sn.BEFORE_HEAD;
                    return;
                }
            case ye.TD:
            case ye.TH:
                {
                    if (e > 0) {
                        this.insertionMode = sn.IN_CELL;
                        return;
                    }
                    break;
                }
            case ye.HEAD:
                {
                    if (e > 0) {
                        this.insertionMode = sn.IN_HEAD;
                        return;
                    }
                    break;
                }
        }
        this.insertionMode = sn.IN_BODY;
    }
    _resetInsertionModeForSelect(e) {
        if (e > 0) for(let a = e - 1; a > 0; a--){
            const s = this.openElements.tagIDs[a];
            if (s === ye.TEMPLATE) break;
            if (s === ye.TABLE) {
                this.insertionMode = sn.IN_SELECT_IN_TABLE;
                return;
            }
        }
        this.insertionMode = sn.IN_SELECT;
    }
    _isElementCausesFosterParenting(e) {
        return yMt.has(e);
    }
    _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
        for(let e = this.openElements.stackTop; e >= 0; e--){
            const a = this.openElements.items[e];
            switch(this.openElements.tagIDs[e]){
                case ye.TEMPLATE:
                    {
                        if (this.treeAdapter.getNamespaceURI(a) === hi.HTML) return {
                            parent: this.treeAdapter.getTemplateContent(a),
                            beforeElement: null
                        };
                        break;
                    }
                case ye.TABLE:
                    {
                        const s = this.treeAdapter.getParentNode(a);
                        return s ? {
                            parent: s,
                            beforeElement: a
                        } : {
                            parent: this.openElements.items[e - 1],
                            beforeElement: null
                        };
                    }
                default:
            }
        }
        return {
            parent: this.openElements.items[0],
            beforeElement: null
        };
    }
    _fosterParentElement(e) {
        const a = this._findFosterParentingLocation();
        a.beforeElement ? this.treeAdapter.insertBefore(a.parent, e, a.beforeElement) : this.treeAdapter.appendChild(a.parent, e);
    }
    _isSpecialElement(e, a) {
        const s = this.treeAdapter.getNamespaceURI(e);
        return LNt[s].has(a);
    }
    onCharacter(e) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
            Asr(this, e);
            return;
        }
        switch(this.insertionMode){
            case sn.INITIAL:
                {
                    uJ(this, e);
                    break;
                }
            case sn.BEFORE_HTML:
                {
                    dJ(this, e);
                    break;
                }
            case sn.BEFORE_HEAD:
                {
                    pJ(this, e);
                    break;
                }
            case sn.IN_HEAD:
                {
                    mJ(this, e);
                    break;
                }
            case sn.IN_HEAD_NO_SCRIPT:
                {
                    fJ(this, e);
                    break;
                }
            case sn.AFTER_HEAD:
                {
                    hJ(this, e);
                    break;
                }
            case sn.IN_BODY:
            case sn.IN_CAPTION:
            case sn.IN_CELL:
            case sn.IN_TEMPLATE:
                {
                    rMt(this, e);
                    break;
                }
            case sn.TEXT:
            case sn.IN_SELECT:
            case sn.IN_SELECT_IN_TABLE:
                {
                    this._insertCharacters(e);
                    break;
                }
            case sn.IN_TABLE:
            case sn.IN_TABLE_BODY:
            case sn.IN_ROW:
                {
                    FNe(this, e);
                    break;
                }
            case sn.IN_TABLE_TEXT:
                {
                    dMt(this, e);
                    break;
                }
            case sn.IN_COLUMN_GROUP:
                {
                    Cfe(this, e);
                    break;
                }
            case sn.AFTER_BODY:
                {
                    Afe(this, e);
                    break;
                }
            case sn.AFTER_AFTER_BODY:
                {
                    Tfe(this, e);
                    break;
                }
            default:
        }
    }
    onNullCharacter(e) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
            Esr(this, e);
            return;
        }
        switch(this.insertionMode){
            case sn.INITIAL:
                {
                    uJ(this, e);
                    break;
                }
            case sn.BEFORE_HTML:
                {
                    dJ(this, e);
                    break;
                }
            case sn.BEFORE_HEAD:
                {
                    pJ(this, e);
                    break;
                }
            case sn.IN_HEAD:
                {
                    mJ(this, e);
                    break;
                }
            case sn.IN_HEAD_NO_SCRIPT:
                {
                    fJ(this, e);
                    break;
                }
            case sn.AFTER_HEAD:
                {
                    hJ(this, e);
                    break;
                }
            case sn.TEXT:
                {
                    this._insertCharacters(e);
                    break;
                }
            case sn.IN_TABLE:
            case sn.IN_TABLE_BODY:
            case sn.IN_ROW:
                {
                    FNe(this, e);
                    break;
                }
            case sn.IN_COLUMN_GROUP:
                {
                    Cfe(this, e);
                    break;
                }
            case sn.AFTER_BODY:
                {
                    Afe(this, e);
                    break;
                }
            case sn.AFTER_AFTER_BODY:
                {
                    Tfe(this, e);
                    break;
                }
            default:
        }
    }
    onComment(e) {
        if (this.skipNextNewLine = !1, this.currentNotInHTML) {
            LNe(this, e);
            return;
        }
        switch(this.insertionMode){
            case sn.INITIAL:
            case sn.BEFORE_HTML:
            case sn.BEFORE_HEAD:
            case sn.IN_HEAD:
            case sn.IN_HEAD_NO_SCRIPT:
            case sn.AFTER_HEAD:
            case sn.IN_BODY:
            case sn.IN_TABLE:
            case sn.IN_CAPTION:
            case sn.IN_COLUMN_GROUP:
            case sn.IN_TABLE_BODY:
            case sn.IN_ROW:
            case sn.IN_CELL:
            case sn.IN_SELECT:
            case sn.IN_SELECT_IN_TABLE:
            case sn.IN_TEMPLATE:
            case sn.IN_FRAMESET:
            case sn.AFTER_FRAMESET:
                {
                    LNe(this, e);
                    break;
                }
            case sn.IN_TABLE_TEXT:
                {
                    yJ(this, e);
                    break;
                }
            case sn.AFTER_BODY:
                {
                    ror(this, e);
                    break;
                }
            case sn.AFTER_AFTER_BODY:
            case sn.AFTER_AFTER_FRAMESET:
                {
                    ior(this, e);
                    break;
                }
            default:
        }
    }
    onDoctype(e) {
        switch(this.skipNextNewLine = !1, this.insertionMode){
            case sn.INITIAL:
                {
                    aor(this, e);
                    break;
                }
            case sn.BEFORE_HEAD:
            case sn.IN_HEAD:
            case sn.IN_HEAD_NO_SCRIPT:
            case sn.AFTER_HEAD:
                {
                    this._err(e, kr.misplacedDoctype);
                    break;
                }
            case sn.IN_TABLE_TEXT:
                {
                    yJ(this, e);
                    break;
                }
            default:
        }
    }
    onStartTag(e) {
        this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, kr.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
    _processStartTag(e) {
        this.shouldProcessStartTagTokenInForeignContent(e) ? Tsr(this, e) : this._startTagOutsideForeignContent(e);
    }
    _startTagOutsideForeignContent(e) {
        switch(this.insertionMode){
            case sn.INITIAL:
                {
                    uJ(this, e);
                    break;
                }
            case sn.BEFORE_HTML:
                {
                    oor(this, e);
                    break;
                }
            case sn.BEFORE_HEAD:
                {
                    cor(this, e);
                    break;
                }
            case sn.IN_HEAD:
                {
                    P4(this, e);
                    break;
                }
            case sn.IN_HEAD_NO_SCRIPT:
                {
                    dor(this, e);
                    break;
                }
            case sn.AFTER_HEAD:
                {
                    mor(this, e);
                    break;
                }
            case sn.IN_BODY:
                {
                    $0(this, e);
                    break;
                }
            case sn.IN_TABLE:
                {
                    $B(this, e);
                    break;
                }
            case sn.IN_TABLE_TEXT:
                {
                    yJ(this, e);
                    break;
                }
            case sn.IN_CAPTION:
                {
                    usr(this, e);
                    break;
                }
            case sn.IN_COLUMN_GROUP:
                {
                    ONe(this, e);
                    break;
                }
            case sn.IN_TABLE_BODY:
                {
                    Sfe(this, e);
                    break;
                }
            case sn.IN_ROW:
                {
                    Efe(this, e);
                    break;
                }
            case sn.IN_CELL:
                {
                    msr(this, e);
                    break;
                }
            case sn.IN_SELECT:
                {
                    mMt(this, e);
                    break;
                }
            case sn.IN_SELECT_IN_TABLE:
                {
                    hsr(this, e);
                    break;
                }
            case sn.IN_TEMPLATE:
                {
                    bsr(this, e);
                    break;
                }
            case sn.AFTER_BODY:
                {
                    wsr(this, e);
                    break;
                }
            case sn.IN_FRAMESET:
                {
                    _sr(this, e);
                    break;
                }
            case sn.AFTER_FRAMESET:
                {
                    vsr(this, e);
                    break;
                }
            case sn.AFTER_AFTER_BODY:
                {
                    Csr(this, e);
                    break;
                }
            case sn.AFTER_AFTER_FRAMESET:
                {
                    Ssr(this, e);
                    break;
                }
            default:
        }
    }
    onEndTag(e) {
        this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? $sr(this, e) : this._endTagOutsideForeignContent(e);
    }
    _endTagOutsideForeignContent(e) {
        switch(this.insertionMode){
            case sn.INITIAL:
                {
                    uJ(this, e);
                    break;
                }
            case sn.BEFORE_HTML:
                {
                    sor(this, e);
                    break;
                }
            case sn.BEFORE_HEAD:
                {
                    lor(this, e);
                    break;
                }
            case sn.IN_HEAD:
                {
                    uor(this, e);
                    break;
                }
            case sn.IN_HEAD_NO_SCRIPT:
                {
                    por(this, e);
                    break;
                }
            case sn.AFTER_HEAD:
                {
                    hor(this, e);
                    break;
                }
            case sn.IN_BODY:
                {
                    xfe(this, e);
                    break;
                }
            case sn.TEXT:
                {
                    esr(this, e);
                    break;
                }
            case sn.IN_TABLE:
                {
                    gJ(this, e);
                    break;
                }
            case sn.IN_TABLE_TEXT:
                {
                    yJ(this, e);
                    break;
                }
            case sn.IN_CAPTION:
                {
                    dsr(this, e);
                    break;
                }
            case sn.IN_COLUMN_GROUP:
                {
                    psr(this, e);
                    break;
                }
            case sn.IN_TABLE_BODY:
                {
                    zNe(this, e);
                    break;
                }
            case sn.IN_ROW:
                {
                    pMt(this, e);
                    break;
                }
            case sn.IN_CELL:
                {
                    fsr(this, e);
                    break;
                }
            case sn.IN_SELECT:
                {
                    fMt(this, e);
                    break;
                }
            case sn.IN_SELECT_IN_TABLE:
                {
                    gsr(this, e);
                    break;
                }
            case sn.IN_TEMPLATE:
                {
                    ysr(this, e);
                    break;
                }
            case sn.AFTER_BODY:
                {
                    gMt(this, e);
                    break;
                }
            case sn.IN_FRAMESET:
                {
                    ksr(this, e);
                    break;
                }
            case sn.AFTER_FRAMESET:
                {
                    xsr(this, e);
                    break;
                }
            case sn.AFTER_AFTER_BODY:
                {
                    Tfe(this, e);
                    break;
                }
            default:
        }
    }
    onEof(e) {
        switch(this.insertionMode){
            case sn.INITIAL:
                {
                    uJ(this, e);
                    break;
                }
            case sn.BEFORE_HTML:
                {
                    dJ(this, e);
                    break;
                }
            case sn.BEFORE_HEAD:
                {
                    pJ(this, e);
                    break;
                }
            case sn.IN_HEAD:
                {
                    mJ(this, e);
                    break;
                }
            case sn.IN_HEAD_NO_SCRIPT:
                {
                    fJ(this, e);
                    break;
                }
            case sn.AFTER_HEAD:
                {
                    hJ(this, e);
                    break;
                }
            case sn.IN_BODY:
            case sn.IN_TABLE:
            case sn.IN_CAPTION:
            case sn.IN_COLUMN_GROUP:
            case sn.IN_TABLE_BODY:
            case sn.IN_ROW:
            case sn.IN_CELL:
            case sn.IN_SELECT:
            case sn.IN_SELECT_IN_TABLE:
                {
                    lMt(this, e);
                    break;
                }
            case sn.TEXT:
                {
                    tsr(this, e);
                    break;
                }
            case sn.IN_TABLE_TEXT:
                {
                    yJ(this, e);
                    break;
                }
            case sn.IN_TEMPLATE:
                {
                    hMt(this, e);
                    break;
                }
            case sn.AFTER_BODY:
            case sn.IN_FRAMESET:
            case sn.AFTER_FRAMESET:
            case sn.AFTER_AFTER_BODY:
            case sn.AFTER_AFTER_FRAMESET:
                {
                    DNe(this, e);
                    break;
                }
            default:
        }
    }
    onWhitespaceCharacter(e) {
        if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === $t.LINE_FEED)) {
            if (e.chars.length === 1) return;
            e.chars = e.chars.substr(1);
        }
        if (this.tokenizer.inForeignNode) {
            this._insertCharacters(e);
            return;
        }
        switch(this.insertionMode){
            case sn.IN_HEAD:
            case sn.IN_HEAD_NO_SCRIPT:
            case sn.AFTER_HEAD:
            case sn.TEXT:
            case sn.IN_COLUMN_GROUP:
            case sn.IN_SELECT:
            case sn.IN_SELECT_IN_TABLE:
            case sn.IN_FRAMESET:
            case sn.AFTER_FRAMESET:
                {
                    this._insertCharacters(e);
                    break;
                }
            case sn.IN_BODY:
            case sn.IN_CAPTION:
            case sn.IN_CELL:
            case sn.IN_TEMPLATE:
            case sn.AFTER_BODY:
            case sn.AFTER_AFTER_BODY:
            case sn.AFTER_AFTER_FRAMESET:
                {
                    nMt(this, e);
                    break;
                }
            case sn.IN_TABLE:
            case sn.IN_TABLE_BODY:
            case sn.IN_ROW:
                {
                    FNe(this, e);
                    break;
                }
            case sn.IN_TABLE_TEXT:
                {
                    uMt(this, e);
                    break;
                }
            default:
        }
    }
}, i(_Mt, "Parser"), kMt = _Mt, i(Yar, "aaObtainFormattingElementEntry"), i(Jar, "aaObtainFurthestBlock"), i(Qar, "aaInnerLoop"), i(eor, "aaRecreateElementFromEntry"), i(tor, "aaInsertLastNodeInCommonAncestor"), i(nor, "aaReplaceFormattingElement"), i(jNe, "callAdoptionAgency"), i(LNe, "appendComment"), i(ror, "appendCommentToRootHtmlElement"), i(ior, "appendCommentToDocument"), i(DNe, "stopParsing"), i(aor, "doctypeInInitialMode"), i(uJ, "tokenInInitialMode"), i(oor, "startTagBeforeHtml"), i(sor, "endTagBeforeHtml"), i(dJ, "tokenBeforeHtml"), i(cor, "startTagBeforeHead"), i(lor, "endTagBeforeHead"), i(pJ, "tokenBeforeHead"), i(P4, "startTagInHead"), i(uor, "endTagInHead"), i(wP, "templateEndTagInHead"), i(mJ, "tokenInHead"), i(dor, "startTagInHeadNoScript"), i(por, "endTagInHeadNoScript"), i(fJ, "tokenInHeadNoScript"), i(mor, "startTagAfterHead"), i(hor, "endTagAfterHead"), i(hJ, "tokenAfterHead"), i(vfe, "modeInBody"), i(nMt, "whitespaceCharacterInBody"), i(rMt, "characterInBody"), i(gor, "htmlStartTagInBody"), i(bor, "bodyStartTagInBody"), i(yor, "framesetStartTagInBody"), i(wor, "addressStartTagInBody"), i(_or, "numberedHeaderStartTagInBody"), i(kor, "preStartTagInBody"), i(vor, "formStartTagInBody"), i(xor, "listItemStartTagInBody"), i(Cor, "plaintextStartTagInBody"), i(Sor, "buttonStartTagInBody"), i(Eor, "aStartTagInBody"), i(Aor, "bStartTagInBody"), i(Tor, "nobrStartTagInBody"), i($or, "appletStartTagInBody"), i(Ior, "tableStartTagInBody"), i(iMt, "areaStartTagInBody"), i(aMt, "isHiddenInput"), i(Nor, "inputStartTagInBody"), i(Mor, "paramStartTagInBody"), i(Ror, "hrStartTagInBody"), i(Por, "imageStartTagInBody"), i(jor, "textareaStartTagInBody"), i(Lor, "xmpStartTagInBody"), i(Dor, "iframeStartTagInBody"), i(oMt, "rawTextStartTagInBody"), i(For, "selectStartTagInBody"), i(Oor, "optgroupStartTagInBody"), i(zor, "rbStartTagInBody"), i(Bor, "rtStartTagInBody"), i(qor, "mathStartTagInBody"), i(Uor, "svgStartTagInBody"), i(sMt, "genericStartTagInBody"), i($0, "startTagInBody"), i(Gor, "bodyEndTagInBody"), i(Wor, "htmlEndTagInBody"), i(Hor, "addressEndTagInBody"), i(Zor, "formEndTagInBody"), i(Vor, "pEndTagInBody"), i(Kor, "liEndTagInBody"), i(Xor, "ddEndTagInBody"), i(Yor, "numberedHeaderEndTagInBody"), i(Jor, "appletEndTagInBody"), i(Qor, "brEndTagInBody"), i(cMt, "genericEndTagInBody"), i(xfe, "endTagInBody"), i(lMt, "eofInBody"), i(esr, "endTagInText"), i(tsr, "eofInText"), i(FNe, "characterInTable"), i(nsr, "captionStartTagInTable"), i(rsr, "colgroupStartTagInTable"), i(isr, "colStartTagInTable"), i(asr, "tbodyStartTagInTable"), i(osr, "tdStartTagInTable"), i(ssr, "tableStartTagInTable"), i(csr, "inputStartTagInTable"), i(lsr, "formStartTagInTable"), i($B, "startTagInTable"), i(gJ, "endTagInTable"), i(bJ, "tokenInTable"), i(uMt, "whitespaceCharacterInTableText"), i(dMt, "characterInTableText"), i(yJ, "tokenInTableText"), vMt = new Set([
    ye.CAPTION,
    ye.COL,
    ye.COLGROUP,
    ye.TBODY,
    ye.TD,
    ye.TFOOT,
    ye.TH,
    ye.THEAD,
    ye.TR
]), i(usr, "startTagInCaption"), i(dsr, "endTagInCaption"), i(ONe, "startTagInColumnGroup"), i(psr, "endTagInColumnGroup"), i(Cfe, "tokenInColumnGroup"), i(Sfe, "startTagInTableBody"), i(zNe, "endTagInTableBody"), i(Efe, "startTagInRow"), i(pMt, "endTagInRow"), i(msr, "startTagInCell"), i(fsr, "endTagInCell"), i(mMt, "startTagInSelect"), i(fMt, "endTagInSelect"), i(hsr, "startTagInSelectInTable"), i(gsr, "endTagInSelectInTable"), i(bsr, "startTagInTemplate"), i(ysr, "endTagInTemplate"), i(hMt, "eofInTemplate"), i(wsr, "startTagAfterBody"), i(gMt, "endTagAfterBody"), i(Afe, "tokenAfterBody"), i(_sr, "startTagInFrameset"), i(ksr, "endTagInFrameset"), i(vsr, "startTagAfterFrameset"), i(xsr, "endTagAfterFrameset"), i(Csr, "startTagAfterAfterBody"), i(Tfe, "tokenAfterAfterBody"), i(Ssr, "startTagAfterAfterFrameset"), i(Esr, "nullCharacterInForeignContent"), i(Asr, "characterInForeignContent"), i(bMt, "popUntilHtmlOrIntegrationPoint"), i(Tsr, "startTagInForeignContent"), i($sr, "endTagInForeignContent");

}
