import { $tS, BtS, Eyh, Ssa, ksa, wsa } from "./LYd.js";
import { Bbh, xne } from "./index_107.js";
import { LtS, hFe } from "./minpath.browser.js";
import { Cyh, FtS } from "./minproc.browser.js";
import { jtS } from "./minurl.browser.js";
import { Tyh } from "./minurl.shared.js";
import { E } from "./tslib.es6.js";
var hDr, Iyh;
export { Iyh, hDr };
var __wakaru_HtS_initialized = false;
export function HtS() {
if (__wakaru_HtS_initialized) return;
__wakaru_HtS_initialized = true;
E(), LtS(), FtS(), jtS(), Tyh(), Bbh(), hDr = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
], Iyh = class {
    constructor(t){
        let e;
        t ? Ssa(t) ? e = {
            path: t
        } : typeof t == "string" || $tS(t) ? e = {
            value: t
        } : e = t : e = {}, this.cwd = "cwd" in e ? "" : Cyh.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
        let n = -1;
        for(; ++n < hDr.length;){
            const r = hDr[n];
            r in e && e[r] !== void 0 && e[r] !== null && (this[r] = r === "history" ? [
                ...e[r]
            ] : e[r]);
        }
        let i;
        for(i in e)hDr.includes(i) || (this[i] = e[i]);
    }
    get basename() {
        return typeof this.path == "string" ? hFe.basename(this.path) : void 0;
    }
    set basename(t) {
        wsa(t, "basename"), ksa(t, "basename"), this.path = hFe.join(this.dirname || "", t);
    }
    get dirname() {
        return typeof this.path == "string" ? hFe.dirname(this.path) : void 0;
    }
    set dirname(t) {
        Eyh(this.basename, "dirname"), this.path = hFe.join(t || "", this.basename);
    }
    get extname() {
        return typeof this.path == "string" ? hFe.extname(this.path) : void 0;
    }
    set extname(t) {
        if (ksa(t, "extname"), Eyh(this.dirname, "extname"), t) {
            if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = hFe.join(this.dirname, this.stem + (t || ""));
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(t) {
        Ssa(t) && (t = BtS(t)), wsa(t, "path"), this.path !== t && this.history.push(t);
    }
    get stem() {
        return typeof this.path == "string" ? hFe.basename(this.path, this.extname) : void 0;
    }
    set stem(t) {
        wsa(t, "stem"), ksa(t, "stem"), this.path = hFe.join(this.dirname || "", t + (this.extname || ""));
    }
    fail(t, e, n) {
        const i = this.message(t, e, n);
        throw i.fatal = !0, i;
    }
    info(t, e, n) {
        const i = this.message(t, e, n);
        return i.fatal = void 0, i;
    }
    message(t, e, n) {
        const i = new xne(t, e, n);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
    }
    toString(t) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
    }
};

}
