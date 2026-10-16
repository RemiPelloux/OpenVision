Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NotFoundError = void 0;
class n extends Error {
    constructor(e){
        super(e), this.name = "NotFoundError";
    }
}
exports.NotFoundError = n;
