const { addAbortListener: n } = require("./module-9361.js"), { RequestAbortedError: r } = require("./module-7902.js"), o = Symbol("kListener"), s = Symbol("kSignal");
function i(e) {
    e.abort ? e.abort() : e.onError(new r);
}
module.exports = {
    addSignal: function(e, t) {
        e[s] = null, e[o] = null, t && (t.aborted ? i(e) : (e[s] = t, e[o] = ()=>{
            i(e);
        }, n(e[s], e[o])));
    },
    removeSignal: function(e) {
        e[s] && ("removeEventListener" in e[s] ? e[s].removeEventListener("abort", e[o]) : e[s].removeListener("abort", e[o]), e[s] = null, e[o] = null);
    }
};
