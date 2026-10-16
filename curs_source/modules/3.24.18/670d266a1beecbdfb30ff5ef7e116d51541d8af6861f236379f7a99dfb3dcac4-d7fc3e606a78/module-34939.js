"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StreamReader = exports.EndOfStreamError = void 0;
const a = require("./module-91524.js"), n = require("./module-28467.js");
var r = require("./module-91524.js");
Object.defineProperty(exports, "EndOfStreamError", {
    enumerable: !0,
    get: function() {
        return r.EndOfStreamError;
    }
});
exports.StreamReader = class {
    constructor(e){
        if (this.s = e, this.deferred = null, this.endOfStream = !1, this.peekQueue = [], !e.read || !e.once) throw new Error("Expected an instance of stream.Readable");
        this.s.once("end", ()=>this.reject(new a.EndOfStreamError)), this.s.once("error", (e)=>this.reject(e)), this.s.once("close", ()=>this.reject(new Error("Stream closed")));
    }
    async peek(e, t, i) {
        const a = await this.read(e, t, i);
        return this.peekQueue.push(e.subarray(t, t + a)), a;
    }
    async read(e, t, i) {
        if (0 === i) return 0;
        if (0 === this.peekQueue.length && this.endOfStream) throw new a.EndOfStreamError;
        let n = i, r = 0;
        for(; this.peekQueue.length > 0 && n > 0;){
            const i = this.peekQueue.pop();
            if (!i) throw new Error("peekData should be defined");
            const a = Math.min(i.length, n);
            e.set(i.subarray(0, a), t + r), r += a, n -= a, a < i.length && this.peekQueue.push(i.subarray(a));
        }
        for(; n > 0 && !this.endOfStream;){
            const i = Math.min(n, 1048576), a = await this.readFromStream(e, t + r, i);
            if (r += a, a < i) break;
            n -= a;
        }
        return r;
    }
    async readFromStream(e, t, i) {
        const a = this.s.read(i);
        if (a) return e.set(a, t), a.length;
        {
            const a = {
                buffer: e,
                offset: t,
                length: i,
                deferred: new n.Deferred
            };
            return this.deferred = a.deferred, this.s.once("readable", ()=>{
                this.readDeferred(a);
            }), a.deferred.promise;
        }
    }
    readDeferred(e) {
        const t = this.s.read(e.length);
        t ? (e.buffer.set(t, e.offset), e.deferred.resolve(t.length), this.deferred = null) : this.s.once("readable", ()=>{
            this.readDeferred(e);
        });
    }
    reject(e) {
        this.endOfStream = !0, this.deferred && (this.deferred.reject(e), this.deferred = null);
    }
};
