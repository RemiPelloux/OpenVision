import { rar } from "./decode-data-html.js";
import { XT, far, wvi } from "./decode.js";
import { INe, kr } from "./error-codes.js";
import { cJ, yP, ye } from "./html_2.js";
import { i } from "./plugin-brand-icon.js";
import { bvi, nar } from "./preprocessor.js";
import { MNt, NNe, ru } from "./token.js";
import { $Nt, $t, ANt, INt, Sw, TNt, hm } from "./unicode.js";
function yar(r) {
    return r >= $t.DIGIT_0 && r <= $t.DIGIT_9;
}
function lJ(r) {
    return r >= $t.LATIN_CAPITAL_A && r <= $t.LATIN_CAPITAL_Z;
}
function war(r) {
    return r >= $t.LATIN_SMALL_A && r <= $t.LATIN_SMALL_Z;
}
function YT(r) {
    return war(r) || lJ(r);
}
function DNt(r) {
    return YT(r) || yar(r);
}
function _fe(r) {
    return r + 32;
}
function FNt(r) {
    return r === $t.SPACE || r === $t.LINE_FEED || r === $t.TABULATION || r === $t.FORM_FEED;
}
function ONt(r) {
    return FNt(r) || r === $t.SOLIDUS || r === $t.GREATER_THAN_SIGN;
}
function _ar(r) {
    return r === $t.NULL ? kr.nullCharacterReference : r > 1114111 ? kr.characterReferenceOutsideUnicodeRange : ANt(r) ? kr.surrogateCharacterReference : $Nt(r) ? kr.noncharacterCharacterReference : TNt(r) || r === $t.CARRIAGE_RETURN ? kr.controlCharacterReference : null;
}
var Dt, wh, zNt, kar;
export { DNt, Dt, FNt, ONt, YT, _ar, _fe, kar, lJ, war, wh, yar, zNt };
var __wakaru_xar_initialized = false;
export function xar() {
if (__wakaru_xar_initialized) return;
__wakaru_xar_initialized = true;
bvi(), INt(), MNt(), wvi(), INe(), yP(), (function(r) {
    r[r.DATA = 0] = "DATA", r[r.RCDATA = 1] = "RCDATA", r[r.RAWTEXT = 2] = "RAWTEXT", r[r.SCRIPT_DATA = 3] = "SCRIPT_DATA", r[r.PLAINTEXT = 4] = "PLAINTEXT", r[r.TAG_OPEN = 5] = "TAG_OPEN", r[r.END_TAG_OPEN = 6] = "END_TAG_OPEN", r[r.TAG_NAME = 7] = "TAG_NAME", r[r.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", r[r.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", r[r.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", r[r.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", r[r.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", r[r.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", r[r.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", r[r.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", r[r.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", r[r.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", r[r.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", r[r.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", r[r.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", r[r.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", r[r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", r[r.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", r[r.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", r[r.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", r[r.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", r[r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", r[r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", r[r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", r[r.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", r[r.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", r[r.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", r[r.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", r[r.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", r[r.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", r[r.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", r[r.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", r[r.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", r[r.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", r[r.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", r[r.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", r[r.COMMENT_START = 42] = "COMMENT_START", r[r.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", r[r.COMMENT = 44] = "COMMENT", r[r.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", r[r.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", r[r.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", r[r.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", r[r.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", r[r.COMMENT_END = 50] = "COMMENT_END", r[r.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", r[r.DOCTYPE = 52] = "DOCTYPE", r[r.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", r[r.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", r[r.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", r[r.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", r[r.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", r[r.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", r[r.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", r[r.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", r[r.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", r[r.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", r[r.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", r[r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", r[r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", r[r.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", r[r.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", r[r.CDATA_SECTION = 68] = "CDATA_SECTION", r[r.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", r[r.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", r[r.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", r[r.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(Dt || (Dt = {})), wh = {
    DATA: Dt.DATA,
    RCDATA: Dt.RCDATA,
    RAWTEXT: Dt.RAWTEXT,
    SCRIPT_DATA: Dt.SCRIPT_DATA,
    PLAINTEXT: Dt.PLAINTEXT,
    CDATA_SECTION: Dt.CDATA_SECTION
}, i(yar, "isAsciiDigit"), i(lJ, "isAsciiUpper"), i(war, "isAsciiLower"), i(YT, "isAsciiLetter"), i(DNt, "isAsciiAlphaNumeric"), i(_fe, "toAsciiLower"), i(FNt, "isWhitespace"), i(ONt, "isScriptDataDoubleEscapeSequenceEnd"), i(_ar, "getErrorForNumericCharacterReference"), zNt = class {
    constructor(e, a){
        this.options = e, this.handler = a, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = Dt.DATA, this.returnState = Dt.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
            name: "",
            value: ""
        }, this.preprocessor = new nar(a), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new far(rar, (s, l)=>{
            this.preprocessor.pos = this.entityStartPos + l - 1, this._flushCodePointConsumedAsCharacterReference(s);
        }, a.onParseError ? {
            missingSemicolonAfterCharacterReference: i(()=>{
                this._err(kr.missingSemicolonAfterCharacterReference, 1);
            }, "missingSemicolonAfterCharacterReference"),
            absenceOfDigitsInNumericCharacterReference: i((s)=>{
                this._err(kr.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + s);
            }, "absenceOfDigitsInNumericCharacterReference"),
            validateNumericCharacterReference: i((s)=>{
                const l = _ar(s);
                l && this._err(l, 1);
            }, "validateNumericCharacterReference")
        } : void 0);
    }
    _err(e, a = 0) {
        var s, l;
        (l = (s = this.handler).onParseError) === null || l === void 0 || l.call(s, this.preprocessor.getError(e, a));
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
    write(e, a, s) {
        this.active = !0, this.preprocessor.write(e, a), this._runParsingLoop(), this.paused || s?.();
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
        for(let a = 0; a < e; a++)this.preprocessor.advance();
    }
    _consumeSequenceIfMatch(e, a) {
        return this.preprocessor.startsWith(e, a) ? (this._advanceBy(e.length - 1), !0) : !1;
    }
    _createStartTagToken() {
        this.currentToken = {
            type: ru.START_TAG,
            tagName: "",
            tagID: ye.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1)
        };
    }
    _createEndTagToken() {
        this.currentToken = {
            type: ru.END_TAG,
            tagName: "",
            tagID: ye.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2)
        };
    }
    _createCommentToken(e) {
        this.currentToken = {
            type: ru.COMMENT,
            data: "",
            location: this.getCurrentLocation(e)
        };
    }
    _createDoctypeToken(e) {
        this.currentToken = {
            type: ru.DOCTYPE,
            name: e,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation
        };
    }
    _createCharacterToken(e, a) {
        this.currentCharacterToken = {
            type: e,
            chars: a,
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
        var e, a;
        const s = this.currentToken;
        if (NNe(s, this.currentAttr.name) === null) {
            if (s.attrs.push(this.currentAttr), s.location && this.currentLocation) {
                const l = (e = (a = s.location).attrs) !== null && e !== void 0 ? e : a.attrs = Object.create(null);
                l[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
            }
        } else this._err(kr.duplicateAttribute);
    }
    _leaveAttrValue() {
        this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
    }
    prepareToken(e) {
        this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
        const e = this.currentToken;
        this.prepareToken(e), e.tagID = cJ(e.tagName), e.type === ru.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(kr.endTagWithAttributes), e.selfClosing && this._err(kr.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
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
                case ru.CHARACTER:
                    {
                        this.handler.onCharacter(this.currentCharacterToken);
                        break;
                    }
                case ru.NULL_CHARACTER:
                    {
                        this.handler.onNullCharacter(this.currentCharacterToken);
                        break;
                    }
                case ru.WHITESPACE_CHARACTER:
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
            type: ru.EOF,
            location: e
        }), this.active = !1;
    }
    _appendCharToCurrentCharacterToken(e, a) {
        if (this.currentCharacterToken) if (this.currentCharacterToken.type === e) {
            this.currentCharacterToken.chars += a;
            return;
        } else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
        this._createCharacterToken(e, a);
    }
    _emitCodePoint(e) {
        const a = FNt(e) ? ru.WHITESPACE_CHARACTER : e === $t.NULL ? ru.NULL_CHARACTER : ru.CHARACTER;
        this._appendCharToCurrentCharacterToken(a, String.fromCodePoint(e));
    }
    _emitChars(e) {
        this._appendCharToCurrentCharacterToken(ru.CHARACTER, e);
    }
    _startCharacterReference() {
        this.returnState = this.state, this.state = Dt.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? XT.Attribute : XT.Legacy);
    }
    _isCharacterReferenceInAttribute() {
        return this.returnState === Dt.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === Dt.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === Dt.ATTRIBUTE_VALUE_UNQUOTED;
    }
    _flushCodePointConsumedAsCharacterReference(e) {
        this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
    }
    _callState(e) {
        switch(this.state){
            case Dt.DATA:
                {
                    this._stateData(e);
                    break;
                }
            case Dt.RCDATA:
                {
                    this._stateRcdata(e);
                    break;
                }
            case Dt.RAWTEXT:
                {
                    this._stateRawtext(e);
                    break;
                }
            case Dt.SCRIPT_DATA:
                {
                    this._stateScriptData(e);
                    break;
                }
            case Dt.PLAINTEXT:
                {
                    this._statePlaintext(e);
                    break;
                }
            case Dt.TAG_OPEN:
                {
                    this._stateTagOpen(e);
                    break;
                }
            case Dt.END_TAG_OPEN:
                {
                    this._stateEndTagOpen(e);
                    break;
                }
            case Dt.TAG_NAME:
                {
                    this._stateTagName(e);
                    break;
                }
            case Dt.RCDATA_LESS_THAN_SIGN:
                {
                    this._stateRcdataLessThanSign(e);
                    break;
                }
            case Dt.RCDATA_END_TAG_OPEN:
                {
                    this._stateRcdataEndTagOpen(e);
                    break;
                }
            case Dt.RCDATA_END_TAG_NAME:
                {
                    this._stateRcdataEndTagName(e);
                    break;
                }
            case Dt.RAWTEXT_LESS_THAN_SIGN:
                {
                    this._stateRawtextLessThanSign(e);
                    break;
                }
            case Dt.RAWTEXT_END_TAG_OPEN:
                {
                    this._stateRawtextEndTagOpen(e);
                    break;
                }
            case Dt.RAWTEXT_END_TAG_NAME:
                {
                    this._stateRawtextEndTagName(e);
                    break;
                }
            case Dt.SCRIPT_DATA_LESS_THAN_SIGN:
                {
                    this._stateScriptDataLessThanSign(e);
                    break;
                }
            case Dt.SCRIPT_DATA_END_TAG_OPEN:
                {
                    this._stateScriptDataEndTagOpen(e);
                    break;
                }
            case Dt.SCRIPT_DATA_END_TAG_NAME:
                {
                    this._stateScriptDataEndTagName(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPE_START:
                {
                    this._stateScriptDataEscapeStart(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPE_START_DASH:
                {
                    this._stateScriptDataEscapeStartDash(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPED:
                {
                    this._stateScriptDataEscaped(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPED_DASH:
                {
                    this._stateScriptDataEscapedDash(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataEscapedDashDash(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataEscapedLessThanSign(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
                {
                    this._stateScriptDataEscapedEndTagOpen(e);
                    break;
                }
            case Dt.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
                {
                    this._stateScriptDataEscapedEndTagName(e);
                    break;
                }
            case Dt.SCRIPT_DATA_DOUBLE_ESCAPE_START:
                {
                    this._stateScriptDataDoubleEscapeStart(e);
                    break;
                }
            case Dt.SCRIPT_DATA_DOUBLE_ESCAPED:
                {
                    this._stateScriptDataDoubleEscaped(e);
                    break;
                }
            case Dt.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
                {
                    this._stateScriptDataDoubleEscapedDash(e);
                    break;
                }
            case Dt.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataDoubleEscapedDashDash(e);
                    break;
                }
            case Dt.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataDoubleEscapedLessThanSign(e);
                    break;
                }
            case Dt.SCRIPT_DATA_DOUBLE_ESCAPE_END:
                {
                    this._stateScriptDataDoubleEscapeEnd(e);
                    break;
                }
            case Dt.BEFORE_ATTRIBUTE_NAME:
                {
                    this._stateBeforeAttributeName(e);
                    break;
                }
            case Dt.ATTRIBUTE_NAME:
                {
                    this._stateAttributeName(e);
                    break;
                }
            case Dt.AFTER_ATTRIBUTE_NAME:
                {
                    this._stateAfterAttributeName(e);
                    break;
                }
            case Dt.BEFORE_ATTRIBUTE_VALUE:
                {
                    this._stateBeforeAttributeValue(e);
                    break;
                }
            case Dt.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
                {
                    this._stateAttributeValueDoubleQuoted(e);
                    break;
                }
            case Dt.ATTRIBUTE_VALUE_SINGLE_QUOTED:
                {
                    this._stateAttributeValueSingleQuoted(e);
                    break;
                }
            case Dt.ATTRIBUTE_VALUE_UNQUOTED:
                {
                    this._stateAttributeValueUnquoted(e);
                    break;
                }
            case Dt.AFTER_ATTRIBUTE_VALUE_QUOTED:
                {
                    this._stateAfterAttributeValueQuoted(e);
                    break;
                }
            case Dt.SELF_CLOSING_START_TAG:
                {
                    this._stateSelfClosingStartTag(e);
                    break;
                }
            case Dt.BOGUS_COMMENT:
                {
                    this._stateBogusComment(e);
                    break;
                }
            case Dt.MARKUP_DECLARATION_OPEN:
                {
                    this._stateMarkupDeclarationOpen(e);
                    break;
                }
            case Dt.COMMENT_START:
                {
                    this._stateCommentStart(e);
                    break;
                }
            case Dt.COMMENT_START_DASH:
                {
                    this._stateCommentStartDash(e);
                    break;
                }
            case Dt.COMMENT:
                {
                    this._stateComment(e);
                    break;
                }
            case Dt.COMMENT_LESS_THAN_SIGN:
                {
                    this._stateCommentLessThanSign(e);
                    break;
                }
            case Dt.COMMENT_LESS_THAN_SIGN_BANG:
                {
                    this._stateCommentLessThanSignBang(e);
                    break;
                }
            case Dt.COMMENT_LESS_THAN_SIGN_BANG_DASH:
                {
                    this._stateCommentLessThanSignBangDash(e);
                    break;
                }
            case Dt.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
                {
                    this._stateCommentLessThanSignBangDashDash(e);
                    break;
                }
            case Dt.COMMENT_END_DASH:
                {
                    this._stateCommentEndDash(e);
                    break;
                }
            case Dt.COMMENT_END:
                {
                    this._stateCommentEnd(e);
                    break;
                }
            case Dt.COMMENT_END_BANG:
                {
                    this._stateCommentEndBang(e);
                    break;
                }
            case Dt.DOCTYPE:
                {
                    this._stateDoctype(e);
                    break;
                }
            case Dt.BEFORE_DOCTYPE_NAME:
                {
                    this._stateBeforeDoctypeName(e);
                    break;
                }
            case Dt.DOCTYPE_NAME:
                {
                    this._stateDoctypeName(e);
                    break;
                }
            case Dt.AFTER_DOCTYPE_NAME:
                {
                    this._stateAfterDoctypeName(e);
                    break;
                }
            case Dt.AFTER_DOCTYPE_PUBLIC_KEYWORD:
                {
                    this._stateAfterDoctypePublicKeyword(e);
                    break;
                }
            case Dt.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateBeforeDoctypePublicIdentifier(e);
                    break;
                }
            case Dt.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierDoubleQuoted(e);
                    break;
                }
            case Dt.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierSingleQuoted(e);
                    break;
                }
            case Dt.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateAfterDoctypePublicIdentifier(e);
                    break;
                }
            case Dt.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
                {
                    this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
                    break;
                }
            case Dt.AFTER_DOCTYPE_SYSTEM_KEYWORD:
                {
                    this._stateAfterDoctypeSystemKeyword(e);
                    break;
                }
            case Dt.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateBeforeDoctypeSystemIdentifier(e);
                    break;
                }
            case Dt.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierDoubleQuoted(e);
                    break;
                }
            case Dt.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierSingleQuoted(e);
                    break;
                }
            case Dt.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateAfterDoctypeSystemIdentifier(e);
                    break;
                }
            case Dt.BOGUS_DOCTYPE:
                {
                    this._stateBogusDoctype(e);
                    break;
                }
            case Dt.CDATA_SECTION:
                {
                    this._stateCdataSection(e);
                    break;
                }
            case Dt.CDATA_SECTION_BRACKET:
                {
                    this._stateCdataSectionBracket(e);
                    break;
                }
            case Dt.CDATA_SECTION_END:
                {
                    this._stateCdataSectionEnd(e);
                    break;
                }
            case Dt.CHARACTER_REFERENCE:
                {
                    this._stateCharacterReference();
                    break;
                }
            case Dt.AMBIGUOUS_AMPERSAND:
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
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.TAG_OPEN;
                    break;
                }
            case $t.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._emitCodePoint(e);
                    break;
                }
            case $t.EOF:
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
            case $t.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.RCDATA_LESS_THAN_SIGN;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._emitChars(hm);
                    break;
                }
            case $t.EOF:
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
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.RAWTEXT_LESS_THAN_SIGN;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._emitChars(hm);
                    break;
                }
            case $t.EOF:
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
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA_LESS_THAN_SIGN;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._emitChars(hm);
                    break;
                }
            case $t.EOF:
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
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._emitChars(hm);
                    break;
                }
            case $t.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateTagOpen(e) {
        if (YT(e)) this._createStartTagToken(), this.state = Dt.TAG_NAME, this._stateTagName(e);
        else switch(e){
            case $t.EXCLAMATION_MARK:
                {
                    this.state = Dt.MARKUP_DECLARATION_OPEN;
                    break;
                }
            case $t.SOLIDUS:
                {
                    this.state = Dt.END_TAG_OPEN;
                    break;
                }
            case $t.QUESTION_MARK:
                {
                    this._err(kr.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = Dt.BOGUS_COMMENT, this._stateBogusComment(e);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = Dt.DATA, this._stateData(e);
        }
    }
    _stateEndTagOpen(e) {
        if (YT(e)) this._createEndTagToken(), this.state = Dt.TAG_NAME, this._stateTagName(e);
        else switch(e){
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.missingEndTagName), this.state = Dt.DATA;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = Dt.BOGUS_COMMENT, this._stateBogusComment(e);
        }
    }
    _stateTagName(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this.state = Dt.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case $t.SOLIDUS:
                {
                    this.state = Dt.SELF_CLOSING_START_TAG;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA, this.emitCurrentTagToken();
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.tagName += hm;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                a.tagName += String.fromCodePoint(lJ(e) ? _fe(e) : e);
        }
    }
    _stateRcdataLessThanSign(e) {
        e === $t.SOLIDUS ? this.state = Dt.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = Dt.RCDATA, this._stateRcdata(e));
    }
    _stateRcdataEndTagOpen(e) {
        YT(e) ? (this.state = Dt.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = Dt.RCDATA, this._stateRcdata(e));
    }
    handleSpecialEndTag(e) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
        this._createEndTagToken();
        const a = this.currentToken;
        switch(a.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                return this._advanceBy(this.lastStartTagName.length), this.state = Dt.BEFORE_ATTRIBUTE_NAME, !1;
            case $t.SOLIDUS:
                return this._advanceBy(this.lastStartTagName.length), this.state = Dt.SELF_CLOSING_START_TAG, !1;
            case $t.GREATER_THAN_SIGN:
                return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = Dt.DATA, !1;
            default:
                return !this._ensureHibernation();
        }
    }
    _stateRcdataEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Dt.RCDATA, this._stateRcdata(e));
    }
    _stateRawtextLessThanSign(e) {
        e === $t.SOLIDUS ? this.state = Dt.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = Dt.RAWTEXT, this._stateRawtext(e));
    }
    _stateRawtextEndTagOpen(e) {
        YT(e) ? (this.state = Dt.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = Dt.RAWTEXT, this._stateRawtext(e));
    }
    _stateRawtextEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Dt.RAWTEXT, this._stateRawtext(e));
    }
    _stateScriptDataLessThanSign(e) {
        switch(e){
            case $t.SOLIDUS:
                {
                    this.state = Dt.SCRIPT_DATA_END_TAG_OPEN;
                    break;
                }
            case $t.EXCLAMATION_MARK:
                {
                    this.state = Dt.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
                    break;
                }
            default:
                this._emitChars("<"), this.state = Dt.SCRIPT_DATA, this._stateScriptData(e);
        }
    }
    _stateScriptDataEndTagOpen(e) {
        YT(e) ? (this.state = Dt.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = Dt.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Dt.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEscapeStart(e) {
        e === $t.HYPHEN_MINUS ? (this.state = Dt.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = Dt.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEscapeStartDash(e) {
        e === $t.HYPHEN_MINUS ? (this.state = Dt.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = Dt.SCRIPT_DATA, this._stateScriptData(e));
    }
    _stateScriptDataEscaped(e) {
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._emitChars(hm);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedDash(e) {
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.state = Dt.SCRIPT_DATA_ESCAPED, this._emitChars(hm);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Dt.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedDashDash(e) {
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA, this._emitChars(">");
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.state = Dt.SCRIPT_DATA_ESCAPED, this._emitChars(hm);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Dt.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedLessThanSign(e) {
        e === $t.SOLIDUS ? this.state = Dt.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : YT(e) ? (this._emitChars("<"), this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = Dt.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataEscapedEndTagOpen(e) {
        YT(e) ? (this.state = Dt.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = Dt.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataEscapedEndTagName(e) {
        this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = Dt.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataDoubleEscapeStart(e) {
        if (this.preprocessor.startsWith(Sw.SCRIPT, !1) && ONt(this.preprocessor.peek(Sw.SCRIPT.length))) {
            this._emitCodePoint(e);
            for(let a = 0; a < Sw.SCRIPT.length; a++)this._emitCodePoint(this._consume());
            this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else this._ensureHibernation() || (this.state = Dt.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
    }
    _stateScriptDataDoubleEscaped(e) {
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._emitChars(hm);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedDash(e) {
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(hm);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedDashDash(e) {
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.SCRIPT_DATA, this._emitChars(">");
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(hm);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
                    break;
                }
            default:
                this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedLessThanSign(e) {
        e === $t.SOLIDUS ? (this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
    }
    _stateScriptDataDoubleEscapeEnd(e) {
        if (this.preprocessor.startsWith(Sw.SCRIPT, !1) && ONt(this.preprocessor.peek(Sw.SCRIPT.length))) {
            this._emitCodePoint(e);
            for(let a = 0; a < Sw.SCRIPT.length; a++)this._emitCodePoint(this._consume());
            this.state = Dt.SCRIPT_DATA_ESCAPED;
        } else this._ensureHibernation() || (this.state = Dt.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
    }
    _stateBeforeAttributeName(e) {
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.SOLIDUS:
            case $t.GREATER_THAN_SIGN:
            case $t.EOF:
                {
                    this.state = Dt.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
                    break;
                }
            case $t.EQUALS_SIGN:
                {
                    this._err(kr.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = Dt.ATTRIBUTE_NAME;
                    break;
                }
            default:
                this._createAttr(""), this.state = Dt.ATTRIBUTE_NAME, this._stateAttributeName(e);
        }
    }
    _stateAttributeName(e) {
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
            case $t.SOLIDUS:
            case $t.GREATER_THAN_SIGN:
            case $t.EOF:
                {
                    this._leaveAttrName(), this.state = Dt.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
                    break;
                }
            case $t.EQUALS_SIGN:
                {
                    this._leaveAttrName(), this.state = Dt.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case $t.QUOTATION_MARK:
            case $t.APOSTROPHE:
            case $t.LESS_THAN_SIGN:
                {
                    this._err(kr.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.currentAttr.name += hm;
                    break;
                }
            default:
                this.currentAttr.name += String.fromCodePoint(lJ(e) ? _fe(e) : e);
        }
    }
    _stateAfterAttributeName(e) {
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.SOLIDUS:
                {
                    this.state = Dt.SELF_CLOSING_START_TAG;
                    break;
                }
            case $t.EQUALS_SIGN:
                {
                    this.state = Dt.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA, this.emitCurrentTagToken();
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._createAttr(""), this.state = Dt.ATTRIBUTE_NAME, this._stateAttributeName(e);
        }
    }
    _stateBeforeAttributeValue(e) {
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.QUOTATION_MARK:
                {
                    this.state = Dt.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                    break;
                }
            case $t.APOSTROPHE:
                {
                    this.state = Dt.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.missingAttributeValue), this.state = Dt.DATA, this.emitCurrentTagToken();
                    break;
                }
            default:
                this.state = Dt.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
        }
    }
    _stateAttributeValueDoubleQuoted(e) {
        switch(e){
            case $t.QUOTATION_MARK:
                {
                    this.state = Dt.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case $t.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.currentAttr.value += hm;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAttributeValueSingleQuoted(e) {
        switch(e){
            case $t.APOSTROPHE:
                {
                    this.state = Dt.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case $t.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.currentAttr.value += hm;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAttributeValueUnquoted(e) {
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this._leaveAttrValue(), this.state = Dt.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case $t.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue(), this.state = Dt.DATA, this.emitCurrentTagToken();
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this.currentAttr.value += hm;
                    break;
                }
            case $t.QUOTATION_MARK:
            case $t.APOSTROPHE:
            case $t.LESS_THAN_SIGN:
            case $t.EQUALS_SIGN:
            case $t.GRAVE_ACCENT:
                {
                    this._err(kr.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAfterAttributeValueQuoted(e) {
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this._leaveAttrValue(), this.state = Dt.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case $t.SOLIDUS:
                {
                    this._leaveAttrValue(), this.state = Dt.SELF_CLOSING_START_TAG;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue(), this.state = Dt.DATA, this.emitCurrentTagToken();
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingWhitespaceBetweenAttributes), this.state = Dt.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
        }
    }
    _stateSelfClosingStartTag(e) {
        switch(e){
            case $t.GREATER_THAN_SIGN:
                {
                    const a = this.currentToken;
                    a.selfClosing = !0, this.state = Dt.DATA, this.emitCurrentTagToken();
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInTag), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.unexpectedSolidusInTag), this.state = Dt.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
        }
    }
    _stateBogusComment(e) {
        const a = this.currentToken;
        switch(e){
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA, this.emitCurrentComment(a);
                    break;
                }
            case $t.EOF:
                {
                    this.emitCurrentComment(a), this._emitEOFToken();
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.data += hm;
                    break;
                }
            default:
                a.data += String.fromCodePoint(e);
        }
    }
    _stateMarkupDeclarationOpen(e) {
        this._consumeSequenceIfMatch(Sw.DASH_DASH, !0) ? (this._createCommentToken(Sw.DASH_DASH.length + 1), this.state = Dt.COMMENT_START) : this._consumeSequenceIfMatch(Sw.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(Sw.DOCTYPE.length + 1), this.state = Dt.DOCTYPE) : this._consumeSequenceIfMatch(Sw.CDATA_START, !0) ? this.inForeignNode ? this.state = Dt.CDATA_SECTION : (this._err(kr.cdataInHtmlContent), this._createCommentToken(Sw.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = Dt.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(kr.incorrectlyOpenedComment), this._createCommentToken(2), this.state = Dt.BOGUS_COMMENT, this._stateBogusComment(e));
    }
    _stateCommentStart(e) {
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.COMMENT_START_DASH;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.abruptClosingOfEmptyComment), this.state = Dt.DATA;
                    const a = this.currentToken;
                    this.emitCurrentComment(a);
                    break;
                }
            default:
                this.state = Dt.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentStartDash(e) {
        const a = this.currentToken;
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.COMMENT_END;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.abruptClosingOfEmptyComment), this.state = Dt.DATA, this.emitCurrentComment(a);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInComment), this.emitCurrentComment(a), this._emitEOFToken();
                    break;
                }
            default:
                a.data += "-", this.state = Dt.COMMENT, this._stateComment(e);
        }
    }
    _stateComment(e) {
        const a = this.currentToken;
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.COMMENT_END_DASH;
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    a.data += "<", this.state = Dt.COMMENT_LESS_THAN_SIGN;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.data += hm;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInComment), this.emitCurrentComment(a), this._emitEOFToken();
                    break;
                }
            default:
                a.data += String.fromCodePoint(e);
        }
    }
    _stateCommentLessThanSign(e) {
        const a = this.currentToken;
        switch(e){
            case $t.EXCLAMATION_MARK:
                {
                    a.data += "!", this.state = Dt.COMMENT_LESS_THAN_SIGN_BANG;
                    break;
                }
            case $t.LESS_THAN_SIGN:
                {
                    a.data += "<";
                    break;
                }
            default:
                this.state = Dt.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentLessThanSignBang(e) {
        e === $t.HYPHEN_MINUS ? this.state = Dt.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = Dt.COMMENT, this._stateComment(e));
    }
    _stateCommentLessThanSignBangDash(e) {
        e === $t.HYPHEN_MINUS ? this.state = Dt.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = Dt.COMMENT_END_DASH, this._stateCommentEndDash(e));
    }
    _stateCommentLessThanSignBangDashDash(e) {
        e !== $t.GREATER_THAN_SIGN && e !== $t.EOF && this._err(kr.nestedComment), this.state = Dt.COMMENT_END, this._stateCommentEnd(e);
    }
    _stateCommentEndDash(e) {
        const a = this.currentToken;
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    this.state = Dt.COMMENT_END;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInComment), this.emitCurrentComment(a), this._emitEOFToken();
                    break;
                }
            default:
                a.data += "-", this.state = Dt.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentEnd(e) {
        const a = this.currentToken;
        switch(e){
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA, this.emitCurrentComment(a);
                    break;
                }
            case $t.EXCLAMATION_MARK:
                {
                    this.state = Dt.COMMENT_END_BANG;
                    break;
                }
            case $t.HYPHEN_MINUS:
                {
                    a.data += "-";
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInComment), this.emitCurrentComment(a), this._emitEOFToken();
                    break;
                }
            default:
                a.data += "--", this.state = Dt.COMMENT, this._stateComment(e);
        }
    }
    _stateCommentEndBang(e) {
        const a = this.currentToken;
        switch(e){
            case $t.HYPHEN_MINUS:
                {
                    a.data += "--!", this.state = Dt.COMMENT_END_DASH;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.incorrectlyClosedComment), this.state = Dt.DATA, this.emitCurrentComment(a);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInComment), this.emitCurrentComment(a), this._emitEOFToken();
                    break;
                }
            default:
                a.data += "--!", this.state = Dt.COMMENT, this._stateComment(e);
        }
    }
    _stateDoctype(e) {
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this.state = Dt.BEFORE_DOCTYPE_NAME;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), this._createDoctypeToken(null);
                    const a = this.currentToken;
                    a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingWhitespaceBeforeDoctypeName), this.state = Dt.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
        }
    }
    _stateBeforeDoctypeName(e) {
        if (lJ(e)) this._createDoctypeToken(String.fromCharCode(_fe(e))), this.state = Dt.DOCTYPE_NAME;
        else switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), this._createDoctypeToken(hm), this.state = Dt.DOCTYPE_NAME;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.missingDoctypeName), this._createDoctypeToken(null);
                    const a = this.currentToken;
                    a.forceQuirks = !0, this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), this._createDoctypeToken(null);
                    const a = this.currentToken;
                    a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._createDoctypeToken(String.fromCodePoint(e)), this.state = Dt.DOCTYPE_NAME;
        }
    }
    _stateDoctypeName(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this.state = Dt.AFTER_DOCTYPE_NAME;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA, this.emitCurrentDoctype(a);
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.name += hm;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                a.name += String.fromCodePoint(lJ(e) ? _fe(e) : e);
        }
    }
    _stateAfterDoctypeName(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA, this.emitCurrentDoctype(a);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._consumeSequenceIfMatch(Sw.PUBLIC, !1) ? this.state = Dt.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(Sw.SYSTEM, !1) ? this.state = Dt.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(kr.invalidCharacterSequenceAfterDoctypeName), a.forceQuirks = !0, this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
        }
    }
    _stateAfterDoctypePublicKeyword(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this.state = Dt.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case $t.QUOTATION_MARK:
                {
                    this._err(kr.missingWhitespaceAfterDoctypePublicKeyword), a.publicId = "", this.state = Dt.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case $t.APOSTROPHE:
                {
                    this._err(kr.missingWhitespaceAfterDoctypePublicKeyword), a.publicId = "", this.state = Dt.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.missingDoctypePublicIdentifier), a.forceQuirks = !0, this.state = Dt.DATA, this.emitCurrentDoctype(a);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingQuoteBeforeDoctypePublicIdentifier), a.forceQuirks = !0, this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBeforeDoctypePublicIdentifier(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.QUOTATION_MARK:
                {
                    a.publicId = "", this.state = Dt.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case $t.APOSTROPHE:
                {
                    a.publicId = "", this.state = Dt.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.missingDoctypePublicIdentifier), a.forceQuirks = !0, this.state = Dt.DATA, this.emitCurrentDoctype(a);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingQuoteBeforeDoctypePublicIdentifier), a.forceQuirks = !0, this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(e) {
        const a = this.currentToken;
        switch(e){
            case $t.QUOTATION_MARK:
                {
                    this.state = Dt.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.publicId += hm;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.abruptDoctypePublicIdentifier), a.forceQuirks = !0, this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                a.publicId += String.fromCodePoint(e);
        }
    }
    _stateDoctypePublicIdentifierSingleQuoted(e) {
        const a = this.currentToken;
        switch(e){
            case $t.APOSTROPHE:
                {
                    this.state = Dt.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.publicId += hm;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.abruptDoctypePublicIdentifier), a.forceQuirks = !0, this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                a.publicId += String.fromCodePoint(e);
        }
    }
    _stateAfterDoctypePublicIdentifier(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this.state = Dt.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA, this.emitCurrentDoctype(a);
                    break;
                }
            case $t.QUOTATION_MARK:
                {
                    this._err(kr.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case $t.APOSTROPHE:
                {
                    this._err(kr.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingQuoteBeforeDoctypeSystemIdentifier), a.forceQuirks = !0, this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.QUOTATION_MARK:
                {
                    a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case $t.APOSTROPHE:
                {
                    a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingQuoteBeforeDoctypeSystemIdentifier), a.forceQuirks = !0, this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateAfterDoctypeSystemKeyword(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                {
                    this.state = Dt.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case $t.QUOTATION_MARK:
                {
                    this._err(kr.missingWhitespaceAfterDoctypeSystemKeyword), a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case $t.APOSTROPHE:
                {
                    this._err(kr.missingWhitespaceAfterDoctypeSystemKeyword), a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.missingDoctypeSystemIdentifier), a.forceQuirks = !0, this.state = Dt.DATA, this.emitCurrentDoctype(a);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingQuoteBeforeDoctypeSystemIdentifier), a.forceQuirks = !0, this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBeforeDoctypeSystemIdentifier(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.QUOTATION_MARK:
                {
                    a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case $t.APOSTROPHE:
                {
                    a.systemId = "", this.state = Dt.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.missingDoctypeSystemIdentifier), a.forceQuirks = !0, this.state = Dt.DATA, this.emitCurrentDoctype(a);
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.missingQuoteBeforeDoctypeSystemIdentifier), a.forceQuirks = !0, this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(e) {
        const a = this.currentToken;
        switch(e){
            case $t.QUOTATION_MARK:
                {
                    this.state = Dt.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.systemId += hm;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.abruptDoctypeSystemIdentifier), a.forceQuirks = !0, this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                a.systemId += String.fromCodePoint(e);
        }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(e) {
        const a = this.currentToken;
        switch(e){
            case $t.APOSTROPHE:
                {
                    this.state = Dt.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter), a.systemId += hm;
                    break;
                }
            case $t.GREATER_THAN_SIGN:
                {
                    this._err(kr.abruptDoctypeSystemIdentifier), a.forceQuirks = !0, this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                a.systemId += String.fromCodePoint(e);
        }
    }
    _stateAfterDoctypeSystemIdentifier(e) {
        const a = this.currentToken;
        switch(e){
            case $t.SPACE:
            case $t.LINE_FEED:
            case $t.TABULATION:
            case $t.FORM_FEED:
                break;
            case $t.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInDoctype), a.forceQuirks = !0, this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
                this._err(kr.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = Dt.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
        }
    }
    _stateBogusDoctype(e) {
        const a = this.currentToken;
        switch(e){
            case $t.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(a), this.state = Dt.DATA;
                    break;
                }
            case $t.NULL:
                {
                    this._err(kr.unexpectedNullCharacter);
                    break;
                }
            case $t.EOF:
                {
                    this.emitCurrentDoctype(a), this._emitEOFToken();
                    break;
                }
            default:
        }
    }
    _stateCdataSection(e) {
        switch(e){
            case $t.RIGHT_SQUARE_BRACKET:
                {
                    this.state = Dt.CDATA_SECTION_BRACKET;
                    break;
                }
            case $t.EOF:
                {
                    this._err(kr.eofInCdata), this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateCdataSectionBracket(e) {
        e === $t.RIGHT_SQUARE_BRACKET ? this.state = Dt.CDATA_SECTION_END : (this._emitChars("]"), this.state = Dt.CDATA_SECTION, this._stateCdataSection(e));
    }
    _stateCdataSectionEnd(e) {
        switch(e){
            case $t.GREATER_THAN_SIGN:
                {
                    this.state = Dt.DATA;
                    break;
                }
            case $t.RIGHT_SQUARE_BRACKET:
                {
                    this._emitChars("]");
                    break;
                }
            default:
                this._emitChars("]]"), this.state = Dt.CDATA_SECTION, this._stateCdataSection(e);
        }
    }
    _stateCharacterReference() {
        let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
        if (e < 0) if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
        else {
            this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
            return;
        }
        e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference($t.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && DNt(this.preprocessor.peek(1)) ? Dt.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
    }
    _stateAmbiguousAmpersand(e) {
        DNt(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === $t.SEMICOLON && this._err(kr.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
    }
}, i(zNt, "Tokenizer"), kar = zNt;

}
