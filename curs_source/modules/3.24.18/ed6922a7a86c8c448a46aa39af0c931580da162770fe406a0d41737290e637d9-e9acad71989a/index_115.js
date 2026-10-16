import { _j, fvl } from "./index_102.js";
import { eHg, xCe } from "./minpath.browser.js";
import { nHg, n_l } from "./minproc.browser.js";
import { sHg } from "./minurl.browser.js";
import { i_l } from "./minurl.shared.js";
import { a_s, c_s, iHg, l_s, oHg, r_l } from "./qIc.js";
import { x } from "./tslib.es6.js";
var JEi, s_l;
export { JEi, s_l };
var __wakaru_aHg_initialized = false;
export function aHg() {
if (__wakaru_aHg_initialized) return;
__wakaru_aHg_initialized = true;
x(), eHg(), nHg(), sHg(), i_l(), fvl(), JEi = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
], s_l = class {
    constructor(e){
        let t;
        e ? a_s(e) ? t = {
            path: e
        } : typeof e == "string" || oHg(e) ? t = {
            value: e
        } : t = e : t = {}, this.cwd = "cwd" in t ? "" : n_l.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
        let n = -1;
        for(; ++n < JEi.length;){
            const r = JEi[n];
            r in t && t[r] !== void 0 && t[r] !== null && (this[r] = r === "history" ? [
                ...t[r]
            ] : t[r]);
        }
        let i;
        for(i in t)JEi.includes(i) || (this[i] = t[i]);
    }
    get basename() {
        return typeof this.path == "string" ? xCe.basename(this.path) : void 0;
    }
    set basename(e) {
        l_s(e, "basename"), c_s(e, "basename"), this.path = xCe.join(this.dirname || "", e);
    }
    get dirname() {
        return typeof this.path == "string" ? xCe.dirname(this.path) : void 0;
    }
    set dirname(e) {
        r_l(this.basename, "dirname"), this.path = xCe.join(e || "", this.basename);
    }
    get extname() {
        return typeof this.path == "string" ? xCe.extname(this.path) : void 0;
    }
    set extname(e) {
        if (c_s(e, "extname"), r_l(this.dirname, "extname"), e) {
            if (e.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = xCe.join(this.dirname, this.stem + (e || ""));
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(e) {
        a_s(e) && (e = iHg(e)), l_s(e, "path"), this.path !== e && this.history.push(e);
    }
    get stem() {
        return typeof this.path == "string" ? xCe.basename(this.path, this.extname) : void 0;
    }
    set stem(e) {
        l_s(e, "stem"), c_s(e, "stem"), this.path = xCe.join(this.dirname || "", e + (this.extname || ""));
    }
    fail(e, t, n) {
        const i = this.message(e, t, n);
        throw i.fatal = !0, i;
    }
    info(e, t, n) {
        const i = this.message(e, t, n);
        return i.fatal = void 0, i;
    }
    message(e, t, n) {
        const i = new _j(e, t, n);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
    }
    toString(e) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
    }
};

}
