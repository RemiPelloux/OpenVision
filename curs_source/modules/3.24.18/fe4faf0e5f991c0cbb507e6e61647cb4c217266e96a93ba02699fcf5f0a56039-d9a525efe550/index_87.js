import { Hlr, Zlr } from "./index_67.js";
import { N3i } from "./index_68.js";
import { Kdr, uxi } from "./index_86.js";
import { i } from "./plugin-brand-icon.js";
function zRt(r) {
    const e = this, a = r || Xdr, s = e.data(), l = s.micromarkExtensions || (s.micromarkExtensions = []), u = s.fromMarkdownExtensions || (s.fromMarkdownExtensions = []), p = s.toMarkdownExtensions || (s.toMarkdownExtensions = []);
    l.push(Kdr(a)), u.push(Hlr()), p.push(Zlr(a));
}
var Xdr;
export { Xdr, zRt };
var __wakaru_dxi_initialized = false;
export function dxi() {
if (__wakaru_dxi_initialized) return;
__wakaru_dxi_initialized = true;
N3i(), uxi(), Xdr = {}, i(zRt, "remarkGfm");

}
