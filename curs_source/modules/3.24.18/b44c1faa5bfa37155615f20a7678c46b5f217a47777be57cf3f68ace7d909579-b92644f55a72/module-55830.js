"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.executeSchedule = void 0, exports.executeSchedule = function(e, t, r, n = 0, s = !1) {
    if (!e.closed) {
        const o = t.schedule(function() {
            r(), s ? e.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if (e.add(o), !s) return o;
    }
};
