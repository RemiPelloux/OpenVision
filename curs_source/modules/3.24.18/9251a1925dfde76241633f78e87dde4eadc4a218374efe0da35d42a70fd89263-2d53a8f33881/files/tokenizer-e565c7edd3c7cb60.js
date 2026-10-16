import { TokenizerStateToString } from "../../../../../../../../mcp_sandbox_policy_exports.js";
import { BufferedString, NonBufferedString, init_bufferedString } from "./utils/bufferedString.js";
import { init_tokenType, tokenType_default } from "./utils/types/tokenType.js";
import { charset, escapedSequences, init_utf_8 } from "./utils/utf-8.js";
var TokenizerStates, defaultOpts, TokenizerError, Tokenizer;
export { Tokenizer, TokenizerError, TokenizerStates, defaultOpts };
var __wakaru_init_tokenizer_initialized = false;
export function init_tokenizer() {
if (__wakaru_init_tokenizer_initialized) return;
__wakaru_init_tokenizer_initialized = true;
init_utf_8();
init_bufferedString();
init_tokenType();
(function(TokenizerStates2) {
    TokenizerStates2[TokenizerStates2["START"] = 0] = "START";
    TokenizerStates2[TokenizerStates2["ENDED"] = 1] = "ENDED";
    TokenizerStates2[TokenizerStates2["ERROR"] = 2] = "ERROR";
    TokenizerStates2[TokenizerStates2["TRUE1"] = 3] = "TRUE1";
    TokenizerStates2[TokenizerStates2["TRUE2"] = 4] = "TRUE2";
    TokenizerStates2[TokenizerStates2["TRUE3"] = 5] = "TRUE3";
    TokenizerStates2[TokenizerStates2["FALSE1"] = 6] = "FALSE1";
    TokenizerStates2[TokenizerStates2["FALSE2"] = 7] = "FALSE2";
    TokenizerStates2[TokenizerStates2["FALSE3"] = 8] = "FALSE3";
    TokenizerStates2[TokenizerStates2["FALSE4"] = 9] = "FALSE4";
    TokenizerStates2[TokenizerStates2["NULL1"] = 10] = "NULL1";
    TokenizerStates2[TokenizerStates2["NULL2"] = 11] = "NULL2";
    TokenizerStates2[TokenizerStates2["NULL3"] = 12] = "NULL3";
    TokenizerStates2[TokenizerStates2["STRING_DEFAULT"] = 13] = "STRING_DEFAULT";
    TokenizerStates2[TokenizerStates2["STRING_AFTER_BACKSLASH"] = 14] = "STRING_AFTER_BACKSLASH";
    TokenizerStates2[TokenizerStates2["STRING_UNICODE_DIGIT_1"] = 15] = "STRING_UNICODE_DIGIT_1";
    TokenizerStates2[TokenizerStates2["STRING_UNICODE_DIGIT_2"] = 16] = "STRING_UNICODE_DIGIT_2";
    TokenizerStates2[TokenizerStates2["STRING_UNICODE_DIGIT_3"] = 17] = "STRING_UNICODE_DIGIT_3";
    TokenizerStates2[TokenizerStates2["STRING_UNICODE_DIGIT_4"] = 18] = "STRING_UNICODE_DIGIT_4";
    TokenizerStates2[TokenizerStates2["STRING_INCOMPLETE_CHAR"] = 19] = "STRING_INCOMPLETE_CHAR";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_INITIAL_MINUS"] = 20] = "NUMBER_AFTER_INITIAL_MINUS";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_INITIAL_ZERO"] = 21] = "NUMBER_AFTER_INITIAL_ZERO";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_INITIAL_NON_ZERO"] = 22] = "NUMBER_AFTER_INITIAL_NON_ZERO";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_FULL_STOP"] = 23] = "NUMBER_AFTER_FULL_STOP";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_DECIMAL"] = 24] = "NUMBER_AFTER_DECIMAL";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_E"] = 25] = "NUMBER_AFTER_E";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_E_AND_SIGN"] = 26] = "NUMBER_AFTER_E_AND_SIGN";
    TokenizerStates2[TokenizerStates2["NUMBER_AFTER_E_AND_DIGIT"] = 27] = "NUMBER_AFTER_E_AND_DIGIT";
    TokenizerStates2[TokenizerStates2["SEPARATOR"] = 28] = "SEPARATOR";
    TokenizerStates2[TokenizerStates2["BOM_OR_START"] = 29] = "BOM_OR_START";
    TokenizerStates2[TokenizerStates2["BOM"] = 30] = "BOM";
})(TokenizerStates || (TokenizerStates = {}));
defaultOpts = {
    stringBufferSize: 0,
    numberBufferSize: 0,
    separator: void 0,
    emitPartialTokens: false
};
TokenizerError = class _TokenizerError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, _TokenizerError.prototype);
    }
};
Tokenizer = class {
    constructor(opts){
        this.state = TokenizerStates.BOM_OR_START;
        this.bomIndex = 0;
        this.separatorIndex = 0;
        this.bytes_remaining = 0;
        this.bytes_in_sequence = 0;
        this.char_split_buffer = new Uint8Array(4);
        this.encoder = new TextEncoder();
        this.offset = -1;
        opts = Object.assign(Object.assign({}, defaultOpts), opts);
        this.emitPartialTokens = opts.emitPartialTokens === true;
        this.bufferedString = opts.stringBufferSize && opts.stringBufferSize > 4 ? new BufferedString(opts.stringBufferSize) : new NonBufferedString();
        this.bufferedNumber = opts.numberBufferSize && opts.numberBufferSize > 0 ? new BufferedString(opts.numberBufferSize) : new NonBufferedString();
        this.separator = opts.separator;
        this.separatorBytes = opts.separator ? this.encoder.encode(opts.separator) : void 0;
    }
    get isEnded() {
        return this.state === TokenizerStates.ENDED;
    }
    write(input) {
        try {
            let buffer;
            if (input instanceof Uint8Array) {
                buffer = input;
            } else if (typeof input === "string") {
                buffer = this.encoder.encode(input);
            } else if (Array.isArray(input)) {
                buffer = Uint8Array.from(input);
            } else if (ArrayBuffer.isView(input)) {
                buffer = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
            } else {
                throw new TypeError("Unexpected type. The `write` function only accepts Arrays, TypedArrays and Strings.");
            }
            for(let i = 0; i < buffer.length; i += 1){
                const n = buffer[i];
                switch(this.state){
                    case TokenizerStates.BOM_OR_START:
                        if (input instanceof Uint8Array && n === 239) {
                            this.bom = [
                                239,
                                187,
                                191
                            ];
                            this.bomIndex += 1;
                            this.state = TokenizerStates.BOM;
                            continue;
                        }
                        if (input instanceof Uint16Array) {
                            if (n === 254) {
                                this.bom = [
                                    254,
                                    255
                                ];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                            if (n === 255) {
                                this.bom = [
                                    255,
                                    254
                                ];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                        }
                        if (input instanceof Uint32Array) {
                            if (n === 0) {
                                this.bom = [
                                    0,
                                    0,
                                    254,
                                    255
                                ];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                            if (n === 255) {
                                this.bom = [
                                    255,
                                    254,
                                    0,
                                    0
                                ];
                                this.bomIndex += 1;
                                this.state = TokenizerStates.BOM;
                                continue;
                            }
                        }
                    case TokenizerStates.START:
                        this.offset += 1;
                        if (this.separatorBytes && n === this.separatorBytes[0]) {
                            if (this.separatorBytes.length === 1) {
                                this.state = TokenizerStates.START;
                                this.onToken({
                                    token: tokenType_default.SEPARATOR,
                                    value: this.separator,
                                    offset: this.offset + this.separatorBytes.length - 1
                                });
                                continue;
                            }
                            this.state = TokenizerStates.SEPARATOR;
                            continue;
                        }
                        if (n === charset.SPACE || n === charset.NEWLINE || n === charset.CARRIAGE_RETURN || n === charset.TAB) {
                            continue;
                        }
                        if (n === charset.LEFT_CURLY_BRACKET) {
                            this.onToken({
                                token: tokenType_default.LEFT_BRACE,
                                value: "{",
                                offset: this.offset
                            });
                            continue;
                        }
                        if (n === charset.RIGHT_CURLY_BRACKET) {
                            this.onToken({
                                token: tokenType_default.RIGHT_BRACE,
                                value: "}",
                                offset: this.offset
                            });
                            continue;
                        }
                        if (n === charset.LEFT_SQUARE_BRACKET) {
                            this.onToken({
                                token: tokenType_default.LEFT_BRACKET,
                                value: "[",
                                offset: this.offset
                            });
                            continue;
                        }
                        if (n === charset.RIGHT_SQUARE_BRACKET) {
                            this.onToken({
                                token: tokenType_default.RIGHT_BRACKET,
                                value: "]",
                                offset: this.offset
                            });
                            continue;
                        }
                        if (n === charset.COLON) {
                            this.onToken({
                                token: tokenType_default.COLON,
                                value: ":",
                                offset: this.offset
                            });
                            continue;
                        }
                        if (n === charset.COMMA) {
                            this.onToken({
                                token: tokenType_default.COMMA,
                                value: ",",
                                offset: this.offset
                            });
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_T) {
                            this.state = TokenizerStates.TRUE1;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_F) {
                            this.state = TokenizerStates.FALSE1;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_N) {
                            this.state = TokenizerStates.NULL1;
                            continue;
                        }
                        if (n === charset.QUOTATION_MARK) {
                            this.bufferedString.reset();
                            this.state = TokenizerStates.STRING_DEFAULT;
                            continue;
                        }
                        if (n >= charset.DIGIT_ONE && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.reset();
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO;
                            continue;
                        }
                        if (n === charset.DIGIT_ZERO) {
                            this.bufferedNumber.reset();
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_ZERO;
                            continue;
                        }
                        if (n === charset.HYPHEN_MINUS) {
                            this.bufferedNumber.reset();
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_MINUS;
                            continue;
                        }
                        break;
                    case TokenizerStates.STRING_DEFAULT:
                        if (n === charset.QUOTATION_MARK) {
                            const string5 = this.bufferedString.toString();
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType_default.STRING,
                                value: string5,
                                offset: this.offset
                            });
                            this.offset += this.bufferedString.byteLength + 1;
                            continue;
                        }
                        if (n === charset.REVERSE_SOLIDUS) {
                            this.state = TokenizerStates.STRING_AFTER_BACKSLASH;
                            continue;
                        }
                        if (n >= 128) {
                            if (n >= 194 && n <= 223) {
                                this.bytes_in_sequence = 2;
                            } else if (n <= 239) {
                                this.bytes_in_sequence = 3;
                            } else {
                                this.bytes_in_sequence = 4;
                            }
                            if (this.bytes_in_sequence <= buffer.length - i) {
                                this.bufferedString.appendBuf(buffer, i, i + this.bytes_in_sequence);
                                i += this.bytes_in_sequence - 1;
                                continue;
                            }
                            this.bytes_remaining = i + this.bytes_in_sequence - buffer.length;
                            this.char_split_buffer.set(buffer.subarray(i));
                            i = buffer.length - 1;
                            this.state = TokenizerStates.STRING_INCOMPLETE_CHAR;
                            continue;
                        }
                        if (n >= charset.SPACE) {
                            this.bufferedString.appendChar(n);
                            continue;
                        }
                        break;
                    case TokenizerStates.STRING_INCOMPLETE_CHAR:
                        this.char_split_buffer.set(buffer.subarray(i, i + this.bytes_remaining), this.bytes_in_sequence - this.bytes_remaining);
                        this.bufferedString.appendBuf(this.char_split_buffer, 0, this.bytes_in_sequence);
                        i = this.bytes_remaining - 1;
                        this.state = TokenizerStates.STRING_DEFAULT;
                        continue;
                    case TokenizerStates.STRING_AFTER_BACKSLASH:
                        const controlChar = escapedSequences[n];
                        if (controlChar) {
                            this.bufferedString.appendChar(controlChar);
                            this.state = TokenizerStates.STRING_DEFAULT;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_U) {
                            this.unicode = "";
                            this.state = TokenizerStates.STRING_UNICODE_DIGIT_1;
                            continue;
                        }
                        break;
                    case TokenizerStates.STRING_UNICODE_DIGIT_1:
                    case TokenizerStates.STRING_UNICODE_DIGIT_2:
                    case TokenizerStates.STRING_UNICODE_DIGIT_3:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE || n >= charset.LATIN_CAPITAL_LETTER_A && n <= charset.LATIN_CAPITAL_LETTER_F || n >= charset.LATIN_SMALL_LETTER_A && n <= charset.LATIN_SMALL_LETTER_F) {
                            this.unicode += String.fromCharCode(n);
                            this.state += 1;
                            continue;
                        }
                        break;
                    case TokenizerStates.STRING_UNICODE_DIGIT_4:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE || n >= charset.LATIN_CAPITAL_LETTER_A && n <= charset.LATIN_CAPITAL_LETTER_F || n >= charset.LATIN_SMALL_LETTER_A && n <= charset.LATIN_SMALL_LETTER_F) {
                            const intVal = parseInt(this.unicode + String.fromCharCode(n), 16);
                            if (this.highSurrogate === void 0) {
                                if (intVal >= 55296 && intVal <= 56319) {
                                    this.highSurrogate = intVal;
                                } else {
                                    this.bufferedString.appendBuf(this.encoder.encode(String.fromCharCode(intVal)));
                                }
                            } else {
                                if (intVal >= 56320 && intVal <= 57343) {
                                    this.bufferedString.appendBuf(this.encoder.encode(String.fromCharCode(this.highSurrogate, intVal)));
                                } else {
                                    this.bufferedString.appendBuf(this.encoder.encode(String.fromCharCode(this.highSurrogate)));
                                }
                                this.highSurrogate = void 0;
                            }
                            this.state = TokenizerStates.STRING_DEFAULT;
                            continue;
                        }
                        break;
                    case TokenizerStates.NUMBER_AFTER_INITIAL_MINUS:
                        if (n === charset.DIGIT_ZERO) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_ZERO;
                            continue;
                        }
                        if (n >= charset.DIGIT_ONE && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO;
                            continue;
                        }
                        break;
                    case TokenizerStates.NUMBER_AFTER_INITIAL_ZERO:
                        if (n === charset.FULL_STOP) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_FULL_STOP;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_E || n === charset.LATIN_CAPITAL_LETTER_E) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E;
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    case TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            continue;
                        }
                        if (n === charset.FULL_STOP) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_FULL_STOP;
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_E || n === charset.LATIN_CAPITAL_LETTER_E) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E;
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    case TokenizerStates.NUMBER_AFTER_FULL_STOP:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_DECIMAL;
                            continue;
                        }
                        break;
                    case TokenizerStates.NUMBER_AFTER_DECIMAL:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            continue;
                        }
                        if (n === charset.LATIN_SMALL_LETTER_E || n === charset.LATIN_CAPITAL_LETTER_E) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E;
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    case TokenizerStates.NUMBER_AFTER_E:
                        if (n === charset.PLUS_SIGN || n === charset.HYPHEN_MINUS) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E_AND_SIGN;
                            continue;
                        }
                    case TokenizerStates.NUMBER_AFTER_E_AND_SIGN:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            this.state = TokenizerStates.NUMBER_AFTER_E_AND_DIGIT;
                            continue;
                        }
                        break;
                    case TokenizerStates.NUMBER_AFTER_E_AND_DIGIT:
                        if (n >= charset.DIGIT_ZERO && n <= charset.DIGIT_NINE) {
                            this.bufferedNumber.appendChar(n);
                            continue;
                        }
                        i -= 1;
                        this.state = TokenizerStates.START;
                        this.emitNumber();
                        continue;
                    case TokenizerStates.TRUE1:
                        if (n === charset.LATIN_SMALL_LETTER_R) {
                            this.state = TokenizerStates.TRUE2;
                            continue;
                        }
                        break;
                    case TokenizerStates.TRUE2:
                        if (n === charset.LATIN_SMALL_LETTER_U) {
                            this.state = TokenizerStates.TRUE3;
                            continue;
                        }
                        break;
                    case TokenizerStates.TRUE3:
                        if (n === charset.LATIN_SMALL_LETTER_E) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType_default.TRUE,
                                value: true,
                                offset: this.offset
                            });
                            this.offset += 3;
                            continue;
                        }
                        break;
                    case TokenizerStates.FALSE1:
                        if (n === charset.LATIN_SMALL_LETTER_A) {
                            this.state = TokenizerStates.FALSE2;
                            continue;
                        }
                        break;
                    case TokenizerStates.FALSE2:
                        if (n === charset.LATIN_SMALL_LETTER_L) {
                            this.state = TokenizerStates.FALSE3;
                            continue;
                        }
                        break;
                    case TokenizerStates.FALSE3:
                        if (n === charset.LATIN_SMALL_LETTER_S) {
                            this.state = TokenizerStates.FALSE4;
                            continue;
                        }
                        break;
                    case TokenizerStates.FALSE4:
                        if (n === charset.LATIN_SMALL_LETTER_E) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType_default.FALSE,
                                value: false,
                                offset: this.offset
                            });
                            this.offset += 4;
                            continue;
                        }
                        break;
                    case TokenizerStates.NULL1:
                        if (n === charset.LATIN_SMALL_LETTER_U) {
                            this.state = TokenizerStates.NULL2;
                            continue;
                        }
                        break;
                    case TokenizerStates.NULL2:
                        if (n === charset.LATIN_SMALL_LETTER_L) {
                            this.state = TokenizerStates.NULL3;
                            continue;
                        }
                        break;
                    case TokenizerStates.NULL3:
                        if (n === charset.LATIN_SMALL_LETTER_L) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType_default.NULL,
                                value: null,
                                offset: this.offset
                            });
                            this.offset += 3;
                            continue;
                        }
                        break;
                    case TokenizerStates.SEPARATOR:
                        this.separatorIndex += 1;
                        if (!this.separatorBytes || n !== this.separatorBytes[this.separatorIndex]) {
                            break;
                        }
                        if (this.separatorIndex === this.separatorBytes.length - 1) {
                            this.state = TokenizerStates.START;
                            this.onToken({
                                token: tokenType_default.SEPARATOR,
                                value: this.separator,
                                offset: this.offset + this.separatorIndex
                            });
                            this.separatorIndex = 0;
                        }
                        continue;
                    case TokenizerStates.BOM:
                        if (n === this.bom[this.bomIndex]) {
                            if (this.bomIndex === this.bom.length - 1) {
                                this.state = TokenizerStates.START;
                                this.bom = void 0;
                                this.bomIndex = 0;
                                continue;
                            }
                            this.bomIndex += 1;
                            continue;
                        }
                        break;
                    case TokenizerStates.ENDED:
                        if (n === charset.SPACE || n === charset.NEWLINE || n === charset.CARRIAGE_RETURN || n === charset.TAB) {
                            continue;
                        }
                }
                throw new TokenizerError(`Unexpected "${String.fromCharCode(n)}" at position "${i}" in state ${TokenizerStateToString(this.state)}`);
            }
            if (this.emitPartialTokens) {
                switch(this.state){
                    case TokenizerStates.TRUE1:
                    case TokenizerStates.TRUE2:
                    case TokenizerStates.TRUE3:
                        this.onToken({
                            token: tokenType_default.TRUE,
                            value: true,
                            offset: this.offset,
                            partial: true
                        });
                        break;
                    case TokenizerStates.FALSE1:
                    case TokenizerStates.FALSE2:
                    case TokenizerStates.FALSE3:
                    case TokenizerStates.FALSE4:
                        this.onToken({
                            token: tokenType_default.FALSE,
                            value: false,
                            offset: this.offset,
                            partial: true
                        });
                        break;
                    case TokenizerStates.NULL1:
                    case TokenizerStates.NULL2:
                    case TokenizerStates.NULL3:
                        this.onToken({
                            token: tokenType_default.NULL,
                            value: null,
                            offset: this.offset,
                            partial: true
                        });
                        break;
                    case TokenizerStates.STRING_DEFAULT:
                        {
                            const string5 = this.bufferedString.toString();
                            this.onToken({
                                token: tokenType_default.STRING,
                                value: string5,
                                offset: this.offset,
                                partial: true
                            });
                            break;
                        }
                    case TokenizerStates.NUMBER_AFTER_INITIAL_ZERO:
                    case TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO:
                    case TokenizerStates.NUMBER_AFTER_DECIMAL:
                    case TokenizerStates.NUMBER_AFTER_E_AND_DIGIT:
                        try {
                            this.onToken({
                                token: tokenType_default.NUMBER,
                                value: this.parseNumber(this.bufferedNumber.toString()),
                                offset: this.offset,
                                partial: true
                            });
                        } catch (err) {}
                }
            }
        } catch (err) {
            this.error(err);
        }
    }
    emitNumber() {
        this.onToken({
            token: tokenType_default.NUMBER,
            value: this.parseNumber(this.bufferedNumber.toString()),
            offset: this.offset
        });
        this.offset += this.bufferedNumber.byteLength - 1;
    }
    parseNumber(numberStr) {
        return Number(numberStr);
    }
    error(err) {
        if (this.state !== TokenizerStates.ENDED) {
            this.state = TokenizerStates.ERROR;
        }
        this.onError(err);
    }
    end() {
        switch(this.state){
            case TokenizerStates.NUMBER_AFTER_INITIAL_ZERO:
            case TokenizerStates.NUMBER_AFTER_INITIAL_NON_ZERO:
            case TokenizerStates.NUMBER_AFTER_DECIMAL:
            case TokenizerStates.NUMBER_AFTER_E_AND_DIGIT:
                this.state = TokenizerStates.ENDED;
                this.emitNumber();
                this.onEnd();
                break;
            case TokenizerStates.BOM_OR_START:
            case TokenizerStates.START:
            case TokenizerStates.ERROR:
            case TokenizerStates.SEPARATOR:
                this.state = TokenizerStates.ENDED;
                this.onEnd();
                break;
            default:
                this.error(new TokenizerError(`Tokenizer ended in the middle of a token (state: ${TokenizerStateToString(this.state)}). Either not all the data was received or the data was invalid.`));
        }
    }
    onToken(parsedToken) {
        throw new TokenizerError(`Can't emit tokens before the "onToken" callback has been set up.`);
    }
    onError(err) {
        throw err;
    }
    onEnd() {}
};

}
