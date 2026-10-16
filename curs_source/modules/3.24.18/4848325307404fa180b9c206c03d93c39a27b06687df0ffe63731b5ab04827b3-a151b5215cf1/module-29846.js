require.d(exports, {
    Z: ()=>o
});
var s = require("./module-35666.js"), n = require("./module-65600.js");
const o = {
    getFileRecord: ()=>n.Jj,
    interceptFile (e, r) {
        n.Jj[e] = Promise.resolve(r);
    },
    getTokenRecord: ()=>s.a,
    interceptToken (e, r) {
        s.a[e] = r;
    }
};
