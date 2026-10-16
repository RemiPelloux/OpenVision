"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.replaceBaseUrlWithApi2 = function(e) {
    return e = (e = (e = (e = e.replace("api3.cursor.sh", "api2.cursor.sh")).replace("api4.cursor.sh", "api2.cursor.sh")).replace(/^https:\/\/.*\.gcpp\.cursor\.sh/, "https://api2.cursor.sh")).replace(/^https:\/\/.*\.api5\.cursor\.sh/, "https://api2.cursor.sh");
}, exports.isBaseUrlHttp2 = function(e) {
    return e.includes("api3.cursor.sh") || e.includes("api4.cursor.sh") || e.includes("gcpp.cursor.sh") || e.includes("api5.cursor.sh");
};
