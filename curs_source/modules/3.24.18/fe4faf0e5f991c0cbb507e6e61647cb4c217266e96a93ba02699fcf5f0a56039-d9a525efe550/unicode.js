import { i } from "./plugin-brand-icon.js";
function ANt(r) {
    return r >= 55296 && r <= 57343;
}
function Jir(r) {
    return r >= 56320 && r <= 57343;
}
function Qir(r, e) {
    return (r - 55296) * 1024 + 9216 + e;
}
function TNt(r) {
    return r !== 32 && r !== 10 && r !== 13 && r !== 9 && r !== 12 && r >= 1 && r <= 31 || r >= 127 && r <= 159;
}
function $Nt(r) {
    return r >= 64976 && r <= 65007 || ear.has(r);
}
var ear, hm, $t, Sw;
export { $Nt, $t, ANt, Jir, Qir, Sw, TNt, ear, hm };
var __wakaru_INt_initialized = false;
export function INt() {
if (__wakaru_INt_initialized) return;
__wakaru_INt_initialized = true;
ear = new Set([
    65534,
    65535,
    131070,
    131071,
    196606,
    196607,
    262142,
    262143,
    327678,
    327679,
    393214,
    393215,
    458750,
    458751,
    524286,
    524287,
    589822,
    589823,
    655358,
    655359,
    720894,
    720895,
    786430,
    786431,
    851966,
    851967,
    917502,
    917503,
    983038,
    983039,
    1048574,
    1048575,
    1114110,
    1114111
]), hm = "\uFFFD", (function(r) {
    r[r.EOF = -1] = "EOF", r[r.NULL = 0] = "NULL", r[r.TABULATION = 9] = "TABULATION", r[r.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", r[r.LINE_FEED = 10] = "LINE_FEED", r[r.FORM_FEED = 12] = "FORM_FEED", r[r.SPACE = 32] = "SPACE", r[r.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", r[r.QUOTATION_MARK = 34] = "QUOTATION_MARK", r[r.AMPERSAND = 38] = "AMPERSAND", r[r.APOSTROPHE = 39] = "APOSTROPHE", r[r.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", r[r.SOLIDUS = 47] = "SOLIDUS", r[r.DIGIT_0 = 48] = "DIGIT_0", r[r.DIGIT_9 = 57] = "DIGIT_9", r[r.SEMICOLON = 59] = "SEMICOLON", r[r.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", r[r.EQUALS_SIGN = 61] = "EQUALS_SIGN", r[r.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", r[r.QUESTION_MARK = 63] = "QUESTION_MARK", r[r.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", r[r.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", r[r.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", r[r.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", r[r.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", r[r.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})($t || ($t = {})), Sw = {
    DASH_DASH: "--",
    CDATA_START: "[CDATA[",
    DOCTYPE: "doctype",
    SCRIPT: "script",
    PUBLIC: "public",
    SYSTEM: "system"
}, i(ANt, "isSurrogate"), i(Jir, "isSurrogatePair"), i(Qir, "getSurrogatePairCodePoint"), i(TNt, "isControlCodePoint"), i($Nt, "isUndefinedCodePoint");

}
