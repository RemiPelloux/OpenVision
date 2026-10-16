import { Gmh, Kbn, Lmh, Rzy, cui, e1t, qmh, xMr, zmh } from "./LYd.js";
import { Fmh, Omh } from "./decode-data-html.js";
import { $mh, Ezy, vit } from "./decode.js";
import { TMr, fu } from "./error-codes.js";
import { Jt, _it } from "./html_2.js";
import { Nmh, _zy } from "./preprocessor.js";
import { EMr, HI } from "./token.js";
import { E } from "./tslib.es6.js";
import { Che, Dia, x4, ys } from "./unicode.js";
var Ys, Xj, Vmh;
export { Vmh, Xj, Ys };
var __wakaru_Oia_initialized = false;
export function Oia() {
if (__wakaru_Oia_initialized) return;
__wakaru_Oia_initialized = true;
E(), _zy(), Dia(), EMr(), Ezy(), TMr(), _it(), Fmh(), (function(t) {
    t[t.DATA = 0] = "DATA", t[t.RCDATA = 1] = "RCDATA", t[t.RAWTEXT = 2] = "RAWTEXT", t[t.SCRIPT_DATA = 3] = "SCRIPT_DATA", t[t.PLAINTEXT = 4] = "PLAINTEXT", t[t.TAG_OPEN = 5] = "TAG_OPEN", t[t.END_TAG_OPEN = 6] = "END_TAG_OPEN", t[t.TAG_NAME = 7] = "TAG_NAME", t[t.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", t[t.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", t[t.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", t[t.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", t[t.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", t[t.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", t[t.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", t[t.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", t[t.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", t[t.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", t[t.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", t[t.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", t[t.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", t[t.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", t[t.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", t[t.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", t[t.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", t[t.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", t[t.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", t[t.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", t[t.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", t[t.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", t[t.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", t[t.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", t[t.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", t[t.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", t[t.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", t[t.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", t[t.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", t[t.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", t[t.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", t[t.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", t[t.COMMENT_START = 42] = "COMMENT_START", t[t.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", t[t.COMMENT = 44] = "COMMENT", t[t.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", t[t.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", t[t.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", t[t.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", t[t.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", t[t.COMMENT_END = 50] = "COMMENT_END", t[t.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", t[t.DOCTYPE = 52] = "DOCTYPE", t[t.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", t[t.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", t[t.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", t[t.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", t[t.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", t[t.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", t[t.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", t[t.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", t[t.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", t[t.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", t[t.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", t[t.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", t[t.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", t[t.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", t[t.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", t[t.CDATA_SECTION = 68] = "CDATA_SECTION", t[t.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", t[t.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", t[t.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", t[t.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(Ys || (Ys = {})), Xj = {
    DATA: Ys.DATA,
    RCDATA: Ys.RCDATA,
    RAWTEXT: Ys.RAWTEXT,
    SCRIPT_DATA: Ys.SCRIPT_DATA,
    PLAINTEXT: Ys.PLAINTEXT,
    CDATA_SECTION: Ys.CDATA_SECTION
}, Vmh = class {
    constructor(t, e){
        this.options = t, this.handler = e, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = Ys.DATA, this.returnState = Ys.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
            name: "",
            value: ""
        }, this.preprocessor = new Nmh(e), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new $mh(Omh, (n, i)=>{
            this.preprocessor.pos = this.entityStartPos + i - 1, this._flushCodePointConsumedAsCharacterReference(n);
        }, e.onParseError ? {
            missingSemicolonAfterCharacterReference: ()=>{
                this._err(fu.missingSemicolonAfterCharacterReference, 1);
            },
            absenceOfDigitsInNumericCharacterReference: (n)=>{
                this._err(fu.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + n);
            },
            validateNumericCharacterReference: (n)=>{
                const i = Rzy(n);
                i && this._err(i, 1);
            }
        } : void 0);
    }
    _err(t, e = 0) {
        var n, i;
        (i = (n = this.handler).onParseError) === null || i === void 0 || i.call(n, this.preprocessor.getError(t, e));
    }
    getCurrentLocation(t) {
        return this.options.sourceCodeLocationInfo ? {
            startLine: this.preprocessor.line,
            startCol: this.preprocessor.col - t,
            startOffset: this.preprocessor.offset - t,
            endLine: -1,
            endCol: -1,
            endOffset: -1
        } : null;
    }
    _runParsingLoop() {
        if (!this.inLoop) {
            for(this.inLoop = !0; this.active && !this.paused;){
                this.consumedAfterSnapshot = 0;
                const t = this._consume();
                this._ensureHibernation() || this._callState(t);
            }
            this.inLoop = !1;
        }
    }
    pause() {
        this.paused = !0;
    }
    resume(t) {
        if (!this.paused) throw new Error("Parser was already resumed");
        this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || t?.());
    }
    write(t, e, n) {
        this.active = !0, this.preprocessor.write(t, e), this._runParsingLoop(), this.paused || n?.();
    }
    insertHtmlAtCurrentPos(t) {
        this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(t), this._runParsingLoop();
    }
    _ensureHibernation() {
        return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
    }
    _consume() {
        return this.consumedAfterSnapshot++, this.preprocessor.advance();
    }
    _advanceBy(t) {
        this.consumedAfterSnapshot += t;
        for(let e = 0; e < t; e++)this.preprocessor.advance();
    }
    _consumeSequenceIfMatch(t, e) {
        return this.preprocessor.startsWith(t, e) ? (this._advanceBy(t.length - 1), !0) : !1;
    }
    _createStartTagToken() {
        this.currentToken = {
            type: HI.START_TAG,
            tagName: "",
            tagID: Jt.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1)
        };
    }
    _createEndTagToken() {
        this.currentToken = {
            type: HI.END_TAG,
            tagName: "",
            tagID: Jt.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2)
        };
    }
    _createCommentToken(t) {
        this.currentToken = {
            type: HI.COMMENT,
            data: "",
            location: this.getCurrentLocation(t)
        };
    }
    _createDoctypeToken(t) {
        this.currentToken = {
            type: HI.DOCTYPE,
            name: t,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation
        };
    }
    _createCharacterToken(t, e) {
        this.currentCharacterToken = {
            type: t,
            chars: e,
            location: this.currentLocation
        };
    }
    _createAttr(t) {
        this.currentAttr = {
            name: t,
            value: ""
        }, this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
        var t, e;
        const n = this.currentToken;
        if (Lmh(n, this.currentAttr.name) === null) {
            if (n.attrs.push(this.currentAttr), n.location && this.currentLocation) {
                const i = (t = (e = n.location).attrs) !== null && t !== void 0 ? t : e.attrs = Object.create(null);
                i[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
            }
        } else this._err(fu.duplicateAttribute);
    }
    _leaveAttrValue() {
        this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
    }
    prepareToken(t) {
        this._emitCurrentCharacterToken(t.location), this.currentToken = null, t.location && (t.location.endLine = this.preprocessor.line, t.location.endCol = this.preprocessor.col + 1, t.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
        const t = this.currentToken;
        this.prepareToken(t), t.tagID = Kbn(t.tagName), t.type === HI.START_TAG ? (this.lastStartTagName = t.tagName, this.handler.onStartTag(t)) : (t.attrs.length > 0 && this._err(fu.endTagWithAttributes), t.selfClosing && this._err(fu.endTagWithTrailingSolidus), this.handler.onEndTag(t)), this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(t) {
        this.prepareToken(t), this.handler.onComment(t), this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(t) {
        this.prepareToken(t), this.handler.onDoctype(t), this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(t) {
        if (this.currentCharacterToken) {
            switch(t && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = t.startLine, this.currentCharacterToken.location.endCol = t.startCol, this.currentCharacterToken.location.endOffset = t.startOffset), this.currentCharacterToken.type){
                case HI.CHARACTER:
                    {
                        this.handler.onCharacter(this.currentCharacterToken);
                        break;
                    }
                case HI.NULL_CHARACTER:
                    {
                        this.handler.onNullCharacter(this.currentCharacterToken);
                        break;
                    }
                case HI.WHITESPACE_CHARACTER:
                    {
                        this.handler.onWhitespaceCharacter(this.currentCharacterToken);
                        break;
                    }
            }
            this.currentCharacterToken = null;
        }
    }
    _emitEOFToken() {
        const t = this.getCurrentLocation(0);
        t && (t.endLine = t.startLine, t.endCol = t.startCol, t.endOffset = t.startOffset), this._emitCurrentCharacterToken(t), this.handler.onEof({
            type: HI.EOF,
            location: t
        }), this.active = !1;
    }
    _appendCharToCurrentCharacterToken(t, e) {
        if (this.currentCharacterToken) if (this.currentCharacterToken.type === t) {
            this.currentCharacterToken.chars += e;
            return;
        } else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
        this._createCharacterToken(t, e);
    }
    _emitCodePoint(t) {
        const e = qmh(t) ? HI.WHITESPACE_CHARACTER : t === ys.NULL ? HI.NULL_CHARACTER : HI.CHARACTER;
        this._appendCharToCurrentCharacterToken(e, String.fromCodePoint(t));
    }
    _emitChars(t) {
        this._appendCharToCurrentCharacterToken(HI.CHARACTER, t);
    }
    _startCharacterReference() {
        this.returnState = this.state, this.state = Ys.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? vit.Attribute : vit.Legacy);
    }
    _isCharacterReferenceInAttribute() {
        return this.returnState === Ys.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === Ys.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === Ys.ATTRIBUTE_VALUE_UNQUOTED;
    }
    _flushCodePointConsumedAsCharacterReference(t) {
        this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(t) : this._emitCodePoint(t);
    }
    _callState(t) {
        switch(this.state){
            case Ys.DATA:
                {
                    this._stateData(t);
                    break;
                }
            case Ys.RCDATA:
                {
                    this._stateRcdata(t);
                    break;
                }
            case Ys.RAWTEXT:
                {
                    this._stateRawtext(t);
                    break;
                }
            case Ys.SCRIPT_DATA:
                {
                    this._stateScriptData(t);
                    break;
                }
            case Ys.PLAINTEXT:
                {
                    this._statePlaintext(t);
                    break;
                }
            case Ys.TAG_OPEN:
                {
                    this._stateTagOpen(t);
                    break;
                }
            case Ys.END_TAG_OPEN:
                {
                    this._stateEndTagOpen(t);
                    break;
                }
            case Ys.TAG_NAME:
                {
                    this._stateTagName(t);
                    break;
                }
            case Ys.RCDATA_LESS_THAN_SIGN:
                {
                    this._stateRcdataLessThanSign(t);
                    break;
                }
            case Ys.RCDATA_END_TAG_OPEN:
                {
                    this._stateRcdataEndTagOpen(t);
                    break;
                }
            case Ys.RCDATA_END_TAG_NAME:
                {
                    this._stateRcdataEndTagName(t);
                    break;
                }
            case Ys.RAWTEXT_LESS_THAN_SIGN:
                {
                    this._stateRawtextLessThanSign(t);
                    break;
                }
            case Ys.RAWTEXT_END_TAG_OPEN:
                {
                    this._stateRawtextEndTagOpen(t);
                    break;
                }
            case Ys.RAWTEXT_END_TAG_NAME:
                {
                    this._stateRawtextEndTagName(t);
                    break;
                }
            case Ys.SCRIPT_DATA_LESS_THAN_SIGN:
                {
                    this._stateScriptDataLessThanSign(t);
                    break;
                }
            case Ys.SCRIPT_DATA_END_TAG_OPEN:
                {
                    this._stateScriptDataEndTagOpen(t);
                    break;
                }
            case Ys.SCRIPT_DATA_END_TAG_NAME:
                {
                    this._stateScriptDataEndTagName(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPE_START:
                {
                    this._stateScriptDataEscapeStart(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPE_START_DASH:
                {
                    this._stateScriptDataEscapeStartDash(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPED:
                {
                    this._stateScriptDataEscaped(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPED_DASH:
                {
                    this._stateScriptDataEscapedDash(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataEscapedDashDash(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataEscapedLessThanSign(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
                {
                    this._stateScriptDataEscapedEndTagOpen(t);
                    break;
                }
            case Ys.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
                {
                    this._stateScriptDataEscapedEndTagName(t);
                    break;
                }
            case Ys.SCRIPT_DATA_DOUBLE_ESCAPE_START:
                {
                    this._stateScriptDataDoubleEscapeStart(t);
                    break;
                }
            case Ys.SCRIPT_DATA_DOUBLE_ESCAPED:
                {
                    this._stateScriptDataDoubleEscaped(t);
                    break;
                }
            case Ys.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
                {
                    this._stateScriptDataDoubleEscapedDash(t);
                    break;
                }
            case Ys.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataDoubleEscapedDashDash(t);
                    break;
                }
            case Ys.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataDoubleEscapedLessThanSign(t);
                    break;
                }
            case Ys.SCRIPT_DATA_DOUBLE_ESCAPE_END:
                {
                    this._stateScriptDataDoubleEscapeEnd(t);
                    break;
                }
            case Ys.BEFORE_ATTRIBUTE_NAME:
                {
                    this._stateBeforeAttributeName(t);
                    break;
                }
            case Ys.ATTRIBUTE_NAME:
                {
                    this._stateAttributeName(t);
                    break;
                }
            case Ys.AFTER_ATTRIBUTE_NAME:
                {
                    this._stateAfterAttributeName(t);
                    break;
                }
            case Ys.BEFORE_ATTRIBUTE_VALUE:
                {
                    this._stateBeforeAttributeValue(t);
                    break;
                }
            case Ys.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
                {
                    this._stateAttributeValueDoubleQuoted(t);
                    break;
                }
            case Ys.ATTRIBUTE_VALUE_SINGLE_QUOTED:
                {
                    this._stateAttributeValueSingleQuoted(t);
                    break;
                }
            case Ys.ATTRIBUTE_VALUE_UNQUOTED:
                {
                    this._stateAttributeValueUnquoted(t);
                    break;
                }
            case Ys.AFTER_ATTRIBUTE_VALUE_QUOTED:
                {
                    this._stateAfterAttributeValueQuoted(t);
                    break;
                }
            case Ys.SELF_CLOSING_START_TAG:
                {
                    this._stateSelfClosingStartTag(t);
                    break;
                }
            case Ys.BOGUS_COMMENT:
                {
                    this._stateBogusComment(t);
                    break;
                }
            case Ys.MARKUP_DECLARATION_OPEN:
                {
                    this._stateMarkupDeclarationOpen(t);
                    break;
                }
            case Ys.COMMENT_START:
                {
                    this._stateCommentStart(t);
                    break;
                }
            case Ys.COMMENT_START_DASH:
                {
                    this._stateCommentStartDash(t);
                    break;
                }
            case Ys.COMMENT:
                {
                    this._stateComment(t);
                    break;
                }
            case Ys.COMMENT_LESS_THAN_SIGN:
                {
                    this._stateCommentLessThanSign(t);
                    break;
                }
            case Ys.COMMENT_LESS_THAN_SIGN_BANG:
                {
                    this._stateCommentLessThanSignBang(t);
                    break;
                }
            case Ys.COMMENT_LESS_THAN_SIGN_BANG_DASH:
                {
                    this._stateCommentLessThanSignBangDash(t);
                    break;
                }
            case Ys.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
                {
                    this._stateCommentLessThanSignBangDashDash(t);
                    break;
                }
            case Ys.COMMENT_END_DASH:
                {
                    this._stateCommentEndDash(t);
                    break;
                }
            case Ys.COMMENT_END:
                {
                    this._stateCommentEnd(t);
                    break;
                }
            case Ys.COMMENT_END_BANG:
                {
                    this._stateCommentEndBang(t);
                    break;
                }
            case Ys.DOCTYPE:
                {
                    this._stateDoctype(t);
                    break;
                }
            case Ys.BEFORE_DOCTYPE_NAME:
                {
                    this._stateBeforeDoctypeName(t);
                    break;
                }
            case Ys.DOCTYPE_NAME:
                {
                    this._stateDoctypeName(t);
                    break;
                }
            case Ys.AFTER_DOCTYPE_NAME:
                {
                    this._stateAfterDoctypeName(t);
                    break;
                }
            case Ys.AFTER_DOCTYPE_PUBLIC_KEYWORD:
                {
                    this._stateAfterDoctypePublicKeyword(t);
                    break;
                }
            case Ys.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateBeforeDoctypePublicIdentifier(t);
                    break;
                }
            case Ys.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierDoubleQuoted(t);
                    break;
                }
            case Ys.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierSingleQuoted(t);
                    break;
                }
            case Ys.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateAfterDoctypePublicIdentifier(t);
                    break;
                }
            case Ys.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
                {
                    this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
                    break;
                }
            case Ys.AFTER_DOCTYPE_SYSTEM_KEYWORD:
                {
                    this._stateAfterDoctypeSystemKeyword(t);
                    break;
                }
            case Ys.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateBeforeDoctypeSystemIdentifier(t);
                    break;
                }
            case Ys.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierDoubleQuoted(t);
                    break;
                }
            case Ys.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierSingleQuoted(t);
                    break;
                }
            case Ys.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateAfterDoctypeSystemIdentifier(t);
                    break;
                }
            case Ys.BOGUS_DOCTYPE:
                {
                    this._stateBogusDoctype(t);
                    break;
                }
            case Ys.CDATA_SECTION:
                {
                    this._stateCdataSection(t);
                    break;
                }
            case Ys.CDATA_SECTION_BRACKET:
                {
                    this._stateCdataSectionBracket(t);
                    break;
                }
            case Ys.CDATA_SECTION_END:
                {
                    this._stateCdataSectionEnd(t);
                    break;
                }
            case Ys.CHARACTER_REFERENCE:
                {
                    this._stateCharacterReference();
                    break;
                }
            case Ys.AMBIGUOUS_AMPERSAND:
                {
                    this._stateAmbiguousAmpersand(t);
                    break;
                }
            default:
                throw new Error("Unknown state");
        }
    }
    _stateData(t) {
        switch(t){
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.TAG_OPEN;
                    break;
                }
            case ys.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._emitCodePoint(t);
                    break;
                }
            case ys.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _stateRcdata(t) {
        switch(t){
            case ys.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.RCDATA_LESS_THAN_SIGN;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _stateRawtext(t) {
        switch(t){
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.RAWTEXT_LESS_THAN_SIGN;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _stateScriptData(t) {
        switch(t){
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA_LESS_THAN_SIGN;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _statePlaintext(t) {
        switch(t){
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _stateTagOpen(t) {
        if (e1t(t)) this._createStartTagToken(), this.state = Ys.TAG_NAME, this._stateTagName(t);
        else switch(t){
            case ys.EXCLAMATION_MARK:
                {
                    this.state = Ys.MARKUP_DECLARATION_OPEN;
                    break;
                }
            case ys.SOLIDUS:
                {
                    this.state = Ys.END_TAG_OPEN;
                    break;
                }
            case ys.QUESTION_MARK:
                {
                    this._err(fu.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = Ys.BOGUS_COMMENT, this._stateBogusComment(t);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = Ys.DATA, this._stateData(t);
        }
    }
    _stateEndTagOpen(t) {
        if (e1t(t)) this._createEndTagToken(), this.state = Ys.TAG_NAME, this._stateTagName(t);
        else switch(t){
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.missingEndTagName), this.state = Ys.DATA;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = Ys.BOGUS_COMMENT, this._stateBogusComment(t);
        }
    }
    _stateTagName(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this.state = Ys.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case ys.SOLIDUS:
                {
                    this.state = Ys.SELF_CLOSING_START_TAG;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA, this.emitCurrentTagToken();
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.tagName += x4;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                e.tagName += String.fromCodePoint(cui(t) ? xMr(t) : t);
        }
    }
    _stateRcdataLessThanSign(t) {
        t === ys.SOLIDUS ? this.state = Ys.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = Ys.RCDATA, this._stateRcdata(t));
    }
    _stateRcdataEndTagOpen(t) {
        e1t(t) ? (this.state = Ys.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(t)) : (this._emitChars("</"), this.state = Ys.RCDATA, this._stateRcdata(t));
    }
    handleSpecialEndTag(t) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
        this._createEndTagToken();
        const e = this.currentToken;
        switch(e.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                return this._advanceBy(this.lastStartTagName.length), this.state = Ys.BEFORE_ATTRIBUTE_NAME, !1;
            case ys.SOLIDUS:
                return this._advanceBy(this.lastStartTagName.length), this.state = Ys.SELF_CLOSING_START_TAG, !1;
            case ys.GREATER_THAN_SIGN:
                return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = Ys.DATA, !1;
            default:
                return !this._ensureHibernation();
        }
    }
    _stateRcdataEndTagName(t) {
        this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = Ys.RCDATA, this._stateRcdata(t));
    }
    _stateRawtextLessThanSign(t) {
        t === ys.SOLIDUS ? this.state = Ys.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = Ys.RAWTEXT, this._stateRawtext(t));
    }
    _stateRawtextEndTagOpen(t) {
        e1t(t) ? (this.state = Ys.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(t)) : (this._emitChars("</"), this.state = Ys.RAWTEXT, this._stateRawtext(t));
    }
    _stateRawtextEndTagName(t) {
        this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = Ys.RAWTEXT, this._stateRawtext(t));
    }
    _stateScriptDataLessThanSign(t) {
        switch(t){
            case ys.SOLIDUS:
                {
                    this.state = Ys.SCRIPT_DATA_END_TAG_OPEN;
                    break;
                }
            case ys.EXCLAMATION_MARK:
                {
                    this.state = Ys.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
                    break;
                }
            default:
                this._emitChars("<"), this.state = Ys.SCRIPT_DATA, this._stateScriptData(t);
        }
    }
    _stateScriptDataEndTagOpen(t) {
        e1t(t) ? (this.state = Ys.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(t)) : (this._emitChars("</"), this.state = Ys.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEndTagName(t) {
        this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = Ys.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEscapeStart(t) {
        t === ys.HYPHEN_MINUS ? (this.state = Ys.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = Ys.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEscapeStartDash(t) {
        t === ys.HYPHEN_MINUS ? (this.state = Ys.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = Ys.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEscaped(t) {
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _stateScriptDataEscapedDash(t) {
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.state = Ys.SCRIPT_DATA_ESCAPED, this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Ys.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
        }
    }
    _stateScriptDataEscapedDashDash(t) {
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA, this._emitChars(">");
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.state = Ys.SCRIPT_DATA_ESCAPED, this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Ys.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
        }
    }
    _stateScriptDataEscapedLessThanSign(t) {
        t === ys.SOLIDUS ? this.state = Ys.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : e1t(t) ? (this._emitChars("<"), this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(t)) : (this._emitChars("<"), this.state = Ys.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataEscapedEndTagOpen(t) {
        e1t(t) ? (this.state = Ys.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(t)) : (this._emitChars("</"), this.state = Ys.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataEscapedEndTagName(t) {
        this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = Ys.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataDoubleEscapeStart(t) {
        if (this.preprocessor.startsWith(Che.SCRIPT, !1) && zmh(this.preprocessor.peek(Che.SCRIPT.length))) {
            this._emitCodePoint(t);
            for(let e = 0; e < Che.SCRIPT.length; e++)this._emitCodePoint(this._consume());
            this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else this._ensureHibernation() || (this.state = Ys.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataDoubleEscaped(t) {
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _stateScriptDataDoubleEscapedDash(t) {
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
        }
    }
    _stateScriptDataDoubleEscapedDashDash(t) {
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.SCRIPT_DATA, this._emitChars(">");
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(x4);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
        }
    }
    _stateScriptDataDoubleEscapedLessThanSign(t) {
        t === ys.SOLIDUS ? (this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
    }
    _stateScriptDataDoubleEscapeEnd(t) {
        if (this.preprocessor.startsWith(Che.SCRIPT, !1) && zmh(this.preprocessor.peek(Che.SCRIPT.length))) {
            this._emitCodePoint(t);
            for(let e = 0; e < Che.SCRIPT.length; e++)this._emitCodePoint(this._consume());
            this.state = Ys.SCRIPT_DATA_ESCAPED;
        } else this._ensureHibernation() || (this.state = Ys.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
    }
    _stateBeforeAttributeName(t) {
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.SOLIDUS:
            case ys.GREATER_THAN_SIGN:
            case ys.EOF:
                {
                    this.state = Ys.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
                    break;
                }
            case ys.EQUALS_SIGN:
                {
                    this._err(fu.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = Ys.ATTRIBUTE_NAME;
                    break;
                }
            default:
                this._createAttr(""), this.state = Ys.ATTRIBUTE_NAME, this._stateAttributeName(t);
        }
    }
    _stateAttributeName(t) {
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
            case ys.SOLIDUS:
            case ys.GREATER_THAN_SIGN:
            case ys.EOF:
                {
                    this._leaveAttrName(), this.state = Ys.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
                    break;
                }
            case ys.EQUALS_SIGN:
                {
                    this._leaveAttrName(), this.state = Ys.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case ys.QUOTATION_MARK:
            case ys.APOSTROPHE:
            case ys.LESS_THAN_SIGN:
                {
                    this._err(fu.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(t);
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.currentAttr.name += x4;
                    break;
                }
            default:
                this.currentAttr.name += String.fromCodePoint(cui(t) ? xMr(t) : t);
        }
    }
    _stateAfterAttributeName(t) {
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.SOLIDUS:
                {
                    this.state = Ys.SELF_CLOSING_START_TAG;
                    break;
                }
            case ys.EQUALS_SIGN:
                {
                    this.state = Ys.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA, this.emitCurrentTagToken();
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._createAttr(""), this.state = Ys.ATTRIBUTE_NAME, this._stateAttributeName(t);
        }
    }
    _stateBeforeAttributeValue(t) {
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.QUOTATION_MARK:
                {
                    this.state = Ys.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                    break;
                }
            case ys.APOSTROPHE:
                {
                    this.state = Ys.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.missingAttributeValue), this.state = Ys.DATA, this.emitCurrentTagToken();
                    break;
                }
            default:
                this.state = Ys.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(t);
        }
    }
    _stateAttributeValueDoubleQuoted(t) {
        switch(t){
            case ys.QUOTATION_MARK:
                {
                    this.state = Ys.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case ys.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.currentAttr.value += x4;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(t);
        }
    }
    _stateAttributeValueSingleQuoted(t) {
        switch(t){
            case ys.APOSTROPHE:
                {
                    this.state = Ys.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case ys.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.currentAttr.value += x4;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(t);
        }
    }
    _stateAttributeValueUnquoted(t) {
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this._leaveAttrValue(), this.state = Ys.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case ys.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue(), this.state = Ys.DATA, this.emitCurrentTagToken();
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this.currentAttr.value += x4;
                    break;
                }
            case ys.QUOTATION_MARK:
            case ys.APOSTROPHE:
            case ys.LESS_THAN_SIGN:
            case ys.EQUALS_SIGN:
            case ys.GRAVE_ACCENT:
                {
                    this._err(fu.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(t);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(t);
        }
    }
    _stateAfterAttributeValueQuoted(t) {
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this._leaveAttrValue(), this.state = Ys.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case ys.SOLIDUS:
                {
                    this._leaveAttrValue(), this.state = Ys.SELF_CLOSING_START_TAG;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue(), this.state = Ys.DATA, this.emitCurrentTagToken();
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingWhitespaceBetweenAttributes), this.state = Ys.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
        }
    }
    _stateSelfClosingStartTag(t) {
        switch(t){
            case ys.GREATER_THAN_SIGN:
                {
                    const e = this.currentToken;
                    e.selfClosing = !0, this.state = Ys.DATA, this.emitCurrentTagToken();
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.unexpectedSolidusInTag), this.state = Ys.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
        }
    }
    _stateBogusComment(t) {
        const e = this.currentToken;
        switch(t){
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA, this.emitCurrentComment(e);
                    break;
                }
            case ys.EOF:
                {
                    this.emitCurrentComment(e), this._emitEOFToken();
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.data += x4;
                    break;
                }
            default:
                e.data += String.fromCodePoint(t);
        }
    }
    _stateMarkupDeclarationOpen(t) {
        this._consumeSequenceIfMatch(Che.DASH_DASH, !0) ? (this._createCommentToken(Che.DASH_DASH.length + 1), this.state = Ys.COMMENT_START) : this._consumeSequenceIfMatch(Che.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(Che.DOCTYPE.length + 1), this.state = Ys.DOCTYPE) : this._consumeSequenceIfMatch(Che.CDATA_START, !0) ? this.inForeignNode ? this.state = Ys.CDATA_SECTION : (this._err(fu.cdataInHtmlContent), this._createCommentToken(Che.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = Ys.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(fu.incorrectlyOpenedComment), this._createCommentToken(2), this.state = Ys.BOGUS_COMMENT, this._stateBogusComment(t));
    }
    _stateCommentStart(t) {
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.COMMENT_START_DASH;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.abruptClosingOfEmptyComment), this.state = Ys.DATA;
                    const e = this.currentToken;
                    this.emitCurrentComment(e);
                    break;
                }
            default:
                this.state = Ys.COMMENT, this._stateComment(t);
        }
    }
    _stateCommentStartDash(t) {
        const e = this.currentToken;
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.COMMENT_END;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.abruptClosingOfEmptyComment), this.state = Ys.DATA, this.emitCurrentComment(e);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInComment), this.emitCurrentComment(e), this._emitEOFToken();
                    break;
                }
            default:
                e.data += "-", this.state = Ys.COMMENT, this._stateComment(t);
        }
    }
    _stateComment(t) {
        const e = this.currentToken;
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.COMMENT_END_DASH;
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    e.data += "<", this.state = Ys.COMMENT_LESS_THAN_SIGN;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.data += x4;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInComment), this.emitCurrentComment(e), this._emitEOFToken();
                    break;
                }
            default:
                e.data += String.fromCodePoint(t);
        }
    }
    _stateCommentLessThanSign(t) {
        const e = this.currentToken;
        switch(t){
            case ys.EXCLAMATION_MARK:
                {
                    e.data += "!", this.state = Ys.COMMENT_LESS_THAN_SIGN_BANG;
                    break;
                }
            case ys.LESS_THAN_SIGN:
                {
                    e.data += "<";
                    break;
                }
            default:
                this.state = Ys.COMMENT, this._stateComment(t);
        }
    }
    _stateCommentLessThanSignBang(t) {
        t === ys.HYPHEN_MINUS ? this.state = Ys.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = Ys.COMMENT, this._stateComment(t));
    }
    _stateCommentLessThanSignBangDash(t) {
        t === ys.HYPHEN_MINUS ? this.state = Ys.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = Ys.COMMENT_END_DASH, this._stateCommentEndDash(t));
    }
    _stateCommentLessThanSignBangDashDash(t) {
        t !== ys.GREATER_THAN_SIGN && t !== ys.EOF && this._err(fu.nestedComment), this.state = Ys.COMMENT_END, this._stateCommentEnd(t);
    }
    _stateCommentEndDash(t) {
        const e = this.currentToken;
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    this.state = Ys.COMMENT_END;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInComment), this.emitCurrentComment(e), this._emitEOFToken();
                    break;
                }
            default:
                e.data += "-", this.state = Ys.COMMENT, this._stateComment(t);
        }
    }
    _stateCommentEnd(t) {
        const e = this.currentToken;
        switch(t){
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA, this.emitCurrentComment(e);
                    break;
                }
            case ys.EXCLAMATION_MARK:
                {
                    this.state = Ys.COMMENT_END_BANG;
                    break;
                }
            case ys.HYPHEN_MINUS:
                {
                    e.data += "-";
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInComment), this.emitCurrentComment(e), this._emitEOFToken();
                    break;
                }
            default:
                e.data += "--", this.state = Ys.COMMENT, this._stateComment(t);
        }
    }
    _stateCommentEndBang(t) {
        const e = this.currentToken;
        switch(t){
            case ys.HYPHEN_MINUS:
                {
                    e.data += "--!", this.state = Ys.COMMENT_END_DASH;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.incorrectlyClosedComment), this.state = Ys.DATA, this.emitCurrentComment(e);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInComment), this.emitCurrentComment(e), this._emitEOFToken();
                    break;
                }
            default:
                e.data += "--!", this.state = Ys.COMMENT, this._stateComment(t);
        }
    }
    _stateDoctype(t) {
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this.state = Ys.BEFORE_DOCTYPE_NAME;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), this._createDoctypeToken(null);
                    const e = this.currentToken;
                    e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingWhitespaceBeforeDoctypeName), this.state = Ys.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
        }
    }
    _stateBeforeDoctypeName(t) {
        if (cui(t)) this._createDoctypeToken(String.fromCharCode(xMr(t))), this.state = Ys.DOCTYPE_NAME;
        else switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), this._createDoctypeToken(x4), this.state = Ys.DOCTYPE_NAME;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.missingDoctypeName), this._createDoctypeToken(null);
                    const e = this.currentToken;
                    e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), this._createDoctypeToken(null);
                    const e = this.currentToken;
                    e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._createDoctypeToken(String.fromCodePoint(t)), this.state = Ys.DOCTYPE_NAME;
        }
    }
    _stateDoctypeName(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this.state = Ys.AFTER_DOCTYPE_NAME;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA, this.emitCurrentDoctype(e);
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.name += x4;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                e.name += String.fromCodePoint(cui(t) ? xMr(t) : t);
        }
    }
    _stateAfterDoctypeName(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA, this.emitCurrentDoctype(e);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._consumeSequenceIfMatch(Che.PUBLIC, !1) ? this.state = Ys.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(Che.SYSTEM, !1) ? this.state = Ys.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(fu.invalidCharacterSequenceAfterDoctypeName), e.forceQuirks = !0, this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t));
        }
    }
    _stateAfterDoctypePublicKeyword(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this.state = Ys.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case ys.QUOTATION_MARK:
                {
                    this._err(fu.missingWhitespaceAfterDoctypePublicKeyword), e.publicId = "", this.state = Ys.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case ys.APOSTROPHE:
                {
                    this._err(fu.missingWhitespaceAfterDoctypePublicKeyword), e.publicId = "", this.state = Ys.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.missingDoctypePublicIdentifier), e.forceQuirks = !0, this.state = Ys.DATA, this.emitCurrentDoctype(e);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingQuoteBeforeDoctypePublicIdentifier), e.forceQuirks = !0, this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
        }
    }
    _stateBeforeDoctypePublicIdentifier(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.QUOTATION_MARK:
                {
                    e.publicId = "", this.state = Ys.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case ys.APOSTROPHE:
                {
                    e.publicId = "", this.state = Ys.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.missingDoctypePublicIdentifier), e.forceQuirks = !0, this.state = Ys.DATA, this.emitCurrentDoctype(e);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingQuoteBeforeDoctypePublicIdentifier), e.forceQuirks = !0, this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
        }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(t) {
        const e = this.currentToken;
        switch(t){
            case ys.QUOTATION_MARK:
                {
                    this.state = Ys.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.publicId += x4;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.abruptDoctypePublicIdentifier), e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                e.publicId += String.fromCodePoint(t);
        }
    }
    _stateDoctypePublicIdentifierSingleQuoted(t) {
        const e = this.currentToken;
        switch(t){
            case ys.APOSTROPHE:
                {
                    this.state = Ys.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.publicId += x4;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.abruptDoctypePublicIdentifier), e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                e.publicId += String.fromCodePoint(t);
        }
    }
    _stateAfterDoctypePublicIdentifier(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this.state = Ys.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA, this.emitCurrentDoctype(e);
                    break;
                }
            case ys.QUOTATION_MARK:
                {
                    this._err(fu.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case ys.APOSTROPHE:
                {
                    this._err(fu.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingQuoteBeforeDoctypeSystemIdentifier), e.forceQuirks = !0, this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
        }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.QUOTATION_MARK:
                {
                    e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case ys.APOSTROPHE:
                {
                    e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingQuoteBeforeDoctypeSystemIdentifier), e.forceQuirks = !0, this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
        }
    }
    _stateAfterDoctypeSystemKeyword(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                {
                    this.state = Ys.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case ys.QUOTATION_MARK:
                {
                    this._err(fu.missingWhitespaceAfterDoctypeSystemKeyword), e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case ys.APOSTROPHE:
                {
                    this._err(fu.missingWhitespaceAfterDoctypeSystemKeyword), e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.missingDoctypeSystemIdentifier), e.forceQuirks = !0, this.state = Ys.DATA, this.emitCurrentDoctype(e);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingQuoteBeforeDoctypeSystemIdentifier), e.forceQuirks = !0, this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
        }
    }
    _stateBeforeDoctypeSystemIdentifier(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.QUOTATION_MARK:
                {
                    e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case ys.APOSTROPHE:
                {
                    e.systemId = "", this.state = Ys.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.missingDoctypeSystemIdentifier), e.forceQuirks = !0, this.state = Ys.DATA, this.emitCurrentDoctype(e);
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.missingQuoteBeforeDoctypeSystemIdentifier), e.forceQuirks = !0, this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
        }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(t) {
        const e = this.currentToken;
        switch(t){
            case ys.QUOTATION_MARK:
                {
                    this.state = Ys.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.systemId += x4;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.abruptDoctypeSystemIdentifier), e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                e.systemId += String.fromCodePoint(t);
        }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(t) {
        const e = this.currentToken;
        switch(t){
            case ys.APOSTROPHE:
                {
                    this.state = Ys.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter), e.systemId += x4;
                    break;
                }
            case ys.GREATER_THAN_SIGN:
                {
                    this._err(fu.abruptDoctypeSystemIdentifier), e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                e.systemId += String.fromCodePoint(t);
        }
    }
    _stateAfterDoctypeSystemIdentifier(t) {
        const e = this.currentToken;
        switch(t){
            case ys.SPACE:
            case ys.LINE_FEED:
            case ys.TABULATION:
            case ys.FORM_FEED:
                break;
            case ys.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInDoctype), e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
                this._err(fu.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = Ys.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
        }
    }
    _stateBogusDoctype(t) {
        const e = this.currentToken;
        switch(t){
            case ys.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(e), this.state = Ys.DATA;
                    break;
                }
            case ys.NULL:
                {
                    this._err(fu.unexpectedNullCharacter);
                    break;
                }
            case ys.EOF:
                {
                    this.emitCurrentDoctype(e), this._emitEOFToken();
                    break;
                }
            default:
        }
    }
    _stateCdataSection(t) {
        switch(t){
            case ys.RIGHT_SQUARE_BRACKET:
                {
                    this.state = Ys.CDATA_SECTION_BRACKET;
                    break;
                }
            case ys.EOF:
                {
                    this._err(fu.eofInCdata), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(t);
        }
    }
    _stateCdataSectionBracket(t) {
        t === ys.RIGHT_SQUARE_BRACKET ? this.state = Ys.CDATA_SECTION_END : (this._emitChars("]"), this.state = Ys.CDATA_SECTION, this._stateCdataSection(t));
    }
    _stateCdataSectionEnd(t) {
        switch(t){
            case ys.GREATER_THAN_SIGN:
                {
                    this.state = Ys.DATA;
                    break;
                }
            case ys.RIGHT_SQUARE_BRACKET:
                {
                    this._emitChars("]");
                    break;
                }
            default:
                this._emitChars("]]"), this.state = Ys.CDATA_SECTION, this._stateCdataSection(t);
        }
    }
    _stateCharacterReference() {
        let t = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
        if (t < 0) if (this.preprocessor.lastChunkWritten) t = this.entityDecoder.end();
        else {
            this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
            return;
        }
        t === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(ys.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Gmh(this.preprocessor.peek(1)) ? Ys.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
    }
    _stateAmbiguousAmpersand(t) {
        Gmh(t) ? this._flushCodePointConsumedAsCharacterReference(t) : (t === ys.SEMICOLON && this._err(fu.unknownNamedCharacterReference), this.state = this.returnState, this._callState(t));
    }
};

}
