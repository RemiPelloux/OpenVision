const { addAbortListener: t } = require("./module-9361.js"), { RequestAbortedError: s } = require("./module-7902.js"), o = Symbol("kListener"), r = Symbol("kSignal");
function i(e) {
    e.abort ? e.abort() : e.onError(new s);
}
module.exports = {
    addSignal: function(e, a) {
        e[r] = null, e[o] = null, a && (a.aborted ? i(e) : (e[r] = a, e[o] = ()=>{
            i(e);
        }, t(e[r], e[o])));
    },
    removeSignal: function(e) {
        e[r] && ("removeEventListener" in e[r] ? e[r].removeEventListener("abort", e[o]) : e[r].removeListener("abort", e[o]), e[r] = null, e[o] = null);
    }
};
