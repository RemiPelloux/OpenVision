import { Qmr } from "./index_100.js";
import { N0 } from "./index_99.js";
import { v4i, vC } from "./minpath.browser.js";
import { Whr, x4i } from "./minproc.browser.js";
import { C4i, Zhr } from "./minurl.browser.js";
import { wMe } from "./minurl.shared.js";
import { i } from "./plugin-brand-icon.js";
function _Me(r, e) {
    if (r && r.includes(vC.sep)) throw new Error("`" + e + "` cannot be a path: did not expect `" + vC.sep + "`");
}
function kMe(r, e) {
    if (!r) throw new Error("`" + e + "` cannot be empty");
}
function DPt(r, e) {
    if (!r) throw new Error("Setting `" + e + "` requires `path` to be set too");
}
function Khr(r) {
    return !!(r && typeof r == "object" && "byteLength" in r && "byteOffset" in r);
}
var vMe, FPt, Xhr;
export { DPt, FPt, Khr, Xhr, _Me, kMe, vMe };
var __wakaru_S4i_initialized = false;
export function S4i() {
if (__wakaru_S4i_initialized) return;
__wakaru_S4i_initialized = true;
Qmr(), v4i(), x4i(), C4i(), vMe = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
], FPt = class {
    constructor(e){
        let a;
        e ? wMe(e) ? a = {
            path: e
        } : typeof e == "string" || Khr(e) ? a = {
            value: e
        } : a = e : a = {}, this.cwd = "cwd" in a ? "" : Whr.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
        let s = -1;
        for(; ++s < vMe.length;){
            const u = vMe[s];
            u in a && a[u] !== void 0 && a[u] !== null && (this[u] = u === "history" ? [
                ...a[u]
            ] : a[u]);
        }
        let l;
        for(l in a)vMe.includes(l) || (this[l] = a[l]);
    }
    get basename() {
        return typeof this.path == "string" ? vC.basename(this.path) : void 0;
    }
    set basename(e) {
        kMe(e, "basename"), _Me(e, "basename"), this.path = vC.join(this.dirname || "", e);
    }
    get dirname() {
        return typeof this.path == "string" ? vC.dirname(this.path) : void 0;
    }
    set dirname(e) {
        DPt(this.basename, "dirname"), this.path = vC.join(e || "", this.basename);
    }
    get extname() {
        return typeof this.path == "string" ? vC.extname(this.path) : void 0;
    }
    set extname(e) {
        if (_Me(e, "extname"), DPt(this.dirname, "extname"), e) {
            if (e.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = vC.join(this.dirname, this.stem + (e || ""));
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(e) {
        wMe(e) && (e = Zhr(e)), kMe(e, "path"), this.path !== e && this.history.push(e);
    }
    get stem() {
        return typeof this.path == "string" ? vC.basename(this.path, this.extname) : void 0;
    }
    set stem(e) {
        kMe(e, "stem"), _Me(e, "stem"), this.path = vC.join(this.dirname || "", e + (this.extname || ""));
    }
    fail(e, a, s) {
        const l = this.message(e, a, s);
        throw l.fatal = !0, l;
    }
    info(e, a, s) {
        const l = this.message(e, a, s);
        return l.fatal = void 0, l;
    }
    message(e, a, s) {
        const l = new N0(e, a, s);
        return this.path && (l.name = this.path + ":" + l.name, l.file = this.path), l.fatal = !1, this.messages.push(l), l;
    }
    toString(e) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
    }
}, i(FPt, "VFile"), Xhr = FPt, i(_Me, "assertPart"), i(kMe, "assertNonEmpty"), i(DPt, "assertPath"), i(Khr, "isUint8Array");

}
