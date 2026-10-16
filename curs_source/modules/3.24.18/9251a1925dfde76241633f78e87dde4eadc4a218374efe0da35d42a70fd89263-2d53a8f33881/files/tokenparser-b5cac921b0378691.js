import { TokenParserStateToString } from "../../../../../../../../mcp_sandbox_policy_exports.js";
import { TokenParserMode, init_stackElement } from "./utils/types/stackElement.js";
import { init_tokenType, tokenType_default } from "./utils/types/tokenType.js";
import { charset, init_utf_8 } from "./utils/utf-8.js";
var TokenParserState, defaultOpts2, TokenParserError, TokenParser;
export { TokenParser, TokenParserError, TokenParserState, defaultOpts2 };
var __wakaru_init_tokenparser_initialized = false;
export function init_tokenparser() {
if (__wakaru_init_tokenparser_initialized) return;
__wakaru_init_tokenparser_initialized = true;
init_utf_8();
init_tokenType();
init_stackElement();
(function(TokenParserState2) {
    TokenParserState2[TokenParserState2["VALUE"] = 0] = "VALUE";
    TokenParserState2[TokenParserState2["KEY"] = 1] = "KEY";
    TokenParserState2[TokenParserState2["COLON"] = 2] = "COLON";
    TokenParserState2[TokenParserState2["COMMA"] = 3] = "COMMA";
    TokenParserState2[TokenParserState2["ENDED"] = 4] = "ENDED";
    TokenParserState2[TokenParserState2["ERROR"] = 5] = "ERROR";
    TokenParserState2[TokenParserState2["SEPARATOR"] = 6] = "SEPARATOR";
})(TokenParserState || (TokenParserState = {}));
defaultOpts2 = {
    paths: void 0,
    keepStack: true,
    separator: void 0,
    emitPartialValues: false
};
TokenParserError = class _TokenParserError extends Error {
    constructor(message){
        super(message);
        Object.setPrototypeOf(this, _TokenParserError.prototype);
    }
};
TokenParser = class {
    constructor(opts){
        this.state = TokenParserState.VALUE;
        this.mode = void 0;
        this.key = void 0;
        this.value = void 0;
        this.stack = [];
        opts = Object.assign(Object.assign({}, defaultOpts2), opts);
        if (opts.paths) {
            this.paths = opts.paths.map((path64)=>{
                if (path64 === void 0 || path64 === "$*") return void 0;
                if (!path64.startsWith("$")) throw new TokenParserError(`Invalid selector "${path64}". Should start with "$".`);
                const pathParts = path64.split(".").slice(1);
                if (pathParts.includes("")) throw new TokenParserError(`Invalid selector "${path64}". ".." syntax not supported.`);
                return pathParts;
            });
        }
        this.keepStack = opts.keepStack || false;
        this.separator = opts.separator;
        if (!opts.emitPartialValues) {
            this.emitPartial = ()=>{};
        }
    }
    shouldEmit() {
        if (!this.paths) return true;
        return this.paths.some((path64)=>{
            var _a18;
            if (path64 === void 0) return true;
            if (path64.length !== this.stack.length) return false;
            for(let i = 0; i < path64.length - 1; i++){
                const selector2 = path64[i];
                const key = this.stack[i + 1].key;
                if (selector2 === "*") continue;
                if (selector2 !== key) return false;
            }
            const selector = path64[path64.length - 1];
            if (selector === "*") return true;
            return selector === ((_a18 = this.key) === null || _a18 === void 0 ? void 0 : _a18.toString());
        });
    }
    push() {
        this.stack.push({
            key: this.key,
            value: this.value,
            mode: this.mode,
            emit: this.shouldEmit()
        });
    }
    pop() {
        const value = this.value;
        let emit2;
        ({ key: this.key, value: this.value, mode: this.mode, emit: emit2 } = this.stack.pop());
        this.state = this.mode !== void 0 ? TokenParserState.COMMA : TokenParserState.VALUE;
        this.emit(value, emit2);
    }
    emit(value, emit2) {
        if (!this.keepStack && this.value && this.stack.every((item)=>!item.emit)) {
            delete this.value[this.key];
        }
        if (emit2) {
            this.onValue({
                value,
                key: this.key,
                parent: this.value,
                stack: this.stack
            });
        }
        if (this.stack.length === 0) {
            if (this.separator) {
                this.state = TokenParserState.SEPARATOR;
            } else if (this.separator === void 0) {
                this.end();
            }
        }
    }
    emitPartial(value) {
        if (!this.shouldEmit()) return;
        if (this.state === TokenParserState.KEY) {
            this.onValue({
                value: void 0,
                key: value,
                parent: this.value,
                stack: this.stack,
                partial: true
            });
            return;
        }
        this.onValue({
            value,
            key: this.key,
            parent: this.value,
            stack: this.stack,
            partial: true
        });
    }
    get isEnded() {
        return this.state === TokenParserState.ENDED;
    }
    write({ token, value, partial: partial2 }) {
        try {
            if (partial2) {
                this.emitPartial(value);
                return;
            }
            if (this.state === TokenParserState.VALUE) {
                if (token === tokenType_default.STRING || token === tokenType_default.NUMBER || token === tokenType_default.TRUE || token === tokenType_default.FALSE || token === tokenType_default.NULL) {
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.value[this.key] = value;
                        this.state = TokenParserState.COMMA;
                    } else if (this.mode === TokenParserMode.ARRAY) {
                        this.value.push(value);
                        this.state = TokenParserState.COMMA;
                    }
                    this.emit(value, this.shouldEmit());
                    return;
                }
                if (token === tokenType_default.LEFT_BRACE) {
                    this.push();
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.value = this.value[this.key] = {};
                    } else if (this.mode === TokenParserMode.ARRAY) {
                        const val = {};
                        this.value.push(val);
                        this.value = val;
                    } else {
                        this.value = {};
                    }
                    this.mode = TokenParserMode.OBJECT;
                    this.state = TokenParserState.KEY;
                    this.key = void 0;
                    this.emitPartial();
                    return;
                }
                if (token === tokenType_default.LEFT_BRACKET) {
                    this.push();
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.value = this.value[this.key] = [];
                    } else if (this.mode === TokenParserMode.ARRAY) {
                        const val = [];
                        this.value.push(val);
                        this.value = val;
                    } else {
                        this.value = [];
                    }
                    this.mode = TokenParserMode.ARRAY;
                    this.state = TokenParserState.VALUE;
                    this.key = 0;
                    this.emitPartial();
                    return;
                }
                if (this.mode === TokenParserMode.ARRAY && token === tokenType_default.RIGHT_BRACKET && this.value.length === 0) {
                    this.pop();
                    return;
                }
            }
            if (this.state === TokenParserState.KEY) {
                if (token === tokenType_default.STRING) {
                    this.key = value;
                    this.state = TokenParserState.COLON;
                    this.emitPartial();
                    return;
                }
                if (token === tokenType_default.RIGHT_BRACE && Object.keys(this.value).length === 0) {
                    this.pop();
                    return;
                }
            }
            if (this.state === TokenParserState.COLON) {
                if (token === tokenType_default.COLON) {
                    this.state = TokenParserState.VALUE;
                    return;
                }
            }
            if (this.state === TokenParserState.COMMA) {
                if (token === tokenType_default.COMMA) {
                    if (this.mode === TokenParserMode.ARRAY) {
                        this.state = TokenParserState.VALUE;
                        this.key += 1;
                        return;
                    }
                    if (this.mode === TokenParserMode.OBJECT) {
                        this.state = TokenParserState.KEY;
                        return;
                    }
                }
                if (token === tokenType_default.RIGHT_BRACE && this.mode === TokenParserMode.OBJECT || token === tokenType_default.RIGHT_BRACKET && this.mode === TokenParserMode.ARRAY) {
                    this.pop();
                    return;
                }
            }
            if (this.state === TokenParserState.SEPARATOR) {
                if (token === tokenType_default.SEPARATOR && value === this.separator) {
                    this.state = TokenParserState.VALUE;
                    return;
                }
            }
            if (token === tokenType_default.SEPARATOR && this.state !== TokenParserState.SEPARATOR && Array.from(value).map((n)=>n.charCodeAt(0)).every((n)=>n === charset.SPACE || n === charset.NEWLINE || n === charset.CARRIAGE_RETURN || n === charset.TAB)) {
                return;
            }
            throw new TokenParserError(`Unexpected ${tokenType_default[token]} (${JSON.stringify(value)}) in state ${TokenParserStateToString(this.state)}`);
        } catch (err) {
            this.error(err);
        }
    }
    error(err) {
        if (this.state !== TokenParserState.ENDED) {
            this.state = TokenParserState.ERROR;
        }
        this.onError(err);
    }
    end() {
        if (this.state !== TokenParserState.VALUE && this.state !== TokenParserState.SEPARATOR || this.stack.length > 0) {
            this.error(new Error(`Parser ended in mid-parsing (state: ${TokenParserStateToString(this.state)}). Either not all the data was received or the data was invalid.`));
        } else {
            this.state = TokenParserState.ENDED;
            this.onEnd();
        }
    }
    onValue(parsedElementInfo) {
        throw new TokenParserError(`Can't emit data before the "onValue" callback has been set up.`);
    }
    onError(err) {
        throw err;
    }
    onEnd() {}
};

}
