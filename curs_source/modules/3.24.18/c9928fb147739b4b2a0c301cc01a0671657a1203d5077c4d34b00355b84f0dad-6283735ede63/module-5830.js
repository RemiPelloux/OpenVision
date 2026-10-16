Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.executeSchedule = void 0, exports.executeSchedule = function(e, a, n, s = 0, o = !1) {
    if (!e.closed) {
        const r = a.schedule(function() {
            n(), o ? e.add(this.schedule(null, s)) : this.unsubscribe();
        }, s);
        if (e.add(r), !o) return r;
    }
};
