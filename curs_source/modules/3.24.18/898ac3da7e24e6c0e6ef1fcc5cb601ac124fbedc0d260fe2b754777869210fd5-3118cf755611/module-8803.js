"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const t = require("./module-1455.js");
exports.isFieldSet = function(e, n) {
    const a = e.localName;
    if (e.repeated) return n[a].length > 0;
    if (e.oneof) return n[e.oneof.localName].case === a;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? void 0 !== n[a] : "enum" == e.kind ? n[a] !== e.T.values[0].no : !(0, t.isScalarZeroValue)(e.T, n[a]);
        case "message":
            return void 0 !== n[a];
        case "map":
            return Object.keys(n[a]).length > 0;
    }
}, exports.clearField = function(e, n) {
    const a = e.localName, s = !e.opt && !e.req;
    if (e.repeated) n[a] = [];
    else if (e.oneof) n[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            n[a] = {};
            break;
        case "enum":
            n[a] = s ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            n[a] = s ? (0, t.scalarZeroValue)(e.T, e.L) : void 0;
            break;
        case "message":
            n[a] = void 0;
    }
};
