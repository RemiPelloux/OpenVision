require.d(exports, {
    Z: ()=>n
});
var t = require("./module-35666.js"), s = require(65600);
const n = {
    getFileRecord: ()=>s.Jj,
    interceptFile (e, r) {
        s.Jj[e] = Promise.resolve(r);
    },
    getTokenRecord: ()=>t.a,
    interceptToken (e, r) {
        t.a[e] = r;
    }
};
