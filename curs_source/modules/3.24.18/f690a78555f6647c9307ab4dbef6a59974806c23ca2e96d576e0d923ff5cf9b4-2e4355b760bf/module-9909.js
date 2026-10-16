const { addAbortListener: n } = require("./module-9361.js"), { RequestAbortedError: r } = require("./module-7902.js"), o = Symbol("kListener"), s = Symbol("kSignal");
function a(e) {
    e.abort ? e.abort() : e.onError(new r);
}
module.exports = {
    addSignal: function(e, A) {
        e[s] = null, e[o] = null, A && (A.aborted ? a(e) : (e[s] = A, e[o] = ()=>{
            a(e);
        }, n(e[s], e[o])));
    },
    removeSignal: function(e) {
        e[s] && ("removeEventListener" in e[s] ? e[s].removeEventListener("abort", e[o]) : e[s].removeListener("abort", e[o]), e[s] = null, e[o] = null);
    }
};
