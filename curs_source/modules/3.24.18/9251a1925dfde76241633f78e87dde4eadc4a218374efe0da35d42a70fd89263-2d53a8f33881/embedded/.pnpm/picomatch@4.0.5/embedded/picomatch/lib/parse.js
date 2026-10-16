import { require_constants14 } from "./constants.js";
import { require_utils4 } from "./utils.js";
var __wakaru_require_parse3_cache;
export function require_parse3() {
if (__wakaru_require_parse3_cache) return __wakaru_require_parse3_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_parse3_cache = module2;
"use strict";
var constants14 = require_constants14();
var utils2 = require_utils4();
var { MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS } = constants14;
var expandRange = (args, options2)=>{
    if (typeof options2.expandRange === "function") {
        return options2.expandRange(...args, options2);
    }
    args.sort();
    const value = `[${args.join("-")}]`;
    try {
        new RegExp(value);
    } catch (ex) {
        return args.map((v2)=>utils2.escapeRegex(v2)).join("..");
    }
    return value;
};
var syntaxError2 = (type2, char)=>{
    return `Missing ${type2}: "${char}" - use "\\\\${char}" to match literal characters`;
};
var splitTopLevel = (input)=>{
    const parts = [];
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let value = "";
    let escaped = false;
    for (const ch of input){
        if (escaped === true) {
            value += ch;
            escaped = false;
            continue;
        }
        if (ch === "\\") {
            value += ch;
            escaped = true;
            continue;
        }
        if (ch === '"') {
            quote = quote === 1 ? 0 : 1;
            value += ch;
            continue;
        }
        if (quote === 0) {
            if (ch === "[") {
                bracket++;
            } else if (ch === "]" && bracket > 0) {
                bracket--;
            } else if (bracket === 0) {
                if (ch === "(") {
                    paren++;
                } else if (ch === ")" && paren > 0) {
                    paren--;
                } else if (ch === "|" && paren === 0) {
                    parts.push(value);
                    value = "";
                    continue;
                }
            }
        }
        value += ch;
    }
    parts.push(value);
    return parts;
};
var isPlainBranch = (branch)=>{
    let escaped = false;
    for (const ch of branch){
        if (escaped === true) {
            escaped = false;
            continue;
        }
        if (ch === "\\") {
            escaped = true;
            continue;
        }
        if (/[?*+@!()[\]{}]/.test(ch)) {
            return false;
        }
    }
    return true;
};
var normalizeSimpleBranch = (branch)=>{
    let value = branch.trim();
    let changed = true;
    while(changed === true){
        changed = false;
        if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
            value = value.slice(2, -1);
            changed = true;
        }
    }
    if (!isPlainBranch(value)) {
        return;
    }
    return value.replace(/\\(.)/g, "$1");
};
var hasRepeatedCharPrefixOverlap = (branches)=>{
    const values = branches.map(normalizeSimpleBranch).filter(Boolean);
    for(let i = 0; i < values.length; i++){
        for(let j2 = i + 1; j2 < values.length; j2++){
            const a = values[i];
            const b2 = values[j2];
            const char = a[0];
            if (!char || a !== char.repeat(a.length) || b2 !== char.repeat(b2.length)) {
                continue;
            }
            if (a === b2 || a.startsWith(b2) || b2.startsWith(a)) {
                return true;
            }
        }
    }
    return false;
};
var parseRepeatedExtglob = (pattern, requireEnd = true)=>{
    if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") {
        return;
    }
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let escaped = false;
    for(let i = 1; i < pattern.length; i++){
        const ch = pattern[i];
        if (escaped === true) {
            escaped = false;
            continue;
        }
        if (ch === "\\") {
            escaped = true;
            continue;
        }
        if (ch === '"') {
            quote = quote === 1 ? 0 : 1;
            continue;
        }
        if (quote === 1) {
            continue;
        }
        if (ch === "[") {
            bracket++;
            continue;
        }
        if (ch === "]" && bracket > 0) {
            bracket--;
            continue;
        }
        if (bracket > 0) {
            continue;
        }
        if (ch === "(") {
            paren++;
            continue;
        }
        if (ch === ")") {
            paren--;
            if (paren === 0) {
                if (requireEnd === true && i !== pattern.length - 1) {
                    return;
                }
                return {
                    type: pattern[0],
                    body: pattern.slice(2, i),
                    end: i
                };
            }
        }
    }
};
var buildCharClassStar = (chars)=>{
    const source = chars.length === 1 ? utils2.escapeRegex(chars[0]) : `[${chars.map((ch)=>utils2.escapeRegex(ch)).join("")}]`;
    return `${source}*`;
};
var getStarExtglobSequenceChars = (pattern)=>{
    let index = 0;
    const chars = [];
    while(index < pattern.length){
        const match2 = parseRepeatedExtglob(pattern.slice(index), false);
        if (!match2 || match2.type !== "*") {
            return;
        }
        const branches = splitTopLevel(match2.body).map((branch2)=>branch2.trim());
        if (branches.length !== 1) {
            return;
        }
        const branch = normalizeSimpleBranch(branches[0]);
        if (!branch || branch.length !== 1) {
            return;
        }
        chars.push(branch);
        index += match2.end + 1;
    }
    if (chars.length < 1) {
        return;
    }
    return chars;
};
var repeatedExtglobRecursion = (pattern)=>{
    let depth = 0;
    let value = pattern.trim();
    let match2 = parseRepeatedExtglob(value);
    while(match2){
        depth++;
        value = match2.body.trim();
        match2 = parseRepeatedExtglob(value);
    }
    return depth;
};
var analyzeRepeatedExtglob = (body, options2)=>{
    if (options2.maxExtglobRecursion === false) {
        return {
            risky: false
        };
    }
    const max = typeof options2.maxExtglobRecursion === "number" ? options2.maxExtglobRecursion : constants14.DEFAULT_MAX_EXTGLOB_RECURSION;
    const branches = splitTopLevel(body).map((branch)=>branch.trim());
    if (branches.length > 1) {
        if (branches.some((branch)=>branch === "") || branches.some((branch)=>/^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) {
            return {
                risky: true
            };
        }
    }
    const safeChars = [];
    let sawStarSequence = false;
    let combinable = true;
    for (const branch of branches){
        const chars = getStarExtglobSequenceChars(branch);
        if (chars) {
            sawStarSequence = true;
            safeChars.push(...chars);
            continue;
        }
        const literal3 = normalizeSimpleBranch(branch);
        if (literal3 && literal3.length === 1) {
            safeChars.push(literal3);
            continue;
        }
        combinable = false;
        if (repeatedExtglobRecursion(branch) > max) {
            return {
                risky: true
            };
        }
    }
    if (sawStarSequence) {
        return combinable ? {
            risky: true,
            safeOutput: buildCharClassStar([
                ...new Set(safeChars)
            ])
        } : {
            risky: true
        };
    }
    return {
        risky: false
    };
};
var parse11 = (input, options2)=>{
    if (typeof input !== "string") {
        throw new TypeError("Expected a string");
    }
    input = REPLACEMENTS[input] || input;
    const opts = {
        ...options2
    };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    let len = input.length;
    if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    const bos = {
        type: "bos",
        value: "",
        output: opts.prepend || ""
    };
    const tokens = [
        bos
    ];
    const capture = opts.capture ? "" : "?:";
    const PLATFORM_CHARS = constants14.globChars(opts.windows);
    const EXTGLOB_CHARS = constants14.extglobChars(PLATFORM_CHARS);
    const { DOT_LITERAL, PLUS_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK, QMARK_NO_DOT, STAR, START_ANCHOR } = PLATFORM_CHARS;
    const globstar = (opts2)=>{
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts.dot ? "" : NO_DOT;
    const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
    let star3 = opts.bash === true ? globstar(opts) : STAR;
    if (opts.capture) {
        star3 = `(${star3})`;
    }
    if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
    }
    const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
    };
    input = utils2.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value;
    const eos = ()=>state.index === len - 1;
    const peek = state.peek = (n = 1)=>input[state.index + n];
    const advance = state.advance = ()=>input[++state.index] || "";
    const remaining = ()=>input.slice(state.index + 1);
    const consume = (value2 = "", num = 0)=>{
        state.consumed += value2;
        state.index += num;
    };
    const append = (token)=>{
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
    };
    const negate2 = ()=>{
        let count2 = 1;
        while(peek() === "!" && (peek(2) !== "(" || peek(3) === "?")){
            advance();
            state.start++;
            count2++;
        }
        if (count2 % 2 === 0) {
            return false;
        }
        state.negated = true;
        state.start++;
        return true;
    };
    const increment = (type2)=>{
        state[type2]++;
        stack.push(type2);
    };
    const decrement = (type2)=>{
        state[type2]--;
        stack.pop();
    };
    const push = (tok)=>{
        if (prev.type === "globstar") {
            const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
            if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
                state.output = state.output.slice(0, -prev.output.length);
                prev.type = "star";
                prev.value = "*";
                prev.output = star3;
                state.output += prev.output;
            }
        }
        if (extglobs.length && tok.type !== "paren") {
            extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
            prev.output = (prev.output || prev.value) + tok.value;
            prev.value += tok.value;
            return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
    };
    const extglobOpen = (type2, value2)=>{
        const token = {
            ...EXTGLOB_CHARS[value2],
            conditions: 1,
            inner: ""
        };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        token.startIndex = state.index;
        token.tokensIndex = tokens.length;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({
            type: type2,
            value: value2,
            output: state.output ? "" : ONE_CHAR
        });
        push({
            type: "paren",
            extglob: true,
            value: advance(),
            output
        });
        extglobs.push(token);
    };
    const extglobClose = (token)=>{
        const literal3 = input.slice(token.startIndex, state.index + 1);
        const body = input.slice(token.startIndex + 2, state.index);
        const analysis = analyzeRepeatedExtglob(body, opts);
        if ((token.type === "plus" || token.type === "star") && analysis.risky) {
            const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : void 0;
            const open7 = tokens[token.tokensIndex];
            open7.type = "text";
            open7.value = literal3;
            open7.output = safeOutput || utils2.escapeRegex(literal3);
            for(let i = token.tokensIndex + 1; i < tokens.length; i++){
                tokens[i].value = "";
                tokens[i].output = "";
                delete tokens[i].suffix;
            }
            state.output = token.output + open7.output;
            state.backtrack = true;
            push({
                type: "paren",
                extglob: true,
                value,
                output: ""
            });
            decrement("parens");
            return;
        }
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
            let extglobStar = star3;
            if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
                extglobStar = globstar(opts);
            }
            if (extglobStar !== star3 || eos() || /^\)+$/.test(remaining())) {
                output = token.close = `)$))${extglobStar}`;
            }
            if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
                const expression = parse11(rest, {
                    ...options2,
                    fastpaths: false
                }).output;
                output = token.close = `)${expression})${extglobStar})`;
            }
            if (token.prev.type === "bos") {
                state.negatedExtglob = true;
            }
        }
        push({
            type: "paren",
            extglob: true,
            value,
            output
        });
        decrement("parens");
    };
    if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m2, esc2, chars, first, rest, index)=>{
            if (first === "\\") {
                backslashes = true;
                return m2;
            }
            if (first === "?") {
                if (esc2) {
                    return esc2 + first + (rest ? QMARK.repeat(rest.length) : "");
                }
                if (index === 0) {
                    return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
                }
                return QMARK.repeat(chars.length);
            }
            if (first === ".") {
                return DOT_LITERAL.repeat(chars.length);
            }
            if (first === "*") {
                if (esc2) {
                    return esc2 + first + (rest ? star3 : "");
                }
                return star3;
            }
            return esc2 ? m2 : `\\${m2}`;
        });
        if (backslashes === true) {
            if (opts.unescape === true) {
                output = output.replace(/\\/g, "");
            } else {
                output = output.replace(/\\+/g, (m2)=>{
                    return m2.length % 2 === 0 ? "\\\\" : m2 ? "\\" : "";
                });
            }
        }
        if (output === input && opts.contains === true) {
            state.output = input;
            return state;
        }
        state.output = utils2.wrapOutput(output, state, options2);
        return state;
    }
    while(!eos()){
        value = advance();
        if (value === "\0") {
            continue;
        }
        if (value === "\\") {
            const next = peek();
            if (next === "/" && opts.bash !== true) {
                continue;
            }
            if (next === "." || next === ";") {
                continue;
            }
            if (!next) {
                value += "\\";
                push({
                    type: "text",
                    value
                });
                continue;
            }
            const match2 = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match2 && match2[0].length > 2) {
                slashes = match2[0].length;
                state.index += slashes;
                if (slashes % 2 !== 0) {
                    value += "\\";
                }
            }
            if (opts.unescape === true) {
                value = advance();
            } else {
                value += advance();
            }
            if (state.brackets === 0) {
                push({
                    type: "text",
                    value
                });
                continue;
            }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
            if (opts.posix !== false && value === ":") {
                const inner = prev.value.slice(1);
                if (inner.includes("[")) {
                    prev.posix = true;
                    if (inner.includes(":")) {
                        const idx = prev.value.lastIndexOf("[");
                        const pre = prev.value.slice(0, idx);
                        const rest2 = prev.value.slice(idx + 2);
                        const posix6 = POSIX_REGEX_SOURCE[rest2];
                        if (posix6) {
                            prev.value = pre + posix6;
                            state.backtrack = true;
                            advance();
                            if (!bos.output && tokens.indexOf(prev) === 1) {
                                bos.output = ONE_CHAR;
                            }
                            continue;
                        }
                    }
                }
            }
            if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
                value = `\\${value}`;
            }
            if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
                value = `\\${value}`;
            }
            if (opts.posix === true && value === "!" && prev.value === "[") {
                value = "^";
            }
            prev.value += value;
            append({
                value
            });
            continue;
        }
        if (state.quotes === 1 && value !== '"') {
            value = utils2.escapeRegex(value);
            prev.value += value;
            append({
                value
            });
            continue;
        }
        if (value === '"') {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts.keepQuotes === true) {
                push({
                    type: "text",
                    value
                });
            }
            continue;
        }
        if (value === "(") {
            increment("parens");
            push({
                type: "paren",
                value
            });
            continue;
        }
        if (value === ")") {
            if (state.parens === 0 && opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError2("opening", "("));
            }
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
                extglobClose(extglobs.pop());
                continue;
            }
            push({
                type: "paren",
                value,
                output: state.parens ? ")" : "\\)"
            });
            decrement("parens");
            continue;
        }
        if (value === "[") {
            if (opts.nobracket === true || !remaining().includes("]")) {
                if (opts.nobracket !== true && opts.strictBrackets === true) {
                    throw new SyntaxError(syntaxError2("closing", "]"));
                }
                value = `\\${value}`;
            } else {
                increment("brackets");
            }
            push({
                type: "bracket",
                value
            });
            continue;
        }
        if (value === "]") {
            if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
                push({
                    type: "text",
                    value,
                    output: `\\${value}`
                });
                continue;
            }
            if (state.brackets === 0) {
                if (opts.strictBrackets === true) {
                    throw new SyntaxError(syntaxError2("opening", "["));
                }
                push({
                    type: "text",
                    value,
                    output: `\\${value}`
                });
                continue;
            }
            decrement("brackets");
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
                value = `/${value}`;
            }
            prev.value += value;
            append({
                value
            });
            if (opts.literalBrackets === false || utils2.hasRegexChars(prevValue)) {
                continue;
            }
            const escaped = utils2.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            if (opts.literalBrackets === true) {
                state.output += escaped;
                prev.value = escaped;
                continue;
            }
            prev.value = `(${capture}${escaped}|${prev.value})`;
            state.output += prev.value;
            continue;
        }
        if (value === "{" && opts.nobrace !== true) {
            increment("braces");
            const open7 = {
                type: "brace",
                value,
                output: "(",
                outputIndex: state.output.length,
                tokensIndex: state.tokens.length
            };
            braces.push(open7);
            push(open7);
            continue;
        }
        if (value === "}") {
            const brace = braces[braces.length - 1];
            if (opts.nobrace === true || !brace) {
                push({
                    type: "text",
                    value,
                    output: value
                });
                continue;
            }
            let output = ")";
            if (brace.dots === true) {
                const arr = tokens.slice();
                const range2 = [];
                for(let i = arr.length - 1; i >= 0; i--){
                    tokens.pop();
                    if (arr[i].type === "brace") {
                        break;
                    }
                    if (arr[i].type !== "dots") {
                        range2.unshift(arr[i].value);
                    }
                }
                output = expandRange(range2, opts);
                state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
                const out = state.output.slice(0, brace.outputIndex);
                const toks = state.tokens.slice(brace.tokensIndex);
                brace.value = brace.output = "\\{";
                value = output = "\\}";
                state.output = out;
                for (const t of toks){
                    state.output += t.output || t.value;
                }
            }
            push({
                type: "brace",
                value,
                output
            });
            decrement("braces");
            braces.pop();
            continue;
        }
        if (value === "|") {
            if (extglobs.length > 0) {
                extglobs[extglobs.length - 1].conditions++;
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        if (value === ",") {
            let output = value;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === "braces") {
                brace.comma = true;
                output = "|";
            }
            push({
                type: "comma",
                value,
                output
            });
            continue;
        }
        if (value === "/") {
            if (prev.type === "dot" && state.index === state.start + 1) {
                state.start = state.index + 1;
                state.consumed = "";
                state.output = "";
                tokens.pop();
                prev = bos;
                continue;
            }
            push({
                type: "slash",
                value,
                output: SLASH_LITERAL
            });
            continue;
        }
        if (value === ".") {
            if (state.braces > 0 && prev.type === "dot") {
                if (prev.value === ".") prev.output = DOT_LITERAL;
                const brace = braces[braces.length - 1];
                prev.type = "dots";
                prev.output += value;
                prev.value += value;
                brace.dots = true;
                continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
                push({
                    type: "text",
                    value,
                    output: DOT_LITERAL
                });
                continue;
            }
            push({
                type: "dot",
                value,
                output: DOT_LITERAL
            });
            continue;
        }
        if (value === "?") {
            const isGroup = prev && prev.value === "(";
            if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                extglobOpen("qmark", value);
                continue;
            }
            if (prev && prev.type === "paren") {
                const next = peek();
                let output = value;
                if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                    output = `\\${value}`;
                }
                push({
                    type: "text",
                    value,
                    output
                });
                continue;
            }
            if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
                push({
                    type: "qmark",
                    value,
                    output: QMARK_NO_DOT
                });
                continue;
            }
            push({
                type: "qmark",
                value,
                output: QMARK
            });
            continue;
        }
        if (value === "!") {
            if (opts.noextglob !== true && peek() === "(") {
                if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
                    extglobOpen("negate", value);
                    continue;
                }
            }
            if (opts.nonegate !== true && state.index === 0) {
                negate2();
                continue;
            }
        }
        if (value === "+") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                extglobOpen("plus", value);
                continue;
            }
            if (prev && prev.value === "(" || opts.regex === false) {
                push({
                    type: "plus",
                    value,
                    output: PLUS_LITERAL
                });
                continue;
            }
            if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
                push({
                    type: "plus",
                    value
                });
                continue;
            }
            push({
                type: "plus",
                value: PLUS_LITERAL
            });
            continue;
        }
        if (value === "@") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                push({
                    type: "at",
                    extglob: true,
                    value,
                    output: ""
                });
                continue;
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        if (value !== "*") {
            if (value === "$" || value === "^") {
                value = `\\${value}`;
            }
            const match2 = REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match2) {
                value += match2[0];
                state.index += match2[0].length;
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
            prev.type = "star";
            prev.star = true;
            prev.value += value;
            prev.output = star3;
            state.backtrack = true;
            state.globstar = true;
            consume(value);
            continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen("star", value);
            continue;
        }
        if (prev.type === "star") {
            if (opts.noglobstar === true) {
                consume(value);
                continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === "slash" || prior.type === "bos";
            const afterStar = before && (before.type === "star" || before.type === "globstar");
            if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
                push({
                    type: "star",
                    value,
                    output: ""
                });
                continue;
            }
            const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
            const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
            if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
                push({
                    type: "star",
                    value,
                    output: ""
                });
                continue;
            }
            while(rest.slice(0, 3) === "/**"){
                const after = input[state.index + 4];
                if (after && after !== "/") {
                    break;
                }
                rest = rest.slice(3);
                consume("/**", 3);
            }
            if (prior.type === "bos" && eos()) {
                prev.type = "globstar";
                prev.value += value;
                prev.output = globstar(opts);
                state.output = prev.output;
                state.globstar = true;
                consume(value);
                continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = "globstar";
                prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
                prev.value += value;
                state.globstar = true;
                state.output += prior.output + prev.output;
                consume(value);
                continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
                const end = rest[1] !== void 0 ? "|$" : "";
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = "globstar";
                prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
                prev.value += value;
                state.output += prior.output + prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            if (prior.type === "bos" && rest[0] === "/") {
                prev.type = "globstar";
                prev.value += value;
                prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
                state.output = prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "globstar";
            prev.output = globstar(opts);
            prev.value += value;
            state.output += prev.output;
            state.globstar = true;
            consume(value);
            continue;
        }
        const token = {
            type: "star",
            value,
            output: star3
        };
        if (opts.bash === true) {
            token.output = ".*?";
            if (prev.type === "bos" || prev.type === "slash") {
                token.output = nodot + token.output;
            }
            push(token);
            continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
            token.output = value;
            push(token);
            continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
            if (prev.type === "dot") {
                state.output += NO_DOT_SLASH;
                prev.output += NO_DOT_SLASH;
            } else if (opts.dot === true) {
                state.output += NO_DOTS_SLASH;
                prev.output += NO_DOTS_SLASH;
            } else {
                state.output += nodot;
                prev.output += nodot;
            }
            if (peek() !== "*") {
                state.output += ONE_CHAR;
                prev.output += ONE_CHAR;
            }
        }
        push(token);
    }
    while(state.brackets > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError2("closing", "]"));
        state.output = utils2.escapeLast(state.output, "[");
        decrement("brackets");
    }
    while(state.parens > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError2("closing", ")"));
        state.output = utils2.escapeLast(state.output, "(");
        decrement("parens");
    }
    while(state.braces > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError2("closing", "}"));
        state.output = utils2.escapeLast(state.output, "{");
        decrement("braces");
    }
    if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({
            type: "maybe_slash",
            value: "",
            output: `${SLASH_LITERAL}?`
        });
    }
    if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens){
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) {
                state.output += token.suffix;
            }
        }
    }
    return state;
};
parse11.fastpaths = (input, options2)=>{
    const opts = {
        ...options2
    };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    const len = input.length;
    if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    input = REPLACEMENTS[input] || input;
    const { DOT_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR } = constants14.globChars(opts.windows);
    const nodot = opts.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts.capture ? "" : "?:";
    const state = {
        negated: false,
        prefix: ""
    };
    let star3 = opts.bash === true ? ".*?" : STAR;
    if (opts.capture) {
        star3 = `(${star3})`;
    }
    const globstar = (opts2)=>{
        if (opts2.noglobstar === true) return star3;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str3)=>{
        switch(str3){
            case "*":
                return `${nodot}${ONE_CHAR}${star3}`;
            case ".*":
                return `${DOT_LITERAL}${ONE_CHAR}${star3}`;
            case "*.*":
                return `${nodot}${star3}${DOT_LITERAL}${ONE_CHAR}${star3}`;
            case "*/*":
                return `${nodot}${star3}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star3}`;
            case "**":
                return nodot + globstar(opts);
            case "**/*":
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star3}`;
            case "**/*.*":
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star3}${DOT_LITERAL}${ONE_CHAR}${star3}`;
            case "**/.*":
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star3}`;
            default:
                {
                    const match2 = /^(.*?)\.(\w+)$/.exec(str3);
                    if (!match2) return;
                    const source2 = create(match2[1]);
                    if (!source2) return;
                    return source2 + DOT_LITERAL + match2[2];
                }
        }
    };
    const output = utils2.removePrefix(input, state);
    let source = create(output);
    if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
    }
    return source;
};
module2.exports = parse11;

return module2.exports;
}
