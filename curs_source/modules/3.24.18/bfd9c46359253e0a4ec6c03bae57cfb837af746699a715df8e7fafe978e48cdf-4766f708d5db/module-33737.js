"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defer = void 0;
const n = require("./module-51078.js");
exports.defer = function(e) {
    return new n.Observable((t)=>{
        (0, n.from)(e()).subscribe(t);
    });
};
