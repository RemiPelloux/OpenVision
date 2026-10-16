Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SequenceError = void 0;
class n extends Error {
    constructor(e){
        super(e), this.name = "SequenceError";
    }
}
exports.SequenceError = n;
