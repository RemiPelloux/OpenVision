Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defer = void 0;
const s = require("./module-1078.js");
exports.defer = function(e) {
    return new s.Observable((a)=>{
        (0, s.from)(e()).subscribe(a);
    });
};
