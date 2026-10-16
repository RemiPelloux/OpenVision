Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EmptyError = void 0;
class n extends Error {
    constructor(){
        super("no elements in sequence"), this.name = "EmptyError";
    }
}
exports.EmptyError = n;
