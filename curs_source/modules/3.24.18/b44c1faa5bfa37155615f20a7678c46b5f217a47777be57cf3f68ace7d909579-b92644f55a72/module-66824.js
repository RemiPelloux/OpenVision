"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-79657.js"), s = {
    keyword: [
        "then",
        "else"
    ],
    schemaType: [
        "object",
        "boolean"
    ],
    code ({ keyword: e, parentSchema: t, it: r }) {
        void 0 === t.if && (0, n.checkStrictMode)(r, `"${e}" without "if" is ignored`);
    }
};
exports.default = s;
