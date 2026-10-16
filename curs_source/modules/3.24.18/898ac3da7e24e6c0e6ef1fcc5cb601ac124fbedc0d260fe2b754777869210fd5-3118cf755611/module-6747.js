"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SPECIAL_HEADERS = exports.HEADER_STATE = exports.MINOR = exports.MAJOR = exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS = exports.TOKEN = exports.STRICT_TOKEN = exports.HEX = exports.URL_CHAR = exports.STRICT_URL_CHAR = exports.USERINFO_CHARS = exports.MARK = exports.ALPHANUM = exports.NUM = exports.HEX_MAP = exports.NUM_MAP = exports.ALPHA = exports.FINISH = exports.H_METHOD_MAP = exports.METHOD_MAP = exports.METHODS_RTSP = exports.METHODS_ICE = exports.METHODS_HTTP = exports.METHODS = exports.LENIENT_FLAGS = exports.FLAGS = exports.TYPE = exports.ERROR = void 0;
const t = require("./module-6363.js");
var s, o;
!function(e) {
    e[e.OK = 0] = "OK", e[e.INTERNAL = 1] = "INTERNAL", e[e.STRICT = 2] = "STRICT", e[e.LF_EXPECTED = 3] = "LF_EXPECTED", e[e.UNEXPECTED_CONTENT_LENGTH = 4] = "UNEXPECTED_CONTENT_LENGTH", e[e.CLOSED_CONNECTION = 5] = "CLOSED_CONNECTION", e[e.INVALID_METHOD = 6] = "INVALID_METHOD", e[e.INVALID_URL = 7] = "INVALID_URL", e[e.INVALID_CONSTANT = 8] = "INVALID_CONSTANT", e[e.INVALID_VERSION = 9] = "INVALID_VERSION", e[e.INVALID_HEADER_TOKEN = 10] = "INVALID_HEADER_TOKEN", e[e.INVALID_CONTENT_LENGTH = 11] = "INVALID_CONTENT_LENGTH", e[e.INVALID_CHUNK_SIZE = 12] = "INVALID_CHUNK_SIZE", e[e.INVALID_STATUS = 13] = "INVALID_STATUS", e[e.INVALID_EOF_STATE = 14] = "INVALID_EOF_STATE", e[e.INVALID_TRANSFER_ENCODING = 15] = "INVALID_TRANSFER_ENCODING", e[e.CB_MESSAGE_BEGIN = 16] = "CB_MESSAGE_BEGIN", e[e.CB_HEADERS_COMPLETE = 17] = "CB_HEADERS_COMPLETE", e[e.CB_MESSAGE_COMPLETE = 18] = "CB_MESSAGE_COMPLETE", e[e.CB_CHUNK_HEADER = 19] = "CB_CHUNK_HEADER", e[e.CB_CHUNK_COMPLETE = 20] = "CB_CHUNK_COMPLETE", e[e.PAUSED = 21] = "PAUSED", e[e.PAUSED_UPGRADE = 22] = "PAUSED_UPGRADE", e[e.PAUSED_H2_UPGRADE = 23] = "PAUSED_H2_UPGRADE", e[e.USER = 24] = "USER";
}(exports.ERROR || (exports.ERROR = {})), function(e) {
    e[e.BOTH = 0] = "BOTH", e[e.REQUEST = 1] = "REQUEST", e[e.RESPONSE = 2] = "RESPONSE";
}(exports.TYPE || (exports.TYPE = {})), function(e) {
    e[e.CONNECTION_KEEP_ALIVE = 1] = "CONNECTION_KEEP_ALIVE", e[e.CONNECTION_CLOSE = 2] = "CONNECTION_CLOSE", e[e.CONNECTION_UPGRADE = 4] = "CONNECTION_UPGRADE", e[e.CHUNKED = 8] = "CHUNKED", e[e.UPGRADE = 16] = "UPGRADE", e[e.CONTENT_LENGTH = 32] = "CONTENT_LENGTH", e[e.SKIPBODY = 64] = "SKIPBODY", e[e.TRAILING = 128] = "TRAILING", e[e.TRANSFER_ENCODING = 512] = "TRANSFER_ENCODING";
}(exports.FLAGS || (exports.FLAGS = {})), function(e) {
    e[e.HEADERS = 1] = "HEADERS", e[e.CHUNKED_LENGTH = 2] = "CHUNKED_LENGTH", e[e.KEEP_ALIVE = 4] = "KEEP_ALIVE";
}(exports.LENIENT_FLAGS || (exports.LENIENT_FLAGS = {})), function(e) {
    e[e.DELETE = 0] = "DELETE", e[e.GET = 1] = "GET", e[e.HEAD = 2] = "HEAD", e[e.POST = 3] = "POST", e[e.PUT = 4] = "PUT", e[e.CONNECT = 5] = "CONNECT", e[e.OPTIONS = 6] = "OPTIONS", e[e.TRACE = 7] = "TRACE", e[e.COPY = 8] = "COPY", e[e.LOCK = 9] = "LOCK", e[e.MKCOL = 10] = "MKCOL", e[e.MOVE = 11] = "MOVE", e[e.PROPFIND = 12] = "PROPFIND", e[e.PROPPATCH = 13] = "PROPPATCH", e[e.SEARCH = 14] = "SEARCH", e[e.UNLOCK = 15] = "UNLOCK", e[e.BIND = 16] = "BIND", e[e.REBIND = 17] = "REBIND", e[e.UNBIND = 18] = "UNBIND", e[e.ACL = 19] = "ACL", e[e.REPORT = 20] = "REPORT", e[e.MKACTIVITY = 21] = "MKACTIVITY", e[e.CHECKOUT = 22] = "CHECKOUT", e[e.MERGE = 23] = "MERGE", e[e["M-SEARCH"] = 24] = "M-SEARCH", e[e.NOTIFY = 25] = "NOTIFY", e[e.SUBSCRIBE = 26] = "SUBSCRIBE", e[e.UNSUBSCRIBE = 27] = "UNSUBSCRIBE", e[e.PATCH = 28] = "PATCH", e[e.PURGE = 29] = "PURGE", e[e.MKCALENDAR = 30] = "MKCALENDAR", e[e.LINK = 31] = "LINK", e[e.UNLINK = 32] = "UNLINK", e[e.SOURCE = 33] = "SOURCE", e[e.PRI = 34] = "PRI", e[e.DESCRIBE = 35] = "DESCRIBE", e[e.ANNOUNCE = 36] = "ANNOUNCE", e[e.SETUP = 37] = "SETUP", e[e.PLAY = 38] = "PLAY", e[e.PAUSE = 39] = "PAUSE", e[e.TEARDOWN = 40] = "TEARDOWN", e[e.GET_PARAMETER = 41] = "GET_PARAMETER", e[e.SET_PARAMETER = 42] = "SET_PARAMETER", e[e.REDIRECT = 43] = "REDIRECT", e[e.RECORD = 44] = "RECORD", e[e.FLUSH = 45] = "FLUSH";
}(s = exports.METHODS || (exports.METHODS = {})), exports.METHODS_HTTP = [
    s.DELETE,
    s.GET,
    s.HEAD,
    s.POST,
    s.PUT,
    s.CONNECT,
    s.OPTIONS,
    s.TRACE,
    s.COPY,
    s.LOCK,
    s.MKCOL,
    s.MOVE,
    s.PROPFIND,
    s.PROPPATCH,
    s.SEARCH,
    s.UNLOCK,
    s.BIND,
    s.REBIND,
    s.UNBIND,
    s.ACL,
    s.REPORT,
    s.MKACTIVITY,
    s.CHECKOUT,
    s.MERGE,
    s["M-SEARCH"],
    s.NOTIFY,
    s.SUBSCRIBE,
    s.UNSUBSCRIBE,
    s.PATCH,
    s.PURGE,
    s.MKCALENDAR,
    s.LINK,
    s.UNLINK,
    s.PRI,
    s.SOURCE
], exports.METHODS_ICE = [
    s.SOURCE
], exports.METHODS_RTSP = [
    s.OPTIONS,
    s.DESCRIBE,
    s.ANNOUNCE,
    s.SETUP,
    s.PLAY,
    s.PAUSE,
    s.TEARDOWN,
    s.GET_PARAMETER,
    s.SET_PARAMETER,
    s.REDIRECT,
    s.RECORD,
    s.FLUSH,
    s.GET,
    s.POST
], exports.METHOD_MAP = t.enumToMap(s), exports.H_METHOD_MAP = {}, Object.keys(exports.METHOD_MAP).forEach((e)=>{
    /^H/.test(e) && (exports.H_METHOD_MAP[e] = exports.METHOD_MAP[e]);
}), function(e) {
    e[e.SAFE = 0] = "SAFE", e[e.SAFE_WITH_CB = 1] = "SAFE_WITH_CB", e[e.UNSAFE = 2] = "UNSAFE";
}(exports.FINISH || (exports.FINISH = {})), exports.ALPHA = [];
for(let e = "A".charCodeAt(0); e <= "Z".charCodeAt(0); e++)exports.ALPHA.push(String.fromCharCode(e)), exports.ALPHA.push(String.fromCharCode(e + 32));
exports.NUM_MAP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
}, exports.HEX_MAP = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}, exports.NUM = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
], exports.ALPHANUM = exports.ALPHA.concat(exports.NUM), exports.MARK = [
    "-",
    "_",
    ".",
    "!",
    "~",
    "*",
    "'",
    "(",
    ")"
], exports.USERINFO_CHARS = exports.ALPHANUM.concat(exports.MARK).concat([
    "%",
    ";",
    ":",
    "&",
    "=",
    "+",
    "$",
    ","
]), exports.STRICT_URL_CHAR = [
    "!",
    '"',
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~"
].concat(exports.ALPHANUM), exports.URL_CHAR = exports.STRICT_URL_CHAR.concat([
    "\t",
    "\f"
]);
for(let e = 128; e <= 255; e++)exports.URL_CHAR.push(e);
exports.HEX = exports.NUM.concat([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
]), exports.STRICT_TOKEN = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "*",
    "+",
    "-",
    ".",
    "^",
    "_",
    "`",
    "|",
    "~"
].concat(exports.ALPHANUM), exports.TOKEN = exports.STRICT_TOKEN.concat([
    " "
]), exports.HEADER_CHARS = [
    "\t"
];
for(let e = 32; e <= 255; e++)127 !== e && exports.HEADER_CHARS.push(e);
exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS.filter((e)=>44 !== e), exports.MAJOR = exports.NUM_MAP, exports.MINOR = exports.MAJOR, function(e) {
    e[e.GENERAL = 0] = "GENERAL", e[e.CONNECTION = 1] = "CONNECTION", e[e.CONTENT_LENGTH = 2] = "CONTENT_LENGTH", e[e.TRANSFER_ENCODING = 3] = "TRANSFER_ENCODING", e[e.UPGRADE = 4] = "UPGRADE", e[e.CONNECTION_KEEP_ALIVE = 5] = "CONNECTION_KEEP_ALIVE", e[e.CONNECTION_CLOSE = 6] = "CONNECTION_CLOSE", e[e.CONNECTION_UPGRADE = 7] = "CONNECTION_UPGRADE", e[e.TRANSFER_ENCODING_CHUNKED = 8] = "TRANSFER_ENCODING_CHUNKED";
}(o = exports.HEADER_STATE || (exports.HEADER_STATE = {})), exports.SPECIAL_HEADERS = {
    connection: o.CONNECTION,
    "content-length": o.CONTENT_LENGTH,
    "proxy-connection": o.CONNECTION,
    "transfer-encoding": o.TRANSFER_ENCODING,
    upgrade: o.UPGRADE
};
