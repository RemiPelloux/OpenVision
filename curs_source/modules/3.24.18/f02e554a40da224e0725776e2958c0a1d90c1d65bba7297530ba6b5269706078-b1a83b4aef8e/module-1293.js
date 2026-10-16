"use strict";
const n = require("./module-3106.js"), s = require("./module-9796.js"), i = require("./module-9597.js"), { kStatusCode: o } = require("./module-8864.js"), a = Buffer[Symbol.species], u = Buffer.from([
    0,
    0,
    255,
    255
]), c = Symbol("permessage-deflate"), l = Symbol("total-length"), m = Symbol("callback"), d = Symbol("buffers"), f = Symbol("error");
let p;
function h(t) {
    this[d].push(t), this[l] += t.length;
}
function g(t) {
    this[l] += t.length, this[c]._maxPayload < 1 || this[l] <= this[c]._maxPayload ? this[d].push(t) : (this[f] = new RangeError("Max payload size exceeded"), this[f].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[f][o] = 1009, this.removeListener("data", g), this.reset());
}
function A(t) {
    this[c]._inflate = null, this[f] ? this[m](this[f]) : (t[o] = 1007, this[m](t));
}
module.exports = class {
    constructor(t){
        if (this._options = t || {}, this._threshold = void 0 !== this._options.threshold ? this._options.threshold : 1024, this._maxPayload = 0 | this._options.maxPayload, this._isServer = !!this._options.isServer, this._deflate = null, this._inflate = null, this.params = null, !p) {
            const t = void 0 !== this._options.concurrencyLimit ? this._options.concurrencyLimit : 10;
            p = new i(t);
        }
    }
    static get extensionName() {
        return "permessage-deflate";
    }
    offer() {
        const t = {};
        return this._options.serverNoContextTakeover && (t.server_no_context_takeover = !0), this._options.clientNoContextTakeover && (t.client_no_context_takeover = !0), this._options.serverMaxWindowBits && (t.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? t.client_max_window_bits = this._options.clientMaxWindowBits : null == this._options.clientMaxWindowBits && (t.client_max_window_bits = !0), t;
    }
    accept(t) {
        return t = this.normalizeParams(t), this.params = this._isServer ? this.acceptAsServer(t) : this.acceptAsClient(t), this.params;
    }
    cleanup() {
        if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
            const t = this._deflate[m];
            this._deflate.close(), this._deflate = null, t && t(new Error("The deflate stream was closed while data was being processed"));
        }
    }
    acceptAsServer(t) {
        const e = this._options, r = t.find((t)=>!(!1 === e.serverNoContextTakeover && t.server_no_context_takeover || t.server_max_window_bits && (!1 === e.serverMaxWindowBits || "number" == typeof e.serverMaxWindowBits && e.serverMaxWindowBits > t.server_max_window_bits) || "number" == typeof e.clientMaxWindowBits && ("number" == typeof t.client_max_window_bits ? e.clientMaxWindowBits > t.client_max_window_bits : !t.client_max_window_bits)));
        if (!r) throw new Error("None of the extension offers can be accepted");
        return e.serverNoContextTakeover && (r.server_no_context_takeover = !0), e.clientNoContextTakeover && (r.client_no_context_takeover = !0), "number" == typeof e.serverMaxWindowBits && (r.server_max_window_bits = e.serverMaxWindowBits), "number" == typeof e.clientMaxWindowBits ? r.client_max_window_bits = e.clientMaxWindowBits : !0 !== r.client_max_window_bits && !1 !== e.clientMaxWindowBits || delete r.client_max_window_bits, r;
    }
    acceptAsClient(t) {
        const e = t[0];
        if (!1 === this._options.clientNoContextTakeover && e.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (e.client_max_window_bits) {
            if (!1 === this._options.clientMaxWindowBits || "number" == typeof this._options.clientMaxWindowBits && e.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        } else "number" == typeof this._options.clientMaxWindowBits && (e.client_max_window_bits = this._options.clientMaxWindowBits);
        return e;
    }
    normalizeParams(t) {
        return t.forEach((t)=>{
            Object.keys(t).forEach((e)=>{
                let r = t[e];
                if (r.length > 1) throw new Error(`Parameter "${e}" must have only a single value`);
                if (r = r[0], "client_max_window_bits" === e) {
                    if (!0 !== r) {
                        const t = +r;
                        if (!Number.isInteger(t) || t < 8 || t > 15) throw new TypeError(`Invalid value for parameter "${e}": ${r}`);
                        r = t;
                    } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${e}": ${r}`);
                } else if ("server_max_window_bits" === e) {
                    const t = +r;
                    if (!Number.isInteger(t) || t < 8 || t > 15) throw new TypeError(`Invalid value for parameter "${e}": ${r}`);
                    r = t;
                } else {
                    if ("client_no_context_takeover" !== e && "server_no_context_takeover" !== e) throw new Error(`Unknown parameter "${e}"`);
                    if (!0 !== r) throw new TypeError(`Invalid value for parameter "${e}": ${r}`);
                }
                t[e] = r;
            });
        }), t;
    }
    decompress(t, e, r) {
        p.add((n)=>{
            this._decompress(t, e, (t, e)=>{
                n(), r(t, e);
            });
        });
    }
    compress(t, e, r) {
        p.add((n)=>{
            this._compress(t, e, (t, e)=>{
                n(), r(t, e);
            });
        });
    }
    _decompress(t, e, r) {
        const i = this._isServer ? "client" : "server";
        if (!this._inflate) {
            const t = `${i}_max_window_bits`, e = "number" != typeof this.params[t] ? n.Z_DEFAULT_WINDOWBITS : this.params[t];
            this._inflate = n.createInflateRaw({
                ...this._options.zlibInflateOptions,
                windowBits: e
            }), this._inflate[c] = this, this._inflate[l] = 0, this._inflate[d] = [], this._inflate.on("error", A), this._inflate.on("data", g);
        }
        this._inflate[m] = r, this._inflate.write(t), e && this._inflate.write(u), this._inflate.flush(()=>{
            const t = this._inflate[f];
            if (t) return this._inflate.close(), this._inflate = null, void r(t);
            const n = s.concat(this._inflate[d], this._inflate[l]);
            this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[l] = 0, this._inflate[d] = [], e && this.params[`${i}_no_context_takeover`] && this._inflate.reset()), r(null, n);
        });
    }
    _compress(t, e, r) {
        const i = this._isServer ? "server" : "client";
        if (!this._deflate) {
            const t = `${i}_max_window_bits`, e = "number" != typeof this.params[t] ? n.Z_DEFAULT_WINDOWBITS : this.params[t];
            this._deflate = n.createDeflateRaw({
                ...this._options.zlibDeflateOptions,
                windowBits: e
            }), this._deflate[l] = 0, this._deflate[d] = [], this._deflate.on("data", h);
        }
        this._deflate[m] = r, this._deflate.write(t), this._deflate.flush(n.Z_SYNC_FLUSH, ()=>{
            if (!this._deflate) return;
            let t = s.concat(this._deflate[d], this._deflate[l]);
            e && (t = new a(t.buffer, t.byteOffset, t.length - 4)), this._deflate[m] = null, this._deflate[l] = 0, this._deflate[d] = [], e && this.params[`${i}_no_context_takeover`] && this._deflate.reset(), r(null, t);
        });
    }
};
