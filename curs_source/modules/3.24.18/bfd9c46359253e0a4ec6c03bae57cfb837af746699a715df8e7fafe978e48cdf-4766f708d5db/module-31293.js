"use strict";
const n = require("./module-43106.js"), s = require("./module-39796.js"), o = require("./module-29597.js"), { kStatusCode: i } = require("./module-78864.js"), a = Buffer[Symbol.species], c = Buffer.from([
    0,
    0,
    255,
    255
]), l = Symbol("permessage-deflate"), u = Symbol("total-length"), d = Symbol("callback"), p = Symbol("buffers"), m = Symbol("error");
let h;
function f(e) {
    this[p].push(e), this[u] += e.length;
}
function g(e) {
    this[u] += e.length, this[l]._maxPayload < 1 || this[u] <= this[l]._maxPayload ? this[p].push(e) : (this[m] = new RangeError("Max payload size exceeded"), this[m].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[m][i] = 1009, this.removeListener("data", g), this.reset());
}
function y(e) {
    this[l]._inflate = null, this[m] ? this[d](this[m]) : (e[i] = 1007, this[d](e));
}
module.exports = class {
    constructor(e){
        if (this._options = e || {}, this._threshold = void 0 !== this._options.threshold ? this._options.threshold : 1024, this._maxPayload = 0 | this._options.maxPayload, this._isServer = !!this._options.isServer, this._deflate = null, this._inflate = null, this.params = null, !h) {
            const e = void 0 !== this._options.concurrencyLimit ? this._options.concurrencyLimit : 10;
            h = new o(e);
        }
    }
    static get extensionName() {
        return "permessage-deflate";
    }
    offer() {
        const e = {};
        return this._options.serverNoContextTakeover && (e.server_no_context_takeover = !0), this._options.clientNoContextTakeover && (e.client_no_context_takeover = !0), this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e.client_max_window_bits = this._options.clientMaxWindowBits : null == this._options.clientMaxWindowBits && (e.client_max_window_bits = !0), e;
    }
    accept(e) {
        return e = this.normalizeParams(e), this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e), this.params;
    }
    cleanup() {
        if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
            const e = this._deflate[d];
            this._deflate.close(), this._deflate = null, e && e(new Error("The deflate stream was closed while data was being processed"));
        }
    }
    acceptAsServer(e) {
        const t = this._options, r = e.find((e)=>!(!1 === t.serverNoContextTakeover && e.server_no_context_takeover || e.server_max_window_bits && (!1 === t.serverMaxWindowBits || "number" == typeof t.serverMaxWindowBits && t.serverMaxWindowBits > e.server_max_window_bits) || "number" == typeof t.clientMaxWindowBits && ("number" == typeof e.client_max_window_bits ? t.clientMaxWindowBits > e.client_max_window_bits : !e.client_max_window_bits)));
        if (!r) throw new Error("None of the extension offers can be accepted");
        return t.serverNoContextTakeover && (r.server_no_context_takeover = !0), t.clientNoContextTakeover && (r.client_no_context_takeover = !0), "number" == typeof t.serverMaxWindowBits && (r.server_max_window_bits = t.serverMaxWindowBits), "number" == typeof t.clientMaxWindowBits ? r.client_max_window_bits = t.clientMaxWindowBits : !0 !== r.client_max_window_bits && !1 !== t.clientMaxWindowBits || delete r.client_max_window_bits, r;
    }
    acceptAsClient(e) {
        const t = e[0];
        if (!1 === this._options.clientNoContextTakeover && t.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (t.client_max_window_bits) {
            if (!1 === this._options.clientMaxWindowBits || "number" == typeof this._options.clientMaxWindowBits && t.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        } else "number" == typeof this._options.clientMaxWindowBits && (t.client_max_window_bits = this._options.clientMaxWindowBits);
        return t;
    }
    normalizeParams(e) {
        return e.forEach((e)=>{
            Object.keys(e).forEach((t)=>{
                let r = e[t];
                if (r.length > 1) throw new Error(`Parameter "${t}" must have only a single value`);
                if (r = r[0], "client_max_window_bits" === t) {
                    if (!0 !== r) {
                        const e = +r;
                        if (!Number.isInteger(e) || e < 8 || e > 15) throw new TypeError(`Invalid value for parameter "${t}": ${r}`);
                        r = e;
                    } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${t}": ${r}`);
                } else if ("server_max_window_bits" === t) {
                    const e = +r;
                    if (!Number.isInteger(e) || e < 8 || e > 15) throw new TypeError(`Invalid value for parameter "${t}": ${r}`);
                    r = e;
                } else {
                    if ("client_no_context_takeover" !== t && "server_no_context_takeover" !== t) throw new Error(`Unknown parameter "${t}"`);
                    if (!0 !== r) throw new TypeError(`Invalid value for parameter "${t}": ${r}`);
                }
                e[t] = r;
            });
        }), e;
    }
    decompress(e, t, r) {
        h.add((n)=>{
            this._decompress(e, t, (e, t)=>{
                n(), r(e, t);
            });
        });
    }
    compress(e, t, r) {
        h.add((n)=>{
            this._compress(e, t, (e, t)=>{
                n(), r(e, t);
            });
        });
    }
    _decompress(e, t, r) {
        const o = this._isServer ? "client" : "server";
        if (!this._inflate) {
            const e = `${o}_max_window_bits`, t = "number" != typeof this.params[e] ? n.Z_DEFAULT_WINDOWBITS : this.params[e];
            this._inflate = n.createInflateRaw({
                ...this._options.zlibInflateOptions,
                windowBits: t
            }), this._inflate[l] = this, this._inflate[u] = 0, this._inflate[p] = [], this._inflate.on("error", y), this._inflate.on("data", g);
        }
        this._inflate[d] = r, this._inflate.write(e), t && this._inflate.write(c), this._inflate.flush(()=>{
            const e = this._inflate[m];
            if (e) return this._inflate.close(), this._inflate = null, void r(e);
            const n = s.concat(this._inflate[p], this._inflate[u]);
            this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[u] = 0, this._inflate[p] = [], t && this.params[`${o}_no_context_takeover`] && this._inflate.reset()), r(null, n);
        });
    }
    _compress(e, t, r) {
        const o = this._isServer ? "server" : "client";
        if (!this._deflate) {
            const e = `${o}_max_window_bits`, t = "number" != typeof this.params[e] ? n.Z_DEFAULT_WINDOWBITS : this.params[e];
            this._deflate = n.createDeflateRaw({
                ...this._options.zlibDeflateOptions,
                windowBits: t
            }), this._deflate[u] = 0, this._deflate[p] = [], this._deflate.on("data", f);
        }
        this._deflate[d] = r, this._deflate.write(e), this._deflate.flush(n.Z_SYNC_FLUSH, ()=>{
            if (!this._deflate) return;
            let e = s.concat(this._deflate[p], this._deflate[u]);
            t && (e = new a(e.buffer, e.byteOffset, e.length - 4)), this._deflate[d] = null, this._deflate[u] = 0, this._deflate[p] = [], t && this.params[`${o}_no_context_takeover`] && this._deflate.reset(), r(null, e);
        });
    }
};
