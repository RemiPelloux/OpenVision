const { addAbortListener: r } = require("./module-55201.js"), { RequestAbortedError: s } = require("./module-38238.js"), o = Symbol("kListener"), n = Symbol("kSignal");
function i(A) {
    A.abort ? A.abort(A[n]?.reason) : A.reason = A[n]?.reason ?? new s, a(A);
}
function a(A) {
    A[n] && ("removeEventListener" in A[n] ? A[n].removeEventListener("abort", A[o]) : A[n].removeListener("abort", A[o]), A[n] = null, A[o] = null);
}
module.exports = {
    addSignal: function(A, e) {
        A.reason = null, A[n] = null, A[o] = null, e && (e.aborted ? i(A) : (A[n] = e, A[o] = ()=>{
            i(A);
        }, r(A[n], A[o])));
    },
    removeSignal: a
};
