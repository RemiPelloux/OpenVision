"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromSubscribable = void 0;
const n = require("./module-1078.js");
exports.fromSubscribable = function(e) {
    return new n.Observable((t)=>e.subscribe(t));
};
