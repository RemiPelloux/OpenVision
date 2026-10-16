Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const r = require("./module-455.js");
exports.isFieldSet = function(e, t) {
    const n = e.localName;
    if (e.repeated) return t[n].length > 0;
    if (e.oneof) return t[e.oneof.localName].case === n;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? void 0 !== t[n] : "enum" == e.kind ? t[n] !== e.T.values[0].no : !(0, r.isScalarZeroValue)(e.T, t[n]);
        case "message":
            return void 0 !== t[n];
        case "map":
            return Object.keys(t[n]).length > 0;
    }
}, exports.clearField = function(e, t) {
    const n = e.localName, o = !e.opt && !e.req;
    if (e.repeated) t[n] = [];
    else if (e.oneof) t[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            t[n] = {};
            break;
        case "enum":
            t[n] = o ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            t[n] = o ? (0, r.scalarZeroValue)(e.T, e.L) : void 0;
            break;
        case "message":
            t[n] = void 0;
    }
};
