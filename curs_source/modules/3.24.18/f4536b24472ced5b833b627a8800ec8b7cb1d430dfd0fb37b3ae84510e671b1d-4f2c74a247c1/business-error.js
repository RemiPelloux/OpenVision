var rc = Object.defineProperty, a = (e, t)=>rc(e, "name", {
        value: t,
        configurable: !0
    }), Pe;
export { Pe, a, rc };
var __wakaru_fr_initialized = false;
export function fr() {
if (__wakaru_fr_initialized) return;
__wakaru_fr_initialized = true;
Pe = class extends Error {
    static{
        a(this, "CommerceBusinessError");
    }
    name = "CommerceBusinessError";
    code;
    retriable;
    constructor(e, t, r){
        super(`${e}: ${t}`), this.code = e, this.retriable = r.retriable;
    }
};

}
