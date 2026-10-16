import { Ifs, u9e } from "./default_2.js";
import { eBg } from "./doctype.js";
import { el, hEi } from "./error-codes.js";
import { Khl } from "./foreign-content.js";
import { JRe, Phl, Z3g } from "./formatting-element-list.js";
import { $t, Shl, _d, fa, l9e } from "./html_2.js";
import { Thl, kfs, x5 } from "./index_53.js";
import { Mhl, X3g } from "./open-element-stack.js";
import { A5g, Bfs, C5g, D5g, E5g, F5g, Ffs, I5g, Jkn, L5g, L5t, M5g, N5g, N5t, Nfs, O5g, Ofs, P5g, Qkn, R5g, S5g, SBg, SEi, T5g, Ufs, Xhl, Yhl, Zkn, _5g, _Bg, _Ei, apl, b5g, bBg, bEi, c5g, cpl, ewn, fBg, gBg, hBg, ipl, iwn, k5g, kBg, kEi, l5g, lpl, mBg, mY, npl, nwn, opl, pBg, rpl, sBg, spl, swn, twn, vBg, w5g, wBg, wCe, wEi, x5g, y5g, yBg, yEi } from "./qIc.js";
import { L0, pEi } from "./token.js";
import { x } from "./tslib.es6.js";
import { bfs, nr } from "./unicode.js";
var dpl, hpl, ppl, bs, mpl, $fs, Hfs, Wfs, Gfs;
export { $fs, Gfs, Hfs, Wfs, bs, dpl, hpl, mpl, ppl };
var __wakaru_gpl_initialized = false;
export function gpl() {
if (__wakaru_gpl_initialized) return;
__wakaru_gpl_initialized = true;
x(), kfs(), X3g(), Z3g(), Ifs(), eBg(), Khl(), hEi(), bfs(), l9e(), pEi(), dpl = "hidden", hpl = 8, ppl = 3, (function(e) {
    e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(bs || (bs = {})), mpl = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1
}, $fs = new Set([
    $t.TABLE,
    $t.TBODY,
    $t.TFOOT,
    $t.THEAD,
    $t.TR
]), Hfs = {
    scriptingEnabled: !0,
    sourceCodeLocationInfo: !1,
    treeAdapter: u9e,
    onParseError: null
}, Wfs = class {
    constructor(e, t, n = null, i = null){
        this.fragmentContext = n, this.scriptHandler = i, this.currentToken = null, this.stopped = !1, this.insertionMode = bs.INITIAL, this.originalInsertionMode = bs.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
            ...Hfs,
            ...e
        }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new Thl(this.options, this), this.activeFormattingElements = new Phl(this.treeAdapter), this.fragmentContextID = n ? L5t(this.treeAdapter.getTagName(n)) : $t.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new Mhl(this.document, this.treeAdapter, this);
    }
    static parse(e, t) {
        const n = new this(t);
        return n.tokenizer.write(e, !0), n.document;
    }
    static getFragmentParser(e, t) {
        const n = {
            ...Hfs,
            ...t
        };
        e ?? (e = n.treeAdapter.createElement(fa.TEMPLATE, _d.HTML, []));
        const i = n.treeAdapter.createElement("documentmock", _d.HTML, []), r = new this(n, i, e);
        return r.fragmentContextID === $t.TEMPLATE && r.tmplInsertionModeStack.unshift(bs.IN_TEMPLATE), r._initTokenizerForFragmentParsing(), r._insertFakeRootElement(), r._resetInsertionMode(), r._findFormInFragmentContext(), r;
    }
    getFragment() {
        const e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
        return this._adoptNodes(e, t), t;
    }
    _err(e, t, n) {
        var i;
        if (!this.onParseError) return;
        const r = (i = e.location) !== null && i !== void 0 ? i : mpl, s = {
            code: t,
            startLine: r.startLine,
            startCol: r.startCol,
            startOffset: r.startOffset,
            endLine: n ? r.startLine : r.endLine,
            endCol: n ? r.startCol : r.endCol,
            endOffset: n ? r.startOffset : r.endOffset
        };
        this.onParseError(s);
    }
    onItemPush(e, t, n) {
        var i, r;
        (r = (i = this.treeAdapter).onItemPush) === null || r === void 0 || r.call(i, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
    }
    onItemPop(e, t) {
        var n, i;
        if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (i = (n = this.treeAdapter).onItemPop) === null || i === void 0 || i.call(n, e, this.openElements.current), t) {
            let r, s;
            this.openElements.stackTop === 0 && this.fragmentContext ? (r = this.fragmentContext, s = this.fragmentContextID) : { current: r, currentTagId: s } = this.openElements, this._setContextModes(r, s);
        }
    }
    _setContextModes(e, t) {
        const n = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === _d.HTML;
        this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && e !== void 0 && t !== void 0 && !this._isIntegrationPoint(t, e);
    }
    _switchToTextParsing(e, t) {
        this._insertElement(e, _d.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = bs.TEXT;
    }
    switchToPlaintextParsing() {
        this.insertionMode = bs.TEXT, this.originalInsertionMode = bs.IN_BODY, this.tokenizer.state = x5.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
    _findFormInFragmentContext() {
        let e = this.fragmentContext;
        for(; e;){
            if (this.treeAdapter.getTagName(e) === fa.FORM) {
                this.formElement = e;
                break;
            }
            e = this.treeAdapter.getParentNode(e);
        }
    }
    _initTokenizerForFragmentParsing() {
        if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== _d.HTML)) switch(this.fragmentContextID){
            case $t.TITLE:
            case $t.TEXTAREA:
                {
                    this.tokenizer.state = x5.RCDATA;
                    break;
                }
            case $t.STYLE:
            case $t.XMP:
            case $t.IFRAME:
            case $t.NOEMBED:
            case $t.NOFRAMES:
            case $t.NOSCRIPT:
                {
                    this.tokenizer.state = x5.RAWTEXT;
                    break;
                }
            case $t.SCRIPT:
                {
                    this.tokenizer.state = x5.SCRIPT_DATA;
                    break;
                }
            case $t.PLAINTEXT:
                {
                    this.tokenizer.state = x5.PLAINTEXT;
                    break;
                }
            default:
        }
    }
    _setDocumentType(e) {
        const t = e.name || "", n = e.publicId || "", i = e.systemId || "";
        if (this.treeAdapter.setDocumentType(this.document, t, n, i), e.location) {
            const s = this.treeAdapter.getChildNodes(this.document).find((o)=>this.treeAdapter.isDocumentTypeNode(o));
            s && this.treeAdapter.setNodeSourceCodeLocation(s, e.location);
        }
    }
    _attachElementToTree(e, t) {
        if (this.options.sourceCodeLocationInfo) {
            const n = t && {
                ...t,
                startTag: t
            };
            this.treeAdapter.setNodeSourceCodeLocation(e, n);
        }
        if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
        else {
            const n = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(n ?? this.document, e);
        }
    }
    _appendElement(e, t) {
        const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(n, e.location);
    }
    _insertElement(e, t) {
        const n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID);
    }
    _insertFakeElement(e, t) {
        const n = this.treeAdapter.createElement(e, _d.HTML, []);
        this._attachElementToTree(n, null), this.openElements.push(n, t);
    }
    _insertTemplate(e) {
        const t = this.treeAdapter.createElement(e.tagName, _d.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
    }
    _insertFakeRootElement() {
        const e = this.treeAdapter.createElement(fa.HTML, _d.HTML, []);
        this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, $t.HTML);
    }
    _appendCommentNode(e, t) {
        const n = this.treeAdapter.createCommentNode(e.data);
        this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
    }
    _insertCharacters(e) {
        let t, n;
        if (this._shouldFosterParentOnInsertion() ? ({ parent: t, beforeElement: n } = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
        const i = this.treeAdapter.getChildNodes(t), r = n ? i.lastIndexOf(n) : i.length, s = i[r - 1];
        if (this.treeAdapter.getNodeSourceCodeLocation(s)) {
            const { endLine: a, endCol: c, endOffset: l } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(s, {
                endLine: a,
                endCol: c,
                endOffset: l
            });
        } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, e.location);
    }
    _adoptNodes(e, t) {
        for(let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e))this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
    }
    _setEndLocation(e, t) {
        if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
            const n = t.location, i = this.treeAdapter.getTagName(e), r = t.type === L0.END_TAG && i === t.tagName ? {
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
            this.treeAdapter.updateNodeSourceCodeLocation(e, r);
        }
    }
    shouldProcessStartTagTokenInForeignContent(e) {
        if (!this.currentNotInHTML) return !1;
        let t, n;
        return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : { current: t, currentTagId: n } = this.openElements, e.tagID === $t.SVG && this.treeAdapter.getTagName(t) === fa.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === _d.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === $t.MGLYPH || e.tagID === $t.MALIGNMARK) && n !== void 0 && !this._isIntegrationPoint(n, t, _d.HTML);
    }
    _processToken(e) {
        switch(e.type){
            case L0.CHARACTER:
                {
                    this.onCharacter(e);
                    break;
                }
            case L0.NULL_CHARACTER:
                {
                    this.onNullCharacter(e);
                    break;
                }
            case L0.COMMENT:
                {
                    this.onComment(e);
                    break;
                }
            case L0.DOCTYPE:
                {
                    this.onDoctype(e);
                    break;
                }
            case L0.START_TAG:
                {
                    this._processStartTag(e);
                    break;
                }
            case L0.END_TAG:
                {
                    this.onEndTag(e);
                    break;
                }
            case L0.EOF:
                {
                    this.onEof(e);
                    break;
                }
            case L0.WHITESPACE_CHARACTER:
                {
                    this.onWhitespaceCharacter(e);
                    break;
                }
        }
    }
    _isIntegrationPoint(e, t, n) {
        const i = this.treeAdapter.getNamespaceURI(t), r = this.treeAdapter.getAttrList(t);
        return sBg(e, i, r, n);
    }
    _reconstructActiveFormattingElements() {
        const e = this.activeFormattingElements.entries.length;
        if (e) {
            const t = this.activeFormattingElements.entries.findIndex((i)=>i.type === JRe.Marker || this.openElements.contains(i.element)), n = t === -1 ? e - 1 : t - 1;
            for(let i = n; i >= 0; i--){
                const r = this.activeFormattingElements.entries[i];
                this._insertElement(r.token, this.treeAdapter.getNamespaceURI(r.element)), r.element = this.openElements.current;
            }
        }
    }
    _closeTableCell() {
        this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = bs.IN_ROW;
    }
    _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion($t.P), this.openElements.popUntilTagNamePopped($t.P);
    }
    _resetInsertionMode() {
        for(let e = this.openElements.stackTop; e >= 0; e--)switch(e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]){
            case $t.TR:
                {
                    this.insertionMode = bs.IN_ROW;
                    return;
                }
            case $t.TBODY:
            case $t.THEAD:
            case $t.TFOOT:
                {
                    this.insertionMode = bs.IN_TABLE_BODY;
                    return;
                }
            case $t.CAPTION:
                {
                    this.insertionMode = bs.IN_CAPTION;
                    return;
                }
            case $t.COLGROUP:
                {
                    this.insertionMode = bs.IN_COLUMN_GROUP;
                    return;
                }
            case $t.TABLE:
                {
                    this.insertionMode = bs.IN_TABLE;
                    return;
                }
            case $t.BODY:
                {
                    this.insertionMode = bs.IN_BODY;
                    return;
                }
            case $t.FRAMESET:
                {
                    this.insertionMode = bs.IN_FRAMESET;
                    return;
                }
            case $t.SELECT:
                {
                    this._resetInsertionModeForSelect(e);
                    return;
                }
            case $t.TEMPLATE:
                {
                    this.insertionMode = this.tmplInsertionModeStack[0];
                    return;
                }
            case $t.HTML:
                {
                    this.insertionMode = this.headElement ? bs.AFTER_HEAD : bs.BEFORE_HEAD;
                    return;
                }
            case $t.TD:
            case $t.TH:
                {
                    if (e > 0) {
                        this.insertionMode = bs.IN_CELL;
                        return;
                    }
                    break;
                }
            case $t.HEAD:
                {
                    if (e > 0) {
                        this.insertionMode = bs.IN_HEAD;
                        return;
                    }
                    break;
                }
        }
        this.insertionMode = bs.IN_BODY;
    }
    _resetInsertionModeForSelect(e) {
        if (e > 0) for(let t = e - 1; t > 0; t--){
            const n = this.openElements.tagIDs[t];
            if (n === $t.TEMPLATE) break;
            if (n === $t.TABLE) {
                this.insertionMode = bs.IN_SELECT_IN_TABLE;
                return;
            }
        }
        this.insertionMode = bs.IN_SELECT;
    }
    _isElementCausesFosterParenting(e) {
        return $fs.has(e);
    }
    _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
        for(let e = this.openElements.stackTop; e >= 0; e--){
            const t = this.openElements.items[e];
            switch(this.openElements.tagIDs[e]){
                case $t.TEMPLATE:
                    {
                        if (this.treeAdapter.getNamespaceURI(t) === _d.HTML) return {
                            parent: this.treeAdapter.getTemplateContent(t),
                            beforeElement: null
                        };
                        break;
                    }
                case $t.TABLE:
                    {
                        const n = this.treeAdapter.getParentNode(t);
                        return n ? {
                            parent: n,
                            beforeElement: t
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
        const t = this._findFosterParentingLocation();
        t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
    }
    _isSpecialElement(e, t) {
        const n = this.treeAdapter.getNamespaceURI(e);
        return Shl[n].has(t);
    }
    onCharacter(e) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
            N5g(this, e);
            return;
        }
        switch(this.insertionMode){
            case bs.INITIAL:
                {
                    Zkn(this, e);
                    break;
                }
            case bs.BEFORE_HTML:
                {
                    Qkn(this, e);
                    break;
                }
            case bs.BEFORE_HEAD:
                {
                    Jkn(this, e);
                    break;
                }
            case bs.IN_HEAD:
                {
                    ewn(this, e);
                    break;
                }
            case bs.IN_HEAD_NO_SCRIPT:
                {
                    twn(this, e);
                    break;
                }
            case bs.AFTER_HEAD:
                {
                    nwn(this, e);
                    break;
                }
            case bs.IN_BODY:
            case bs.IN_CAPTION:
            case bs.IN_CELL:
            case bs.IN_TEMPLATE:
                {
                    Xhl(this, e);
                    break;
                }
            case bs.TEXT:
            case bs.IN_SELECT:
            case bs.IN_SELECT_IN_TABLE:
                {
                    this._insertCharacters(e);
                    break;
                }
            case bs.IN_TABLE:
            case bs.IN_TABLE_BODY:
            case bs.IN_ROW:
                {
                    Ffs(this, e);
                    break;
                }
            case bs.IN_TABLE_TEXT:
                {
                    rpl(this, e);
                    break;
                }
            case bs.IN_COLUMN_GROUP:
                {
                    bEi(this, e);
                    break;
                }
            case bs.AFTER_BODY:
                {
                    kEi(this, e);
                    break;
                }
            case bs.AFTER_AFTER_BODY:
                {
                    wEi(this, e);
                    break;
                }
            default:
        }
    }
    onNullCharacter(e) {
        if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
            L5g(this, e);
            return;
        }
        switch(this.insertionMode){
            case bs.INITIAL:
                {
                    Zkn(this, e);
                    break;
                }
            case bs.BEFORE_HTML:
                {
                    Qkn(this, e);
                    break;
                }
            case bs.BEFORE_HEAD:
                {
                    Jkn(this, e);
                    break;
                }
            case bs.IN_HEAD:
                {
                    ewn(this, e);
                    break;
                }
            case bs.IN_HEAD_NO_SCRIPT:
                {
                    twn(this, e);
                    break;
                }
            case bs.AFTER_HEAD:
                {
                    nwn(this, e);
                    break;
                }
            case bs.TEXT:
                {
                    this._insertCharacters(e);
                    break;
                }
            case bs.IN_TABLE:
            case bs.IN_TABLE_BODY:
            case bs.IN_ROW:
                {
                    Ffs(this, e);
                    break;
                }
            case bs.IN_COLUMN_GROUP:
                {
                    bEi(this, e);
                    break;
                }
            case bs.AFTER_BODY:
                {
                    kEi(this, e);
                    break;
                }
            case bs.AFTER_AFTER_BODY:
                {
                    wEi(this, e);
                    break;
                }
            default:
        }
    }
    onComment(e) {
        if (this.skipNextNewLine = !1, this.currentNotInHTML) {
            Nfs(this, e);
            return;
        }
        switch(this.insertionMode){
            case bs.INITIAL:
            case bs.BEFORE_HTML:
            case bs.BEFORE_HEAD:
            case bs.IN_HEAD:
            case bs.IN_HEAD_NO_SCRIPT:
            case bs.AFTER_HEAD:
            case bs.IN_BODY:
            case bs.IN_TABLE:
            case bs.IN_CAPTION:
            case bs.IN_COLUMN_GROUP:
            case bs.IN_TABLE_BODY:
            case bs.IN_ROW:
            case bs.IN_CELL:
            case bs.IN_SELECT:
            case bs.IN_SELECT_IN_TABLE:
            case bs.IN_TEMPLATE:
            case bs.IN_FRAMESET:
            case bs.AFTER_FRAMESET:
                {
                    Nfs(this, e);
                    break;
                }
            case bs.IN_TABLE_TEXT:
                {
                    swn(this, e);
                    break;
                }
            case bs.AFTER_BODY:
                {
                    hBg(this, e);
                    break;
                }
            case bs.AFTER_AFTER_BODY:
            case bs.AFTER_AFTER_FRAMESET:
                {
                    pBg(this, e);
                    break;
                }
            default:
        }
    }
    onDoctype(e) {
        switch(this.skipNextNewLine = !1, this.insertionMode){
            case bs.INITIAL:
                {
                    mBg(this, e);
                    break;
                }
            case bs.BEFORE_HEAD:
            case bs.IN_HEAD:
            case bs.IN_HEAD_NO_SCRIPT:
            case bs.AFTER_HEAD:
                {
                    this._err(e, el.misplacedDoctype);
                    break;
                }
            case bs.IN_TABLE_TEXT:
                {
                    swn(this, e);
                    break;
                }
            default:
        }
    }
    onStartTag(e) {
        this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, el.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
    _processStartTag(e) {
        this.shouldProcessStartTagTokenInForeignContent(e) ? O5g(this, e) : this._startTagOutsideForeignContent(e);
    }
    _startTagOutsideForeignContent(e) {
        switch(this.insertionMode){
            case bs.INITIAL:
                {
                    Zkn(this, e);
                    break;
                }
            case bs.BEFORE_HTML:
                {
                    gBg(this, e);
                    break;
                }
            case bs.BEFORE_HEAD:
                {
                    vBg(this, e);
                    break;
                }
            case bs.IN_HEAD:
                {
                    wCe(this, e);
                    break;
                }
            case bs.IN_HEAD_NO_SCRIPT:
                {
                    yBg(this, e);
                    break;
                }
            case bs.AFTER_HEAD:
                {
                    kBg(this, e);
                    break;
                }
            case bs.IN_BODY:
                {
                    mY(this, e);
                    break;
                }
            case bs.IN_TABLE:
                {
                    N5t(this, e);
                    break;
                }
            case bs.IN_TABLE_TEXT:
                {
                    swn(this, e);
                    break;
                }
            case bs.IN_CAPTION:
                {
                    _5g(this, e);
                    break;
                }
            case bs.IN_COLUMN_GROUP:
                {
                    Bfs(this, e);
                    break;
                }
            case bs.IN_TABLE_BODY:
                {
                    yEi(this, e);
                    break;
                }
            case bs.IN_ROW:
                {
                    SEi(this, e);
                    break;
                }
            case bs.IN_CELL:
                {
                    S5g(this, e);
                    break;
                }
            case bs.IN_SELECT:
                {
                    opl(this, e);
                    break;
                }
            case bs.IN_SELECT_IN_TABLE:
                {
                    w5g(this, e);
                    break;
                }
            case bs.IN_TEMPLATE:
                {
                    T5g(this, e);
                    break;
                }
            case bs.AFTER_BODY:
                {
                    x5g(this, e);
                    break;
                }
            case bs.IN_FRAMESET:
                {
                    I5g(this, e);
                    break;
                }
            case bs.AFTER_FRAMESET:
                {
                    R5g(this, e);
                    break;
                }
            case bs.AFTER_AFTER_BODY:
                {
                    M5g(this, e);
                    break;
                }
            case bs.AFTER_AFTER_FRAMESET:
                {
                    P5g(this, e);
                    break;
                }
            default:
        }
    }
    onEndTag(e) {
        this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? F5g(this, e) : this._endTagOutsideForeignContent(e);
    }
    _endTagOutsideForeignContent(e) {
        switch(this.insertionMode){
            case bs.INITIAL:
                {
                    Zkn(this, e);
                    break;
                }
            case bs.BEFORE_HTML:
                {
                    fBg(this, e);
                    break;
                }
            case bs.BEFORE_HEAD:
                {
                    _Bg(this, e);
                    break;
                }
            case bs.IN_HEAD:
                {
                    bBg(this, e);
                    break;
                }
            case bs.IN_HEAD_NO_SCRIPT:
                {
                    SBg(this, e);
                    break;
                }
            case bs.AFTER_HEAD:
                {
                    wBg(this, e);
                    break;
                }
            case bs.IN_BODY:
                {
                    _Ei(this, e);
                    break;
                }
            case bs.TEXT:
                {
                    c5g(this, e);
                    break;
                }
            case bs.IN_TABLE:
                {
                    iwn(this, e);
                    break;
                }
            case bs.IN_TABLE_TEXT:
                {
                    swn(this, e);
                    break;
                }
            case bs.IN_CAPTION:
                {
                    b5g(this, e);
                    break;
                }
            case bs.IN_COLUMN_GROUP:
                {
                    y5g(this, e);
                    break;
                }
            case bs.IN_TABLE_BODY:
                {
                    Ufs(this, e);
                    break;
                }
            case bs.IN_ROW:
                {
                    spl(this, e);
                    break;
                }
            case bs.IN_CELL:
                {
                    k5g(this, e);
                    break;
                }
            case bs.IN_SELECT:
                {
                    apl(this, e);
                    break;
                }
            case bs.IN_SELECT_IN_TABLE:
                {
                    C5g(this, e);
                    break;
                }
            case bs.IN_TEMPLATE:
                {
                    E5g(this, e);
                    break;
                }
            case bs.AFTER_BODY:
                {
                    lpl(this, e);
                    break;
                }
            case bs.IN_FRAMESET:
                {
                    A5g(this, e);
                    break;
                }
            case bs.AFTER_FRAMESET:
                {
                    D5g(this, e);
                    break;
                }
            case bs.AFTER_AFTER_BODY:
                {
                    wEi(this, e);
                    break;
                }
            default:
        }
    }
    onEof(e) {
        switch(this.insertionMode){
            case bs.INITIAL:
                {
                    Zkn(this, e);
                    break;
                }
            case bs.BEFORE_HTML:
                {
                    Qkn(this, e);
                    break;
                }
            case bs.BEFORE_HEAD:
                {
                    Jkn(this, e);
                    break;
                }
            case bs.IN_HEAD:
                {
                    ewn(this, e);
                    break;
                }
            case bs.IN_HEAD_NO_SCRIPT:
                {
                    twn(this, e);
                    break;
                }
            case bs.AFTER_HEAD:
                {
                    nwn(this, e);
                    break;
                }
            case bs.IN_BODY:
            case bs.IN_TABLE:
            case bs.IN_CAPTION:
            case bs.IN_COLUMN_GROUP:
            case bs.IN_TABLE_BODY:
            case bs.IN_ROW:
            case bs.IN_CELL:
            case bs.IN_SELECT:
            case bs.IN_SELECT_IN_TABLE:
                {
                    npl(this, e);
                    break;
                }
            case bs.TEXT:
                {
                    l5g(this, e);
                    break;
                }
            case bs.IN_TABLE_TEXT:
                {
                    swn(this, e);
                    break;
                }
            case bs.IN_TEMPLATE:
                {
                    cpl(this, e);
                    break;
                }
            case bs.AFTER_BODY:
            case bs.IN_FRAMESET:
            case bs.AFTER_FRAMESET:
            case bs.AFTER_AFTER_BODY:
            case bs.AFTER_AFTER_FRAMESET:
                {
                    Ofs(this, e);
                    break;
                }
            default:
        }
    }
    onWhitespaceCharacter(e) {
        if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === nr.LINE_FEED)) {
            if (e.chars.length === 1) return;
            e.chars = e.chars.substr(1);
        }
        if (this.tokenizer.inForeignNode) {
            this._insertCharacters(e);
            return;
        }
        switch(this.insertionMode){
            case bs.IN_HEAD:
            case bs.IN_HEAD_NO_SCRIPT:
            case bs.AFTER_HEAD:
            case bs.TEXT:
            case bs.IN_COLUMN_GROUP:
            case bs.IN_SELECT:
            case bs.IN_SELECT_IN_TABLE:
            case bs.IN_FRAMESET:
            case bs.AFTER_FRAMESET:
                {
                    this._insertCharacters(e);
                    break;
                }
            case bs.IN_BODY:
            case bs.IN_CAPTION:
            case bs.IN_CELL:
            case bs.IN_TEMPLATE:
            case bs.AFTER_BODY:
            case bs.AFTER_AFTER_BODY:
            case bs.AFTER_AFTER_FRAMESET:
                {
                    Yhl(this, e);
                    break;
                }
            case bs.IN_TABLE:
            case bs.IN_TABLE_BODY:
            case bs.IN_ROW:
                {
                    Ffs(this, e);
                    break;
                }
            case bs.IN_TABLE_TEXT:
                {
                    ipl(this, e);
                    break;
                }
            default:
        }
    }
}, Gfs = new Set([
    $t.CAPTION,
    $t.COL,
    $t.COLGROUP,
    $t.TBODY,
    $t.TD,
    $t.TFOOT,
    $t.TH,
    $t.THEAD,
    $t.TR
]);

}
