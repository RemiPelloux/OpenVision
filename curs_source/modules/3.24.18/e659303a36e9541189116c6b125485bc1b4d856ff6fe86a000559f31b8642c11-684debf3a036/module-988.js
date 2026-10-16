Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DiffChange = void 0;
exports.DiffChange = class {
    constructor(e, t, n, i){
        this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = i;
    }
    getOriginalEnd() {
        return this.originalStart + this.originalLength;
    }
    getModifiedEnd() {
        return this.modifiedStart + this.modifiedLength;
    }
};
