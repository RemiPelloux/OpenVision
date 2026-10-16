"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const n = require("./module-1455.js");
exports.isFieldSet = function(t, e) {
    const r = t.localName;
    if (t.repeated) return e[r].length > 0;
    if (t.oneof) return e[t.oneof.localName].case === r;
    switch(t.kind){
        case "enum":
        case "scalar":
            return t.opt || t.req ? void 0 !== e[r] : "enum" == t.kind ? e[r] !== t.T.values[0].no : !(0, n.isScalarZeroValue)(t.T, e[r]);
        case "message":
            return void 0 !== e[r];
        case "map":
            return Object.keys(e[r]).length > 0;
    }
}, exports.clearField = function(t, e) {
    const r = t.localName, s = !t.opt && !t.req;
    if (t.repeated) e[r] = [];
    else if (t.oneof) e[t.oneof.localName] = {
        case: void 0
    };
    else switch(t.kind){
        case "map":
            e[r] = {};
            break;
        case "enum":
            e[r] = s ? t.T.values[0].no : void 0;
            break;
        case "scalar":
            e[r] = s ? (0, n.scalarZeroValue)(t.T, t.L) : void 0;
            break;
        case "message":
            e[r] = void 0;
    }
};
