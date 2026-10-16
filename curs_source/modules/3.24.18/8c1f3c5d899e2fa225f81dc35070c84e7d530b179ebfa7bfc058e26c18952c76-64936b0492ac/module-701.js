Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.processCarriageReturns = function(e) {
    if (!e) return e;
    if (!(e = e.replace(/\r\n/g, "\n")).includes("\r")) return e;
    const t = e.split("\n"), n = [];
    for (const e of t){
        if (!e.includes("\r")) {
            n.push(e);
            continue;
        }
        let t = "", i = 0;
        for(let n = 0; n < e.length; n++){
            const r = e[n];
            "\r" === r ? i = 0 : (i < t.length ? t = t.substring(0, i) + r + t.substring(i + 1) : t += r, i++);
        }
        n.push(t);
    }
    return n.join("\n");
}, exports.normalizeEOL = function(e, t) {
    if (!e) return e;
    return e.replace(/\r\n|\n|\r/g, t);
}, exports.maskEmail = function(e) {
    if (!e) return e;
    const t = e.indexOf("@");
    if (-1 === t) return e;
    const n = e.substring(0, t), i = e.substring(t + 1);
    if (0 === n.length || 0 === i.length) return e;
    const r = n.charAt(0) + "***", s = i.indexOf(".");
    if (-1 === s) return `${r}@${i.charAt(0)}***`;
    const o = i.substring(0, s), a = i.substring(s), u = o.charAt(0) + "***" + a;
    return `${r}@${u}`;
};
