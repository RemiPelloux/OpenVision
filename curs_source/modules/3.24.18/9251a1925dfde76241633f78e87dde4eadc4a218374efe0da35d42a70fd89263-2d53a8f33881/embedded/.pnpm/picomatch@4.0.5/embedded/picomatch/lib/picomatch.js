import { require_constants14 } from "./constants.js";
import { require_parse3 } from "./parse.js";
import { require_scan2 } from "./scan.js";
import { require_utils4 } from "./utils.js";
var __wakaru_require_picomatch_cache;
export function require_picomatch() {
if (__wakaru_require_picomatch_cache) return __wakaru_require_picomatch_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_picomatch_cache = module2;
"use strict";
var scan2 = require_scan2();
var parse11 = require_parse3();
var utils2 = require_utils4();
var constants14 = require_constants14();
var isObject5 = (val)=>val && typeof val === "object" && !Array.isArray(val);
var picomatch2 = (glob, options2, returnState = false)=>{
    if (Array.isArray(glob)) {
        const fns = glob.map((input)=>picomatch2(input, options2, returnState));
        const arrayMatcher = (str3)=>{
            for (const isMatch of fns){
                const state2 = isMatch(str3);
                if (state2) return state2;
            }
            return false;
        };
        return arrayMatcher;
    }
    const isState = isObject5(glob) && glob.tokens && glob.input;
    if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
    }
    const opts = options2 || {};
    const posix6 = opts.windows;
    const regex = isState ? picomatch2.compileRe(glob, options2) : picomatch2.makeRe(glob, options2, false, true);
    const state = regex.state;
    delete regex.state;
    let isIgnored = ()=>false;
    if (opts.ignore) {
        const ignoreOpts = {
            ...options2,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        isIgnored = picomatch2(opts.ignore, ignoreOpts, returnState);
    }
    const matcher = (input, returnObject = false)=>{
        const { isMatch, match: match2, output } = picomatch2.test(input, regex, options2, {
            glob,
            posix: posix6
        });
        const result = {
            glob,
            state,
            regex,
            posix: posix6,
            input,
            output,
            match: match2,
            isMatch
        };
        if (typeof opts.onResult === "function") {
            opts.onResult(result);
        }
        if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (isIgnored(input)) {
            if (typeof opts.onIgnore === "function") {
                opts.onIgnore(result);
            }
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
            opts.onMatch(result);
        }
        return returnObject ? result : true;
    };
    if (returnState) {
        matcher.state = state;
    }
    return matcher;
};
picomatch2.test = (input, regex, options2, { glob, posix: posix6 } = {})=>{
    if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
    }
    if (input === "") {
        return {
            isMatch: false,
            output: ""
        };
    }
    const opts = options2 || {};
    const format2 = opts.format || (posix6 ? utils2.toPosixSlashes : null);
    let match2 = input === glob;
    let output = match2 && format2 ? format2(input) : input;
    if (match2 === false) {
        output = format2 ? format2(input) : input;
        match2 = output === glob;
    }
    if (match2 === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
            match2 = picomatch2.matchBase(input, regex, options2, posix6);
        } else {
            match2 = regex.exec(output);
        }
    }
    return {
        isMatch: Boolean(match2),
        match: match2,
        output
    };
};
picomatch2.matchBase = (input, glob, options2, posix6 = options2 && options2.windows)=>{
    const regex = glob instanceof RegExp ? glob : picomatch2.makeRe(glob, options2);
    return regex.test(utils2.basename(input, {
        windows: posix6
    }));
};
picomatch2.isMatch = (str3, patterns, options2)=>picomatch2(patterns, options2)(str3);
picomatch2.parse = (pattern, options2)=>{
    if (Array.isArray(pattern)) return pattern.map((p2)=>picomatch2.parse(p2, options2));
    return parse11(pattern, {
        ...options2,
        fastpaths: false
    });
};
picomatch2.scan = (input, options2)=>scan2(input, options2);
picomatch2.compileRe = (state, options2, returnOutput = false, returnState = false)=>{
    if (returnOutput === true) {
        return state.output;
    }
    const opts = options2 || {};
    const prepend = opts.contains ? "" : "^";
    const append = opts.contains ? "" : "$";
    let source = `${prepend}(?:${state.output})${append}`;
    if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
    }
    const regex = picomatch2.toRegex(source, options2);
    if (returnState === true) {
        regex.state = state;
    }
    return regex;
};
picomatch2.makeRe = (input, options2 = {}, returnOutput = false, returnState = false)=>{
    if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
    }
    let parsed = {
        negated: false,
        fastpaths: true
    };
    if (options2.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse11.fastpaths(input, options2);
    }
    if (!parsed.output) {
        parsed = parse11(input, options2);
    }
    return picomatch2.compileRe(parsed, options2, returnOutput, returnState);
};
picomatch2.toRegex = (source, options2)=>{
    try {
        const opts = options2 || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
    } catch (err) {
        if (options2 && options2.debug === true) throw err;
        return /$^/;
    }
};
picomatch2.constants = constants14;
module2.exports = picomatch2;

return module2.exports;
}
