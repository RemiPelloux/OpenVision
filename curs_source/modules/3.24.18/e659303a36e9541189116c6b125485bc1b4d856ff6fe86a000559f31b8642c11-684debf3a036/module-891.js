Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LineRangeFragment = exports.Array2D = void 0, exports.isSpace = function(e) {
    return 32 === e || 9 === e;
};
exports.Array2D = class {
    constructor(e, t){
        this.width = e, this.height = t, this.array = [], this.array = new Array(e * t);
    }
    get(e, t) {
        return this.array[e + t * this.width];
    }
    set(e, t, n) {
        this.array[e + t * this.width] = n;
    }
};
class n {
    static{
        this.chrKeys = new Map;
    }
    static getKey(e) {
        let t = this.chrKeys.get(e);
        return void 0 === t && (t = this.chrKeys.size, this.chrKeys.set(e, t)), t;
    }
    constructor(e, t, i){
        this.range = e, this.lines = t, this.source = i, this.histogram = [];
        let r = 0;
        for(let i = e.startLineNumber - 1; i < e.endLineNumberExclusive - 1; i++){
            const e = t[i];
            for(let t = 0; t < e.length; t++){
                r++;
                const i = e[t], s = n.getKey(i);
                this.histogram[s] = (this.histogram[s] || 0) + 1;
            }
            r++;
            const s = n.getKey("\n");
            this.histogram[s] = (this.histogram[s] || 0) + 1;
        }
        this.totalCount = r;
    }
    computeSimilarity(e) {
        let t = 0;
        const n = Math.max(this.histogram.length, e.histogram.length);
        for(let i = 0; i < n; i++)t += Math.abs((this.histogram[i] ?? 0) - (e.histogram[i] ?? 0));
        return 1 - t / (this.totalCount + e.totalCount);
    }
}
exports.LineRangeFragment = n;
