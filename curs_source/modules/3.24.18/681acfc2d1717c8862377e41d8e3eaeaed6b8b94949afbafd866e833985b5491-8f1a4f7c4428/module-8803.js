"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const n = require("./module-1455.js");
exports.isFieldSet = function(e, t) {
    const A = e.localName;
    if (e.repeated) return t[A].length > 0;
    if (e.oneof) return t[e.oneof.localName].case === A;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? void 0 !== t[A] : "enum" == e.kind ? t[A] !== e.T.values[0].no : !(0, n.isScalarZeroValue)(e.T, t[A]);
        case "message":
            return void 0 !== t[A];
        case "map":
            return Object.keys(t[A]).length > 0;
    }
}, exports.clearField = function(e, t) {
    const A = e.localName, r = !e.opt && !e.req;
    if (e.repeated) t[A] = [];
    else if (e.oneof) t[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            t[A] = {};
            break;
        case "enum":
            t[A] = r ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            t[A] = r ? (0, n.scalarZeroValue)(e.T, e.L) : void 0;
            break;
        case "message":
            t[A] = void 0;
    }
};
