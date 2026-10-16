Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LineSequence = void 0;
function n(e) {
    let t = 0;
    for(; t < e.length && (32 === e.charCodeAt(t) || 9 === e.charCodeAt(t));)t++;
    return t;
}
exports.LineSequence = class {
    constructor(e, t){
        this.trimmedHash = e, this.lines = t;
    }
    getElement(e) {
        return this.trimmedHash[e];
    }
    get length() {
        return this.trimmedHash.length;
    }
    getBoundaryScore(e) {
        return 1e3 - ((0 === e ? 0 : n(this.lines[e - 1])) + (e === this.lines.length ? 0 : n(this.lines[e])));
    }
    getText(e) {
        return this.lines.slice(e.start, e.endExclusive).join("\n");
    }
    isStronglyEqual(e, t) {
        return this.lines[e] === this.lines[t];
    }
};
