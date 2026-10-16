Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.throwError = void 0;
const s = require("./module-1078.js");
exports.throwError = function(e) {
    return new s.Observable((a)=>{
        a.error(e());
    });
};
