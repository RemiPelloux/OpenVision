"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SPECIAL_HEADERS = exports.HEADER_STATE = exports.MINOR = exports.MAJOR = exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS = exports.TOKEN = exports.STRICT_TOKEN = exports.HEX = exports.URL_CHAR = exports.STRICT_URL_CHAR = exports.USERINFO_CHARS = exports.MARK = exports.ALPHANUM = exports.NUM = exports.HEX_MAP = exports.NUM_MAP = exports.ALPHA = exports.FINISH = exports.H_METHOD_MAP = exports.METHOD_MAP = exports.METHODS_RTSP = exports.METHODS_ICE = exports.METHODS_HTTP = exports.METHODS = exports.LENIENT_FLAGS = exports.FLAGS = exports.TYPE = exports.ERROR = void 0;
const r = require("./module-45035.js");
var s, o;
!function(A) {
    A[A.OK = 0] = "OK", A[A.INTERNAL = 1] = "INTERNAL", A[A.STRICT = 2] = "STRICT", A[A.LF_EXPECTED = 3] = "LF_EXPECTED", A[A.UNEXPECTED_CONTENT_LENGTH = 4] = "UNEXPECTED_CONTENT_LENGTH", A[A.CLOSED_CONNECTION = 5] = "CLOSED_CONNECTION", A[A.INVALID_METHOD = 6] = "INVALID_METHOD", A[A.INVALID_URL = 7] = "INVALID_URL", A[A.INVALID_CONSTANT = 8] = "INVALID_CONSTANT", A[A.INVALID_VERSION = 9] = "INVALID_VERSION", A[A.INVALID_HEADER_TOKEN = 10] = "INVALID_HEADER_TOKEN", A[A.INVALID_CONTENT_LENGTH = 11] = "INVALID_CONTENT_LENGTH", A[A.INVALID_CHUNK_SIZE = 12] = "INVALID_CHUNK_SIZE", A[A.INVALID_STATUS = 13] = "INVALID_STATUS", A[A.INVALID_EOF_STATE = 14] = "INVALID_EOF_STATE", A[A.INVALID_TRANSFER_ENCODING = 15] = "INVALID_TRANSFER_ENCODING", A[A.CB_MESSAGE_BEGIN = 16] = "CB_MESSAGE_BEGIN", A[A.CB_HEADERS_COMPLETE = 17] = "CB_HEADERS_COMPLETE", A[A.CB_MESSAGE_COMPLETE = 18] = "CB_MESSAGE_COMPLETE", A[A.CB_CHUNK_HEADER = 19] = "CB_CHUNK_HEADER", A[A.CB_CHUNK_COMPLETE = 20] = "CB_CHUNK_COMPLETE", A[A.PAUSED = 21] = "PAUSED", A[A.PAUSED_UPGRADE = 22] = "PAUSED_UPGRADE", A[A.PAUSED_H2_UPGRADE = 23] = "PAUSED_H2_UPGRADE", A[A.USER = 24] = "USER";
}(exports.ERROR || (exports.ERROR = {})), function(A) {
    A[A.BOTH = 0] = "BOTH", A[A.REQUEST = 1] = "REQUEST", A[A.RESPONSE = 2] = "RESPONSE";
}(exports.TYPE || (exports.TYPE = {})), function(A) {
    A[A.CONNECTION_KEEP_ALIVE = 1] = "CONNECTION_KEEP_ALIVE", A[A.CONNECTION_CLOSE = 2] = "CONNECTION_CLOSE", A[A.CONNECTION_UPGRADE = 4] = "CONNECTION_UPGRADE", A[A.CHUNKED = 8] = "CHUNKED", A[A.UPGRADE = 16] = "UPGRADE", A[A.CONTENT_LENGTH = 32] = "CONTENT_LENGTH", A[A.SKIPBODY = 64] = "SKIPBODY", A[A.TRAILING = 128] = "TRAILING", A[A.TRANSFER_ENCODING = 512] = "TRANSFER_ENCODING";
}(exports.FLAGS || (exports.FLAGS = {})), function(A) {
    A[A.HEADERS = 1] = "HEADERS", A[A.CHUNKED_LENGTH = 2] = "CHUNKED_LENGTH", A[A.KEEP_ALIVE = 4] = "KEEP_ALIVE";
}(exports.LENIENT_FLAGS || (exports.LENIENT_FLAGS = {})), function(A) {
    A[A.DELETE = 0] = "DELETE", A[A.GET = 1] = "GET", A[A.HEAD = 2] = "HEAD", A[A.POST = 3] = "POST", A[A.PUT = 4] = "PUT", A[A.CONNECT = 5] = "CONNECT", A[A.OPTIONS = 6] = "OPTIONS", A[A.TRACE = 7] = "TRACE", A[A.COPY = 8] = "COPY", A[A.LOCK = 9] = "LOCK", A[A.MKCOL = 10] = "MKCOL", A[A.MOVE = 11] = "MOVE", A[A.PROPFIND = 12] = "PROPFIND", A[A.PROPPATCH = 13] = "PROPPATCH", A[A.SEARCH = 14] = "SEARCH", A[A.UNLOCK = 15] = "UNLOCK", A[A.BIND = 16] = "BIND", A[A.REBIND = 17] = "REBIND", A[A.UNBIND = 18] = "UNBIND", A[A.ACL = 19] = "ACL", A[A.REPORT = 20] = "REPORT", A[A.MKACTIVITY = 21] = "MKACTIVITY", A[A.CHECKOUT = 22] = "CHECKOUT", A[A.MERGE = 23] = "MERGE", A[A["M-SEARCH"] = 24] = "M-SEARCH", A[A.NOTIFY = 25] = "NOTIFY", A[A.SUBSCRIBE = 26] = "SUBSCRIBE", A[A.UNSUBSCRIBE = 27] = "UNSUBSCRIBE", A[A.PATCH = 28] = "PATCH", A[A.PURGE = 29] = "PURGE", A[A.MKCALENDAR = 30] = "MKCALENDAR", A[A.LINK = 31] = "LINK", A[A.UNLINK = 32] = "UNLINK", A[A.SOURCE = 33] = "SOURCE", A[A.PRI = 34] = "PRI", A[A.DESCRIBE = 35] = "DESCRIBE", A[A.ANNOUNCE = 36] = "ANNOUNCE", A[A.SETUP = 37] = "SETUP", A[A.PLAY = 38] = "PLAY", A[A.PAUSE = 39] = "PAUSE", A[A.TEARDOWN = 40] = "TEARDOWN", A[A.GET_PARAMETER = 41] = "GET_PARAMETER", A[A.SET_PARAMETER = 42] = "SET_PARAMETER", A[A.REDIRECT = 43] = "REDIRECT", A[A.RECORD = 44] = "RECORD", A[A.FLUSH = 45] = "FLUSH";
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
], exports.METHOD_MAP = r.enumToMap(s), exports.H_METHOD_MAP = {}, Object.keys(exports.METHOD_MAP).forEach((A)=>{
    /^H/.test(A) && (exports.H_METHOD_MAP[A] = exports.METHOD_MAP[A]);
}), function(A) {
    A[A.SAFE = 0] = "SAFE", A[A.SAFE_WITH_CB = 1] = "SAFE_WITH_CB", A[A.UNSAFE = 2] = "UNSAFE";
}(exports.FINISH || (exports.FINISH = {})), exports.ALPHA = [];
for(let A = "A".charCodeAt(0); A <= "Z".charCodeAt(0); A++)exports.ALPHA.push(String.fromCharCode(A)), exports.ALPHA.push(String.fromCharCode(A + 32));
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
for(let A = 128; A <= 255; A++)exports.URL_CHAR.push(A);
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
for(let A = 32; A <= 255; A++)127 !== A && exports.HEADER_CHARS.push(A);
exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS.filter((A)=>44 !== A), exports.MAJOR = exports.NUM_MAP, exports.MINOR = exports.MAJOR, function(A) {
    A[A.GENERAL = 0] = "GENERAL", A[A.CONNECTION = 1] = "CONNECTION", A[A.CONTENT_LENGTH = 2] = "CONTENT_LENGTH", A[A.TRANSFER_ENCODING = 3] = "TRANSFER_ENCODING", A[A.UPGRADE = 4] = "UPGRADE", A[A.CONNECTION_KEEP_ALIVE = 5] = "CONNECTION_KEEP_ALIVE", A[A.CONNECTION_CLOSE = 6] = "CONNECTION_CLOSE", A[A.CONNECTION_UPGRADE = 7] = "CONNECTION_UPGRADE", A[A.TRANSFER_ENCODING_CHUNKED = 8] = "TRANSFER_ENCODING_CHUNKED";
}(o = exports.HEADER_STATE || (exports.HEADER_STATE = {})), exports.SPECIAL_HEADERS = {
    connection: o.CONNECTION,
    "content-length": o.CONTENT_LENGTH,
    "proxy-connection": o.CONNECTION,
    "transfer-encoding": o.TRANSFER_ENCODING,
    upgrade: o.UPGRADE
};
