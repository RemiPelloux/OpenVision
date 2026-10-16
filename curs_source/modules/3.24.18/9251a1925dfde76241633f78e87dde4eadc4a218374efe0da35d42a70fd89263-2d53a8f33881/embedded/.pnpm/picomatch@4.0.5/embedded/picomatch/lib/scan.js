import { require_constants14 } from "./constants.js";
import { require_utils4 } from "./utils.js";
var __wakaru_require_scan2_cache;
export function require_scan2() {
if (__wakaru_require_scan2_cache) return __wakaru_require_scan2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_scan2_cache = module2;
"use strict";
var utils2 = require_utils4();
var { CHAR_ASTERISK, CHAR_AT, CHAR_BACKWARD_SLASH, CHAR_COMMA, CHAR_DOT, CHAR_EXCLAMATION_MARK, CHAR_FORWARD_SLASH, CHAR_LEFT_CURLY_BRACE, CHAR_LEFT_PARENTHESES, CHAR_LEFT_SQUARE_BRACKET, CHAR_PLUS, CHAR_QUESTION_MARK, CHAR_RIGHT_CURLY_BRACE, CHAR_RIGHT_PARENTHESES, CHAR_RIGHT_SQUARE_BRACKET } = require_constants14();
var isPathSeparator = (code)=>{
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};
var depth = (token)=>{
    if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
    }
};
var scan2 = (input, options2)=>{
    const opts = options2 || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens = [];
    const parts = [];
    let str3 = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob = false;
    let isExtglob = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let negatedExtglob = false;
    let finished2 = false;
    let braces = 0;
    let prev;
    let code;
    let token = {
        value: "",
        depth: 0,
        isGlob: false
    };
    const eos = ()=>index >= length;
    const peek = ()=>str3.charCodeAt(index + 1);
    const advance = ()=>{
        prev = code;
        return str3.charCodeAt(++index);
    };
    while(index < length){
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === CHAR_LEFT_CURLY_BRACE) {
                braceEscaped = true;
            }
            continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while(eos() !== true && (code = advance())){
                if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (code === CHAR_LEFT_CURLY_BRACE) {
                    braces++;
                    continue;
                }
                if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished2 = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (braceEscaped !== true && code === CHAR_COMMA) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished2 = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (code === CHAR_RIGHT_CURLY_BRACE) {
                    braces--;
                    if (braces === 0) {
                        braceEscaped = false;
                        isBrace = token.isBrace = true;
                        finished2 = true;
                        break;
                    }
                }
            }
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = {
                value: "",
                depth: 0,
                isGlob: false
            };
            if (finished2 === true) continue;
            if (prev === CHAR_DOT && index === start + 1) {
                start += 2;
                continue;
            }
            lastIndex = index + 1;
            continue;
        }
        if (opts.noext !== true) {
            const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
                isGlob = token.isGlob = true;
                isExtglob = token.isExtglob = true;
                finished2 = true;
                if (code === CHAR_EXCLAMATION_MARK && index === start) {
                    negatedExtglob = true;
                }
                if (scanToEnd === true) {
                    while(eos() !== true && (code = advance())){
                        if (code === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            code = advance();
                            continue;
                        }
                        if (code === CHAR_RIGHT_PARENTHESES) {
                            isGlob = token.isGlob = true;
                            finished2 = true;
                            break;
                        }
                    }
                    continue;
                }
                break;
            }
        }
        if (code === CHAR_ASTERISK) {
            if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished2 = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished2 = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
            while(eos() !== true && (next = advance())){
                if (next === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                    isBracket = token.isBracket = true;
                    isGlob = token.isGlob = true;
                    finished2 = true;
                    break;
                }
            }
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
                while(eos() !== true && (code = advance())){
                    if (code === CHAR_LEFT_PARENTHESES) {
                        backslashes = token.backslashes = true;
                        code = advance();
                        continue;
                    }
                    if (code === CHAR_RIGHT_PARENTHESES) {
                        finished2 = true;
                        break;
                    }
                }
                continue;
            }
            break;
        }
        if (isGlob === true) {
            finished2 = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
    }
    if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
    }
    let base = str3;
    let prefix = "";
    let glob = "";
    if (start > 0) {
        prefix = str3.slice(0, start);
        str3 = str3.slice(start);
        lastIndex -= start;
    }
    if (base && isGlob === true && lastIndex > 0) {
        base = str3.slice(0, lastIndex);
        glob = str3.slice(lastIndex);
    } else if (isGlob === true) {
        base = "";
        glob = str3;
    } else {
        base = str3;
    }
    if (base && base !== "" && base !== "/" && base !== str3) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
            base = base.slice(0, -1);
        }
    }
    if (opts.unescape === true) {
        if (glob) glob = utils2.removeBackslashes(glob);
        if (base && backslashes === true) {
            base = utils2.removeBackslashes(base);
        }
    }
    const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
    };
    if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
            tokens.push(token);
        }
        state.tokens = tokens;
    }
    if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for(let idx = 0; idx < slashes.length; idx++){
            const n = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n, i);
            if (opts.tokens) {
                if (idx === 0 && start !== 0) {
                    tokens[idx].isPrefix = true;
                    tokens[idx].value = prefix;
                } else {
                    tokens[idx].value = value;
                }
                depth(tokens[idx]);
                state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== "") {
                parts.push(value);
            }
            prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
                tokens[tokens.length - 1].value = value;
                depth(tokens[tokens.length - 1]);
                state.maxDepth += tokens[tokens.length - 1].depth;
            }
        }
        state.slashes = slashes;
        state.parts = parts;
    }
    return state;
};
module2.exports = scan2;

return module2.exports;
}
