"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const n = require("./module-31455.js");
exports.isFieldSet = function(e, t) {
    const r = e.localName;
    if (e.repeated) return t[r].length > 0;
    if (e.oneof) return t[e.oneof.localName].case === r;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? void 0 !== t[r] : "enum" == e.kind ? t[r] !== e.T.values[0].no : !(0, n.isScalarZeroValue)(e.T, t[r]);
        case "message":
            return void 0 !== t[r];
        case "map":
            return Object.keys(t[r]).length > 0;
    }
}, exports.clearField = function(e, t) {
    const r = e.localName, o = !e.opt && !e.req;
    if (e.repeated) t[r] = [];
    else if (e.oneof) t[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            t[r] = {};
            break;
        case "enum":
            t[r] = o ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            t[r] = o ? (0, n.scalarZeroValue)(e.T, e.L) : void 0;
            break;
        case "message":
            t[r] = void 0;
    }
};
