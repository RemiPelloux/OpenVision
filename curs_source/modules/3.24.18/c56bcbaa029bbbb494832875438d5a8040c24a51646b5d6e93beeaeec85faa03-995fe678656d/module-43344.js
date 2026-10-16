require.d(exports, {
    R: ()=>s
});
var o = require(70857), t = require(16928);
const i = {}, s = ()=>{
    const { HOME: e, USERPROFILE: r, HOMEPATH: n, HOMEDRIVE: s = `C:${t.sep}` } = process.env;
    if (e) return e;
    if (r) return r;
    if (n) return `${s}${n}`;
    const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return i[c] || (i[c] = (0, o.homedir)()), i[c];
};
