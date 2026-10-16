const { addAbortListener: n } = require("./module-3589.js"), { RequestAbortedError: s } = require("./module-8762.js"), i = Symbol("kListener"), o = Symbol("kSignal");
function a(t) {
    t.abort ? t.abort() : t.onError(new s);
}
module.exports = {
    addSignal: function(t, e) {
        t[o] = null, t[i] = null, e && (e.aborted ? a(t) : (t[o] = e, t[i] = ()=>{
            a(t);
        }, n(t[o], t[i])));
    },
    removeSignal: function(t) {
        t[o] && ("removeEventListener" in t[o] ? t[o].removeEventListener("abort", t[i]) : t[o].removeListener("abort", t[i]), t[o] = null, t[i] = null);
    }
};
