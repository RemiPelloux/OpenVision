var mCi;
export { mCi };
var __wakaru_Eqt_initialized = false;
export function Eqt() {
if (__wakaru_Eqt_initialized) return;
__wakaru_Eqt_initialized = true;
mCi = String.prototype.codePointAt == null ? (r, e)=>(r.charCodeAt(e) & 64512) === 55296 ? (r.charCodeAt(e) - 55296) * 1024 + r.charCodeAt(e + 1) - 56320 + 65536 : r.charCodeAt(e) : ((r, e)=>r.codePointAt(e));

}
