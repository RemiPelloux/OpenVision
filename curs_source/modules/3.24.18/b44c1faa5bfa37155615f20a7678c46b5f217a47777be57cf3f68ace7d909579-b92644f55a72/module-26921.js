const { addAbortListener: n } = require("./module-83589.js"), { RequestAbortedError: s } = require("./module-48762.js"), o = Symbol("kListener"), i = Symbol("kSignal");
function a(e) {
    e.abort ? e.abort() : e.onError(new s);
}
module.exports = {
    addSignal: function(e, t) {
        e[i] = null, e[o] = null, t && (t.aborted ? a(e) : (e[i] = t, e[o] = ()=>{
            a(e);
        }, n(e[i], e[o])));
    },
    removeSignal: function(e) {
        e[i] && ("removeEventListener" in e[i] ? e[i].removeEventListener("abort", e[o]) : e[i].removeListener("abort", e[o]), e[i] = null, e[o] = null);
    }
};
