var o, n = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
    void 0 === o && (o = r);
    var n = Object.getOwnPropertyDescriptor(t, r);
    n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, o, n);
} : function(e, t, r, o) {
    void 0 === o && (o = r), e[o] = t[r];
}), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), i = this && this.__importStar || (o = function(e) {
    return o = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
        return t;
    }, o(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var r = o(e), i = 0; i < r.length; i++)"default" !== r[i] && n(t, e, r[i]);
    return s(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NdjsonIngestLogger = void 0;
const a = i(require("./module-398.js"));
class c {
    static init() {
        c.output = a.window.createOutputChannel("NDJSON Ingest", {
            log: !0
        });
    }
    static error(e, ...t) {
        c.output || c.init(), c.output?.error(e, ...t);
    }
    static warn(e, ...t) {
        c.output || c.init(), c.output?.warn(e, ...t);
    }
    static info(e, ...t) {
        c.output || c.init(), c.output?.info(e, ...t);
    }
    static debug(e, ...t) {
        c.output || c.init(), c.output?.debug(e, ...t);
    }
    static trace(e, ...t) {
        c.output || c.init(), c.output?.trace(e, ...t);
    }
}
exports.NdjsonIngestLogger = c;
