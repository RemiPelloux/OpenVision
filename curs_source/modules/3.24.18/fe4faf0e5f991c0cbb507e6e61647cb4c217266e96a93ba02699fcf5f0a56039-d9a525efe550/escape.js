var xvi;
export { xvi };
var __wakaru_Cvi_initialized = false;
export function Cvi() {
if (__wakaru_Cvi_initialized) return;
__wakaru_Cvi_initialized = true;
xvi = String.prototype.codePointAt == null ? (r, e)=>(r.charCodeAt(e) & 64512) === 55296 ? (r.charCodeAt(e) - 55296) * 1024 + r.charCodeAt(e + 1) - 56320 + 65536 : r.charCodeAt(e) : ((r, e)=>r.codePointAt(e));

}
