var __wakaru_require_ignore_cache;
export function require_ignore() {
if (__wakaru_require_ignore_cache) return __wakaru_require_ignore_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_ignore_cache = module2;
function makeArray(subject) {
    return Array.isArray(subject) ? subject : [
        subject
    ];
}
var UNDEFINED = void 0;
var EMPTY = "";
var SPACE2 = " ";
var ESCAPE = "\\";
var REGEX_TEST_BLANK_LINE = /^\s+$/;
var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
var REGEX_SPLITALL_CRLF = /\r?\n/g;
var REGEX_TEST_INVALID_PATH = /^\.{0,2}\/|^\.{1,2}$/;
var REGEX_TEST_TRAILING_SLASH = /\/$/;
var SLASH = "/";
var TMP_KEY_IGNORE = "node-ignore";
if (typeof Symbol !== "undefined") {
    TMP_KEY_IGNORE = Symbol.for("node-ignore");
}
var KEY_IGNORE = TMP_KEY_IGNORE;
var define2 = (object4, key, value)=>{
    Object.defineProperty(object4, key, {
        value
    });
    return value;
};
var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
var RETURN_FALSE = ()=>false;
var sanitizeRange = (range2)=>range2.replace(REGEX_REGEXP_RANGE, (match2, from2, to3)=>from2.charCodeAt(0) <= to3.charCodeAt(0) ? match2 : EMPTY);
var cleanRangeBackSlash = (slashes)=>{
    const { length } = slashes;
    return slashes.slice(0, length - length % 2);
};
var REPLACERS = [
    [
        /^\uFEFF/,
        ()=>EMPTY
    ],
    [
        /((?:\\\\)*?)(\\?\s+)$/,
        (_2, m1, m2)=>m1 + (m2.indexOf("\\") === 0 ? SPACE2 : EMPTY)
    ],
    [
        /(\\+?)\s/g,
        (_2, m1)=>{
            const { length } = m1;
            return m1.slice(0, length - length % 2) + SPACE2;
        }
    ],
    [
        /[\\$.|*+(){^]/g,
        (match2)=>`\\${match2}`
    ],
    [
        /(?!\\)\?/g,
        ()=>"[^/]"
    ],
    [
        /^\//,
        ()=>"^"
    ],
    [
        /\//g,
        ()=>"\\/"
    ],
    [
        /^\^*\\\*\\\*\\\//,
        ()=>"^(?:.*\\/)?"
    ],
    [
        /^(?=[^^])/,
        function startingReplacer() {
            return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
        }
    ],
    [
        /\\\/\\\*\\\*(?=\\\/|$)/g,
        (_2, index, str3)=>index + 6 < str3.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
    ],
    [
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        (_2, p1, p2)=>{
            const unescaped = p2.replace(/\\\*/g, "[^\\/]*");
            return p1 + unescaped;
        }
    ],
    [
        /\\\\\\(?=[$.|*+(){^])/g,
        ()=>ESCAPE
    ],
    [
        /\\\\/g,
        ()=>ESCAPE
    ],
    [
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (match2, leadEscape, range2, endEscape, close)=>leadEscape === ESCAPE ? `\\[${range2}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range2)}${endEscape}]` : "[]" : "[]"
    ],
    [
        /(?:[^*])$/,
        (match2)=>/\/$/.test(match2) ? `${match2}$` : `${match2}(?=$|\\/$)`
    ]
];
var REGEX_REPLACE_TRAILING_WILDCARD = /(^|\\\/)?\\\*$/;
var MODE_IGNORE = "regex";
var MODE_CHECK_IGNORE = "checkRegex";
var UNDERSCORE = "_";
var TRAILING_WILD_CARD_REPLACERS = {
    [MODE_IGNORE] (_2, p1) {
        const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
        return `${prefix}(?=$|\\/$)`;
    },
    [MODE_CHECK_IGNORE] (_2, p1) {
        const prefix = p1 ? `${p1}[^/]*` : "[^/]*";
        return `${prefix}(?=$|\\/$)`;
    }
};
var makeRegexPrefix = (pattern)=>REPLACERS.reduce((prev, [matcher, replacer])=>prev.replace(matcher, replacer.bind(pattern)), pattern);
var isString3 = (subject)=>typeof subject === "string";
var checkPattern = (pattern)=>pattern && isString3(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern) && pattern.indexOf("#") !== 0;
var splitPattern = (pattern)=>pattern.split(REGEX_SPLITALL_CRLF).filter(Boolean);
var IgnoreRule = class {
    constructor(pattern, mark, body, ignoreCase, negative, prefix){
        this.pattern = pattern;
        this.mark = mark;
        this.negative = negative;
        define2(this, "body", body);
        define2(this, "ignoreCase", ignoreCase);
        define2(this, "regexPrefix", prefix);
    }
    get regex() {
        const key = UNDERSCORE + MODE_IGNORE;
        if (this[key]) {
            return this[key];
        }
        return this._make(MODE_IGNORE, key);
    }
    get checkRegex() {
        const key = UNDERSCORE + MODE_CHECK_IGNORE;
        if (this[key]) {
            return this[key];
        }
        return this._make(MODE_CHECK_IGNORE, key);
    }
    _make(mode, key) {
        const str3 = this.regexPrefix.replace(REGEX_REPLACE_TRAILING_WILDCARD, TRAILING_WILD_CARD_REPLACERS[mode]);
        const regex = this.ignoreCase ? new RegExp(str3, "i") : new RegExp(str3);
        return define2(this, key, regex);
    }
};
var createRule = ({ pattern, mark }, ignoreCase)=>{
    let negative = false;
    let body = pattern;
    if (body.indexOf("!") === 0) {
        negative = true;
        body = body.substr(1);
    }
    body = body.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
    const regexPrefix = makeRegexPrefix(body);
    return new IgnoreRule(pattern, mark, body, ignoreCase, negative, regexPrefix);
};
var RuleManager = class {
    constructor(ignoreCase){
        this._ignoreCase = ignoreCase;
        this._rules = [];
    }
    _add(pattern) {
        if (pattern && pattern[KEY_IGNORE]) {
            this._rules = this._rules.concat(pattern._rules._rules);
            this._added = true;
            return;
        }
        if (isString3(pattern)) {
            pattern = {
                pattern
            };
        }
        if (checkPattern(pattern.pattern)) {
            const rule = createRule(pattern, this._ignoreCase);
            this._added = true;
            this._rules.push(rule);
        }
    }
    add(pattern) {
        this._added = false;
        makeArray(isString3(pattern) ? splitPattern(pattern) : pattern).forEach(this._add, this);
        return this._added;
    }
    test(path64, checkUnignored, mode) {
        let ignored = false;
        let unignored = false;
        let matchedRule;
        this._rules.forEach((rule)=>{
            const { negative } = rule;
            if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
                return;
            }
            const matched = rule[mode].test(path64);
            if (!matched) {
                return;
            }
            ignored = !negative;
            unignored = negative;
            matchedRule = negative ? UNDEFINED : rule;
        });
        const ret = {
            ignored,
            unignored
        };
        if (matchedRule) {
            ret.rule = matchedRule;
        }
        return ret;
    }
};
var throwError2 = (message, Ctor)=>{
    throw new Ctor(message);
};
var checkPath = (path64, originalPath, doThrow)=>{
    if (!isString3(path64)) {
        return doThrow(`path must be a string, but got \`${originalPath}\``, TypeError);
    }
    if (!path64) {
        return doThrow(`path must not be empty`, TypeError);
    }
    if (checkPath.isNotRelative(path64)) {
        const r = "`path.relative()`d";
        return doThrow(`path should be a ${r} string, but got "${originalPath}"`, RangeError);
    }
    return true;
};
var isNotRelative = (path64)=>REGEX_TEST_INVALID_PATH.test(path64);
checkPath.isNotRelative = isNotRelative;
checkPath.convert = (p2)=>p2;
var Ignore = class {
    constructor({ ignorecase = true, ignoreCase = ignorecase, allowRelativePaths = false } = {}){
        define2(this, KEY_IGNORE, true);
        this._rules = new RuleManager(ignoreCase);
        this._strictPathCheck = !allowRelativePaths;
        this._initCache();
    }
    _initCache() {
        this._ignoreCache = Object.create(null);
        this._testCache = Object.create(null);
    }
    add(pattern) {
        if (this._rules.add(pattern)) {
            this._initCache();
        }
        return this;
    }
    addPattern(pattern) {
        return this.add(pattern);
    }
    _test(originalPath, cache2, checkUnignored, slices) {
        const path64 = originalPath && checkPath.convert(originalPath);
        checkPath(path64, originalPath, this._strictPathCheck ? throwError2 : RETURN_FALSE);
        return this._t(path64, cache2, checkUnignored, slices);
    }
    checkIgnore(path64) {
        if (!REGEX_TEST_TRAILING_SLASH.test(path64)) {
            return this.test(path64);
        }
        const slices = path64.split(SLASH).filter(Boolean);
        slices.pop();
        if (slices.length) {
            const parent = this._t(slices.join(SLASH) + SLASH, this._testCache, true, slices);
            if (parent.ignored) {
                return parent;
            }
        }
        return this._rules.test(path64, false, MODE_CHECK_IGNORE);
    }
    _t(path64, cache2, checkUnignored, slices) {
        if (path64 in cache2) {
            return cache2[path64];
        }
        if (!slices) {
            slices = path64.split(SLASH).filter(Boolean);
        }
        slices.pop();
        if (!slices.length) {
            return cache2[path64] = this._rules.test(path64, checkUnignored, MODE_IGNORE);
        }
        const parent = this._t(slices.join(SLASH) + SLASH, cache2, checkUnignored, slices);
        return cache2[path64] = parent.ignored ? parent : this._rules.test(path64, checkUnignored, MODE_IGNORE);
    }
    ignores(path64) {
        return this._test(path64, this._ignoreCache, false).ignored;
    }
    createFilter() {
        return (path64)=>!this.ignores(path64);
    }
    filter(paths) {
        return makeArray(paths).filter(this.createFilter());
    }
    test(path64) {
        return this._test(path64, this._testCache, true);
    }
};
var factory = (options2)=>new Ignore(options2);
var isPathValid = (path64)=>checkPath(path64 && checkPath.convert(path64), path64, RETURN_FALSE);
var setupWindows = ()=>{
    const makePosix = (str3)=>/^\\\\\?\\/.test(str3) || /["<>|\u0000-\u001F]+/u.test(str3) ? str3 : str3.replace(/\\/g, "/");
    checkPath.convert = makePosix;
    const REGEX_TEST_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
    checkPath.isNotRelative = (path64)=>REGEX_TEST_WINDOWS_PATH_ABSOLUTE.test(path64) || isNotRelative(path64);
};
if (typeof process !== "undefined" && process.platform === "win32") {
    setupWindows();
}
module2.exports = factory;
factory.default = factory;
module2.exports.isPathValid = isPathValid;
define2(module2.exports, Symbol.for("setupWindows"), setupWindows);

return module2.exports;
}
