"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const a = require("./module-1455.js");
exports.isFieldSet = function(e, n) {
    const t = e.localName;
    if (e.repeated) return n[t].length > 0;
    if (e.oneof) return n[e.oneof.localName].case === t;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? void 0 !== n[t] : "enum" == e.kind ? n[t] !== e.T.values[0].no : !(0, a.isScalarZeroValue)(e.T, n[t]);
        case "message":
            return void 0 !== n[t];
        case "map":
            return Object.keys(n[t]).length > 0;
    }
}, exports.clearField = function(e, n) {
    const t = e.localName, s = !e.opt && !e.req;
    if (e.repeated) n[t] = [];
    else if (e.oneof) n[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            n[t] = {};
            break;
        case "enum":
            n[t] = s ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            n[t] = s ? (0, a.scalarZeroValue)(e.T, e.L) : void 0;
            break;
        case "message":
            n[t] = void 0;
    }
};
