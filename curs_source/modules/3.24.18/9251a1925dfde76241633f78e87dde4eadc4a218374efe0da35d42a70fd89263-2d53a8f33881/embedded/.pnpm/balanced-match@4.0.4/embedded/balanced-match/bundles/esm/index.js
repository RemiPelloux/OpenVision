var balanced, maybeMatch, range;
export { balanced, maybeMatch, range };
var __wakaru_init_esm6_initialized = false;
export function init_esm6() {
if (__wakaru_init_esm6_initialized) return;
__wakaru_init_esm6_initialized = true;
balanced = (a, b2, str3)=>{
    const ma = a instanceof RegExp ? maybeMatch(a, str3) : a;
    const mb = b2 instanceof RegExp ? maybeMatch(b2, str3) : b2;
    const r = ma !== null && mb != null && range(ma, mb, str3);
    return r && {
        start: r[0],
        end: r[1],
        pre: str3.slice(0, r[0]),
        body: str3.slice(r[0] + ma.length, r[1]),
        post: str3.slice(r[1] + mb.length)
    };
};
maybeMatch = (reg, str3)=>{
    const m2 = str3.match(reg);
    return m2 ? m2[0] : null;
};
range = (a, b2, str3)=>{
    let begs, beg, left, right = void 0, result;
    let ai2 = str3.indexOf(a);
    let bi2 = str3.indexOf(b2, ai2 + 1);
    let i = ai2;
    if (ai2 >= 0 && bi2 > 0) {
        if (a === b2) {
            return [
                ai2,
                bi2
            ];
        }
        begs = [];
        left = str3.length;
        while(i >= 0 && !result){
            if (i === ai2) {
                begs.push(i);
                ai2 = str3.indexOf(a, i + 1);
            } else if (begs.length === 1) {
                const r = begs.pop();
                if (r !== void 0) result = [
                    r,
                    bi2
                ];
            } else {
                beg = begs.pop();
                if (beg !== void 0 && beg < left) {
                    left = beg;
                    right = bi2;
                }
                bi2 = str3.indexOf(b2, i + 1);
            }
            i = ai2 < bi2 && ai2 >= 0 ? ai2 : bi2;
        }
        if (begs.length && right !== void 0) {
            result = [
                left,
                right
            ];
        }
    }
    return result;
};

}
