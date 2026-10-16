import { ghl, mhl } from "./decode-data-html.js";
import { bhl, c9e, j3g } from "./decode.js";
import { el, hEi } from "./error-codes.js";
import { $t, l9e } from "./html_2.js";
import { F3g, hhl } from "./preprocessor.js";
import { Chl, L5t, RYe, Y3g, Ykn, gEi, khl, phl, whl } from "./qIc.js";
import { L0, pEi } from "./token.js";
import { x } from "./tslib.es6.js";
import { bfs, f2, nr, zJ } from "./unicode.js";
var Rr, x5, Thl;
export { Rr, Thl, x5 };
var __wakaru_kfs_initialized = false;
export function kfs() {
if (__wakaru_kfs_initialized) return;
__wakaru_kfs_initialized = true;
x(), F3g(), bfs(), pEi(), j3g(), hEi(), l9e(), ghl(), (function(e) {
    e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(Rr || (Rr = {})), x5 = {
    DATA: Rr.DATA,
    RCDATA: Rr.RCDATA,
    RAWTEXT: Rr.RAWTEXT,
    SCRIPT_DATA: Rr.SCRIPT_DATA,
    PLAINTEXT: Rr.PLAINTEXT,
    CDATA_SECTION: Rr.CDATA_SECTION
}, Thl = class {
    constructor(e, t){
        this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = Rr.DATA, this.returnState = Rr.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
            name: "",
            value: ""
        }, this.preprocessor = new hhl(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new bhl(mhl, (n, i)=>{
            this.preprocessor.pos = this.entityStartPos + i - 1, this._flushCodePointConsumedAsCharacterReference(n);
        }, t.onParseError ? {
            missingSemicolonAfterCharacterReference: ()=>{
                this._err(el.missingSemicolonAfterCharacterReference, 1);
            },
            absenceOfDigitsInNumericCharacterReference: (n)=>{
                this._err(el.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + n);
            },
            validateNumericCharacterReference: (n)=>{
                const i = Y3g(n);
                i && this._err(i, 1);
            }
        } : void 0);
    }
    _err(e, t = 0) {
        var n, i;
        (i = (n = this.handler).onParseError) === null || i === void 0 || i.call(n, this.preprocessor.getError(e, t));
    }
    getCurrentLocation(e) {
        return this.options.sourceCodeLocationInfo ? {
            startLine: this.preprocessor.line,
            startCol: this.preprocessor.col - e,
            startOffset: this.preprocessor.offset - e,
            endLine: -1,
            endCol: -1,
            endOffset: -1
        } : null;
    }
    _runParsingLoop() {
        if (!this.inLoop) {
            for(this.inLoop = !0; this.active && !this.paused;){
                this.consumedAfterSnapshot = 0;
                const e = this._consume();
                this._ensureHibernation() || this._callState(e);
            }
            this.inLoop = !1;
        }
    }
    pause() {
        this.paused = !0;
    }
    resume(e) {
        if (!this.paused) throw new Error("Parser was already resumed");
        this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e?.());
    }
    write(e, t, n) {
        this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || n?.();
    }
    insertHtmlAtCurrentPos(e) {
        this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
    }
    _ensureHibernation() {
        return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
    }
    _consume() {
        return this.consumedAfterSnapshot++, this.preprocessor.advance();
    }
    _advanceBy(e) {
        this.consumedAfterSnapshot += e;
        for(let t = 0; t < e; t++)this.preprocessor.advance();
    }
    _consumeSequenceIfMatch(e, t) {
        return this.preprocessor.startsWith(e, t) ? (this._advanceBy(e.length - 1), !0) : !1;
    }
    _createStartTagToken() {
        this.currentToken = {
            type: L0.START_TAG,
            tagName: "",
            tagID: $t.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1)
        };
    }
    _createEndTagToken() {
        this.currentToken = {
            type: L0.END_TAG,
            tagName: "",
            tagID: $t.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2)
        };
    }
    _createCommentToken(e) {
        this.currentToken = {
            type: L0.COMMENT,
            data: "",
            location: this.getCurrentLocation(e)
        };
    }
    _createDoctypeToken(e) {
        this.currentToken = {
            type: L0.DOCTYPE,
            name: e,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation
        };
    }
    _createCharacterToken(e, t) {
        this.currentCharacterToken = {
            type: e,
            chars: t,
            location: this.currentLocation
        };
    }
    _createAttr(e) {
        this.currentAttr = {
            name: e,
            value: ""
        }, this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
        var e, t;
        const n = this.currentToken;
        if (phl(n, this.currentAttr.name) === null) {
            if (n.attrs.push(this.currentAttr), n.location && this.currentLocation) {
                const i = (e = (t = n.location).attrs) !== null && e !== void 0 ? e : t.attrs = Object.create(null);
                i[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
            }
        } else this._err(el.duplicateAttribute);
    }
    _leaveAttrValue() {
        this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
    }
    prepareToken(e) {
        this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
        const e = this.currentToken;
        this.prepareToken(e), e.tagID = L5t(e.tagName), e.type === L0.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(el.endTagWithAttributes), e.selfClosing && this._err(el.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(e) {
        this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(e) {
        this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(e) {
        if (this.currentCharacterToken) {
            switch(e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type){
                case L0.CHARACTER:
                    {
                        this.handler.onCharacter(this.currentCharacterToken);
                        break;
                    }
                case L0.NULL_CHARACTER:
                    {
                        this.handler.onNullCharacter(this.currentCharacterToken);
                        break;
                    }
                case L0.WHITESPACE_CHARACTER:
                    {
                        this.handler.onWhitespaceCharacter(this.currentCharacterToken);
                        break;
                    }
            }
            this.currentCharacterToken = null;
        }
    }
    _emitEOFToken() {
        const e = this.getCurrentLocation(0);
        e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
            type: L0.EOF,
            location: e
        }), this.active = !1;
    }
    _appendCharToCurrentCharacterToken(e, t) {
        if (this.currentCharacterToken) if (this.currentCharacterToken.type === e) {
            this.currentCharacterToken.chars += t;
            return;
        } else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
        this._createCharacterToken(e, t);
    }
    _emitCodePoint(e) {
        const t = whl(e) ? L0.WHITESPACE_CHARACTER : e === nr.NULL ? L0.NULL_CHARACTER : L0.CHARACTER;
        this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
    }
    _emitChars(e) {
        this._appendCharToCurrentCharacterToken(L0.CHARACTER, e);
    }
    _startCharacterReference() {
        this.returnState = this.state, this.state = Rr.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? c9e.Attribute : c9e.Legacy);
    }
    _isCharacterReferenceInAttribute() {
        return this.returnState === Rr.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === Rr.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === Rr.ATTRIBUTE_VALUE_UNQUOTED;
    }
    _flushCodePointConsumedAsCharacterReference(e) {
        this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
    }
    _callState(e) {
        switch(this.state){
            case Rr.DATA:
                {
                    this._stateData(e);
                    break;
                }
            case Rr.RCDATA:
                {
                    this._stateRcdata(e);
                    break;
                }
            case Rr.RAWTEXT:
                {
                    this._stateRawtext(e);
                    break;
                }
            case Rr.SCRIPT_DATA:
                {
                    this._stateScriptData(e);
                    break;
                }
            case Rr.PLAINTEXT:
                {
                    this._statePlaintext(e);
                    break;
                }
            case Rr.TAG_OPEN:
                {
                    this._stateTagOpen(e);
                    break;
                }
            case Rr.END_TAG_OPEN:
                {
                    this._stateEndTagOpen(e);
                    break;
                }
            case Rr.TAG_NAME:
                {
                    this._stateTagName(e);
                    break;
                }
            case Rr.RCDATA_LESS_THAN_SIGN:
                {
                    this._stateRcdataLessThanSign(e);
                    break;
                }
            case Rr.RCDATA_END_TAG_OPEN:
                {
                    this._stateRcdataEndTagOpen(e);
                    break;
                }
            case Rr.RCDATA_END_TAG_NAME:
                {
                    this._stateRcdataEndTagName(e);
                    break;
                }
            case Rr.RAWTEXT_LESS_THAN_SIGN:
                {
                    this._stateRawtextLessThanSign(e);
                    break;
                }
            case Rr.RAWTEXT_END_TAG_OPEN:
                {
                    this._stateRawtextEndTagOpen(e);
                    break;
                }
            case Rr.RAWTEXT_END_TAG_NAME:
                {
                    this._stateRawtextEndTagName(e);
                    break;
                }
            case Rr.SCRIPT_DATA_LESS_THAN_SIGN:
                {
                    this._stateScriptDataLessThanSign(e);
                    break;
                }
            case Rr.SCRIPT_DATA_END_TAG_OPEN:
                {
                    this._stateScriptDataEndTagOpen(e);
                    break;
                }
            case Rr.SCRIPT_DATA_END_TAG_NAME:
                {
                    this._stateScriptDataEndTagName(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPE_START:
                {
                    this._stateScriptDataEscapeStart(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPE_START_DASH:
                {
                    this._stateScriptDataEscapeStartDash(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPED:
                {
                    this._stateScriptDataEscaped(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPED_DASH:
                {
                    this._stateScriptDataEscapedDash(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataEscapedDashDash(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataEscapedLessThanSign(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
                {
                    this._stateScriptDataEscapedEndTagOpen(e);
                    break;
                }
            case Rr.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
                {
                    this._stateScriptDataEscapedEndTagName(e);
                    break;
                }
            case Rr.SCRIPT_DATA_DOUBLE_ESCAPE_START:
                {
                    this._stateScriptDataDoubleEscapeStart(e);
                    break;
                }
            case Rr.SCRIPT_DATA_DOUBLE_ESCAPED:
                {
                    this._stateScriptDataDoubleEscaped(e);
                    break;
                }
            case Rr.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
                {
                    this._stateScriptDataDoubleEscapedDash(e);
                    break;
                }
            case Rr.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataDoubleEscapedDashDash(e);
                    break;
                }
            case Rr.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataDoubleEscapedLessThanSign(e);
                    break;
                }
            case Rr.SCRIPT_DATA_DOUBLE_ESCAPE_END:
                {
                    this._stateScriptDataDoubleEscapeEnd(e);
                    break;
                }
            case Rr.BEFORE_ATTRIBUTE_NAME:
                {
                    this._stateBeforeAttributeName(e);
                    break;
                }
            case Rr.ATTRIBUTE_NAME:
                {
                    this._stateAttributeName(e);
                    break;
                }
            case Rr.AFTER_ATTRIBUTE_NAME:
                {
                    this._stateAfterAttributeName(e);
                    break;
                }
            case Rr.BEFORE_ATTRIBUTE_VALUE:
                {
                    this._stateBeforeAttributeValue(e);
                    break;
                }
            case Rr.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
                {
                    this._stateAttributeValueDoubleQuoted(e);
                    break;
                }
            case Rr.ATTRIBUTE_VALUE_SINGLE_QUOTED:
                {
                    this._stateAttributeValueSingleQuoted(e);
                    break;
                }
            case Rr.ATTRIBUTE_VALUE_UNQUOTED:
                {
                    this._stateAttributeValueUnquoted(e);
                    break;
                }
            case Rr.AFTER_ATTRIBUTE_VALUE_QUOTED:
                {
                    this._stateAfterAttributeValueQuoted(e);
                    break;
                }
            case Rr.SELF_CLOSING_START_TAG:
                {
                    this._stateSelfClosingStartTag(e);
                    break;
                }
            case Rr.BOGUS_COMMENT:
                {
                    this._stateBogusComment(e);
                    break;
                }
            case Rr.MARKUP_DECLARATION_OPEN:
                {
                    this._stateMarkupDeclarationOpen(e);
                    break;
                }
            case Rr.COMMENT_START:
                {
                    this._stateCommentStart(e);
                    break;
                }
            case Rr.COMMENT_START_DASH:
                {
                    this._stateCommentStartDash(e);
                    break;
                }
            case Rr.COMMENT:
                {
                    this._stateComment(e);
                    break;
                }
            case Rr.COMMENT_LESS_THAN_SIGN:
                {
                    this._stateCommentLessThanSign(e);
                    break;
                }
            case Rr.COMMENT_LESS_THAN_SIGN_BANG:
                {
                    this._stateCommentLessThanSignBang(e);
                    break;
                }
            case Rr.COMMENT_LESS_THAN_SIGN_BANG_DASH:
                {
                    this._stateCommentLessThanSignBangDash(e);
                    break;
                }
            case Rr.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
                {
                    this._stateCommentLessThanSignBangDashDash(e);
                    break;
                }
            case Rr.COMMENT_END_DASH:
                {
                    this._stateCommentEndDash(e);
                    break;
                }
            case Rr.COMMENT_END:
                {
                    this._stateCommentEnd(e);
                    break;
                }
            case Rr.COMMENT_END_BANG:
                {
                    this._stateCommentEndBang(e);
                    break;
                }
            case Rr.DOCTYPE:
                {
                    this._stateDoctype(e);
                    break;
                }
            case Rr.BEFORE_DOCTYPE_NAME:
                {
                    this._stateBeforeDoctypeName(e);
                    break;
                }
            case Rr.DOCTYPE_NAME:
                {
                    this._stateDoctypeName(e);
                    break;
                }
            case Rr.AFTER_DOCTYPE_NAME:
                {
                    this._stateAfterDoctypeName(e);
                    break;
                }
            case Rr.AFTER_DOCTYPE_PUBLIC_KEYWORD:
                {
                    this._stateAfterDoctypePublicKeyword(e);
                    break;
                }
            case Rr.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateBeforeDoctypePublicIdentifier(e);
                    break;
                }
            case Rr.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierDoubleQuoted(e);
                    break;
                }
            case Rr.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierSingleQuoted(e);
                    break;
                }
            case Rr.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateAfterDoctypePublicIdentifier(e);
                    break;
                }
            case Rr.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
                {
                    this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
                    break;
                }
            case Rr.AFTER_DOCTYPE_SYSTEM_KEYWORD:
                {
                    this._stateAfterDoctypeSystemKeyword(e);
                    break;
                }
            case Rr.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateBeforeDoctypeSystemIdentifier(e);
                    break;
                }
            case Rr.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierDoubleQuoted(e);
                    break;
                }
            case Rr.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierSingleQuoted(e);
                    break;
                }
            case Rr.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateAfterDoctypeSystemIdentifier(e);
                    break;
                }
            case Rr.BOGUS_DOCTYPE:
                {
                    this._stateBogusDoctype(e);
                    break;
                }
            case Rr.CDATA_SECTION:
                {
                    this._stateCdataSection(e);
                    break;
                }
            case Rr.CDATA_SECTION_BRACKET:
                {
                    this._stateCdataSectionBracket(e);
                    break;
                }
            case Rr.CDATA_SECTION_END:
                {
                    this._stateCdataSectionEnd(e);
                    break;
                }
            case Rr.CHARACTER_REFERENCE:
                {
                    this._stateCharacterReference();
                    break;
                }
            case Rr.AMBIGUOUS_AMPERSAND:
                {
                    this._stateAmbiguousAmpersand(e);
                    break;
                }
            default:
                throw new Error("Unknown state");
        }
    }
    _stateData(e) {
        switch(e){
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.TAG_OPEN;
                    break;
                }
            case nr.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._emitCodePoint(e);
                    break;
                }
            case nr.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateRcdata(e) {
        switch(e){
            case nr.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.RCDATA_LESS_THAN_SIGN;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateRawtext(e) {
        switch(e){
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.RAWTEXT_LESS_THAN_SIGN;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptData(e) {
        switch(e){
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA_LESS_THAN_SIGN;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _statePlaintext(e) {
        switch(e){
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateTagOpen(e) {
        if (RYe(e)) this._createStartTagToken(), this.state = Rr.TAG_NAME, this._stateTagName(e);
        else switch(e){
            case nr.EXCLAMATION_MARK:
                {
                    this.state = Rr.MARKUP_DECLARATION_OPEN;
                    break;
                }
            case nr.SOLIDUS:
                {
                    this.state = Rr.END_TAG_OPEN;
                    break;
                }
            case nr.QUESTION_MARK:
                {
                    this._err(el.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = Rr.BOGUS_COMMENT, this._stateBogusComment(e);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = Rr.DATA, this._stateData(e);
        }
    }
    _stateEndTagOpen(e) {
        if (RYe(e)) this._createEndTagToken(), this.state = Rr.TAG_NAME, this._stateTagName(e);
        else switch(e){
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.missingEndTagName), this.state = Rr.DATA;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = Rr.BOGUS_COMMENT, this._stateBogusComment(e);
        }
    }
    _stateTagName(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this.state = Rr.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case nr.SOLIDUS:
                {
                    this.state = Rr.SELF_CLOSING_START_TAG;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA, this.emitCurrentTagToken();
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.tagName += f2;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                t.tagName += String.fromCodePoint(Ykn(e) ? gEi(e) : e);
        }
    }
    _stateRcdataLessThanSign(e) {
        e === nr.SOLIDUS ? this.state = Rr.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = Rr.RCDATA, this._stateRcdata(e));
    }
    _stateRcdataEndTagOpen(e) {
        RYe(e) ? (this.state = Rr.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = Rr.RCDATA, this._stateRcdata(e));
    }
    handleSpecialEndTag(e) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
        this._createEndTagToken();
        const t = this.currentToken;
        switch(t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                return this._advanceBy(this.lastStartTagName.length), this.state = Rr.BEFORE_ATTRIBUTE_NAME, !1;
            case nr.SOLIDUS:
                return this._advanceBy(this.lastStartTagName.length), this.state = Rr.SELF_CLOSING_START_TAG, !1;
            case nr.GREATER_THAN_SIGN:
                return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = Rr.DATA, !1;
            default:
                return !this._ensureHibernation();
        }
    }
    _stateRcdataEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Rr.RCDATA, this._stateRcdata(e));
    }
    _stateRawtextLessThanSign(e) {
        e === nr.SOLIDUS ? this.state = Rr.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = Rr.RAWTEXT, this._stateRawtext(e));
    }
    _stateRawtextEndTagOpen(e) {
        RYe(e) ? (this.state = Rr.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = Rr.RAWTEXT, this._stateRawtext(e));
    }
    _stateRawtextEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Rr.RAWTEXT, this._stateRawtext(e));
    }
    _stateScriptDataLessThanSign(e) {
        switch(e){
            case nr.SOLIDUS:
                {
                    this.state = Rr.SCRIPT_DATA_END_TAG_OPEN;
                    break;
                }
            case nr.EXCLAMATION_MARK:
                {
                    this.state = Rr.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
                    break;
                }
            default:
                this._emitChars("<"), this.state = Rr.SCRIPT_DATA, this._stateScriptData(e);
        }
    }
    _stateScriptDataEndTagOpen(e) {
        RYe(e) ? (this.state = Rr.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = Rr.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Rr.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEscapeStart(e) {
        e === nr.HYPHEN_MINUS ? (this.state = Rr.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = Rr.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEscapeStartDash(e) {
        e === nr.HYPHEN_MINUS ? (this.state = Rr.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = Rr.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEscaped(e) {
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedDash(e) {
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.state = Rr.SCRIPT_DATA_ESCAPED, this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Rr.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedDashDash(e) {
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA, this._emitChars(">");
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.state = Rr.SCRIPT_DATA_ESCAPED, this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Rr.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedLessThanSign(e) {
        e === nr.SOLIDUS ? this.state = Rr.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : RYe(e) ? (this._emitChars("<"), this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = Rr.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataEscapedEndTagOpen(e) {
        RYe(e) ? (this.state = Rr.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = Rr.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataEscapedEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Rr.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataDoubleEscapeStart(e) {
        if (this.preprocessor.startsWith(zJ.SCRIPT, !1) && Chl(this.preprocessor.peek(zJ.SCRIPT.length))) {
            this._emitCodePoint(e);
            for(let t = 0; t < zJ.SCRIPT.length; t++)this._emitCodePoint(this._consume());
            this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else this._ensureHibernation() || (this.state = Rr.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataDoubleEscaped(e) {
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedDash(e) {
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedDashDash(e) {
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.SCRIPT_DATA, this._emitChars(">");
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(f2);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedLessThanSign(e) {
        e === nr.SOLIDUS ? (this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
    }
    _stateScriptDataDoubleEscapeEnd(e) {
        if (this.preprocessor.startsWith(zJ.SCRIPT, !1) && Chl(this.preprocessor.peek(zJ.SCRIPT.length))) {
            this._emitCodePoint(e);
            for(let t = 0; t < zJ.SCRIPT.length; t++)this._emitCodePoint(this._consume());
            this.state = Rr.SCRIPT_DATA_ESCAPED;
        } else this._ensureHibernation() || (this.state = Rr.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
    }
    _stateBeforeAttributeName(e) {
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.SOLIDUS:
            case nr.GREATER_THAN_SIGN:
            case nr.EOF:
                {
                    this.state = Rr.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
                    break;
                }
            case nr.EQUALS_SIGN:
                {
                    this._err(el.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = Rr.ATTRIBUTE_NAME;
                    break;
                }
            default:
                this._createAttr(""), this.state = Rr.ATTRIBUTE_NAME, this._stateAttributeName(e);
        }
    }
    _stateAttributeName(e) {
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
            case nr.SOLIDUS:
            case nr.GREATER_THAN_SIGN:
            case nr.EOF:
                {
                    this._leaveAttrName(), this.state = Rr.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
                    break;
                }
            case nr.EQUALS_SIGN:
                {
                    this._leaveAttrName(), this.state = Rr.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case nr.QUOTATION_MARK:
            case nr.APOSTROPHE:
            case nr.LESS_THAN_SIGN:
                {
                    this._err(el.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.currentAttr.name += f2;
                    break;
                }
            default:
                this.currentAttr.name += String.fromCodePoint(Ykn(e) ? gEi(e) : e);
        }
    }
    _stateAfterAttributeName(e) {
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.SOLIDUS:
                {
                    this.state = Rr.SELF_CLOSING_START_TAG;
                    break;
                }
            case nr.EQUALS_SIGN:
                {
                    this.state = Rr.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA, this.emitCurrentTagToken();
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._createAttr(""), this.state = Rr.ATTRIBUTE_NAME, this._stateAttributeName(e);
        }
    }
    _stateBeforeAttributeValue(e) {
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.QUOTATION_MARK:
                {
                    this.state = Rr.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                    break;
                }
            case nr.APOSTROPHE:
                {
                    this.state = Rr.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.missingAttributeValue), this.state = Rr.DATA, this.emitCurrentTagToken();
                    break;
                }
            default:
                this.state = Rr.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
        }
    }
    _stateAttributeValueDoubleQuoted(e) {
        switch(e){
            case nr.QUOTATION_MARK:
                {
                    this.state = Rr.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case nr.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.currentAttr.value += f2;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAttributeValueSingleQuoted(e) {
        switch(e){
            case nr.APOSTROPHE:
                {
                    this.state = Rr.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case nr.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.currentAttr.value += f2;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAttributeValueUnquoted(e) {
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this._leaveAttrValue(), this.state = Rr.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case nr.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue(), this.state = Rr.DATA, this.emitCurrentTagToken();
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this.currentAttr.value += f2;
                    break;
                }
            case nr.QUOTATION_MARK:
            case nr.APOSTROPHE:
            case nr.LESS_THAN_SIGN:
            case nr.EQUALS_SIGN:
            case nr.GRAVE_ACCENT:
                {
                    this._err(el.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAfterAttributeValueQuoted(e) {
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this._leaveAttrValue(), this.state = Rr.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case nr.SOLIDUS:
                {
                    this._leaveAttrValue(), this.state = Rr.SELF_CLOSING_START_TAG;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue(), this.state = Rr.DATA, this.emitCurrentTagToken();
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingWhitespaceBetweenAttributes), this.state = Rr.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
        }
    }
    _stateSelfClosingStartTag(e) {
        switch(e){
            case nr.GREATER_THAN_SIGN:
                {
                    const t = this.currentToken;
                    t.selfClosing = !0, this.state = Rr.DATA, this.emitCurrentTagToken();
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.unexpectedSolidusInTag), this.state = Rr.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
        }
    }
    _stateBogusComment(e) {
        const t = this.currentToken;
        switch(e){
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA, this.emitCurrentComment(t);
                    break;
                }
            case nr.EOF:
                {
                    this.emitCurrentComment(t), this._emitEOFToken();
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.data += f2;
                    break;
                }
            default:
                t.data += String.fromCodePoint(e);
        }
    }
    _stateMarkupDeclarationOpen(e) {
        this._consumeSequenceIfMatch(zJ.DASH_DASH, !0) ? (this._createCommentToken(zJ.DASH_DASH.length + 1), this.state = Rr.COMMENT_START) : this._consumeSequenceIfMatch(zJ.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(zJ.DOCTYPE.length + 1), this.state = Rr.DOCTYPE) : this._consumeSequenceIfMatch(zJ.CDATA_START, !0) ? this.inForeignNode ? this.state = Rr.CDATA_SECTION : (this._err(el.cdataInHtmlContent), this._createCommentToken(zJ.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = Rr.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(el.incorrectlyOpenedComment), this._createCommentToken(2), this.state = Rr.BOGUS_COMMENT, this._stateBogusComment(e));
    }
    _stateCommentStart(e) {
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.COMMENT_START_DASH;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.abruptClosingOfEmptyComment), this.state = Rr.DATA;
                    const t = this.currentToken;
                    this.emitCurrentComment(t);
                    break;
                }
            default:
                this.state = Rr.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentStartDash(e) {
        const t = this.currentToken;
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.COMMENT_END;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.abruptClosingOfEmptyComment), this.state = Rr.DATA, this.emitCurrentComment(t);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
                    break;
                }
            default:
                t.data += "-", this.state = Rr.COMMENT, this._stateComment(e);
        }
    }
    _stateComment(e) {
        const t = this.currentToken;
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.COMMENT_END_DASH;
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    t.data += "<", this.state = Rr.COMMENT_LESS_THAN_SIGN;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.data += f2;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
                    break;
                }
            default:
                t.data += String.fromCodePoint(e);
        }
    }
    _stateCommentLessThanSign(e) {
        const t = this.currentToken;
        switch(e){
            case nr.EXCLAMATION_MARK:
                {
                    t.data += "!", this.state = Rr.COMMENT_LESS_THAN_SIGN_BANG;
                    break;
                }
            case nr.LESS_THAN_SIGN:
                {
                    t.data += "<";
                    break;
                }
            default:
                this.state = Rr.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentLessThanSignBang(e) {
        e === nr.HYPHEN_MINUS ? this.state = Rr.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = Rr.COMMENT, this._stateComment(e));
    }
    _stateCommentLessThanSignBangDash(e) {
        e === nr.HYPHEN_MINUS ? this.state = Rr.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = Rr.COMMENT_END_DASH, this._stateCommentEndDash(e));
    }
    _stateCommentLessThanSignBangDashDash(e) {
        e !== nr.GREATER_THAN_SIGN && e !== nr.EOF && this._err(el.nestedComment), this.state = Rr.COMMENT_END, this._stateCommentEnd(e);
    }
    _stateCommentEndDash(e) {
        const t = this.currentToken;
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    this.state = Rr.COMMENT_END;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
                    break;
                }
            default:
                t.data += "-", this.state = Rr.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentEnd(e) {
        const t = this.currentToken;
        switch(e){
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA, this.emitCurrentComment(t);
                    break;
                }
            case nr.EXCLAMATION_MARK:
                {
                    this.state = Rr.COMMENT_END_BANG;
                    break;
                }
            case nr.HYPHEN_MINUS:
                {
                    t.data += "-";
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
                    break;
                }
            default:
                t.data += "--", this.state = Rr.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentEndBang(e) {
        const t = this.currentToken;
        switch(e){
            case nr.HYPHEN_MINUS:
                {
                    t.data += "--!", this.state = Rr.COMMENT_END_DASH;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.incorrectlyClosedComment), this.state = Rr.DATA, this.emitCurrentComment(t);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
                    break;
                }
            default:
                t.data += "--!", this.state = Rr.COMMENT, this._stateComment(e);
        }
    }
    _stateDoctype(e) {
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this.state = Rr.BEFORE_DOCTYPE_NAME;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), this._createDoctypeToken(null);
                    const t = this.currentToken;
                    t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingWhitespaceBeforeDoctypeName), this.state = Rr.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
        }
    }
    _stateBeforeDoctypeName(e) {
        if (Ykn(e)) this._createDoctypeToken(String.fromCharCode(gEi(e))), this.state = Rr.DOCTYPE_NAME;
        else switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), this._createDoctypeToken(f2), this.state = Rr.DOCTYPE_NAME;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.missingDoctypeName), this._createDoctypeToken(null);
                    const t = this.currentToken;
                    t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), this._createDoctypeToken(null);
                    const t = this.currentToken;
                    t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._createDoctypeToken(String.fromCodePoint(e)), this.state = Rr.DOCTYPE_NAME;
        }
    }
    _stateDoctypeName(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this.state = Rr.AFTER_DOCTYPE_NAME;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA, this.emitCurrentDoctype(t);
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.name += f2;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                t.name += String.fromCodePoint(Ykn(e) ? gEi(e) : e);
        }
    }
    _stateAfterDoctypeName(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA, this.emitCurrentDoctype(t);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._consumeSequenceIfMatch(zJ.PUBLIC, !1) ? this.state = Rr.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(zJ.SYSTEM, !1) ? this.state = Rr.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(el.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
        }
    }
    _stateAfterDoctypePublicKeyword(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this.state = Rr.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case nr.QUOTATION_MARK:
                {
                    this._err(el.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Rr.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case nr.APOSTROPHE:
                {
                    this._err(el.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = Rr.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Rr.DATA, this.emitCurrentDoctype(t);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBeforeDoctypePublicIdentifier(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.QUOTATION_MARK:
                {
                    t.publicId = "", this.state = Rr.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case nr.APOSTROPHE:
                {
                    t.publicId = "", this.state = Rr.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Rr.DATA, this.emitCurrentDoctype(t);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(e) {
        const t = this.currentToken;
        switch(e){
            case nr.QUOTATION_MARK:
                {
                    this.state = Rr.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.publicId += f2;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                t.publicId += String.fromCodePoint(e);
        }
    }
    _stateDoctypePublicIdentifierSingleQuoted(e) {
        const t = this.currentToken;
        switch(e){
            case nr.APOSTROPHE:
                {
                    this.state = Rr.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.publicId += f2;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                t.publicId += String.fromCodePoint(e);
        }
    }
    _stateAfterDoctypePublicIdentifier(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this.state = Rr.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA, this.emitCurrentDoctype(t);
                    break;
                }
            case nr.QUOTATION_MARK:
                {
                    this._err(el.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case nr.APOSTROPHE:
                {
                    this._err(el.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.QUOTATION_MARK:
                {
                    t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case nr.APOSTROPHE:
                {
                    t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateAfterDoctypeSystemKeyword(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                {
                    this.state = Rr.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case nr.QUOTATION_MARK:
                {
                    this._err(el.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case nr.APOSTROPHE:
                {
                    this._err(el.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Rr.DATA, this.emitCurrentDoctype(t);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBeforeDoctypeSystemIdentifier(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.QUOTATION_MARK:
                {
                    t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case nr.APOSTROPHE:
                {
                    t.systemId = "", this.state = Rr.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Rr.DATA, this.emitCurrentDoctype(t);
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(e) {
        const t = this.currentToken;
        switch(e){
            case nr.QUOTATION_MARK:
                {
                    this.state = Rr.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.systemId += f2;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                t.systemId += String.fromCodePoint(e);
        }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(e) {
        const t = this.currentToken;
        switch(e){
            case nr.APOSTROPHE:
                {
                    this.state = Rr.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter), t.systemId += f2;
                    break;
                }
            case nr.GREATER_THAN_SIGN:
                {
                    this._err(el.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                t.systemId += String.fromCodePoint(e);
        }
    }
    _stateAfterDoctypeSystemIdentifier(e) {
        const t = this.currentToken;
        switch(e){
            case nr.SPACE:
            case nr.LINE_FEED:
            case nr.TABULATION:
            case nr.FORM_FEED:
                break;
            case nr.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
                this._err(el.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = Rr.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBogusDoctype(e) {
        const t = this.currentToken;
        switch(e){
            case nr.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(t), this.state = Rr.DATA;
                    break;
                }
            case nr.NULL:
                {
                    this._err(el.unexpectedNullCharacter);
                    break;
                }
            case nr.EOF:
                {
                    this.emitCurrentDoctype(t), this._emitEOFToken();
                    break;
                }
            default:
        }
    }
    _stateCdataSection(e) {
        switch(e){
            case nr.RIGHT_SQUARE_BRACKET:
                {
                    this.state = Rr.CDATA_SECTION_BRACKET;
                    break;
                }
            case nr.EOF:
                {
                    this._err(el.eofInCdata), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateCdataSectionBracket(e) {
        e === nr.RIGHT_SQUARE_BRACKET ? this.state = Rr.CDATA_SECTION_END : (this._emitChars("]"), this.state = Rr.CDATA_SECTION, this._stateCdataSection(e));
    }
    _stateCdataSectionEnd(e) {
        switch(e){
            case nr.GREATER_THAN_SIGN:
                {
                    this.state = Rr.DATA;
                    break;
                }
            case nr.RIGHT_SQUARE_BRACKET:
                {
                    this._emitChars("]");
                    break;
                }
            default:
                this._emitChars("]]"), this.state = Rr.CDATA_SECTION, this._stateCdataSection(e);
        }
    }
    _stateCharacterReference() {
        let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
        if (e < 0) if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
        else {
            this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
            return;
        }
        e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(nr.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && khl(this.preprocessor.peek(1)) ? Rr.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
    }
    _stateAmbiguousAmpersand(e) {
        khl(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === nr.SEMICOLON && this._err(el.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
    }
};

}
