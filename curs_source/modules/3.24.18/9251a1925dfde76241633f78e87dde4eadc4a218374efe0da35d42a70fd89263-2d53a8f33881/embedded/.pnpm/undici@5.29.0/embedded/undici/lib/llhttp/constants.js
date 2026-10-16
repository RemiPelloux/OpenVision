import { require_utils } from "./utils.js";
var __wakaru_require_constants4_cache;
export function require_constants4() {
if (__wakaru_require_constants4_cache) return __wakaru_require_constants4_cache;
var exports2 = {};
__wakaru_require_constants4_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.SPECIAL_HEADERS = exports2.HEADER_STATE = exports2.MINOR = exports2.MAJOR = exports2.CONNECTION_TOKEN_CHARS = exports2.HEADER_CHARS = exports2.TOKEN = exports2.STRICT_TOKEN = exports2.HEX = exports2.URL_CHAR = exports2.STRICT_URL_CHAR = exports2.USERINFO_CHARS = exports2.MARK = exports2.ALPHANUM = exports2.NUM = exports2.HEX_MAP = exports2.NUM_MAP = exports2.ALPHA = exports2.FINISH = exports2.H_METHOD_MAP = exports2.METHOD_MAP = exports2.METHODS_RTSP = exports2.METHODS_ICE = exports2.METHODS_HTTP = exports2.METHODS = exports2.LENIENT_FLAGS = exports2.FLAGS = exports2.TYPE = exports2.ERROR = void 0;
var utils_1 = require_utils();
var ERROR;
(function(ERROR2) {
    ERROR2[ERROR2["OK"] = 0] = "OK";
    ERROR2[ERROR2["INTERNAL"] = 1] = "INTERNAL";
    ERROR2[ERROR2["STRICT"] = 2] = "STRICT";
    ERROR2[ERROR2["LF_EXPECTED"] = 3] = "LF_EXPECTED";
    ERROR2[ERROR2["UNEXPECTED_CONTENT_LENGTH"] = 4] = "UNEXPECTED_CONTENT_LENGTH";
    ERROR2[ERROR2["CLOSED_CONNECTION"] = 5] = "CLOSED_CONNECTION";
    ERROR2[ERROR2["INVALID_METHOD"] = 6] = "INVALID_METHOD";
    ERROR2[ERROR2["INVALID_URL"] = 7] = "INVALID_URL";
    ERROR2[ERROR2["INVALID_CONSTANT"] = 8] = "INVALID_CONSTANT";
    ERROR2[ERROR2["INVALID_VERSION"] = 9] = "INVALID_VERSION";
    ERROR2[ERROR2["INVALID_HEADER_TOKEN"] = 10] = "INVALID_HEADER_TOKEN";
    ERROR2[ERROR2["INVALID_CONTENT_LENGTH"] = 11] = "INVALID_CONTENT_LENGTH";
    ERROR2[ERROR2["INVALID_CHUNK_SIZE"] = 12] = "INVALID_CHUNK_SIZE";
    ERROR2[ERROR2["INVALID_STATUS"] = 13] = "INVALID_STATUS";
    ERROR2[ERROR2["INVALID_EOF_STATE"] = 14] = "INVALID_EOF_STATE";
    ERROR2[ERROR2["INVALID_TRANSFER_ENCODING"] = 15] = "INVALID_TRANSFER_ENCODING";
    ERROR2[ERROR2["CB_MESSAGE_BEGIN"] = 16] = "CB_MESSAGE_BEGIN";
    ERROR2[ERROR2["CB_HEADERS_COMPLETE"] = 17] = "CB_HEADERS_COMPLETE";
    ERROR2[ERROR2["CB_MESSAGE_COMPLETE"] = 18] = "CB_MESSAGE_COMPLETE";
    ERROR2[ERROR2["CB_CHUNK_HEADER"] = 19] = "CB_CHUNK_HEADER";
    ERROR2[ERROR2["CB_CHUNK_COMPLETE"] = 20] = "CB_CHUNK_COMPLETE";
    ERROR2[ERROR2["PAUSED"] = 21] = "PAUSED";
    ERROR2[ERROR2["PAUSED_UPGRADE"] = 22] = "PAUSED_UPGRADE";
    ERROR2[ERROR2["PAUSED_H2_UPGRADE"] = 23] = "PAUSED_H2_UPGRADE";
    ERROR2[ERROR2["USER"] = 24] = "USER";
})(ERROR = exports2.ERROR || (exports2.ERROR = {}));
var TYPE;
(function(TYPE2) {
    TYPE2[TYPE2["BOTH"] = 0] = "BOTH";
    TYPE2[TYPE2["REQUEST"] = 1] = "REQUEST";
    TYPE2[TYPE2["RESPONSE"] = 2] = "RESPONSE";
})(TYPE = exports2.TYPE || (exports2.TYPE = {}));
var FLAGS;
(function(FLAGS2) {
    FLAGS2[FLAGS2["CONNECTION_KEEP_ALIVE"] = 1] = "CONNECTION_KEEP_ALIVE";
    FLAGS2[FLAGS2["CONNECTION_CLOSE"] = 2] = "CONNECTION_CLOSE";
    FLAGS2[FLAGS2["CONNECTION_UPGRADE"] = 4] = "CONNECTION_UPGRADE";
    FLAGS2[FLAGS2["CHUNKED"] = 8] = "CHUNKED";
    FLAGS2[FLAGS2["UPGRADE"] = 16] = "UPGRADE";
    FLAGS2[FLAGS2["CONTENT_LENGTH"] = 32] = "CONTENT_LENGTH";
    FLAGS2[FLAGS2["SKIPBODY"] = 64] = "SKIPBODY";
    FLAGS2[FLAGS2["TRAILING"] = 128] = "TRAILING";
    FLAGS2[FLAGS2["TRANSFER_ENCODING"] = 512] = "TRANSFER_ENCODING";
})(FLAGS = exports2.FLAGS || (exports2.FLAGS = {}));
var LENIENT_FLAGS;
(function(LENIENT_FLAGS2) {
    LENIENT_FLAGS2[LENIENT_FLAGS2["HEADERS"] = 1] = "HEADERS";
    LENIENT_FLAGS2[LENIENT_FLAGS2["CHUNKED_LENGTH"] = 2] = "CHUNKED_LENGTH";
    LENIENT_FLAGS2[LENIENT_FLAGS2["KEEP_ALIVE"] = 4] = "KEEP_ALIVE";
})(LENIENT_FLAGS = exports2.LENIENT_FLAGS || (exports2.LENIENT_FLAGS = {}));
var METHODS;
(function(METHODS2) {
    METHODS2[METHODS2["DELETE"] = 0] = "DELETE";
    METHODS2[METHODS2["GET"] = 1] = "GET";
    METHODS2[METHODS2["HEAD"] = 2] = "HEAD";
    METHODS2[METHODS2["POST"] = 3] = "POST";
    METHODS2[METHODS2["PUT"] = 4] = "PUT";
    METHODS2[METHODS2["CONNECT"] = 5] = "CONNECT";
    METHODS2[METHODS2["OPTIONS"] = 6] = "OPTIONS";
    METHODS2[METHODS2["TRACE"] = 7] = "TRACE";
    METHODS2[METHODS2["COPY"] = 8] = "COPY";
    METHODS2[METHODS2["LOCK"] = 9] = "LOCK";
    METHODS2[METHODS2["MKCOL"] = 10] = "MKCOL";
    METHODS2[METHODS2["MOVE"] = 11] = "MOVE";
    METHODS2[METHODS2["PROPFIND"] = 12] = "PROPFIND";
    METHODS2[METHODS2["PROPPATCH"] = 13] = "PROPPATCH";
    METHODS2[METHODS2["SEARCH"] = 14] = "SEARCH";
    METHODS2[METHODS2["UNLOCK"] = 15] = "UNLOCK";
    METHODS2[METHODS2["BIND"] = 16] = "BIND";
    METHODS2[METHODS2["REBIND"] = 17] = "REBIND";
    METHODS2[METHODS2["UNBIND"] = 18] = "UNBIND";
    METHODS2[METHODS2["ACL"] = 19] = "ACL";
    METHODS2[METHODS2["REPORT"] = 20] = "REPORT";
    METHODS2[METHODS2["MKACTIVITY"] = 21] = "MKACTIVITY";
    METHODS2[METHODS2["CHECKOUT"] = 22] = "CHECKOUT";
    METHODS2[METHODS2["MERGE"] = 23] = "MERGE";
    METHODS2[METHODS2["M-SEARCH"] = 24] = "M-SEARCH";
    METHODS2[METHODS2["NOTIFY"] = 25] = "NOTIFY";
    METHODS2[METHODS2["SUBSCRIBE"] = 26] = "SUBSCRIBE";
    METHODS2[METHODS2["UNSUBSCRIBE"] = 27] = "UNSUBSCRIBE";
    METHODS2[METHODS2["PATCH"] = 28] = "PATCH";
    METHODS2[METHODS2["PURGE"] = 29] = "PURGE";
    METHODS2[METHODS2["MKCALENDAR"] = 30] = "MKCALENDAR";
    METHODS2[METHODS2["LINK"] = 31] = "LINK";
    METHODS2[METHODS2["UNLINK"] = 32] = "UNLINK";
    METHODS2[METHODS2["SOURCE"] = 33] = "SOURCE";
    METHODS2[METHODS2["PRI"] = 34] = "PRI";
    METHODS2[METHODS2["DESCRIBE"] = 35] = "DESCRIBE";
    METHODS2[METHODS2["ANNOUNCE"] = 36] = "ANNOUNCE";
    METHODS2[METHODS2["SETUP"] = 37] = "SETUP";
    METHODS2[METHODS2["PLAY"] = 38] = "PLAY";
    METHODS2[METHODS2["PAUSE"] = 39] = "PAUSE";
    METHODS2[METHODS2["TEARDOWN"] = 40] = "TEARDOWN";
    METHODS2[METHODS2["GET_PARAMETER"] = 41] = "GET_PARAMETER";
    METHODS2[METHODS2["SET_PARAMETER"] = 42] = "SET_PARAMETER";
    METHODS2[METHODS2["REDIRECT"] = 43] = "REDIRECT";
    METHODS2[METHODS2["RECORD"] = 44] = "RECORD";
    METHODS2[METHODS2["FLUSH"] = 45] = "FLUSH";
})(METHODS = exports2.METHODS || (exports2.METHODS = {}));
exports2.METHODS_HTTP = [
    METHODS.DELETE,
    METHODS.GET,
    METHODS.HEAD,
    METHODS.POST,
    METHODS.PUT,
    METHODS.CONNECT,
    METHODS.OPTIONS,
    METHODS.TRACE,
    METHODS.COPY,
    METHODS.LOCK,
    METHODS.MKCOL,
    METHODS.MOVE,
    METHODS.PROPFIND,
    METHODS.PROPPATCH,
    METHODS.SEARCH,
    METHODS.UNLOCK,
    METHODS.BIND,
    METHODS.REBIND,
    METHODS.UNBIND,
    METHODS.ACL,
    METHODS.REPORT,
    METHODS.MKACTIVITY,
    METHODS.CHECKOUT,
    METHODS.MERGE,
    METHODS["M-SEARCH"],
    METHODS.NOTIFY,
    METHODS.SUBSCRIBE,
    METHODS.UNSUBSCRIBE,
    METHODS.PATCH,
    METHODS.PURGE,
    METHODS.MKCALENDAR,
    METHODS.LINK,
    METHODS.UNLINK,
    METHODS.PRI,
    METHODS.SOURCE
];
exports2.METHODS_ICE = [
    METHODS.SOURCE
];
exports2.METHODS_RTSP = [
    METHODS.OPTIONS,
    METHODS.DESCRIBE,
    METHODS.ANNOUNCE,
    METHODS.SETUP,
    METHODS.PLAY,
    METHODS.PAUSE,
    METHODS.TEARDOWN,
    METHODS.GET_PARAMETER,
    METHODS.SET_PARAMETER,
    METHODS.REDIRECT,
    METHODS.RECORD,
    METHODS.FLUSH,
    METHODS.GET,
    METHODS.POST
];
exports2.METHOD_MAP = utils_1.enumToMap(METHODS);
exports2.H_METHOD_MAP = {};
Object.keys(exports2.METHOD_MAP).forEach((key)=>{
    if (/^H/.test(key)) {
        exports2.H_METHOD_MAP[key] = exports2.METHOD_MAP[key];
    }
});
var FINISH;
(function(FINISH2) {
    FINISH2[FINISH2["SAFE"] = 0] = "SAFE";
    FINISH2[FINISH2["SAFE_WITH_CB"] = 1] = "SAFE_WITH_CB";
    FINISH2[FINISH2["UNSAFE"] = 2] = "UNSAFE";
})(FINISH = exports2.FINISH || (exports2.FINISH = {}));
exports2.ALPHA = [];
for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++){
    exports2.ALPHA.push(String.fromCharCode(i));
    exports2.ALPHA.push(String.fromCharCode(i + 32));
}
exports2.NUM_MAP = {
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
};
exports2.HEX_MAP = {
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
};
exports2.NUM = [
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
];
exports2.ALPHANUM = exports2.ALPHA.concat(exports2.NUM);
exports2.MARK = [
    "-",
    "_",
    ".",
    "!",
    "~",
    "*",
    "'",
    "(",
    ")"
];
exports2.USERINFO_CHARS = exports2.ALPHANUM.concat(exports2.MARK).concat([
    "%",
    ";",
    ":",
    "&",
    "=",
    "+",
    "$",
    ","
]);
exports2.STRICT_URL_CHAR = [
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
].concat(exports2.ALPHANUM);
exports2.URL_CHAR = exports2.STRICT_URL_CHAR.concat([
    "	",
    "\f"
]);
for(let i = 128; i <= 255; i++){
    exports2.URL_CHAR.push(i);
}
exports2.HEX = exports2.NUM.concat([
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
]);
exports2.STRICT_TOKEN = [
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
].concat(exports2.ALPHANUM);
exports2.TOKEN = exports2.STRICT_TOKEN.concat([
    " "
]);
exports2.HEADER_CHARS = [
    "	"
];
for(let i = 32; i <= 255; i++){
    if (i !== 127) {
        exports2.HEADER_CHARS.push(i);
    }
}
exports2.CONNECTION_TOKEN_CHARS = exports2.HEADER_CHARS.filter((c)=>c !== 44);
exports2.MAJOR = exports2.NUM_MAP;
exports2.MINOR = exports2.MAJOR;
var HEADER_STATE;
(function(HEADER_STATE2) {
    HEADER_STATE2[HEADER_STATE2["GENERAL"] = 0] = "GENERAL";
    HEADER_STATE2[HEADER_STATE2["CONNECTION"] = 1] = "CONNECTION";
    HEADER_STATE2[HEADER_STATE2["CONTENT_LENGTH"] = 2] = "CONTENT_LENGTH";
    HEADER_STATE2[HEADER_STATE2["TRANSFER_ENCODING"] = 3] = "TRANSFER_ENCODING";
    HEADER_STATE2[HEADER_STATE2["UPGRADE"] = 4] = "UPGRADE";
    HEADER_STATE2[HEADER_STATE2["CONNECTION_KEEP_ALIVE"] = 5] = "CONNECTION_KEEP_ALIVE";
    HEADER_STATE2[HEADER_STATE2["CONNECTION_CLOSE"] = 6] = "CONNECTION_CLOSE";
    HEADER_STATE2[HEADER_STATE2["CONNECTION_UPGRADE"] = 7] = "CONNECTION_UPGRADE";
    HEADER_STATE2[HEADER_STATE2["TRANSFER_ENCODING_CHUNKED"] = 8] = "TRANSFER_ENCODING_CHUNKED";
})(HEADER_STATE = exports2.HEADER_STATE || (exports2.HEADER_STATE = {}));
exports2.SPECIAL_HEADERS = {
    "connection": HEADER_STATE.CONNECTION,
    "content-length": HEADER_STATE.CONTENT_LENGTH,
    "proxy-connection": HEADER_STATE.CONNECTION,
    "transfer-encoding": HEADER_STATE.TRANSFER_ENCODING,
    "upgrade": HEADER_STATE.UPGRADE
};

return exports2;
}
