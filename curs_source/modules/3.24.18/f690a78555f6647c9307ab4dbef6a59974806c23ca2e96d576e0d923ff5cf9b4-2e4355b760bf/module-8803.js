"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const n = require("./module-1455.js");
exports.isFieldSet = function(e, A) {
    const t = e.localName;
    if (e.repeated) return A[t].length > 0;
    if (e.oneof) return A[e.oneof.localName].case === t;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? void 0 !== A[t] : "enum" == e.kind ? A[t] !== e.T.values[0].no : !(0, n.isScalarZeroValue)(e.T, A[t]);
        case "message":
            return void 0 !== A[t];
        case "map":
            return Object.keys(A[t]).length > 0;
    }
}, exports.clearField = function(e, A) {
    const t = e.localName, r = !e.opt && !e.req;
    if (e.repeated) A[t] = [];
    else if (e.oneof) A[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            A[t] = {};
            break;
        case "enum":
            A[t] = r ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            A[t] = r ? (0, n.scalarZeroValue)(e.T, e.L) : void 0;
            break;
        case "message":
            A[t] = void 0;
    }
};
