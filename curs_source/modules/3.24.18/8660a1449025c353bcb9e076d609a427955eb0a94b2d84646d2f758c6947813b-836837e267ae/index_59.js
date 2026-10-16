import { Agh, Cgh, DMr, Egh, GVy, Hoe, Igh, JVy, Jia, Jzy, Kbn, Kzy, LMr, MMr, NMr, OMr, PMr, Pgh, Qia, Qzy, Rgh, Tgh, Vzy, WVy, Xia, Xzy, Ybn, Yia, Yzy, Zia, Zzy, _Ky, _gh, aKy, bui, cKy, dKy, dui, eKy, eVy, fKy, fui, gKy, gui, hKy, hui, iKy, iVy, jzy, lFe, lKy, mKy, mui, nKy, nVy, oKy, pKy, pui, rKy, rVy, sKy, tKy, tVy, uKy, vKy, vgh, vui, xgh } from "./LYd.js";
import { Hia, bit } from "./default_2.js";
import { Lzy } from "./doctype.js";
import { TMr, fu } from "./error-codes.js";
import { fgh } from "./foreign-content.js";
import { Mzy, gWe, tgh } from "./formatting-element-list.js";
import { Jt, Ll, Wmh, _it, sp } from "./html_2.js";
import { Oia, Vmh, Xj } from "./index_58.js";
import { Pzy, egh } from "./open-element-stack.js";
import { EMr, HI } from "./token.js";
import { E } from "./tslib.es6.js";
import { Dia, ys } from "./unicode.js";
var Dgh, Ngh, Lgh, Ro, Ogh, era, tra, nra, ira;
export { Dgh, Lgh, Ngh, Ogh, Ro, era, ira, nra, tra };
var __wakaru_Fgh_initialized = false;
export function Fgh() {
if (__wakaru_Fgh_initialized) return;
__wakaru_Fgh_initialized = true;
E(), Oia(), Pzy(), Mzy(), Hia(), Lzy(), fgh(), TMr(), Dia(), _it(), EMr(), Dgh = "hidden", Ngh = 8, Lgh = 3, (function(t) {
    t[t.INITIAL = 0] = "INITIAL", t[t.BEFORE_HTML = 1] = "BEFORE_HTML", t[t.BEFORE_HEAD = 2] = "BEFORE_HEAD", t[t.IN_HEAD = 3] = "IN_HEAD", t[t.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", t[t.AFTER_HEAD = 5] = "AFTER_HEAD", t[t.IN_BODY = 6] = "IN_BODY", t[t.TEXT = 7] = "TEXT", t[t.IN_TABLE = 8] = "IN_TABLE", t[t.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", t[t.IN_CAPTION = 10] = "IN_CAPTION", t[t.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", t[t.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", t[t.IN_ROW = 13] = "IN_ROW", t[t.IN_CELL = 14] = "IN_CELL", t[t.IN_SELECT = 15] = "IN_SELECT", t[t.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", t[t.IN_TEMPLATE = 17] = "IN_TEMPLATE", t[t.AFTER_BODY = 18] = "AFTER_BODY", t[t.IN_FRAMESET = 19] = "IN_FRAMESET", t[t.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", t[t.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", t[t.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(Ro || (Ro = {})), Ogh = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1
}, era = new Set([
    Jt.TABLE,
    Jt.TBODY,
    Jt.TFOOT,
    Jt.THEAD,
    Jt.TR
]), tra = {
    scriptingEnabled: !0,
    sourceCodeLocationInfo: !1,
    treeAdapter: bit,
    onParseError: null
}, nra = class {
    constructor(t, e, n = null, i = null){
        this.fragmentContext = n, this.scriptHandler = i, this.currentToken = null, this.stopped = !1, this.insertionMode = Ro.INITIAL, this.originalInsertionMode = Ro.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
            ...tra,
            ...t
        }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = e ?? this.treeAdapter.createDocument(), this.tokenizer = new Vmh(this.options, this), this.activeFormattingElements = new tgh(this.treeAdapter), this.fragmentContextID = n ? Kbn(this.treeAdapter.getTagName(n)) : Jt.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new egh(this.document, this.treeAdapter, this);
    }
    static parse(t, e) {
        const n = new this(e);
        return n.tokenizer.write(t, !0), n.document;
    }
    static getFragmentParser(t, e) {
        const n = {
            ...tra,
            ...e
        };
        t ?? (t = n.treeAdapter.createElement(Ll.TEMPLATE, sp.HTML, []));
        const i = n.treeAdapter.createElement("documentmock", sp.HTML, []), r = new this(n, i, t);
        return r.fragmentContextID === Jt.TEMPLATE && r.tmplInsertionModeStack.unshift(Ro.IN_TEMPLATE), r._initTokenizerForFragmentParsing(), r._insertFakeRootElement(), r._resetInsertionMode(), r._findFormInFragmentContext(), r;
    }
    getFragment() {
        const t = this.treeAdapter.getFirstChild(this.document), e = this.treeAdapter.createDocumentFragment();
        return this._adoptNodes(t, e), e;
    }
    _err(t, e, n) {
        var i;
        if (!this.onParseError) return;
        const r = (i = t.location) !== null && i !== void 0 ? i : Ogh, s = {
            code: e,
            startLine: r.startLine,
            startCol: r.startCol,
            startOffset: r.startOffset,
            endLine: n ? r.startLine : r.endLine,
            endCol: n ? r.startCol : r.endCol,
            endOffset: n ? r.startOffset : r.endOffset
        };
        this.onParseError(s);
    }
    onItemPush(t, e, n) {
        var i, r;
        (r = (i = this.treeAdapter).onItemPush) === null || r === void 0 || r.call(i, t), n && this.openElements.stackTop > 0 && this._setContextModes(t, e);
    }
    onItemPop(t, e) {
        var n, i;
        if (this.options.sourceCodeLocationInfo && this._setEndLocation(t, this.currentToken), (i = (n = this.treeAdapter).onItemPop) === null || i === void 0 || i.call(n, t, this.openElements.current), e) {
            let r, s;
            this.openElements.stackTop === 0 && this.fragmentContext ? (r = this.fragmentContext, s = this.fragmentContextID) : { current: r, currentTagId: s } = this.openElements, this._setContextModes(r, s);
        }
    }
    _setContextModes(t, e) {
        const n = t === this.document || t && this.treeAdapter.getNamespaceURI(t) === sp.HTML;
        this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && t !== void 0 && e !== void 0 && !this._isIntegrationPoint(e, t);
    }
    _switchToTextParsing(t, e) {
        this._insertElement(t, sp.HTML), this.tokenizer.state = e, this.originalInsertionMode = this.insertionMode, this.insertionMode = Ro.TEXT;
    }
    switchToPlaintextParsing() {
        this.insertionMode = Ro.TEXT, this.originalInsertionMode = Ro.IN_BODY, this.tokenizer.state = Xj.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
    _findFormInFragmentContext() {
        let t = this.fragmentContext;
        for(; t;){
            if (this.treeAdapter.getTagName(t) === Ll.FORM) {
                this.formElement = t;
                break;
            }
            t = this.treeAdapter.getParentNode(t);
        }
    }
    _initTokenizerForFragmentParsing() {
        if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== sp.HTML)) switch(this.fragmentContextID){
            case Jt.TITLE:
            case Jt.TEXTAREA:
                {
                    this.tokenizer.state = Xj.RCDATA;
                    break;
                }
            case Jt.STYLE:
            case Jt.XMP:
            case Jt.IFRAME:
            case Jt.NOEMBED:
            case Jt.NOFRAMES:
            case Jt.NOSCRIPT:
                {
                    this.tokenizer.state = Xj.RAWTEXT;
                    break;
                }
            case Jt.SCRIPT:
                {
                    this.tokenizer.state = Xj.SCRIPT_DATA;
                    break;
                }
            case Jt.PLAINTEXT:
                {
                    this.tokenizer.state = Xj.PLAINTEXT;
                    break;
                }
            default:
        }
    }
    _setDocumentType(t) {
        const e = t.name || "", n = t.publicId || "", i = t.systemId || "";
        if (this.treeAdapter.setDocumentType(this.document, e, n, i), t.location) {
            const s = this.treeAdapter.getChildNodes(this.document).find((o)=>this.treeAdapter.isDocumentTypeNode(o));
            s && this.treeAdapter.setNodeSourceCodeLocation(s, t.location);
        }
    }
    _attachElementToTree(t, e) {
        if (this.options.sourceCodeLocationInfo) {
            const n = e && {
                ...e,
                startTag: e
            };
            this.treeAdapter.setNodeSourceCodeLocation(t, n);
        }
        if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(t);
        else {
            const n = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(n ?? this.document, t);
        }
    }
    _appendElement(t, e) {
        const n = this.treeAdapter.createElement(t.tagName, e, t.attrs);
        this._attachElementToTree(n, t.location);
    }
    _insertElement(t, e) {
        const n = this.treeAdapter.createElement(t.tagName, e, t.attrs);
        this._attachElementToTree(n, t.location), this.openElements.push(n, t.tagID);
    }
    _insertFakeElement(t, e) {
        const n = this.treeAdapter.createElement(t, sp.HTML, []);
        this._attachElementToTree(n, null), this.openElements.push(n, e);
    }
    _insertTemplate(t) {
        const e = this.treeAdapter.createElement(t.tagName, sp.HTML, t.attrs), n = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(e, n), this._attachElementToTree(e, t.location), this.openElements.push(e, t.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
    }
    _insertFakeRootElement() {
        const t = this.treeAdapter.createElement(Ll.HTML, sp.HTML, []);
        this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(t, null), this.treeAdapter.appendChild(this.openElements.current, t), this.openElements.push(t, Jt.HTML);
    }
    _appendCommentNode(t, e) {
        const n = this.treeAdapter.createCommentNode(t.data);
        this.treeAdapter.appendChild(e, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, t.location);
    }
    _insertCharacters(t) {
        let e, n;
        if (this._shouldFosterParentOnInsertion() ? ({ parent: e, beforeElement: n } = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(e, t.chars, n) : this.treeAdapter.insertText(e, t.chars)) : (e = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(e, t.chars)), !t.location) return;
        const i = this.treeAdapter.getChildNodes(e), r = n ? i.lastIndexOf(n) : i.length, s = i[r - 1];
        if (this.treeAdapter.getNodeSourceCodeLocation(s)) {
            const { endLine: a, endCol: l, endOffset: c } = t.location;
            this.treeAdapter.updateNodeSourceCodeLocation(s, {
                endLine: a,
                endCol: l,
                endOffset: c
            });
        } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, t.location);
    }
    _adoptNodes(t, e) {
        for(let n = this.treeAdapter.getFirstChild(t); n; n = this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(e, n);
    }
    _setEndLocation(t, e) {
        if (this.treeAdapter.getNodeSourceCodeLocation(t) && e.location) {
            const n = e.location, i = this.treeAdapter.getTagName(t), r = e.type === HI.END_TAG && i === e.tagName ? {
                endTag: {
                    ...n
                },
                endLine: n.endLine,
                endCol: n.endCol,
                endOffset: n.endOffset
            } : {
                endLine: n.startLine,
                endCol: n.startCol,
                endOffset: n.startOffset
            };
            this.treeAdapter.updateNodeSourceCodeLocation(t, r);
        }
    }
    shouldProcessStartTagTokenInForeignContent(t) {
        if (!this.currentNotInHTML) return !1;
        let e, n;
        return this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, n = this.fragmentContextID) : { current: e, currentTagId: n } = this.openElements, t.tagID === Jt.SVG && this.treeAdapter.getTagName(e) === Ll.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(e) === sp.MATHML ? !1 : this.tokenizer.inForeignNode || (t.tagID === Jt.MGLYPH || t.tagID === Jt.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, e, sp.HTML);
    }
    _processToken(t) {
        switch(t.type){
            case HI.CHARACTER:
                {
                    this.onCharacter(t);
                    break;
                }
            case HI.NULL_CHARACTER:
                {
                    this.onNullCharacter(t);
                    break;
                }
            case HI.COMMENT:
                {
                    this.onComment(t);
                    break;
                }
            case HI.DOCTYPE:
                {
                    this.onDoctype(t);
                    break;
                }
            case HI.START_TAG:
                {
                    this._processStartTag(t);
                    break;
                }
            case HI.END_TAG:
                {
                    this.onEndTag(t);
                    break;
                }
            case HI.EOF:
                {
                    this.onEof(t);
                    break;
                }
            case HI.WHITESPACE_CHARACTER:
                {
                    this.onWhitespaceCharacter(t);
                    break;
                }
        }
    }
    _isIntegrationPoint(t, e, n) {
        const i = this.treeAdapter.getNamespaceURI(e), r = this.treeAdapter.getAttrList(e);
        return jzy(t, i, r, n);
    }
    _reconstructActiveFormattingElements() {
        const t = this.activeFormattingElements.entries.length;
        if (t) {
            const e = this.activeFormattingElements.entries.findIndex((i)=>i.type === gWe.Marker || this.openElements.contains(i.element)), n = e === -1 ? t - 1 : e - 1;
            for(let i = n; i >= 0; i--){
                const r = this.activeFormattingElements.entries[i];
                this._insertElement(r.token, this.treeAdapter.getNamespaceURI(r.element)), r.element = this.openElements.current;
            }
        }
    }
    _closeTableCell() {
        this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = Ro.IN_ROW;
    }
    _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(Jt.P), this.openElements.popUntilTagNamePopped(Jt.P);
    }
    _resetInsertionMode() {
        for(let t = this.openElements.stackTop; t >= 0; t--)switch(t === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[t]){
            case Jt.TR:
                {
                    this.insertionMode = Ro.IN_ROW;
                    return;
                }
            case Jt.TBODY:
            case Jt.THEAD:
            case Jt.TFOOT:
                {
                    this.insertionMode = Ro.IN_TABLE_BODY;
                    return;
                }
            case Jt.CAPTION:
                {
                    this.insertionMode = Ro.IN_CAPTION;
                    return;
                }
            case Jt.COLGROUP:
                {
                    this.insertionMode = Ro.IN_COLUMN_GROUP;
                    return;
                }
            case Jt.TABLE:
                {
                    this.insertionMode = Ro.IN_TABLE;
                    return;
                }
            case Jt.BODY:
                {
                    this.insertionMode = Ro.IN_BODY;
                    return;
                }
            case Jt.FRAMESET:
                {
                    this.insertionMode = Ro.IN_FRAMESET;
                    return;
                }
            case Jt.SELECT:
                {
                    this._resetInsertionModeForSelect(t);
                    return;
                }
            case Jt.TEMPLATE:
                {
                    this.insertionMode = this.tmplInsertionModeStack[0];
                    return;
                }
            case Jt.HTML:
                {
                    this.insertionMode = this.headElement ? Ro.AFTER_HEAD : Ro.BEFORE_HEAD;
                    return;
                }
            case Jt.TD:
            case Jt.TH:
                {
                    if (t > 0) {
                        this.insertionMode = Ro.IN_CELL;
                        return;
                    }
                    break;
                }
            case Jt.HEAD:
                {
                    if (t > 0) {
                        this.insertionMode = Ro.IN_HEAD;
                        return;
                    }
                    break;
                }
        }
        this.insertionMode = Ro.IN_BODY;
    }
    _resetInsertionModeForSelect(t) {
        if (t > 0) for(let e = t - 1; e > 0; e--){
            const n = this.openElements.tagIDs[e];
            if (n === Jt.TEMPLATE) break;
            if (n === Jt.TABLE) {
                this.insertionMode = Ro.IN_SELECT_IN_TABLE;
                return;
            }
        }
        this.insertionMode = Ro.IN_SELECT;
    }
    _isElementCausesFosterParenting(t) {
        return era.has(t);
    }
    _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
        for(let t = this.openElements.stackTop; t >= 0; t--){
            const e = this.openElements.items[t];
            switch(this.openElements.tagIDs[t]){
                case Jt.TEMPLATE:
                    {
                        if (this.treeAdapter.getNamespaceURI(e) === sp.HTML) return {
                            parent: this.treeAdapter.getTemplateContent(e),
                            beforeElement: null
                        };
                        break;
                    }
                case Jt.TABLE:
                    {
                        const n = this.treeAdapter.getParentNode(e);
                        return n ? {
                            parent: n,
                            beforeElement: e
                        } : {
                            parent: this.openElements.items[t - 1],
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
    _fosterParentElement(t) {
        const e = this._findFosterParentingLocation();
        e.beforeElement ? this.treeAdapter.insertBefore(e.parent, t, e.beforeElement) : this.treeAdapter.appendChild(e.parent, t);
    }
    _isSpecialElement(t, e) {
        const n = this.treeAdapter.getNamespaceURI(t);
        return Wmh[n].has(e);
    }
    onCharacter(t) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
            fKy(this, t);
            return;
        }
        switch(this.insertionMode){
            case Ro.INITIAL:
                {
                    dui(this, t);
                    break;
                }
            case Ro.BEFORE_HTML:
                {
                    hui(this, t);
                    break;
                }
            case Ro.BEFORE_HEAD:
                {
                    pui(this, t);
                    break;
                }
            case Ro.IN_HEAD:
                {
                    mui(this, t);
                    break;
                }
            case Ro.IN_HEAD_NO_SCRIPT:
                {
                    gui(this, t);
                    break;
                }
            case Ro.AFTER_HEAD:
                {
                    fui(this, t);
                    break;
                }
            case Ro.IN_BODY:
            case Ro.IN_CAPTION:
            case Ro.IN_CELL:
            case Ro.IN_TEMPLATE:
                {
                    _gh(this, t);
                    break;
                }
            case Ro.TEXT:
            case Ro.IN_SELECT:
            case Ro.IN_SELECT_IN_TABLE:
                {
                    this._insertCharacters(t);
                    break;
                }
            case Ro.IN_TABLE:
            case Ro.IN_TABLE_BODY:
            case Ro.IN_ROW:
                {
                    Zia(this, t);
                    break;
                }
            case Ro.IN_TABLE_TEXT:
                {
                    Egh(this, t);
                    break;
                }
            case Ro.IN_COLUMN_GROUP:
                {
                    MMr(this, t);
                    break;
                }
            case Ro.AFTER_BODY:
                {
                    LMr(this, t);
                    break;
                }
            case Ro.AFTER_AFTER_BODY:
                {
                    OMr(this, t);
                    break;
                }
            default:
        }
    }
    onNullCharacter(t) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
            gKy(this, t);
            return;
        }
        switch(this.insertionMode){
            case Ro.INITIAL:
                {
                    dui(this, t);
                    break;
                }
            case Ro.BEFORE_HTML:
                {
                    hui(this, t);
                    break;
                }
            case Ro.BEFORE_HEAD:
                {
                    pui(this, t);
                    break;
                }
            case Ro.IN_HEAD:
                {
                    mui(this, t);
                    break;
                }
            case Ro.IN_HEAD_NO_SCRIPT:
                {
                    gui(this, t);
                    break;
                }
            case Ro.AFTER_HEAD:
                {
                    fui(this, t);
                    break;
                }
            case Ro.TEXT:
                {
                    this._insertCharacters(t);
                    break;
                }
            case Ro.IN_TABLE:
            case Ro.IN_TABLE_BODY:
            case Ro.IN_ROW:
                {
                    Zia(this, t);
                    break;
                }
            case Ro.IN_COLUMN_GROUP:
                {
                    MMr(this, t);
                    break;
                }
            case Ro.AFTER_BODY:
                {
                    LMr(this, t);
                    break;
                }
            case Ro.AFTER_AFTER_BODY:
                {
                    OMr(this, t);
                    break;
                }
            default:
        }
    }
    onComment(t) {
        if (this.skipNextNewLine = !1, this.currentNotInHTML) {
            Yia(this, t);
            return;
        }
        switch(this.insertionMode){
            case Ro.INITIAL:
            case Ro.BEFORE_HTML:
            case Ro.BEFORE_HEAD:
            case Ro.IN_HEAD:
            case Ro.IN_HEAD_NO_SCRIPT:
            case Ro.AFTER_HEAD:
            case Ro.IN_BODY:
            case Ro.IN_TABLE:
            case Ro.IN_CAPTION:
            case Ro.IN_COLUMN_GROUP:
            case Ro.IN_TABLE_BODY:
            case Ro.IN_ROW:
            case Ro.IN_CELL:
            case Ro.IN_SELECT:
            case Ro.IN_SELECT_IN_TABLE:
            case Ro.IN_TEMPLATE:
            case Ro.IN_FRAMESET:
            case Ro.AFTER_FRAMESET:
                {
                    Yia(this, t);
                    break;
                }
            case Ro.IN_TABLE_TEXT:
                {
                    bui(this, t);
                    break;
                }
            case Ro.AFTER_BODY:
                {
                    Vzy(this, t);
                    break;
                }
            case Ro.AFTER_AFTER_BODY:
            case Ro.AFTER_AFTER_FRAMESET:
                {
                    Kzy(this, t);
                    break;
                }
            default:
        }
    }
    onDoctype(t) {
        switch(this.skipNextNewLine = !1, this.insertionMode){
            case Ro.INITIAL:
                {
                    Yzy(this, t);
                    break;
                }
            case Ro.BEFORE_HEAD:
            case Ro.IN_HEAD:
            case Ro.IN_HEAD_NO_SCRIPT:
            case Ro.AFTER_HEAD:
                {
                    this._err(t, fu.misplacedDoctype);
                    break;
                }
            case Ro.IN_TABLE_TEXT:
                {
                    bui(this, t);
                    break;
                }
            default:
        }
    }
    onStartTag(t) {
        this.skipNextNewLine = !1, this.currentToken = t, this._processStartTag(t), t.selfClosing && !t.ackSelfClosing && this._err(t, fu.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
    _processStartTag(t) {
        this.shouldProcessStartTagTokenInForeignContent(t) ? vKy(this, t) : this._startTagOutsideForeignContent(t);
    }
    _startTagOutsideForeignContent(t) {
        switch(this.insertionMode){
            case Ro.INITIAL:
                {
                    dui(this, t);
                    break;
                }
            case Ro.BEFORE_HTML:
                {
                    Xzy(this, t);
                    break;
                }
            case Ro.BEFORE_HEAD:
                {
                    Qzy(this, t);
                    break;
                }
            case Ro.IN_HEAD:
                {
                    lFe(this, t);
                    break;
                }
            case Ro.IN_HEAD_NO_SCRIPT:
                {
                    tVy(this, t);
                    break;
                }
            case Ro.AFTER_HEAD:
                {
                    iVy(this, t);
                    break;
                }
            case Ro.IN_BODY:
                {
                    Hoe(this, t);
                    break;
                }
            case Ro.IN_TABLE:
                {
                    Ybn(this, t);
                    break;
                }
            case Ro.IN_TABLE_TEXT:
                {
                    bui(this, t);
                    break;
                }
            case Ro.IN_CAPTION:
                {
                    JVy(this, t);
                    break;
                }
            case Ro.IN_COLUMN_GROUP:
                {
                    Qia(this, t);
                    break;
                }
            case Ro.IN_TABLE_BODY:
                {
                    DMr(this, t);
                    break;
                }
            case Ro.IN_ROW:
                {
                    NMr(this, t);
                    break;
                }
            case Ro.IN_CELL:
                {
                    nKy(this, t);
                    break;
                }
            case Ro.IN_SELECT:
                {
                    xgh(this, t);
                    break;
                }
            case Ro.IN_SELECT_IN_TABLE:
                {
                    rKy(this, t);
                    break;
                }
            case Ro.IN_TEMPLATE:
                {
                    oKy(this, t);
                    break;
                }
            case Ro.AFTER_BODY:
                {
                    lKy(this, t);
                    break;
                }
            case Ro.IN_FRAMESET:
                {
                    cKy(this, t);
                    break;
                }
            case Ro.AFTER_FRAMESET:
                {
                    dKy(this, t);
                    break;
                }
            case Ro.AFTER_AFTER_BODY:
                {
                    pKy(this, t);
                    break;
                }
            case Ro.AFTER_AFTER_FRAMESET:
                {
                    mKy(this, t);
                    break;
                }
            default:
        }
    }
    onEndTag(t) {
        this.skipNextNewLine = !1, this.currentToken = t, this.currentNotInHTML ? _Ky(this, t) : this._endTagOutsideForeignContent(t);
    }
    _endTagOutsideForeignContent(t) {
        switch(this.insertionMode){
            case Ro.INITIAL:
                {
                    dui(this, t);
                    break;
                }
            case Ro.BEFORE_HTML:
                {
                    Zzy(this, t);
                    break;
                }
            case Ro.BEFORE_HEAD:
                {
                    Jzy(this, t);
                    break;
                }
            case Ro.IN_HEAD:
                {
                    eVy(this, t);
                    break;
                }
            case Ro.IN_HEAD_NO_SCRIPT:
                {
                    nVy(this, t);
                    break;
                }
            case Ro.AFTER_HEAD:
                {
                    rVy(this, t);
                    break;
                }
            case Ro.IN_BODY:
                {
                    PMr(this, t);
                    break;
                }
            case Ro.TEXT:
                {
                    WVy(this, t);
                    break;
                }
            case Ro.IN_TABLE:
                {
                    vui(this, t);
                    break;
                }
            case Ro.IN_TABLE_TEXT:
                {
                    bui(this, t);
                    break;
                }
            case Ro.IN_CAPTION:
                {
                    eKy(this, t);
                    break;
                }
            case Ro.IN_COLUMN_GROUP:
                {
                    tKy(this, t);
                    break;
                }
            case Ro.IN_TABLE_BODY:
                {
                    Jia(this, t);
                    break;
                }
            case Ro.IN_ROW:
                {
                    Igh(this, t);
                    break;
                }
            case Ro.IN_CELL:
                {
                    iKy(this, t);
                    break;
                }
            case Ro.IN_SELECT:
                {
                    Agh(this, t);
                    break;
                }
            case Ro.IN_SELECT_IN_TABLE:
                {
                    sKy(this, t);
                    break;
                }
            case Ro.IN_TEMPLATE:
                {
                    aKy(this, t);
                    break;
                }
            case Ro.AFTER_BODY:
                {
                    Pgh(this, t);
                    break;
                }
            case Ro.IN_FRAMESET:
                {
                    uKy(this, t);
                    break;
                }
            case Ro.AFTER_FRAMESET:
                {
                    hKy(this, t);
                    break;
                }
            case Ro.AFTER_AFTER_BODY:
                {
                    OMr(this, t);
                    break;
                }
            default:
        }
    }
    onEof(t) {
        switch(this.insertionMode){
            case Ro.INITIAL:
                {
                    dui(this, t);
                    break;
                }
            case Ro.BEFORE_HTML:
                {
                    hui(this, t);
                    break;
                }
            case Ro.BEFORE_HEAD:
                {
                    pui(this, t);
                    break;
                }
            case Ro.IN_HEAD:
                {
                    mui(this, t);
                    break;
                }
            case Ro.IN_HEAD_NO_SCRIPT:
                {
                    gui(this, t);
                    break;
                }
            case Ro.AFTER_HEAD:
                {
                    fui(this, t);
                    break;
                }
            case Ro.IN_BODY:
            case Ro.IN_TABLE:
            case Ro.IN_CAPTION:
            case Ro.IN_COLUMN_GROUP:
            case Ro.IN_TABLE_BODY:
            case Ro.IN_ROW:
            case Ro.IN_CELL:
            case Ro.IN_SELECT:
            case Ro.IN_SELECT_IN_TABLE:
                {
                    Cgh(this, t);
                    break;
                }
            case Ro.TEXT:
                {
                    GVy(this, t);
                    break;
                }
            case Ro.IN_TABLE_TEXT:
                {
                    bui(this, t);
                    break;
                }
            case Ro.IN_TEMPLATE:
                {
                    Rgh(this, t);
                    break;
                }
            case Ro.AFTER_BODY:
            case Ro.IN_FRAMESET:
            case Ro.AFTER_FRAMESET:
            case Ro.AFTER_AFTER_BODY:
            case Ro.AFTER_AFTER_FRAMESET:
                {
                    Xia(this, t);
                    break;
                }
            default:
        }
    }
    onWhitespaceCharacter(t) {
        if (this.skipNextNewLine && (this.skipNextNewLine = !1, t.chars.charCodeAt(0) === ys.LINE_FEED)) {
            if (t.chars.length === 1) return;
            t.chars = t.chars.substr(1);
        }
        if (this.tokenizer.inForeignNode) {
            this._insertCharacters(t);
            return;
        }
        switch(this.insertionMode){
            case Ro.IN_HEAD:
            case Ro.IN_HEAD_NO_SCRIPT:
            case Ro.AFTER_HEAD:
            case Ro.TEXT:
            case Ro.IN_COLUMN_GROUP:
            case Ro.IN_SELECT:
            case Ro.IN_SELECT_IN_TABLE:
            case Ro.IN_FRAMESET:
            case Ro.AFTER_FRAMESET:
                {
                    this._insertCharacters(t);
                    break;
                }
            case Ro.IN_BODY:
            case Ro.IN_CAPTION:
            case Ro.IN_CELL:
            case Ro.IN_TEMPLATE:
            case Ro.AFTER_BODY:
            case Ro.AFTER_AFTER_BODY:
            case Ro.AFTER_AFTER_FRAMESET:
                {
                    vgh(this, t);
                    break;
                }
            case Ro.IN_TABLE:
            case Ro.IN_TABLE_BODY:
            case Ro.IN_ROW:
                {
                    Zia(this, t);
                    break;
                }
            case Ro.IN_TABLE_TEXT:
                {
                    Tgh(this, t);
                    break;
                }
            default:
        }
    }
}, ira = new Set([
    Jt.CAPTION,
    Jt.COL,
    Jt.COLGROUP,
    Jt.TBODY,
    Jt.TD,
    Jt.TFOOT,
    Jt.TH,
    Jt.THEAD,
    Jt.TR
]);

}
