Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MovedText = exports.LinesDiff = void 0;
exports.LinesDiff = class {
    constructor(e, t, n){
        this.changes = e, this.moves = t, this.hitTimeout = n;
    }
};
class n {
    constructor(e, t){
        this.lineRangeMapping = e, this.changes = t;
    }
    flip() {
        return new n(this.lineRangeMapping.flip(), this.changes.map((e)=>e.flip()));
    }
}
exports.MovedText = n;
