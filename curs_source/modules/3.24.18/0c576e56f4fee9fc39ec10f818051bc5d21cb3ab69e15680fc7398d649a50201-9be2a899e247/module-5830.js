"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.executeSchedule = void 0, exports.executeSchedule = function(e, t, r, n = 0, o = !1) {
    if (!e.closed) {
        const s = t.schedule(function() {
            r(), o ? e.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if (e.add(s), !o) return s;
    }
};
