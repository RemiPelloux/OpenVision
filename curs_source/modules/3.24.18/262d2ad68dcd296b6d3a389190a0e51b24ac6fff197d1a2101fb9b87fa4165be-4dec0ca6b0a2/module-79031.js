"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.argsOrArgArray = void 0;
const { isArray: r } = Array;
exports.argsOrArgArray = function(e) {
    return 1 === e.length && r(e[0]) ? e[0] : e;
};
