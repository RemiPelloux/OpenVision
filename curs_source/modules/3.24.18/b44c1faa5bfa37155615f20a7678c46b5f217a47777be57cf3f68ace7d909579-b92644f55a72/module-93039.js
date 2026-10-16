"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.validateValue = exports.validateKey = void 0;
const r = "[_0-9a-z-*/]", n = new RegExp(`^(?:${`[a-z]${r}{0,255}`}|${`[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`})$`), s = /^[ -~]{0,255}[!-~]$/, o = /,|=/;
exports.validateKey = function(e) {
    return n.test(e);
}, exports.validateValue = function(e) {
    return s.test(e) && !o.test(e);
};
