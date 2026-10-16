let t = require("./module-6982.js"), { urlAlphabet: s } = require("./module-29.js");
let o, r, i = (e)=>{
    if (e < 0 || e > 1024) throw new RangeError("Wrong ID size");
    !o || o.length < e ? (o = Buffer.allocUnsafe(128 * e), t.randomFillSync(o), r = 0) : r + e > o.length && (t.randomFillSync(o), r = 0), r += e;
}, l = (e)=>(i(e |= 0), o.subarray(r - e, r)), d = (e, a, n)=>{
    let t = (2 << 31 - Math.clz32(e.length - 1 | 1)) - 1, s = Math.ceil(1.6 * t * a / e.length);
    return (o = a)=>{
        if (o <= 0) return "";
        let r = "";
        for(;;){
            let a = n(s), i = s;
            for(; i--;)if (r += e[a[i] & t] || "", r.length === o) return r;
        }
    };
};
module.exports = {
    nanoid: (e = 21)=>{
        i(e |= 0);
        let a = "";
        for(let n = r - e; n < r; n++)a += s[63 & o[n]];
        return a;
    },
    customAlphabet: (e, a = 21)=>d(e, a, l),
    customRandom: d,
    urlAlphabet: s,
    random: l
};
