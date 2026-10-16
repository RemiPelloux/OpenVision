require.d(exports, {
    u: ()=>n
});
var r = require(96851);
const n = (e)=>{
    const t = {};
    for(const o in e){
        if (!(0, r.hasOwn)(e, o)) continue;
        const n = e[o];
        t[o] = Array.isArray(n) ? n.join(",") : n;
    }
    return t;
};
