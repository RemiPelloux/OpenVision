import { require_mime_db } from "../../../mime-db@1.54.0/node_modules/mime-db/index.js";
import { require_mimeScore } from "./mimeScore.js";
var __wakaru_require_mime_types_cache;
export function require_mime_types() {
if (__wakaru_require_mime_types_cache) return __wakaru_require_mime_types_cache;
var exports2 = {};
__wakaru_require_mime_types_cache = exports2;
"use strict";
var db = require_mime_db();
var extname6 = require("path").extname;
var mimeScore = require_mimeScore();
var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
exports2.charset = charset2;
exports2.charsets = {
    lookup: charset2
};
exports2.contentType = contentType;
exports2.extension = extension3;
exports2.extensions = Object.create(null);
exports2.lookup = lookup3;
exports2.types = Object.create(null);
exports2._extensionConflicts = [];
populateMaps(exports2.extensions, exports2.types);
function charset2(type2) {
    if (!type2 || typeof type2 !== "string") {
        return false;
    }
    var match2 = EXTRACT_TYPE_REGEXP.exec(type2);
    var mime2 = match2 && db[match2[1].toLowerCase()];
    if (mime2 && mime2.charset) {
        return mime2.charset;
    }
    if (match2 && TEXT_TYPE_REGEXP.test(match2[1])) {
        return "UTF-8";
    }
    return false;
}
function contentType(str3) {
    if (!str3 || typeof str3 !== "string") {
        return false;
    }
    var mime2 = str3.indexOf("/") === -1 ? exports2.lookup(str3) : str3;
    if (!mime2) {
        return false;
    }
    if (mime2.indexOf("charset") === -1) {
        var charset3 = exports2.charset(mime2);
        if (charset3) mime2 += "; charset=" + charset3.toLowerCase();
    }
    return mime2;
}
function extension3(type2) {
    if (!type2 || typeof type2 !== "string") {
        return false;
    }
    var match2 = EXTRACT_TYPE_REGEXP.exec(type2);
    var exts = match2 && exports2.extensions[match2[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
function lookup3(path64) {
    if (!path64 || typeof path64 !== "string") {
        return false;
    }
    var extension4 = extname6("x." + path64).toLowerCase().slice(1);
    if (!extension4) {
        return false;
    }
    return exports2.types[extension4] || false;
}
function populateMaps(extensions, types3) {
    Object.keys(db).forEach(function forEachMimeType(type2) {
        var mime2 = db[type2];
        var exts = mime2.extensions;
        if (!exts || !exts.length) {
            return;
        }
        extensions[type2] = exts;
        for(var i = 0; i < exts.length; i++){
            var extension4 = exts[i];
            types3[extension4] = _preferredType(extension4, types3[extension4], type2);
            const legacyType = _preferredTypeLegacy(extension4, types3[extension4], type2);
            if (legacyType !== types3[extension4]) {
                exports2._extensionConflicts.push([
                    extension4,
                    legacyType,
                    types3[extension4]
                ]);
            }
        }
    });
}
function _preferredType(ext2, type0, type1) {
    var score0 = type0 ? mimeScore(type0, db[type0].source) : 0;
    var score1 = type1 ? mimeScore(type1, db[type1].source) : 0;
    return score0 > score1 ? type0 : type1;
}
function _preferredTypeLegacy(ext2, type0, type1) {
    var SOURCE_RANK = [
        "nginx",
        "apache",
        void 0,
        "iana"
    ];
    var score0 = type0 ? SOURCE_RANK.indexOf(db[type0].source) : 0;
    var score1 = type1 ? SOURCE_RANK.indexOf(db[type1].source) : 0;
    if (exports2.types[extension3] !== "application/octet-stream" && (score0 > score1 || score0 === score1 && exports2.types[extension3]?.slice(0, 12) === "application/")) {
        return type0;
    }
    return score0 > score1 ? type0 : type1;
}

return exports2;
}
