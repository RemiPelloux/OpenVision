"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SPECIAL_HEADERS = exports.HEADER_STATE = exports.MINOR = exports.MAJOR = exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS = exports.TOKEN = exports.STRICT_TOKEN = exports.HEX = exports.URL_CHAR = exports.STRICT_URL_CHAR = exports.USERINFO_CHARS = exports.MARK = exports.ALPHANUM = exports.NUM = exports.HEX_MAP = exports.NUM_MAP = exports.ALPHA = exports.FINISH = exports.H_METHOD_MAP = exports.METHOD_MAP = exports.METHODS_RTSP = exports.METHODS_ICE = exports.METHODS_HTTP = exports.METHODS = exports.LENIENT_FLAGS = exports.FLAGS = exports.TYPE = exports.ERROR = void 0;
const n = require("./module-5639.js");
var s, i;
!function(t) {
    t[t.OK = 0] = "OK", t[t.INTERNAL = 1] = "INTERNAL", t[t.STRICT = 2] = "STRICT", t[t.LF_EXPECTED = 3] = "LF_EXPECTED", t[t.UNEXPECTED_CONTENT_LENGTH = 4] = "UNEXPECTED_CONTENT_LENGTH", t[t.CLOSED_CONNECTION = 5] = "CLOSED_CONNECTION", t[t.INVALID_METHOD = 6] = "INVALID_METHOD", t[t.INVALID_URL = 7] = "INVALID_URL", t[t.INVALID_CONSTANT = 8] = "INVALID_CONSTANT", t[t.INVALID_VERSION = 9] = "INVALID_VERSION", t[t.INVALID_HEADER_TOKEN = 10] = "INVALID_HEADER_TOKEN", t[t.INVALID_CONTENT_LENGTH = 11] = "INVALID_CONTENT_LENGTH", t[t.INVALID_CHUNK_SIZE = 12] = "INVALID_CHUNK_SIZE", t[t.INVALID_STATUS = 13] = "INVALID_STATUS", t[t.INVALID_EOF_STATE = 14] = "INVALID_EOF_STATE", t[t.INVALID_TRANSFER_ENCODING = 15] = "INVALID_TRANSFER_ENCODING", t[t.CB_MESSAGE_BEGIN = 16] = "CB_MESSAGE_BEGIN", t[t.CB_HEADERS_COMPLETE = 17] = "CB_HEADERS_COMPLETE", t[t.CB_MESSAGE_COMPLETE = 18] = "CB_MESSAGE_COMPLETE", t[t.CB_CHUNK_HEADER = 19] = "CB_CHUNK_HEADER", t[t.CB_CHUNK_COMPLETE = 20] = "CB_CHUNK_COMPLETE", t[t.PAUSED = 21] = "PAUSED", t[t.PAUSED_UPGRADE = 22] = "PAUSED_UPGRADE", t[t.PAUSED_H2_UPGRADE = 23] = "PAUSED_H2_UPGRADE", t[t.USER = 24] = "USER";
}(exports.ERROR || (exports.ERROR = {})), function(t) {
    t[t.BOTH = 0] = "BOTH", t[t.REQUEST = 1] = "REQUEST", t[t.RESPONSE = 2] = "RESPONSE";
}(exports.TYPE || (exports.TYPE = {})), function(t) {
    t[t.CONNECTION_KEEP_ALIVE = 1] = "CONNECTION_KEEP_ALIVE", t[t.CONNECTION_CLOSE = 2] = "CONNECTION_CLOSE", t[t.CONNECTION_UPGRADE = 4] = "CONNECTION_UPGRADE", t[t.CHUNKED = 8] = "CHUNKED", t[t.UPGRADE = 16] = "UPGRADE", t[t.CONTENT_LENGTH = 32] = "CONTENT_LENGTH", t[t.SKIPBODY = 64] = "SKIPBODY", t[t.TRAILING = 128] = "TRAILING", t[t.TRANSFER_ENCODING = 512] = "TRANSFER_ENCODING";
}(exports.FLAGS || (exports.FLAGS = {})), function(t) {
    t[t.HEADERS = 1] = "HEADERS", t[t.CHUNKED_LENGTH = 2] = "CHUNKED_LENGTH", t[t.KEEP_ALIVE = 4] = "KEEP_ALIVE";
}(exports.LENIENT_FLAGS || (exports.LENIENT_FLAGS = {})), function(t) {
    t[t.DELETE = 0] = "DELETE", t[t.GET = 1] = "GET", t[t.HEAD = 2] = "HEAD", t[t.POST = 3] = "POST", t[t.PUT = 4] = "PUT", t[t.CONNECT = 5] = "CONNECT", t[t.OPTIONS = 6] = "OPTIONS", t[t.TRACE = 7] = "TRACE", t[t.COPY = 8] = "COPY", t[t.LOCK = 9] = "LOCK", t[t.MKCOL = 10] = "MKCOL", t[t.MOVE = 11] = "MOVE", t[t.PROPFIND = 12] = "PROPFIND", t[t.PROPPATCH = 13] = "PROPPATCH", t[t.SEARCH = 14] = "SEARCH", t[t.UNLOCK = 15] = "UNLOCK", t[t.BIND = 16] = "BIND", t[t.REBIND = 17] = "REBIND", t[t.UNBIND = 18] = "UNBIND", t[t.ACL = 19] = "ACL", t[t.REPORT = 20] = "REPORT", t[t.MKACTIVITY = 21] = "MKACTIVITY", t[t.CHECKOUT = 22] = "CHECKOUT", t[t.MERGE = 23] = "MERGE", t[t["M-SEARCH"] = 24] = "M-SEARCH", t[t.NOTIFY = 25] = "NOTIFY", t[t.SUBSCRIBE = 26] = "SUBSCRIBE", t[t.UNSUBSCRIBE = 27] = "UNSUBSCRIBE", t[t.PATCH = 28] = "PATCH", t[t.PURGE = 29] = "PURGE", t[t.MKCALENDAR = 30] = "MKCALENDAR", t[t.LINK = 31] = "LINK", t[t.UNLINK = 32] = "UNLINK", t[t.SOURCE = 33] = "SOURCE", t[t.PRI = 34] = "PRI", t[t.DESCRIBE = 35] = "DESCRIBE", t[t.ANNOUNCE = 36] = "ANNOUNCE", t[t.SETUP = 37] = "SETUP", t[t.PLAY = 38] = "PLAY", t[t.PAUSE = 39] = "PAUSE", t[t.TEARDOWN = 40] = "TEARDOWN", t[t.GET_PARAMETER = 41] = "GET_PARAMETER", t[t.SET_PARAMETER = 42] = "SET_PARAMETER", t[t.REDIRECT = 43] = "REDIRECT", t[t.RECORD = 44] = "RECORD", t[t.FLUSH = 45] = "FLUSH";
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
], exports.METHOD_MAP = n.enumToMap(s), exports.H_METHOD_MAP = {}, Object.keys(exports.METHOD_MAP).forEach((t)=>{
    /^H/.test(t) && (exports.H_METHOD_MAP[t] = exports.METHOD_MAP[t]);
}), function(t) {
    t[t.SAFE = 0] = "SAFE", t[t.SAFE_WITH_CB = 1] = "SAFE_WITH_CB", t[t.UNSAFE = 2] = "UNSAFE";
}(exports.FINISH || (exports.FINISH = {})), exports.ALPHA = [];
for(let t = "A".charCodeAt(0); t <= "Z".charCodeAt(0); t++)exports.ALPHA.push(String.fromCharCode(t)), exports.ALPHA.push(String.fromCharCode(t + 32));
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
for(let t = 128; t <= 255; t++)exports.URL_CHAR.push(t);
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
for(let t = 32; t <= 255; t++)127 !== t && exports.HEADER_CHARS.push(t);
exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS.filter((t)=>44 !== t), exports.MAJOR = exports.NUM_MAP, exports.MINOR = exports.MAJOR, function(t) {
    t[t.GENERAL = 0] = "GENERAL", t[t.CONNECTION = 1] = "CONNECTION", t[t.CONTENT_LENGTH = 2] = "CONTENT_LENGTH", t[t.TRANSFER_ENCODING = 3] = "TRANSFER_ENCODING", t[t.UPGRADE = 4] = "UPGRADE", t[t.CONNECTION_KEEP_ALIVE = 5] = "CONNECTION_KEEP_ALIVE", t[t.CONNECTION_CLOSE = 6] = "CONNECTION_CLOSE", t[t.CONNECTION_UPGRADE = 7] = "CONNECTION_UPGRADE", t[t.TRANSFER_ENCODING_CHUNKED = 8] = "TRANSFER_ENCODING_CHUNKED";
}(i = exports.HEADER_STATE || (exports.HEADER_STATE = {})), exports.SPECIAL_HEADERS = {
    connection: i.CONNECTION,
    "content-length": i.CONTENT_LENGTH,
    "proxy-connection": i.CONNECTION,
    "transfer-encoding": i.TRANSFER_ENCODING,
    upgrade: i.UPGRADE
};
