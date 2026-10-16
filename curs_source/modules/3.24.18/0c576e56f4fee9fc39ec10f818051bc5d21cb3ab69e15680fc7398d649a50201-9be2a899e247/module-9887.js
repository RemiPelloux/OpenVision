"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throwError = void 0;
const n = require("./module-1078.js");
exports.throwError = function(e) {
    return new n.Observable((t)=>{
        t.error(e());
    });
};
