"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.replaceBaseUrlWithApi2 = function(t) {
    return t = (t = (t = (t = t.replace("api3.cursor.sh", "api2.cursor.sh")).replace("api4.cursor.sh", "api2.cursor.sh")).replace(/^https:\/\/.*\.gcpp\.cursor\.sh/, "https://api2.cursor.sh")).replace(/^https:\/\/.*\.api5\.cursor\.sh/, "https://api2.cursor.sh");
}, exports.isBaseUrlHttp2 = function(t) {
    return t.includes("api3.cursor.sh") || t.includes("api4.cursor.sh") || t.includes("gcpp.cursor.sh") || t.includes("api5.cursor.sh");
};
