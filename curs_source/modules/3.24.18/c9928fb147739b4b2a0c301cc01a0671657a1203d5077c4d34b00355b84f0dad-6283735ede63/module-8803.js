Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearField = exports.isFieldSet = void 0;
const s = require("./module-1455.js");
exports.isFieldSet = function(e, a) {
    const n = e.localName;
    if (e.repeated) return a[n].length > 0;
    if (e.oneof) return a[e.oneof.localName].case === n;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? void 0 !== a[n] : "enum" == e.kind ? a[n] !== e.T.values[0].no : !(0, s.isScalarZeroValue)(e.T, a[n]);
        case "message":
            return void 0 !== a[n];
        case "map":
            return Object.keys(a[n]).length > 0;
    }
}, exports.clearField = function(e, a) {
    const n = e.localName, o = !e.opt && !e.req;
    if (e.repeated) a[n] = [];
    else if (e.oneof) a[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            a[n] = {};
            break;
        case "enum":
            a[n] = o ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            a[n] = o ? (0, s.scalarZeroValue)(e.T, e.L) : void 0;
            break;
        case "message":
            a[n] = void 0;
    }
};
