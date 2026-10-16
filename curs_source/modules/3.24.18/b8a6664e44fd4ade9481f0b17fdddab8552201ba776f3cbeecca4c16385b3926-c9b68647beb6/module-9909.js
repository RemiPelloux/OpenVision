const { addAbortListener: r } = require("./module-9361.js"), { RequestAbortedError: s } = require("./module-95521.js"), o = Symbol("kListener"), n = Symbol("kSignal");
function i(A) {
    A.abort ? A.abort() : A.onError(new s);
}
module.exports = {
    addSignal: function(A, e) {
        A[n] = null, A[o] = null, e && (e.aborted ? i(A) : (A[n] = e, A[o] = ()=>{
            i(A);
        }, r(A[n], A[o])));
    },
    removeSignal: function(A) {
        A[n] && ("removeEventListener" in A[n] ? A[n].removeEventListener("abort", A[o]) : A[n].removeListener("abort", A[o]), A[n] = null, A[o] = null);
    }
};
