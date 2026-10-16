Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CachedFunction = exports.LRUCachedFunction = exports.Cache = void 0, exports.identity = r;
const i = require("./module-68.js");
function r(e) {
    return e;
}
exports.Cache = class {
    constructor(e){
        this.task = e, this.result = null;
    }
    get() {
        if (this.result) return this.result;
        const e = new i.CancellationTokenSource, t = this.task(e.token);
        return this.result = {
            promise: t,
            dispose: ()=>{
                this.result = null, e.cancel(), e.dispose();
            }
        }, this.result;
    }
};
exports.LRUCachedFunction = class {
    constructor(e, t){
        this.lastCache = void 0, this.lastArgKey = void 0, "function" == typeof e ? (this._fn = e, this._computeKey = r) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get(e) {
        const t = this._computeKey(e);
        return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
    }
};
exports.CachedFunction = class {
    get cachedValues() {
        return this._map;
    }
    constructor(e, t){
        this._map = new Map, this._map2 = new Map, "function" == typeof e ? (this._fn = e, this._computeKey = r) : (this._fn = t, this._computeKey = e.getCacheKey);
    }
    get(e) {
        const t = this._computeKey(e);
        if (this._map2.has(t)) return this._map2.get(t);
        const n = this._fn(e);
        return this._map.set(e, n), this._map2.set(t, n), n;
    }
};
