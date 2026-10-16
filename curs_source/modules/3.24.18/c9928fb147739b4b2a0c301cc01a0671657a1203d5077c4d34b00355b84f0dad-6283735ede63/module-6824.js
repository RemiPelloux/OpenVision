Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromSubscribable = void 0;
const s = require("./module-1078.js");
exports.fromSubscribable = function(e) {
    return new s.Observable((a)=>e.subscribe(a));
};
